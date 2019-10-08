// const withPreact = require('@zeit/next-preact')
// require('dotenv').config();
// const fs = require('fs'); // to check if the file exists
// const path = require('path');
// const Dotenv = require('dotenv-webpack');
const withSass = require('@zeit/next-sass');
const withImages = require('next-images');
const withCSS = require('@zeit/next-css');
const MomentLocalesPlugin = require('moment-locales-webpack-plugin');
const nextBuildId = require('next-build-id');
const CompressionPlugin = require('compression-webpack-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const webpack = require('webpack');
const TerserPlugin = require('terser-webpack-plugin');
// const withPurgeCss = require('next-purgecss');

module.exports =
    withCSS(withSass(
        {
          distDir: 'build',
          generateBuildId: async () => {
            const buildId = await nextBuildId({ dir: __dirname });
            return 'test' + buildId.id;
          },
          webpack: (config, {dev, isServer}) => {
            // Fixes npm packages that depend on `fs` module
            config.node = {
              fs: 'empty',
              __dirname: false,
            };

            // START config ENV
            // const currentPath = path.join(__dirname);
            // Create the fallback path (the production .env)
            // const basePath = currentPath + '/.env';
            // We're concatenating the environment name to our filename to specify the correct env file!
            // const envPath = basePath + '.' + process.env.SERVER_ENV;
            // Check if the file exists, otherwise fall back to the production .env
            // const finalPath = fs.existsSync(envPath) ? envPath : basePath;
            config.plugins = config.plugins || [];
            config.plugins = [
              ...config.plugins,
              new MomentLocalesPlugin({
                localesToKeep: ['ja'],
              }),
              // Read the .env file
              // new Dotenv({
              //   path: finalPath,//path.join(__dirname, ('.env' + '.' + process.env.SERVER_ENV)),
              //   systemvars: true,
              //   safe: true
              // }),
            ];
            // END config ENV

            const originalEntry = config.entry;
            config.entry = async () => {
              const entries = await originalEntry();

              if (
                  entries['main.js'] &&
                  !entries['main.js'].includes('./client/polyfills.js')
              ) {
                entries['main.js'].unshift('./client/polyfills.js');
              }

              return entries;
            };

            config.module.rules.push({
              test: /\.(eot|woff|woff2|ttf|svg|png|jpg|gif)$/,
              use: {
                loader: 'url-loader',
                options: {
                  limit: 200000,
                  name: '[name].[ext]'
                }
              }
            });

            config.module.rules.push({
              test: /\.(graphql|gql)$/,
              exclude: /node_modules/,
              loader: 'graphql-tag/loader',
            });

            config.module.rules.push({
              test: /\.(raw)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
              use: 'raw-loader',
            });

            if (isServer || dev) {
              return config;
            }
            // const isProduction = config.mode === 'production';

            config.plugins.push(
                new webpack.DefinePlugin({
                  PRODUCTION: JSON.stringify(config.mode)
                })
            );
            //
            // if (!isProduction) {
            //   return config;
            // }

            // config.plugins.push(
            //     new webpack.optimize.LimitChunkCountPlugin({
            //       maxChunks: 1,
            //     })
            // );

            if (Array.isArray(config.optimization.minimizer)) {
              config.optimization.minimizer.push(new OptimizeCssAssetsPlugin({
                assetNameRegExp: /\.css$/g,
                cssProcessor: require('cssnano'),
                cssProcessorPluginOptions: {
                  preset: ['default', { discardComments: { removeAll: true } }],
                },
                canPrint: true
              }));
            }

            config.plugins.push(new TerserPlugin({
              // parallel: true,
              terserOptions: {
                ecma: 6,
                // output: {
                //   comments: false,
                // },
              },
              // extractComments: 'all',
            }));

            config.plugins.push(new CompressionPlugin({
              filename: '[path].gz[query]',
              algorithm: 'gzip',
              test: /\.(js|css|html|svg)$/,
              compressionOptions: { level: 1 },
              threshold: 10240,
              minRatio: 0.8,
              deleteOriginalAssets: false,
            }));

            return config;
          },
          withImages: withImages()
        }
    ));

