"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/layout",{

/***/ "(app-pages-browser)/./src/styles/globals.css":
/*!********************************!*\
  !*** ./src/styles/globals.css ***!
  \********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (\"fb5518044831\");\nif (true) { module.hot.accept() }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9zdHlsZXMvZ2xvYmFscy5jc3MiLCJtYXBwaW5ncyI6IjtBQUFBLCtEQUFlLGNBQWM7QUFDN0IsSUFBSSxJQUFVLElBQUksaUJBQWlCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9zdHlsZXMvZ2xvYmFscy5jc3M/ZWMwNyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBcImZiNTUxODA0NDgzMVwiXG5pZiAobW9kdWxlLmhvdCkgeyBtb2R1bGUuaG90LmFjY2VwdCgpIH1cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/styles/globals.css\n"));

/***/ }),

/***/ "(app-pages-browser)/./src/components/Header.tsx":
/*!***********************************!*\
  !*** ./src/components/Header.tsx ***!
  \***********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Header; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"(app-pages-browser)/./node_modules/next/dist/api/link.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \n\n\nconst NAV_ITEMS = [\n    {\n        number: \"01\",\n        label: \"Home\",\n        href: \"/\"\n    },\n    {\n        number: \"02\",\n        label: \"Projects\",\n        href: \"/projects\"\n    },\n    {\n        number: \"03\",\n        label: \"Expertise\",\n        href: \"/expertise\"\n    },\n    {\n        number: \"04\",\n        label: \"Blog\",\n        href: \"/blog\"\n    },\n    {\n        number: \"05\",\n        label: \"Contact\",\n        href: \"/contact\"\n    }\n];\nfunction Header() {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"header\", {\n        className: \"fixed w-full top-0 z-50 px-6 py-8 backdrop-blur-sm bg-[#0a192f]/90\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"nav\", {\n            className: \"flex justify-between items-center max-w-6xl mx-auto\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_link__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                    href: \"/\",\n                    className: \"text-[#64ffda] font-mono text-2xl\",\n                    children: \"M\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\musta\\\\Development\\\\Projects\\\\portfolio\\\\src\\\\components\\\\Header.tsx\",\n                    lineNumber: 18,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex items-center gap-8\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                            className: \"flex gap-8\",\n                            children: NAV_ITEMS.map((item)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_link__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                                        href: item.href,\n                                        className: \"text-[#8892b0] font-mono hover:text-[#64ffda] transition-colors\",\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                                className: \"text-[#64ffda]\",\n                                                children: [\n                                                    item.number,\n                                                    \".\"\n                                                ]\n                                            }, void 0, true, {\n                                                fileName: \"C:\\\\Users\\\\musta\\\\Development\\\\Projects\\\\portfolio\\\\src\\\\components\\\\Header.tsx\",\n                                                lineNumber: 30,\n                                                columnNumber: 19\n                                            }, this),\n                                            \" \",\n                                            item.label\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"C:\\\\Users\\\\musta\\\\Development\\\\Projects\\\\portfolio\\\\src\\\\components\\\\Header.tsx\",\n                                        lineNumber: 26,\n                                        columnNumber: 17\n                                    }, this)\n                                }, item.href, false, {\n                                    fileName: \"C:\\\\Users\\\\musta\\\\Development\\\\Projects\\\\portfolio\\\\src\\\\components\\\\Header.tsx\",\n                                    lineNumber: 25,\n                                    columnNumber: 15\n                                }, this))\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\musta\\\\Development\\\\Projects\\\\portfolio\\\\src\\\\components\\\\Header.tsx\",\n                            lineNumber: 23,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                            href: \"/resume.pdf\",\n                            className: \"font-mono text-[#64ffda] border border-[#64ffda] px-4 py-2 rounded    hover:bg-[#64ffda]/10 transition-colors\",\n                            target: \"_blank\",\n                            rel: \"noopener noreferrer\",\n                            children: \"Resume\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\musta\\\\Development\\\\Projects\\\\portfolio\\\\src\\\\components\\\\Header.tsx\",\n                            lineNumber: 36,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\musta\\\\Development\\\\Projects\\\\portfolio\\\\src\\\\components\\\\Header.tsx\",\n                    lineNumber: 22,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\musta\\\\Development\\\\Projects\\\\portfolio\\\\src\\\\components\\\\Header.tsx\",\n            lineNumber: 17,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\musta\\\\Development\\\\Projects\\\\portfolio\\\\src\\\\components\\\\Header.tsx\",\n        lineNumber: 16,\n        columnNumber: 5\n    }, this);\n}\n_c = Header;\nvar _c;\n$RefreshReg$(_c, \"Header\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL0hlYWRlci50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBRXlCO0FBQ0c7QUFFNUIsTUFBTUUsWUFBWTtJQUNoQjtRQUFFQyxRQUFRO1FBQU1DLE9BQU87UUFBUUMsTUFBTTtJQUFJO0lBQ3pDO1FBQUVGLFFBQVE7UUFBTUMsT0FBTztRQUFZQyxNQUFNO0lBQVk7SUFDckQ7UUFBRUYsUUFBUTtRQUFNQyxPQUFPO1FBQWFDLE1BQU07SUFBYTtJQUN2RDtRQUFFRixRQUFRO1FBQU1DLE9BQU87UUFBUUMsTUFBTTtJQUFRO0lBQzdDO1FBQUVGLFFBQVE7UUFBTUMsT0FBTztRQUFXQyxNQUFNO0lBQVc7Q0FDcEQ7QUFFYyxTQUFTQztJQUN0QixxQkFDRSw4REFBQ0M7UUFBT0MsV0FBVTtrQkFDaEIsNEVBQUNDO1lBQUlELFdBQVU7OzhCQUNiLDhEQUFDUCxpREFBSUE7b0JBQUNJLE1BQUs7b0JBQUlHLFdBQVU7OEJBQW9DOzs7Ozs7OEJBSTdELDhEQUFDRTtvQkFBSUYsV0FBVTs7c0NBQ2IsOERBQUNHOzRCQUFHSCxXQUFVO3NDQUNYTixVQUFVVSxHQUFHLENBQUMsQ0FBQ0MscUJBQ2QsOERBQUNDOzhDQUNDLDRFQUFDYixpREFBSUE7d0NBQ0hJLE1BQU1RLEtBQUtSLElBQUk7d0NBQ2ZHLFdBQVU7OzBEQUVWLDhEQUFDTztnREFBS1AsV0FBVTs7b0RBQWtCSyxLQUFLVixNQUFNO29EQUFDOzs7Ozs7OzRDQUM3Qzs0Q0FBS1UsS0FBS1QsS0FBSzs7Ozs7OzttQ0FOWFMsS0FBS1IsSUFBSTs7Ozs7Ozs7OztzQ0FXdEIsOERBQUNXOzRCQUNDWCxNQUFLOzRCQUNMRyxXQUFVOzRCQUVWUyxRQUFPOzRCQUNQQyxLQUFJO3NDQUNMOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU9YO0tBbkN3QloiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvSGVhZGVyLnRzeD9hNjk2Il0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiXHJcblxyXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcclxuXHJcbmNvbnN0IE5BVl9JVEVNUyA9IFtcclxuICB7IG51bWJlcjogXCIwMVwiLCBsYWJlbDogXCJIb21lXCIsIGhyZWY6IFwiL1wiIH0sXHJcbiAgeyBudW1iZXI6IFwiMDJcIiwgbGFiZWw6IFwiUHJvamVjdHNcIiwgaHJlZjogXCIvcHJvamVjdHNcIiB9LFxyXG4gIHsgbnVtYmVyOiBcIjAzXCIsIGxhYmVsOiBcIkV4cGVydGlzZVwiLCBocmVmOiBcIi9leHBlcnRpc2VcIiB9LFxyXG4gIHsgbnVtYmVyOiBcIjA0XCIsIGxhYmVsOiBcIkJsb2dcIiwgaHJlZjogXCIvYmxvZ1wiIH0sXHJcbiAgeyBudW1iZXI6IFwiMDVcIiwgbGFiZWw6IFwiQ29udGFjdFwiLCBocmVmOiBcIi9jb250YWN0XCIgfSxcclxuXVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSGVhZGVyKCkge1xyXG4gIHJldHVybiAoXHJcbiAgICA8aGVhZGVyIGNsYXNzTmFtZT1cImZpeGVkIHctZnVsbCB0b3AtMCB6LTUwIHB4LTYgcHktOCBiYWNrZHJvcC1ibHVyLXNtIGJnLVsjMGExOTJmXS85MFwiPlxyXG4gICAgICA8bmF2IGNsYXNzTmFtZT1cImZsZXgganVzdGlmeS1iZXR3ZWVuIGl0ZW1zLWNlbnRlciBtYXgtdy02eGwgbXgtYXV0b1wiPlxyXG4gICAgICAgIDxMaW5rIGhyZWY9XCIvXCIgY2xhc3NOYW1lPVwidGV4dC1bIzY0ZmZkYV0gZm9udC1tb25vIHRleHQtMnhsXCI+XHJcbiAgICAgICAgICBNXHJcbiAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgIFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIgZ2FwLThcIj5cclxuICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJmbGV4IGdhcC04XCI+XHJcbiAgICAgICAgICAgIHtOQVZfSVRFTVMubWFwKChpdGVtKSA9PiAoXHJcbiAgICAgICAgICAgICAgPGxpIGtleT17aXRlbS5ocmVmfT5cclxuICAgICAgICAgICAgICAgIDxMaW5rIFxyXG4gICAgICAgICAgICAgICAgICBocmVmPXtpdGVtLmhyZWZ9XHJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInRleHQtWyM4ODkyYjBdIGZvbnQtbW9ubyBob3Zlcjp0ZXh0LVsjNjRmZmRhXSB0cmFuc2l0aW9uLWNvbG9yc1wiXHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtWyM2NGZmZGFdXCI+e2l0ZW0ubnVtYmVyfS48L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgIHtcIiBcIn17aXRlbS5sYWJlbH1cclxuICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICApKX1cclxuICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICA8YSBcclxuICAgICAgICAgICAgaHJlZj1cIi9yZXN1bWUucGRmXCIgXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvbnQtbW9ubyB0ZXh0LVsjNjRmZmRhXSBib3JkZXIgYm9yZGVyLVsjNjRmZmRhXSBweC00IHB5LTIgcm91bmRlZCBcclxuICAgICAgICAgICAgICAgICAgICAgaG92ZXI6YmctWyM2NGZmZGFdLzEwIHRyYW5zaXRpb24tY29sb3JzXCJcclxuICAgICAgICAgICAgdGFyZ2V0PVwiX2JsYW5rXCJcclxuICAgICAgICAgICAgcmVsPVwibm9vcGVuZXIgbm9yZWZlcnJlclwiXHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIFJlc3VtZVxyXG4gICAgICAgICAgPC9hPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L25hdj5cclxuICAgIDwvaGVhZGVyPlxyXG4gIClcclxufSAiXSwibmFtZXMiOlsiUmVhY3QiLCJMaW5rIiwiTkFWX0lURU1TIiwibnVtYmVyIiwibGFiZWwiLCJocmVmIiwiSGVhZGVyIiwiaGVhZGVyIiwiY2xhc3NOYW1lIiwibmF2IiwiZGl2IiwidWwiLCJtYXAiLCJpdGVtIiwibGkiLCJzcGFuIiwiYSIsInRhcmdldCIsInJlbCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/Header.tsx\n"));

/***/ })

});