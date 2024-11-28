"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/mdast-util-gfm-autolink-literal";
exports.ids = ["vendor-chunks/mdast-util-gfm-autolink-literal"];
exports.modules = {

/***/ "(rsc)/./node_modules/mdast-util-gfm-autolink-literal/lib/index.js":
/*!*******************************************************************!*\
  !*** ./node_modules/mdast-util-gfm-autolink-literal/lib/index.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   gfmAutolinkLiteralFromMarkdown: () => (/* binding */ gfmAutolinkLiteralFromMarkdown),\n/* harmony export */   gfmAutolinkLiteralToMarkdown: () => (/* binding */ gfmAutolinkLiteralToMarkdown)\n/* harmony export */ });\n/* harmony import */ var ccount__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ccount */ \"(rsc)/./node_modules/ccount/index.js\");\n/* harmony import */ var devlop__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! devlop */ \"(rsc)/./node_modules/devlop/lib/development.js\");\n/* harmony import */ var micromark_util_character__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! micromark-util-character */ \"(rsc)/./node_modules/micromark-util-character/dev/index.js\");\n/* harmony import */ var mdast_util_find_and_replace__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! mdast-util-find-and-replace */ \"(rsc)/./node_modules/mdast-util-find-and-replace/lib/index.js\");\n/**\n * @import {RegExpMatchObject, ReplaceFunction} from 'mdast-util-find-and-replace'\n * @import {CompileContext, Extension as FromMarkdownExtension, Handle as FromMarkdownHandle, Transform as FromMarkdownTransform} from 'mdast-util-from-markdown'\n * @import {ConstructName, Options as ToMarkdownExtension} from 'mdast-util-to-markdown'\n * @import {Link, PhrasingContent} from 'mdast'\n */\n\n\n\n\n\n\n/** @type {ConstructName} */\nconst inConstruct = 'phrasing'\n/** @type {Array<ConstructName>} */\nconst notInConstruct = ['autolink', 'link', 'image', 'label']\n\n/**\n * Create an extension for `mdast-util-from-markdown` to enable GFM autolink\n * literals in markdown.\n *\n * @returns {FromMarkdownExtension}\n *   Extension for `mdast-util-to-markdown` to enable GFM autolink literals.\n */\nfunction gfmAutolinkLiteralFromMarkdown() {\n  return {\n    transforms: [transformGfmAutolinkLiterals],\n    enter: {\n      literalAutolink: enterLiteralAutolink,\n      literalAutolinkEmail: enterLiteralAutolinkValue,\n      literalAutolinkHttp: enterLiteralAutolinkValue,\n      literalAutolinkWww: enterLiteralAutolinkValue\n    },\n    exit: {\n      literalAutolink: exitLiteralAutolink,\n      literalAutolinkEmail: exitLiteralAutolinkEmail,\n      literalAutolinkHttp: exitLiteralAutolinkHttp,\n      literalAutolinkWww: exitLiteralAutolinkWww\n    }\n  }\n}\n\n/**\n * Create an extension for `mdast-util-to-markdown` to enable GFM autolink\n * literals in markdown.\n *\n * @returns {ToMarkdownExtension}\n *   Extension for `mdast-util-to-markdown` to enable GFM autolink literals.\n */\nfunction gfmAutolinkLiteralToMarkdown() {\n  return {\n    unsafe: [\n      {\n        character: '@',\n        before: '[+\\\\-.\\\\w]',\n        after: '[\\\\-.\\\\w]',\n        inConstruct,\n        notInConstruct\n      },\n      {\n        character: '.',\n        before: '[Ww]',\n        after: '[\\\\-.\\\\w]',\n        inConstruct,\n        notInConstruct\n      },\n      {\n        character: ':',\n        before: '[ps]',\n        after: '\\\\/',\n        inConstruct,\n        notInConstruct\n      }\n    ]\n  }\n}\n\n/**\n * @this {CompileContext}\n * @type {FromMarkdownHandle}\n */\nfunction enterLiteralAutolink(token) {\n  this.enter({type: 'link', title: null, url: '', children: []}, token)\n}\n\n/**\n * @this {CompileContext}\n * @type {FromMarkdownHandle}\n */\nfunction enterLiteralAutolinkValue(token) {\n  this.config.enter.autolinkProtocol.call(this, token)\n}\n\n/**\n * @this {CompileContext}\n * @type {FromMarkdownHandle}\n */\nfunction exitLiteralAutolinkHttp(token) {\n  this.config.exit.autolinkProtocol.call(this, token)\n}\n\n/**\n * @this {CompileContext}\n * @type {FromMarkdownHandle}\n */\nfunction exitLiteralAutolinkWww(token) {\n  this.config.exit.data.call(this, token)\n  const node = this.stack[this.stack.length - 1]\n  ;(0,devlop__WEBPACK_IMPORTED_MODULE_0__.ok)(node.type === 'link')\n  node.url = 'http://' + this.sliceSerialize(token)\n}\n\n/**\n * @this {CompileContext}\n * @type {FromMarkdownHandle}\n */\nfunction exitLiteralAutolinkEmail(token) {\n  this.config.exit.autolinkEmail.call(this, token)\n}\n\n/**\n * @this {CompileContext}\n * @type {FromMarkdownHandle}\n */\nfunction exitLiteralAutolink(token) {\n  this.exit(token)\n}\n\n/** @type {FromMarkdownTransform} */\nfunction transformGfmAutolinkLiterals(tree) {\n  (0,mdast_util_find_and_replace__WEBPACK_IMPORTED_MODULE_1__.findAndReplace)(\n    tree,\n    [\n      [/(https?:\\/\\/|www(?=\\.))([-.\\w]+)([^ \\t\\r\\n]*)/gi, findUrl],\n      [/(?<=^|\\s|\\p{P}|\\p{S})([-.\\w+]+)@([-\\w]+(?:\\.[-\\w]+)+)/gu, findEmail]\n    ],\n    {ignore: ['link', 'linkReference']}\n  )\n}\n\n/**\n * @type {ReplaceFunction}\n * @param {string} _\n * @param {string} protocol\n * @param {string} domain\n * @param {string} path\n * @param {RegExpMatchObject} match\n * @returns {Array<PhrasingContent> | Link | false}\n */\n// eslint-disable-next-line max-params\nfunction findUrl(_, protocol, domain, path, match) {\n  let prefix = ''\n\n  // Not an expected previous character.\n  if (!previous(match)) {\n    return false\n  }\n\n  // Treat `www` as part of the domain.\n  if (/^w/i.test(protocol)) {\n    domain = protocol + domain\n    protocol = ''\n    prefix = 'http://'\n  }\n\n  if (!isCorrectDomain(domain)) {\n    return false\n  }\n\n  const parts = splitUrl(domain + path)\n\n  if (!parts[0]) return false\n\n  /** @type {Link} */\n  const result = {\n    type: 'link',\n    title: null,\n    url: prefix + protocol + parts[0],\n    children: [{type: 'text', value: protocol + parts[0]}]\n  }\n\n  if (parts[1]) {\n    return [result, {type: 'text', value: parts[1]}]\n  }\n\n  return result\n}\n\n/**\n * @type {ReplaceFunction}\n * @param {string} _\n * @param {string} atext\n * @param {string} label\n * @param {RegExpMatchObject} match\n * @returns {Link | false}\n */\nfunction findEmail(_, atext, label, match) {\n  if (\n    // Not an expected previous character.\n    !previous(match, true) ||\n    // Label ends in not allowed character.\n    /[-\\d_]$/.test(label)\n  ) {\n    return false\n  }\n\n  return {\n    type: 'link',\n    title: null,\n    url: 'mailto:' + atext + '@' + label,\n    children: [{type: 'text', value: atext + '@' + label}]\n  }\n}\n\n/**\n * @param {string} domain\n * @returns {boolean}\n */\nfunction isCorrectDomain(domain) {\n  const parts = domain.split('.')\n\n  if (\n    parts.length < 2 ||\n    (parts[parts.length - 1] &&\n      (/_/.test(parts[parts.length - 1]) ||\n        !/[a-zA-Z\\d]/.test(parts[parts.length - 1]))) ||\n    (parts[parts.length - 2] &&\n      (/_/.test(parts[parts.length - 2]) ||\n        !/[a-zA-Z\\d]/.test(parts[parts.length - 2])))\n  ) {\n    return false\n  }\n\n  return true\n}\n\n/**\n * @param {string} url\n * @returns {[string, string | undefined]}\n */\nfunction splitUrl(url) {\n  const trailExec = /[!\"&'),.:;<>?\\]}]+$/.exec(url)\n\n  if (!trailExec) {\n    return [url, undefined]\n  }\n\n  url = url.slice(0, trailExec.index)\n\n  let trail = trailExec[0]\n  let closingParenIndex = trail.indexOf(')')\n  const openingParens = (0,ccount__WEBPACK_IMPORTED_MODULE_2__.ccount)(url, '(')\n  let closingParens = (0,ccount__WEBPACK_IMPORTED_MODULE_2__.ccount)(url, ')')\n\n  while (closingParenIndex !== -1 && openingParens > closingParens) {\n    url += trail.slice(0, closingParenIndex + 1)\n    trail = trail.slice(closingParenIndex + 1)\n    closingParenIndex = trail.indexOf(')')\n    closingParens++\n  }\n\n  return [url, trail]\n}\n\n/**\n * @param {RegExpMatchObject} match\n * @param {boolean | null | undefined} [email=false]\n * @returns {boolean}\n */\nfunction previous(match, email) {\n  const code = match.input.charCodeAt(match.index - 1)\n\n  return (\n    (match.index === 0 ||\n      (0,micromark_util_character__WEBPACK_IMPORTED_MODULE_3__.unicodeWhitespace)(code) ||\n      (0,micromark_util_character__WEBPACK_IMPORTED_MODULE_3__.unicodePunctuation)(code)) &&\n    // If it’s an email, the previous character should not be a slash.\n    (!email || code !== 47)\n  )\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbWRhc3QtdXRpbC1nZm0tYXV0b2xpbmstbGl0ZXJhbC9saWIvaW5kZXguanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7QUFDQSxZQUFZLG9DQUFvQztBQUNoRCxZQUFZLHNIQUFzSDtBQUNsSSxZQUFZLCtDQUErQztBQUMzRCxZQUFZLHVCQUF1QjtBQUNuQzs7QUFFNkI7QUFDTTtBQUMyQztBQUNwQjs7QUFFMUQsV0FBVyxlQUFlO0FBQzFCO0FBQ0EsV0FBVyxzQkFBc0I7QUFDakM7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLFVBQVU7QUFDVixVQUFVO0FBQ1Y7QUFDQTtBQUNBLGNBQWMsaURBQWlEO0FBQy9EOztBQUVBO0FBQ0EsVUFBVTtBQUNWLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLFVBQVU7QUFDVixVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxVQUFVO0FBQ1YsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRSwyQ0FBTTtBQUNSO0FBQ0E7O0FBRUE7QUFDQSxVQUFVO0FBQ1YsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsVUFBVTtBQUNWLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxXQUFXLHVCQUF1QjtBQUNsQztBQUNBLEVBQUUsMkVBQWM7QUFDaEI7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLEVBQUUsSUFBSSxFQUFFO0FBQzVCO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQSxVQUFVO0FBQ1YsV0FBVyxRQUFRO0FBQ25CLFdBQVcsUUFBUTtBQUNuQixXQUFXLFFBQVE7QUFDbkIsV0FBVyxRQUFRO0FBQ25CLFdBQVcsbUJBQW1CO0FBQzlCLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBLGFBQWEsTUFBTTtBQUNuQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQix5Q0FBeUM7QUFDekQ7O0FBRUE7QUFDQSxxQkFBcUIsOEJBQThCO0FBQ25EOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSxVQUFVO0FBQ1YsV0FBVyxRQUFRO0FBQ25CLFdBQVcsUUFBUTtBQUNuQixXQUFXLFFBQVE7QUFDbkIsV0FBVyxtQkFBbUI7QUFDOUIsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCLHlDQUF5QztBQUN6RDtBQUNBOztBQUVBO0FBQ0EsV0FBVyxRQUFRO0FBQ25CLGFBQWE7QUFDYjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsV0FBVyxRQUFRO0FBQ25CLGFBQWE7QUFDYjtBQUNBO0FBQ0EsK0JBQStCLE1BQU07O0FBRXJDO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0Esd0JBQXdCLDhDQUFNO0FBQzlCLHNCQUFzQiw4Q0FBTTs7QUFFNUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSxXQUFXLG1CQUFtQjtBQUM5QixXQUFXLDRCQUE0QjtBQUN2QyxhQUFhO0FBQ2I7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxNQUFNLDJFQUFpQjtBQUN2QixNQUFNLDRFQUFrQjtBQUN4QjtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3BvcnRmb2xpby8uL25vZGVfbW9kdWxlcy9tZGFzdC11dGlsLWdmbS1hdXRvbGluay1saXRlcmFsL2xpYi9pbmRleC5qcz8wOTFhIl0sInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGltcG9ydCB7UmVnRXhwTWF0Y2hPYmplY3QsIFJlcGxhY2VGdW5jdGlvbn0gZnJvbSAnbWRhc3QtdXRpbC1maW5kLWFuZC1yZXBsYWNlJ1xuICogQGltcG9ydCB7Q29tcGlsZUNvbnRleHQsIEV4dGVuc2lvbiBhcyBGcm9tTWFya2Rvd25FeHRlbnNpb24sIEhhbmRsZSBhcyBGcm9tTWFya2Rvd25IYW5kbGUsIFRyYW5zZm9ybSBhcyBGcm9tTWFya2Rvd25UcmFuc2Zvcm19IGZyb20gJ21kYXN0LXV0aWwtZnJvbS1tYXJrZG93bidcbiAqIEBpbXBvcnQge0NvbnN0cnVjdE5hbWUsIE9wdGlvbnMgYXMgVG9NYXJrZG93bkV4dGVuc2lvbn0gZnJvbSAnbWRhc3QtdXRpbC10by1tYXJrZG93bidcbiAqIEBpbXBvcnQge0xpbmssIFBocmFzaW5nQ29udGVudH0gZnJvbSAnbWRhc3QnXG4gKi9cblxuaW1wb3J0IHtjY291bnR9IGZyb20gJ2Njb3VudCdcbmltcG9ydCB7b2sgYXMgYXNzZXJ0fSBmcm9tICdkZXZsb3AnXG5pbXBvcnQge3VuaWNvZGVQdW5jdHVhdGlvbiwgdW5pY29kZVdoaXRlc3BhY2V9IGZyb20gJ21pY3JvbWFyay11dGlsLWNoYXJhY3RlcidcbmltcG9ydCB7ZmluZEFuZFJlcGxhY2V9IGZyb20gJ21kYXN0LXV0aWwtZmluZC1hbmQtcmVwbGFjZSdcblxuLyoqIEB0eXBlIHtDb25zdHJ1Y3ROYW1lfSAqL1xuY29uc3QgaW5Db25zdHJ1Y3QgPSAncGhyYXNpbmcnXG4vKiogQHR5cGUge0FycmF5PENvbnN0cnVjdE5hbWU+fSAqL1xuY29uc3Qgbm90SW5Db25zdHJ1Y3QgPSBbJ2F1dG9saW5rJywgJ2xpbmsnLCAnaW1hZ2UnLCAnbGFiZWwnXVxuXG4vKipcbiAqIENyZWF0ZSBhbiBleHRlbnNpb24gZm9yIGBtZGFzdC11dGlsLWZyb20tbWFya2Rvd25gIHRvIGVuYWJsZSBHRk0gYXV0b2xpbmtcbiAqIGxpdGVyYWxzIGluIG1hcmtkb3duLlxuICpcbiAqIEByZXR1cm5zIHtGcm9tTWFya2Rvd25FeHRlbnNpb259XG4gKiAgIEV4dGVuc2lvbiBmb3IgYG1kYXN0LXV0aWwtdG8tbWFya2Rvd25gIHRvIGVuYWJsZSBHRk0gYXV0b2xpbmsgbGl0ZXJhbHMuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBnZm1BdXRvbGlua0xpdGVyYWxGcm9tTWFya2Rvd24oKSB7XG4gIHJldHVybiB7XG4gICAgdHJhbnNmb3JtczogW3RyYW5zZm9ybUdmbUF1dG9saW5rTGl0ZXJhbHNdLFxuICAgIGVudGVyOiB7XG4gICAgICBsaXRlcmFsQXV0b2xpbms6IGVudGVyTGl0ZXJhbEF1dG9saW5rLFxuICAgICAgbGl0ZXJhbEF1dG9saW5rRW1haWw6IGVudGVyTGl0ZXJhbEF1dG9saW5rVmFsdWUsXG4gICAgICBsaXRlcmFsQXV0b2xpbmtIdHRwOiBlbnRlckxpdGVyYWxBdXRvbGlua1ZhbHVlLFxuICAgICAgbGl0ZXJhbEF1dG9saW5rV3d3OiBlbnRlckxpdGVyYWxBdXRvbGlua1ZhbHVlXG4gICAgfSxcbiAgICBleGl0OiB7XG4gICAgICBsaXRlcmFsQXV0b2xpbms6IGV4aXRMaXRlcmFsQXV0b2xpbmssXG4gICAgICBsaXRlcmFsQXV0b2xpbmtFbWFpbDogZXhpdExpdGVyYWxBdXRvbGlua0VtYWlsLFxuICAgICAgbGl0ZXJhbEF1dG9saW5rSHR0cDogZXhpdExpdGVyYWxBdXRvbGlua0h0dHAsXG4gICAgICBsaXRlcmFsQXV0b2xpbmtXd3c6IGV4aXRMaXRlcmFsQXV0b2xpbmtXd3dcbiAgICB9XG4gIH1cbn1cblxuLyoqXG4gKiBDcmVhdGUgYW4gZXh0ZW5zaW9uIGZvciBgbWRhc3QtdXRpbC10by1tYXJrZG93bmAgdG8gZW5hYmxlIEdGTSBhdXRvbGlua1xuICogbGl0ZXJhbHMgaW4gbWFya2Rvd24uXG4gKlxuICogQHJldHVybnMge1RvTWFya2Rvd25FeHRlbnNpb259XG4gKiAgIEV4dGVuc2lvbiBmb3IgYG1kYXN0LXV0aWwtdG8tbWFya2Rvd25gIHRvIGVuYWJsZSBHRk0gYXV0b2xpbmsgbGl0ZXJhbHMuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBnZm1BdXRvbGlua0xpdGVyYWxUb01hcmtkb3duKCkge1xuICByZXR1cm4ge1xuICAgIHVuc2FmZTogW1xuICAgICAge1xuICAgICAgICBjaGFyYWN0ZXI6ICdAJyxcbiAgICAgICAgYmVmb3JlOiAnWytcXFxcLS5cXFxcd10nLFxuICAgICAgICBhZnRlcjogJ1tcXFxcLS5cXFxcd10nLFxuICAgICAgICBpbkNvbnN0cnVjdCxcbiAgICAgICAgbm90SW5Db25zdHJ1Y3RcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGNoYXJhY3RlcjogJy4nLFxuICAgICAgICBiZWZvcmU6ICdbV3ddJyxcbiAgICAgICAgYWZ0ZXI6ICdbXFxcXC0uXFxcXHddJyxcbiAgICAgICAgaW5Db25zdHJ1Y3QsXG4gICAgICAgIG5vdEluQ29uc3RydWN0XG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBjaGFyYWN0ZXI6ICc6JyxcbiAgICAgICAgYmVmb3JlOiAnW3BzXScsXG4gICAgICAgIGFmdGVyOiAnXFxcXC8nLFxuICAgICAgICBpbkNvbnN0cnVjdCxcbiAgICAgICAgbm90SW5Db25zdHJ1Y3RcbiAgICAgIH1cbiAgICBdXG4gIH1cbn1cblxuLyoqXG4gKiBAdGhpcyB7Q29tcGlsZUNvbnRleHR9XG4gKiBAdHlwZSB7RnJvbU1hcmtkb3duSGFuZGxlfVxuICovXG5mdW5jdGlvbiBlbnRlckxpdGVyYWxBdXRvbGluayh0b2tlbikge1xuICB0aGlzLmVudGVyKHt0eXBlOiAnbGluaycsIHRpdGxlOiBudWxsLCB1cmw6ICcnLCBjaGlsZHJlbjogW119LCB0b2tlbilcbn1cblxuLyoqXG4gKiBAdGhpcyB7Q29tcGlsZUNvbnRleHR9XG4gKiBAdHlwZSB7RnJvbU1hcmtkb3duSGFuZGxlfVxuICovXG5mdW5jdGlvbiBlbnRlckxpdGVyYWxBdXRvbGlua1ZhbHVlKHRva2VuKSB7XG4gIHRoaXMuY29uZmlnLmVudGVyLmF1dG9saW5rUHJvdG9jb2wuY2FsbCh0aGlzLCB0b2tlbilcbn1cblxuLyoqXG4gKiBAdGhpcyB7Q29tcGlsZUNvbnRleHR9XG4gKiBAdHlwZSB7RnJvbU1hcmtkb3duSGFuZGxlfVxuICovXG5mdW5jdGlvbiBleGl0TGl0ZXJhbEF1dG9saW5rSHR0cCh0b2tlbikge1xuICB0aGlzLmNvbmZpZy5leGl0LmF1dG9saW5rUHJvdG9jb2wuY2FsbCh0aGlzLCB0b2tlbilcbn1cblxuLyoqXG4gKiBAdGhpcyB7Q29tcGlsZUNvbnRleHR9XG4gKiBAdHlwZSB7RnJvbU1hcmtkb3duSGFuZGxlfVxuICovXG5mdW5jdGlvbiBleGl0TGl0ZXJhbEF1dG9saW5rV3d3KHRva2VuKSB7XG4gIHRoaXMuY29uZmlnLmV4aXQuZGF0YS5jYWxsKHRoaXMsIHRva2VuKVxuICBjb25zdCBub2RlID0gdGhpcy5zdGFja1t0aGlzLnN0YWNrLmxlbmd0aCAtIDFdXG4gIGFzc2VydChub2RlLnR5cGUgPT09ICdsaW5rJylcbiAgbm9kZS51cmwgPSAnaHR0cDovLycgKyB0aGlzLnNsaWNlU2VyaWFsaXplKHRva2VuKVxufVxuXG4vKipcbiAqIEB0aGlzIHtDb21waWxlQ29udGV4dH1cbiAqIEB0eXBlIHtGcm9tTWFya2Rvd25IYW5kbGV9XG4gKi9cbmZ1bmN0aW9uIGV4aXRMaXRlcmFsQXV0b2xpbmtFbWFpbCh0b2tlbikge1xuICB0aGlzLmNvbmZpZy5leGl0LmF1dG9saW5rRW1haWwuY2FsbCh0aGlzLCB0b2tlbilcbn1cblxuLyoqXG4gKiBAdGhpcyB7Q29tcGlsZUNvbnRleHR9XG4gKiBAdHlwZSB7RnJvbU1hcmtkb3duSGFuZGxlfVxuICovXG5mdW5jdGlvbiBleGl0TGl0ZXJhbEF1dG9saW5rKHRva2VuKSB7XG4gIHRoaXMuZXhpdCh0b2tlbilcbn1cblxuLyoqIEB0eXBlIHtGcm9tTWFya2Rvd25UcmFuc2Zvcm19ICovXG5mdW5jdGlvbiB0cmFuc2Zvcm1HZm1BdXRvbGlua0xpdGVyYWxzKHRyZWUpIHtcbiAgZmluZEFuZFJlcGxhY2UoXG4gICAgdHJlZSxcbiAgICBbXG4gICAgICBbLyhodHRwcz86XFwvXFwvfHd3dyg/PVxcLikpKFstLlxcd10rKShbXiBcXHRcXHJcXG5dKikvZ2ksIGZpbmRVcmxdLFxuICAgICAgWy8oPzw9XnxcXHN8XFxwe1B9fFxccHtTfSkoWy0uXFx3K10rKUAoWy1cXHddKyg/OlxcLlstXFx3XSspKykvZ3UsIGZpbmRFbWFpbF1cbiAgICBdLFxuICAgIHtpZ25vcmU6IFsnbGluaycsICdsaW5rUmVmZXJlbmNlJ119XG4gIClcbn1cblxuLyoqXG4gKiBAdHlwZSB7UmVwbGFjZUZ1bmN0aW9ufVxuICogQHBhcmFtIHtzdHJpbmd9IF9cbiAqIEBwYXJhbSB7c3RyaW5nfSBwcm90b2NvbFxuICogQHBhcmFtIHtzdHJpbmd9IGRvbWFpblxuICogQHBhcmFtIHtzdHJpbmd9IHBhdGhcbiAqIEBwYXJhbSB7UmVnRXhwTWF0Y2hPYmplY3R9IG1hdGNoXG4gKiBAcmV0dXJucyB7QXJyYXk8UGhyYXNpbmdDb250ZW50PiB8IExpbmsgfCBmYWxzZX1cbiAqL1xuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG1heC1wYXJhbXNcbmZ1bmN0aW9uIGZpbmRVcmwoXywgcHJvdG9jb2wsIGRvbWFpbiwgcGF0aCwgbWF0Y2gpIHtcbiAgbGV0IHByZWZpeCA9ICcnXG5cbiAgLy8gTm90IGFuIGV4cGVjdGVkIHByZXZpb3VzIGNoYXJhY3Rlci5cbiAgaWYgKCFwcmV2aW91cyhtYXRjaCkpIHtcbiAgICByZXR1cm4gZmFsc2VcbiAgfVxuXG4gIC8vIFRyZWF0IGB3d3dgIGFzIHBhcnQgb2YgdGhlIGRvbWFpbi5cbiAgaWYgKC9edy9pLnRlc3QocHJvdG9jb2wpKSB7XG4gICAgZG9tYWluID0gcHJvdG9jb2wgKyBkb21haW5cbiAgICBwcm90b2NvbCA9ICcnXG4gICAgcHJlZml4ID0gJ2h0dHA6Ly8nXG4gIH1cblxuICBpZiAoIWlzQ29ycmVjdERvbWFpbihkb21haW4pKSB7XG4gICAgcmV0dXJuIGZhbHNlXG4gIH1cblxuICBjb25zdCBwYXJ0cyA9IHNwbGl0VXJsKGRvbWFpbiArIHBhdGgpXG5cbiAgaWYgKCFwYXJ0c1swXSkgcmV0dXJuIGZhbHNlXG5cbiAgLyoqIEB0eXBlIHtMaW5rfSAqL1xuICBjb25zdCByZXN1bHQgPSB7XG4gICAgdHlwZTogJ2xpbmsnLFxuICAgIHRpdGxlOiBudWxsLFxuICAgIHVybDogcHJlZml4ICsgcHJvdG9jb2wgKyBwYXJ0c1swXSxcbiAgICBjaGlsZHJlbjogW3t0eXBlOiAndGV4dCcsIHZhbHVlOiBwcm90b2NvbCArIHBhcnRzWzBdfV1cbiAgfVxuXG4gIGlmIChwYXJ0c1sxXSkge1xuICAgIHJldHVybiBbcmVzdWx0LCB7dHlwZTogJ3RleHQnLCB2YWx1ZTogcGFydHNbMV19XVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdFxufVxuXG4vKipcbiAqIEB0eXBlIHtSZXBsYWNlRnVuY3Rpb259XG4gKiBAcGFyYW0ge3N0cmluZ30gX1xuICogQHBhcmFtIHtzdHJpbmd9IGF0ZXh0XG4gKiBAcGFyYW0ge3N0cmluZ30gbGFiZWxcbiAqIEBwYXJhbSB7UmVnRXhwTWF0Y2hPYmplY3R9IG1hdGNoXG4gKiBAcmV0dXJucyB7TGluayB8IGZhbHNlfVxuICovXG5mdW5jdGlvbiBmaW5kRW1haWwoXywgYXRleHQsIGxhYmVsLCBtYXRjaCkge1xuICBpZiAoXG4gICAgLy8gTm90IGFuIGV4cGVjdGVkIHByZXZpb3VzIGNoYXJhY3Rlci5cbiAgICAhcHJldmlvdXMobWF0Y2gsIHRydWUpIHx8XG4gICAgLy8gTGFiZWwgZW5kcyBpbiBub3QgYWxsb3dlZCBjaGFyYWN0ZXIuXG4gICAgL1stXFxkX10kLy50ZXN0KGxhYmVsKVxuICApIHtcbiAgICByZXR1cm4gZmFsc2VcbiAgfVxuXG4gIHJldHVybiB7XG4gICAgdHlwZTogJ2xpbmsnLFxuICAgIHRpdGxlOiBudWxsLFxuICAgIHVybDogJ21haWx0bzonICsgYXRleHQgKyAnQCcgKyBsYWJlbCxcbiAgICBjaGlsZHJlbjogW3t0eXBlOiAndGV4dCcsIHZhbHVlOiBhdGV4dCArICdAJyArIGxhYmVsfV1cbiAgfVxufVxuXG4vKipcbiAqIEBwYXJhbSB7c3RyaW5nfSBkb21haW5cbiAqIEByZXR1cm5zIHtib29sZWFufVxuICovXG5mdW5jdGlvbiBpc0NvcnJlY3REb21haW4oZG9tYWluKSB7XG4gIGNvbnN0IHBhcnRzID0gZG9tYWluLnNwbGl0KCcuJylcblxuICBpZiAoXG4gICAgcGFydHMubGVuZ3RoIDwgMiB8fFxuICAgIChwYXJ0c1twYXJ0cy5sZW5ndGggLSAxXSAmJlxuICAgICAgKC9fLy50ZXN0KHBhcnRzW3BhcnRzLmxlbmd0aCAtIDFdKSB8fFxuICAgICAgICAhL1thLXpBLVpcXGRdLy50ZXN0KHBhcnRzW3BhcnRzLmxlbmd0aCAtIDFdKSkpIHx8XG4gICAgKHBhcnRzW3BhcnRzLmxlbmd0aCAtIDJdICYmXG4gICAgICAoL18vLnRlc3QocGFydHNbcGFydHMubGVuZ3RoIC0gMl0pIHx8XG4gICAgICAgICEvW2EtekEtWlxcZF0vLnRlc3QocGFydHNbcGFydHMubGVuZ3RoIC0gMl0pKSlcbiAgKSB7XG4gICAgcmV0dXJuIGZhbHNlXG4gIH1cblxuICByZXR1cm4gdHJ1ZVxufVxuXG4vKipcbiAqIEBwYXJhbSB7c3RyaW5nfSB1cmxcbiAqIEByZXR1cm5zIHtbc3RyaW5nLCBzdHJpbmcgfCB1bmRlZmluZWRdfVxuICovXG5mdW5jdGlvbiBzcGxpdFVybCh1cmwpIHtcbiAgY29uc3QgdHJhaWxFeGVjID0gL1shXCImJyksLjo7PD4/XFxdfV0rJC8uZXhlYyh1cmwpXG5cbiAgaWYgKCF0cmFpbEV4ZWMpIHtcbiAgICByZXR1cm4gW3VybCwgdW5kZWZpbmVkXVxuICB9XG5cbiAgdXJsID0gdXJsLnNsaWNlKDAsIHRyYWlsRXhlYy5pbmRleClcblxuICBsZXQgdHJhaWwgPSB0cmFpbEV4ZWNbMF1cbiAgbGV0IGNsb3NpbmdQYXJlbkluZGV4ID0gdHJhaWwuaW5kZXhPZignKScpXG4gIGNvbnN0IG9wZW5pbmdQYXJlbnMgPSBjY291bnQodXJsLCAnKCcpXG4gIGxldCBjbG9zaW5nUGFyZW5zID0gY2NvdW50KHVybCwgJyknKVxuXG4gIHdoaWxlIChjbG9zaW5nUGFyZW5JbmRleCAhPT0gLTEgJiYgb3BlbmluZ1BhcmVucyA+IGNsb3NpbmdQYXJlbnMpIHtcbiAgICB1cmwgKz0gdHJhaWwuc2xpY2UoMCwgY2xvc2luZ1BhcmVuSW5kZXggKyAxKVxuICAgIHRyYWlsID0gdHJhaWwuc2xpY2UoY2xvc2luZ1BhcmVuSW5kZXggKyAxKVxuICAgIGNsb3NpbmdQYXJlbkluZGV4ID0gdHJhaWwuaW5kZXhPZignKScpXG4gICAgY2xvc2luZ1BhcmVucysrXG4gIH1cblxuICByZXR1cm4gW3VybCwgdHJhaWxdXG59XG5cbi8qKlxuICogQHBhcmFtIHtSZWdFeHBNYXRjaE9iamVjdH0gbWF0Y2hcbiAqIEBwYXJhbSB7Ym9vbGVhbiB8IG51bGwgfCB1bmRlZmluZWR9IFtlbWFpbD1mYWxzZV1cbiAqIEByZXR1cm5zIHtib29sZWFufVxuICovXG5mdW5jdGlvbiBwcmV2aW91cyhtYXRjaCwgZW1haWwpIHtcbiAgY29uc3QgY29kZSA9IG1hdGNoLmlucHV0LmNoYXJDb2RlQXQobWF0Y2guaW5kZXggLSAxKVxuXG4gIHJldHVybiAoXG4gICAgKG1hdGNoLmluZGV4ID09PSAwIHx8XG4gICAgICB1bmljb2RlV2hpdGVzcGFjZShjb2RlKSB8fFxuICAgICAgdW5pY29kZVB1bmN0dWF0aW9uKGNvZGUpKSAmJlxuICAgIC8vIElmIGl04oCZcyBhbiBlbWFpbCwgdGhlIHByZXZpb3VzIGNoYXJhY3RlciBzaG91bGQgbm90IGJlIGEgc2xhc2guXG4gICAgKCFlbWFpbCB8fCBjb2RlICE9PSA0NylcbiAgKVxufVxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/mdast-util-gfm-autolink-literal/lib/index.js\n");

/***/ })

};
;