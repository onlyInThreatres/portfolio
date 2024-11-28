"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/remark-gfm";
exports.ids = ["vendor-chunks/remark-gfm"];
exports.modules = {

/***/ "(rsc)/./node_modules/remark-gfm/lib/index.js":
/*!**********************************************!*\
  !*** ./node_modules/remark-gfm/lib/index.js ***!
  \**********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ remarkGfm)\n/* harmony export */ });\n/* harmony import */ var mdast_util_gfm__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! mdast-util-gfm */ \"(rsc)/./node_modules/mdast-util-gfm/lib/index.js\");\n/* harmony import */ var micromark_extension_gfm__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! micromark-extension-gfm */ \"(rsc)/./node_modules/micromark-extension-gfm/index.js\");\n/// <reference types=\"remark-parse\" />\n/// <reference types=\"remark-stringify\" />\n\n/**\n * @typedef {import('mdast').Root} Root\n * @typedef {import('mdast-util-gfm').Options} MdastOptions\n * @typedef {import('micromark-extension-gfm').Options} MicromarkOptions\n * @typedef {import('unified').Processor<Root>} Processor\n */\n\n/**\n * @typedef {MicromarkOptions & MdastOptions} Options\n *   Configuration.\n */\n\n\n\n\n/** @type {Options} */\nconst emptyOptions = {}\n\n/**\n * Add support GFM (autolink literals, footnotes, strikethrough, tables,\n * tasklists).\n *\n * @param {Options | null | undefined} [options]\n *   Configuration (optional).\n * @returns {undefined}\n *   Nothing.\n */\nfunction remarkGfm(options) {\n  // @ts-expect-error: TS is wrong about `this`.\n  // eslint-disable-next-line unicorn/no-this-assignment\n  const self = /** @type {Processor} */ (this)\n  const settings = options || emptyOptions\n  const data = self.data()\n\n  const micromarkExtensions =\n    data.micromarkExtensions || (data.micromarkExtensions = [])\n  const fromMarkdownExtensions =\n    data.fromMarkdownExtensions || (data.fromMarkdownExtensions = [])\n  const toMarkdownExtensions =\n    data.toMarkdownExtensions || (data.toMarkdownExtensions = [])\n\n  micromarkExtensions.push((0,micromark_extension_gfm__WEBPACK_IMPORTED_MODULE_0__.gfm)(settings))\n  fromMarkdownExtensions.push((0,mdast_util_gfm__WEBPACK_IMPORTED_MODULE_1__.gfmFromMarkdown)())\n  toMarkdownExtensions.push((0,mdast_util_gfm__WEBPACK_IMPORTED_MODULE_1__.gfmToMarkdown)(settings))\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvcmVtYXJrLWdmbS9saWIvaW5kZXguanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7QUFDQTs7QUFFQTtBQUNBLGFBQWEsc0JBQXNCO0FBQ25DLGFBQWEsa0NBQWtDO0FBQy9DLGFBQWEsMkNBQTJDO0FBQ3hELGFBQWEsbUNBQW1DO0FBQ2hEOztBQUVBO0FBQ0EsYUFBYSxpQ0FBaUM7QUFDOUM7QUFDQTs7QUFFNkQ7QUFDbEI7O0FBRTNDLFdBQVcsU0FBUztBQUNwQjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsNEJBQTRCO0FBQ3ZDO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDZTtBQUNmO0FBQ0E7QUFDQSwwQkFBMEIsV0FBVztBQUNyQztBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSwyQkFBMkIsNERBQUc7QUFDOUIsOEJBQThCLCtEQUFlO0FBQzdDLDRCQUE0Qiw2REFBYTtBQUN6QyIsInNvdXJjZXMiOlsid2VicGFjazovL3BvcnRmb2xpby8uL25vZGVfbW9kdWxlcy9yZW1hcmstZ2ZtL2xpYi9pbmRleC5qcz9mYTc0Il0sInNvdXJjZXNDb250ZW50IjpbIi8vLyA8cmVmZXJlbmNlIHR5cGVzPVwicmVtYXJrLXBhcnNlXCIgLz5cbi8vLyA8cmVmZXJlbmNlIHR5cGVzPVwicmVtYXJrLXN0cmluZ2lmeVwiIC8+XG5cbi8qKlxuICogQHR5cGVkZWYge2ltcG9ydCgnbWRhc3QnKS5Sb290fSBSb290XG4gKiBAdHlwZWRlZiB7aW1wb3J0KCdtZGFzdC11dGlsLWdmbScpLk9wdGlvbnN9IE1kYXN0T3B0aW9uc1xuICogQHR5cGVkZWYge2ltcG9ydCgnbWljcm9tYXJrLWV4dGVuc2lvbi1nZm0nKS5PcHRpb25zfSBNaWNyb21hcmtPcHRpb25zXG4gKiBAdHlwZWRlZiB7aW1wb3J0KCd1bmlmaWVkJykuUHJvY2Vzc29yPFJvb3Q+fSBQcm9jZXNzb3JcbiAqL1xuXG4vKipcbiAqIEB0eXBlZGVmIHtNaWNyb21hcmtPcHRpb25zICYgTWRhc3RPcHRpb25zfSBPcHRpb25zXG4gKiAgIENvbmZpZ3VyYXRpb24uXG4gKi9cblxuaW1wb3J0IHtnZm1Gcm9tTWFya2Rvd24sIGdmbVRvTWFya2Rvd259IGZyb20gJ21kYXN0LXV0aWwtZ2ZtJ1xuaW1wb3J0IHtnZm19IGZyb20gJ21pY3JvbWFyay1leHRlbnNpb24tZ2ZtJ1xuXG4vKiogQHR5cGUge09wdGlvbnN9ICovXG5jb25zdCBlbXB0eU9wdGlvbnMgPSB7fVxuXG4vKipcbiAqIEFkZCBzdXBwb3J0IEdGTSAoYXV0b2xpbmsgbGl0ZXJhbHMsIGZvb3Rub3Rlcywgc3RyaWtldGhyb3VnaCwgdGFibGVzLFxuICogdGFza2xpc3RzKS5cbiAqXG4gKiBAcGFyYW0ge09wdGlvbnMgfCBudWxsIHwgdW5kZWZpbmVkfSBbb3B0aW9uc11cbiAqICAgQ29uZmlndXJhdGlvbiAob3B0aW9uYWwpLlxuICogQHJldHVybnMge3VuZGVmaW5lZH1cbiAqICAgTm90aGluZy5cbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcmVtYXJrR2ZtKG9wdGlvbnMpIHtcbiAgLy8gQHRzLWV4cGVjdC1lcnJvcjogVFMgaXMgd3JvbmcgYWJvdXQgYHRoaXNgLlxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgdW5pY29ybi9uby10aGlzLWFzc2lnbm1lbnRcbiAgY29uc3Qgc2VsZiA9IC8qKiBAdHlwZSB7UHJvY2Vzc29yfSAqLyAodGhpcylcbiAgY29uc3Qgc2V0dGluZ3MgPSBvcHRpb25zIHx8IGVtcHR5T3B0aW9uc1xuICBjb25zdCBkYXRhID0gc2VsZi5kYXRhKClcblxuICBjb25zdCBtaWNyb21hcmtFeHRlbnNpb25zID1cbiAgICBkYXRhLm1pY3JvbWFya0V4dGVuc2lvbnMgfHwgKGRhdGEubWljcm9tYXJrRXh0ZW5zaW9ucyA9IFtdKVxuICBjb25zdCBmcm9tTWFya2Rvd25FeHRlbnNpb25zID1cbiAgICBkYXRhLmZyb21NYXJrZG93bkV4dGVuc2lvbnMgfHwgKGRhdGEuZnJvbU1hcmtkb3duRXh0ZW5zaW9ucyA9IFtdKVxuICBjb25zdCB0b01hcmtkb3duRXh0ZW5zaW9ucyA9XG4gICAgZGF0YS50b01hcmtkb3duRXh0ZW5zaW9ucyB8fCAoZGF0YS50b01hcmtkb3duRXh0ZW5zaW9ucyA9IFtdKVxuXG4gIG1pY3JvbWFya0V4dGVuc2lvbnMucHVzaChnZm0oc2V0dGluZ3MpKVxuICBmcm9tTWFya2Rvd25FeHRlbnNpb25zLnB1c2goZ2ZtRnJvbU1hcmtkb3duKCkpXG4gIHRvTWFya2Rvd25FeHRlbnNpb25zLnB1c2goZ2ZtVG9NYXJrZG93bihzZXR0aW5ncykpXG59XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/remark-gfm/lib/index.js\n");

/***/ })

};
;