"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/is-hexadecimal";
exports.ids = ["vendor-chunks/is-hexadecimal"];
exports.modules = {

/***/ "(rsc)/./node_modules/is-hexadecimal/index.js":
/*!**********************************************!*\
  !*** ./node_modules/is-hexadecimal/index.js ***!
  \**********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   isHexadecimal: () => (/* binding */ isHexadecimal)\n/* harmony export */ });\n/**\n * Check if the given character code, or the character code at the first\n * character, is hexadecimal.\n *\n * @param {string|number} character\n * @returns {boolean} Whether `character` is hexadecimal\n */\nfunction isHexadecimal(character) {\n  const code =\n    typeof character === 'string' ? character.charCodeAt(0) : character\n\n  return (\n    (code >= 97 /* a */ && code <= 102) /* z */ ||\n    (code >= 65 /* A */ && code <= 70) /* Z */ ||\n    (code >= 48 /* A */ && code <= 57) /* Z */\n  )\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvaXMtaGV4YWRlY2ltYWwvaW5kZXguanMiLCJtYXBwaW5ncyI6Ijs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxlQUFlO0FBQzFCLGFBQWEsU0FBUztBQUN0QjtBQUNPO0FBQ1A7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wb3J0Zm9saW8vLi9ub2RlX21vZHVsZXMvaXMtaGV4YWRlY2ltYWwvaW5kZXguanM/YzQxMyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIENoZWNrIGlmIHRoZSBnaXZlbiBjaGFyYWN0ZXIgY29kZSwgb3IgdGhlIGNoYXJhY3RlciBjb2RlIGF0IHRoZSBmaXJzdFxuICogY2hhcmFjdGVyLCBpcyBoZXhhZGVjaW1hbC5cbiAqXG4gKiBAcGFyYW0ge3N0cmluZ3xudW1iZXJ9IGNoYXJhY3RlclxuICogQHJldHVybnMge2Jvb2xlYW59IFdoZXRoZXIgYGNoYXJhY3RlcmAgaXMgaGV4YWRlY2ltYWxcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGlzSGV4YWRlY2ltYWwoY2hhcmFjdGVyKSB7XG4gIGNvbnN0IGNvZGUgPVxuICAgIHR5cGVvZiBjaGFyYWN0ZXIgPT09ICdzdHJpbmcnID8gY2hhcmFjdGVyLmNoYXJDb2RlQXQoMCkgOiBjaGFyYWN0ZXJcblxuICByZXR1cm4gKFxuICAgIChjb2RlID49IDk3IC8qIGEgKi8gJiYgY29kZSA8PSAxMDIpIC8qIHogKi8gfHxcbiAgICAoY29kZSA+PSA2NSAvKiBBICovICYmIGNvZGUgPD0gNzApIC8qIFogKi8gfHxcbiAgICAoY29kZSA+PSA0OCAvKiBBICovICYmIGNvZGUgPD0gNTcpIC8qIFogKi9cbiAgKVxufVxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/is-hexadecimal/index.js\n");

/***/ })

};
;