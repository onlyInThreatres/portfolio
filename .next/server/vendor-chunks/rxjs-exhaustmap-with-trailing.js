"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/rxjs-exhaustmap-with-trailing";
exports.ids = ["vendor-chunks/rxjs-exhaustmap-with-trailing"];
exports.modules = {

/***/ "(ssr)/./node_modules/rxjs-exhaustmap-with-trailing/dist/esm/index.js":
/*!**********************************************************************!*\
  !*** ./node_modules/rxjs-exhaustmap-with-trailing/dist/esm/index.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   exhaustMapToWithTrailing: () => (/* binding */ exhaustMapToWithTrailing),\n/* harmony export */   exhaustMapWithTrailing: () => (/* binding */ exhaustMapWithTrailing)\n/* harmony export */ });\n/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ \"(ssr)/./node_modules/rxjs/dist/cjs/index.js\");\n/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(rxjs__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ \"(ssr)/./node_modules/rxjs/dist/cjs/operators/index.js\");\n\n\n/**\n * Like exhaustMap, but also includes the trailing value emitted from the source observable while waiting for the preceding inner observable to complete\n *\n * Original code adapted from https://github.com/ReactiveX/rxjs/issues/5004\n * @param {function<T, K>(value: T, ?index: number): ObservableInput<K>} project - A function that, when applied to an item emitted by the\n * source Observable, returns a projected Observable.\n */\nfunction exhaustMapWithTrailing(project) {\n    return (source) => (0,rxjs__WEBPACK_IMPORTED_MODULE_0__.defer)(() => {\n        const release = new rxjs__WEBPACK_IMPORTED_MODULE_0__.Subject();\n        return source.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.throttle)(() => release, {\n            leading: true,\n            trailing: true,\n        }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.exhaustMap)((value, index) => (0,rxjs__WEBPACK_IMPORTED_MODULE_0__.scheduled)(project(value, index), rxjs__WEBPACK_IMPORTED_MODULE_0__.asyncScheduler).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.finalize)(() => {\n            release.next();\n        }))));\n    });\n}\n/**\n * Like exhaustMap, but also includes the trailing value emitted from the source observable while waiting for the preceding inner observable to complete\n *\n * Original code adapted from https://github.com/ReactiveX/rxjs/issues/5004\n * @param {ObservableInput} innerObservable An Observable to replace each value from\n * the source Observable.\n */\nfunction exhaustMapToWithTrailing(innerObservable) {\n    return exhaustMapWithTrailing(() => innerObservable);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvcnhqcy1leGhhdXN0bWFwLXdpdGgtdHJhaWxpbmcvZGlzdC9lc20vaW5kZXguanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBa0U7QUFDRjtBQUNoRTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsOERBQThEO0FBQ3pFO0FBQ0E7QUFDTztBQUNQLHVCQUF1QiwyQ0FBSztBQUM1Qiw0QkFBNEIseUNBQU87QUFDbkMsMkJBQTJCLHdEQUFRO0FBQ25DO0FBQ0E7QUFDQSxTQUFTLEdBQUcsMERBQVUsbUJBQW1CLCtDQUFTLHdCQUF3QixnREFBYyxPQUFPLHdEQUFRO0FBQ3ZHO0FBQ0EsU0FBUztBQUNULEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxpQkFBaUI7QUFDNUI7QUFDQTtBQUNPO0FBQ1A7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3BvcnRmb2xpby8uL25vZGVfbW9kdWxlcy9yeGpzLWV4aGF1c3RtYXAtd2l0aC10cmFpbGluZy9kaXN0L2VzbS9pbmRleC5qcz82ZTUyIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGFzeW5jU2NoZWR1bGVyLCBkZWZlciwgc2NoZWR1bGVkLCBTdWJqZWN0LCB9IGZyb20gXCJyeGpzXCI7XG5pbXBvcnQgeyBleGhhdXN0TWFwLCBmaW5hbGl6ZSwgdGhyb3R0bGUgfSBmcm9tIFwicnhqcy9vcGVyYXRvcnNcIjtcbi8qKlxuICogTGlrZSBleGhhdXN0TWFwLCBidXQgYWxzbyBpbmNsdWRlcyB0aGUgdHJhaWxpbmcgdmFsdWUgZW1pdHRlZCBmcm9tIHRoZSBzb3VyY2Ugb2JzZXJ2YWJsZSB3aGlsZSB3YWl0aW5nIGZvciB0aGUgcHJlY2VkaW5nIGlubmVyIG9ic2VydmFibGUgdG8gY29tcGxldGVcbiAqXG4gKiBPcmlnaW5hbCBjb2RlIGFkYXB0ZWQgZnJvbSBodHRwczovL2dpdGh1Yi5jb20vUmVhY3RpdmVYL3J4anMvaXNzdWVzLzUwMDRcbiAqIEBwYXJhbSB7ZnVuY3Rpb248VCwgSz4odmFsdWU6IFQsID9pbmRleDogbnVtYmVyKTogT2JzZXJ2YWJsZUlucHV0PEs+fSBwcm9qZWN0IC0gQSBmdW5jdGlvbiB0aGF0LCB3aGVuIGFwcGxpZWQgdG8gYW4gaXRlbSBlbWl0dGVkIGJ5IHRoZVxuICogc291cmNlIE9ic2VydmFibGUsIHJldHVybnMgYSBwcm9qZWN0ZWQgT2JzZXJ2YWJsZS5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGV4aGF1c3RNYXBXaXRoVHJhaWxpbmcocHJvamVjdCkge1xuICAgIHJldHVybiAoc291cmNlKSA9PiBkZWZlcigoKSA9PiB7XG4gICAgICAgIGNvbnN0IHJlbGVhc2UgPSBuZXcgU3ViamVjdCgpO1xuICAgICAgICByZXR1cm4gc291cmNlLnBpcGUodGhyb3R0bGUoKCkgPT4gcmVsZWFzZSwge1xuICAgICAgICAgICAgbGVhZGluZzogdHJ1ZSxcbiAgICAgICAgICAgIHRyYWlsaW5nOiB0cnVlLFxuICAgICAgICB9KSwgZXhoYXVzdE1hcCgodmFsdWUsIGluZGV4KSA9PiBzY2hlZHVsZWQocHJvamVjdCh2YWx1ZSwgaW5kZXgpLCBhc3luY1NjaGVkdWxlcikucGlwZShmaW5hbGl6ZSgoKSA9PiB7XG4gICAgICAgICAgICByZWxlYXNlLm5leHQoKTtcbiAgICAgICAgfSkpKSk7XG4gICAgfSk7XG59XG4vKipcbiAqIExpa2UgZXhoYXVzdE1hcCwgYnV0IGFsc28gaW5jbHVkZXMgdGhlIHRyYWlsaW5nIHZhbHVlIGVtaXR0ZWQgZnJvbSB0aGUgc291cmNlIG9ic2VydmFibGUgd2hpbGUgd2FpdGluZyBmb3IgdGhlIHByZWNlZGluZyBpbm5lciBvYnNlcnZhYmxlIHRvIGNvbXBsZXRlXG4gKlxuICogT3JpZ2luYWwgY29kZSBhZGFwdGVkIGZyb20gaHR0cHM6Ly9naXRodWIuY29tL1JlYWN0aXZlWC9yeGpzL2lzc3Vlcy81MDA0XG4gKiBAcGFyYW0ge09ic2VydmFibGVJbnB1dH0gaW5uZXJPYnNlcnZhYmxlIEFuIE9ic2VydmFibGUgdG8gcmVwbGFjZSBlYWNoIHZhbHVlIGZyb21cbiAqIHRoZSBzb3VyY2UgT2JzZXJ2YWJsZS5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGV4aGF1c3RNYXBUb1dpdGhUcmFpbGluZyhpbm5lck9ic2VydmFibGUpIHtcbiAgICByZXR1cm4gZXhoYXVzdE1hcFdpdGhUcmFpbGluZygoKSA9PiBpbm5lck9ic2VydmFibGUpO1xufVxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/rxjs-exhaustmap-with-trailing/dist/esm/index.js\n");

/***/ })

};
;