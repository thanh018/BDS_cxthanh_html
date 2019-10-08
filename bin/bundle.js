
// const path = require('path');
// const fs = require('fs-extra');
// const glob = require('glob-promise');
// const purify = require("purify-css");


// let critical;

// try {
//     critical = require("critical");
// } catch(e) { }

// const outDir = path.resolve(__dirname, '../build/out');
// // const staticDir = path.resolve(__dirname, '../build/static');
// const contentDir = path.join(__dirname,'../build/server');
// const buildDir = path.join(__dirname,'../build');

// // const removeFont = async(cssString) => {
// //     const fontBase64regex = /(url\(data:font\/[a-z]*;base64,[^,]*,)/gi;
// //     const fontFaceRegex = /(\@font-face\{[^\}]*})/gi;

// //     let output = await cssString.replace(fontBase64regex, '');
// //     output = await cssString.replace(fontFaceRegex, '');
// //     return output;
// // };

// // const removeUnusedCss = async(cssString, whitelist, options) => {
// //     const prugeCssRegex = /(([\.|\#][^{|\;|\}]*)\{[^}]*})/gm;
// //     return await cssString.replace(prugeCssRegex, (fullMatch, p1, p2, p3, offset, string) => {
// //         if (!p2) return fullMatch;
// //         let shouldKeep = false;

// //         p2.replace(/(?:\r\n|\r|\n)/gi,' ').split(',').forEach(classes => {
// //             if (shouldKeep) return;
// //             classes.split('.').forEach(className => {

// //                 if (shouldKeep || !className) return;

// //                 let classNameWithoutPseudo = className.split(':')[0].trim();
// //                 classNameWithoutPseudo = classNameWithoutPseudo.split('[')[0];
// //                 classNameWithoutPseudo = classNameWithoutPseudo.split('>')[0];
// //                 classNameWithoutPseudo = classNameWithoutPseudo.split(' ')[0];
// //                 classNameWithoutPseudo = classNameWithoutPseudo.split(')')[0];
// //                 classNameWithoutPseudo = classNameWithoutPseudo.replace('#','');

// //                 const {
// //                     page = '',
// //                     includeClass = [],
// //                 } = options;

// //                 if (
// //                     classNameWithoutPseudo
// //                     && (
// //                         whitelist[classNameWithoutPseudo]
// //                         || (page === 'hotelDetail' && includeClass.some(item => classNameWithoutPseudo.includes(item)))
// //                     )
// //                 ) shouldKeep = true;
// //             });
// //         });

// //         if (!shouldKeep) return '';
// //         return fullMatch;
// //     });
// // };

// const getWhiteListCssFromJs = async (whitelist, htmlContent) => {
//     const getWhiteListclassRegex = /[className|uniqueClass]:[^"]"([^"]*)"/gi;
//     let m;
//     while ((m = getWhiteListclassRegex.exec(htmlContent)) !== null) {
//         // This is necessary to avoid infinite loops with zero-width matches
//         if (m.index === getWhiteListclassRegex.lastIndex) {
//             getWhiteListclassRegex.lastIndex++;
//         }
//         if (m[1]) {
//             m[1].replace(/\\n/g, "").split(' ').forEach(item => {
//                 if (!item || whitelist[item]) return;
//                 whitelist[item] = item;
//             });
//         }
//     }
//     // fs.writeFileSync(path.join(outDir, `${filename}-whitelist.json`), JSON.stringify(whitelist), 'utf-8');

//     return whitelist;
// };

// // const removeRedundantCode = async (cssString) => await cssString.replace(/(\}[^}|@]+\@)/gi, '}@');

// // const removeCssEmptyBlock = async (cssString) => await cssString.replace(/@[^{]+{}/g, '');

// // async function generate (src, filename, cssFiles) {
// //     const content = [path.join(contentDir, src)];
// //     const css = cssFiles;
// //     if (filename === 'index') {
// //         const htmlContent = fs.readFileSync(path.join(contentDir, src));
// //         let whitelist = {};
// //         whitelist['g_footer_common_logo'] = 'g_footer_common_logo';
// //         whitelist['g_header_logo'] = 'g_header_logo';
// //         whitelist['hero_wrap'] = 'hero_wrap';

// //         whitelist = await getWhiteListCssFromJs(whitelist, htmlContent);

// //         let allCss = [];
// //         css.forEach(cssFilePath => {
// //             allCss += fs.readFileSync(cssFilePath, 'utf-8');
// //         });
// //         const options = {};
// //         if (filename === 'hotelDetail') {
// //             options.page = filename;
// //             options.includeClass = ['slick'];
// //         }
// //         allCss = await removeUnusedCss(allCss, whitelist, options);
// //         allCss = await removeRedundantCode(allCss);
// //         allCss = await removeFont(allCss);
// //         allCss = await removeCssEmptyBlock(allCss);

// //         fs.writeFileSync(path.join(outDir, `${filename}.css`), allCss, 'utf-8');
// //     } else {
// //         const whitelist = filename === 'hotelDetail' ? ['*slick*'] : [];
// //         const options = {
// //             whitelist,
// //             minify: true,
// //             // output: path.join(outDir, `${filename}.css`),
// //             info: true,
// //         };
// //         let outputCss = purify(content, css, options);
// //         outputCss = await removeFont(outputCss);
// //         fs.writeFileSync(path.join(outDir, `${filename}.css`), outputCss);
// //     }
// // }

// // async function main () {
// //     if (!fs.existsSync(outDir)){
// //         fs.mkdirSync(outDir);
// //     }
// //     console.log('Get build file list...');
// //     const buildFilesJson = fs.readFileSync(path.join(buildDir, 'build-manifest.json'));
// //     const buildFiles = JSON.parse(buildFilesJson);

// //     const pagesDontNeedCss = ['_document', '_app'];
// //     const buildId = fs.readFileSync(path.join(buildDir, 'BUILD_ID'));

// //     for (const index of await glob(`**/${buildId}/pages/*.js`, { cwd: contentDir })) {
// //         const filename = index.split('/').pop().replace('.js', '');
// //         if (pagesDontNeedCss.indexOf(filename) === -1) {
// //             console.log('Genetating critical path files for ' + filename + '...');
// //             const filesForPage = filename === 'index'
// //                 ? buildFiles.pages['/']
// //                 : buildFiles.pages[`/${filename}`];

// //             const cssFiles = filesForPage
// //                 ? filesForPage
// //                     .filter(item => item.split('.').pop() === 'css')
// //                     .map(item => path.join(buildDir, item))
// //                 : [];
// //             await generate(index,filename, cssFiles);
// //         }
// //     }
// // }

// main();
