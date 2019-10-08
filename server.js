const port = parseInt(process.env.PORT, 10) || 3500;
const dev = process.env.NODE_ENV !== 'production';
// console.log(process.env.CUSTOM_ENV)
// require('@zeit/next-preact/alias')()
// https://github.com/zeit/next.js/issues/6265
// https://github.com/zeit/next.js/pull/6390

const express = require('express');
const next = require('next');
const LRUCache = require('lru-cache');
const { parse } = require('url');
const { join } = require('path');
const fs = require('fs');
const morgan = require('morgan');
const rfs = require('rotating-file-stream');
const compression = require('compression');

const app = next({ dev });
const handle = app.getRequestHandler();

const logDirectory = join(__dirname, 'logs');

const path = require('path');

// ensure log directory exists
fs.existsSync(logDirectory) || fs.mkdirSync(logDirectory);

// create a rotating write stream
var accessLogStream = rfs('access.log', {
    interval: '1d', // rotate daily
    path: logDirectory
});

// This is where we cache our rendered HTML pages
const ssrCache = new LRUCache({
    length: function (n, key) {
        return n.toString().length + key.toString().length;
    },
    max: 100 * 1000 * 1000, // 100MB cache soft limit
    maxAge: 1000 * 60 * 60 // 1hour
});

app.prepare().then(() => {
    const server = express();
    
    server.get(`/`, (req, res) => {
        return app.render(req, res, '/');
    });


    server.get('*', (req, res) => {
        handle(req, res);
    });

    server.listen(port, err => {
        if (err) throw err;
        console.log(`> Ready on http://localhost:${port}`);
    });
});

/*
 * NB: make sure to modify this to take into account anything that should trigger
 * an immediate page change (e.g a locale stored in req.session)
 */
function getCacheKey(req) {
    return `${req.url}`;
}

async function renderAndCache(req, res, pagePath, queryParams) {
    const key = getCacheKey(req);

    // If we have a page in the cache, let's serve it
    if (ssrCache.has(key)) {
        res.setHeader('x-cache', 'HIT');
        res.send(ssrCache.get(key));
        return;
    }

    try {
        // If not let's render the page into HTML
        const html = await app.renderToHTML(req, res, pagePath, queryParams);

        // Something is wrong with the request, let's skip the cache
        if (res.statusCode !== 200) {
            res.send(html);
            return;
        }

        // Let's cache this page
        ssrCache.set(key, html);

        res.setHeader('x-cache', 'MISS');
        res.send(html);
    } catch (err) {
        app.renderError(err, req, res, pagePath, queryParams);
    }
}

