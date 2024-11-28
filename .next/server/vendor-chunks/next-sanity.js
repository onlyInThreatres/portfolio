"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/next-sanity";
exports.ids = ["vendor-chunks/next-sanity"];
exports.modules = {

/***/ "(ssr)/./node_modules/next-sanity/dist/_chunks-es/NextStudio.js":
/*!****************************************************************!*\
  !*** ./node_modules/next-sanity/dist/_chunks-es/NextStudio.js ***!
  \****************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ NextStudioComponent)\n/* harmony export */ });\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"(ssr)/./node_modules/next/dist/server/future/route-modules/app-page/vendored/ssr/react-jsx-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(ssr)/./node_modules/next/dist/server/future/route-modules/app-page/vendored/ssr/react.js\");\n/* harmony import */ var sanity__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! sanity */ \"(ssr)/./node_modules/sanity/lib/index.mjs\");\n/* harmony import */ var _NextStudioNoScript_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./NextStudioNoScript.js */ \"(ssr)/./node_modules/next-sanity/dist/_chunks-es/NextStudioNoScript.js\");\n/* harmony import */ var history__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! history */ \"(ssr)/./node_modules/history/index.js\");\n/* harmony import */ var next_navigation_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/navigation.js */ \"(ssr)/./node_modules/next/dist/api/navigation.js\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! styled-components */ \"(ssr)/./node_modules/styled-components/dist/styled-components.esm.js\");\n\n\n\n\n\n\n\nfunction createHashHistoryForStudio() {\n  const history = (0,history__WEBPACK_IMPORTED_MODULE_3__.createHashHistory)();\n  return {\n    get action() {\n      return history.action;\n    },\n    get location() {\n      return history.location;\n    },\n    get createHref() {\n      return history.createHref;\n    },\n    get push() {\n      return history.push;\n    },\n    get replace() {\n      return history.replace;\n    },\n    get go() {\n      return history.go;\n    },\n    get back() {\n      return history.back;\n    },\n    get forward() {\n      return history.forward;\n    },\n    get block() {\n      return history.block;\n    },\n    // Overriding listen to workaround a problem where native history provides history.listen(location => void), but the npm package is history.listen(({action, location}) => void)\n    listen(listener) {\n      return history.listen(({ location }) => {\n        listener(location);\n      });\n    }\n  };\n}\nfunction StyledComponentsRegistry({\n  children,\n  isMounted\n}) {\n  const [styledComponentsStyleSheet] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(() => new styled_components__WEBPACK_IMPORTED_MODULE_4__.ServerStyleSheet());\n  return (0,next_navigation_js__WEBPACK_IMPORTED_MODULE_2__.useServerInsertedHTML)(() => {\n    const styles = styledComponentsStyleSheet.getStyleElement();\n    return styledComponentsStyleSheet.instance.clearTag(), /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, { children: styles });\n  }), isMounted ? /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, { children }) : /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(styled_components__WEBPACK_IMPORTED_MODULE_4__.StyleSheetManager, { sheet: styledComponentsStyleSheet.instance, children });\n}\nfunction useIsMounted() {\n  return (0,react__WEBPACK_IMPORTED_MODULE_1__.useSyncExternalStore)(\n    emptySubscribe,\n    () => !0,\n    () => !1\n  );\n}\nconst emptySubscribe = () => () => {\n};\nfunction NextStudioComponent({\n  children,\n  config,\n  unstable__noScript = !0,\n  scheme,\n  history,\n  ...props\n}) {\n  const isMounted = useIsMounted(), unstableHistory = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(() => {\n    if (props.unstable_history && history)\n      throw new Error(\"Cannot use both `unstable_history` and `history` props at the same time\");\n    return isMounted && history === \"hash\" ? createHashHistoryForStudio() : props.unstable_history;\n  }, [history, isMounted, props.unstable_history]);\n  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, { children: [\n    unstable__noScript && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_NextStudioNoScript_js__WEBPACK_IMPORTED_MODULE_5__.NextStudioNoScript, {}),\n    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(StyledComponentsRegistry, { isMounted, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_NextStudioNoScript_js__WEBPACK_IMPORTED_MODULE_5__.NextStudioLayout, { children: history === \"hash\" && !isMounted ? null : children || /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\n      sanity__WEBPACK_IMPORTED_MODULE_6__.Studio,\n      {\n        config,\n        scheme,\n        unstable_globalStyles: !0,\n        ...props,\n        unstable_history: unstableHistory\n      }\n    ) }) })\n  ] });\n}\n\n//# sourceMappingURL=NextStudio.js.map\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvbmV4dC1zYW5pdHkvZGlzdC9fY2h1bmtzLWVzL05leHRTdHVkaW8uanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBd0Q7QUFDUTtBQUNoQztBQUMrQztBQUNuQztBQUNlO0FBQ2E7QUFDeEU7QUFDQSxrQkFBa0IsMERBQWlCO0FBQ25DO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0wseUpBQXlKLGlCQUFpQjtBQUMxSztBQUNBLCtCQUErQixVQUFVO0FBQ3pDO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRCx1Q0FBdUMsK0NBQVEsV0FBVywrREFBZ0I7QUFDMUUsU0FBUyx5RUFBcUI7QUFDOUI7QUFDQSwyRUFBMkUsc0RBQUcsQ0FBQyx1REFBUSxJQUFJLGtCQUFrQjtBQUM3RyxHQUFHLCtCQUErQixzREFBRyxDQUFDLHVEQUFRLElBQUksVUFBVSxvQkFBb0Isc0RBQUcsQ0FBQyxnRUFBaUIsSUFBSSxzREFBc0Q7QUFDL0o7QUFDQTtBQUNBLFNBQVMsMkRBQW9CO0FBQzdCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Qsc0RBQXNELDhDQUFPO0FBQzdEO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSCx5QkFBeUIsdURBQUksQ0FBQyx1REFBUSxJQUFJO0FBQzFDLDBDQUEwQyxzREFBRyxDQUFDLHNFQUFrQixJQUFJO0FBQ3BFLG9CQUFvQixzREFBRyw2QkFBNkIscUNBQXFDLHNEQUFHLENBQUMsb0VBQWdCLElBQUksZ0ZBQWdGLHNEQUFHO0FBQ3BNLE1BQU0sMENBQU07QUFDWjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU8sR0FBRztBQUNWLEtBQUs7QUFDTDtBQUdFO0FBQ0YiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wb3J0Zm9saW8vLi9ub2RlX21vZHVsZXMvbmV4dC1zYW5pdHkvZGlzdC9fY2h1bmtzLWVzL05leHRTdHVkaW8uanM/ZmE2MiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBqc3gsIEZyYWdtZW50LCBqc3hzIH0gZnJvbSBcInJlYWN0L2pzeC1ydW50aW1lXCI7XG5pbXBvcnQgeyB1c2VTdGF0ZSwgdXNlU3luY0V4dGVybmFsU3RvcmUsIHVzZU1lbW8gfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IFN0dWRpbyB9IGZyb20gXCJzYW5pdHlcIjtcbmltcG9ydCB7IE5leHRTdHVkaW9Ob1NjcmlwdCwgTmV4dFN0dWRpb0xheW91dCB9IGZyb20gXCIuL05leHRTdHVkaW9Ob1NjcmlwdC5qc1wiO1xuaW1wb3J0IHsgY3JlYXRlSGFzaEhpc3RvcnkgfSBmcm9tIFwiaGlzdG9yeVwiO1xuaW1wb3J0IHsgdXNlU2VydmVySW5zZXJ0ZWRIVE1MIH0gZnJvbSBcIm5leHQvbmF2aWdhdGlvbi5qc1wiO1xuaW1wb3J0IHsgU2VydmVyU3R5bGVTaGVldCwgU3R5bGVTaGVldE1hbmFnZXIgfSBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcbmZ1bmN0aW9uIGNyZWF0ZUhhc2hIaXN0b3J5Rm9yU3R1ZGlvKCkge1xuICBjb25zdCBoaXN0b3J5ID0gY3JlYXRlSGFzaEhpc3RvcnkoKTtcbiAgcmV0dXJuIHtcbiAgICBnZXQgYWN0aW9uKCkge1xuICAgICAgcmV0dXJuIGhpc3RvcnkuYWN0aW9uO1xuICAgIH0sXG4gICAgZ2V0IGxvY2F0aW9uKCkge1xuICAgICAgcmV0dXJuIGhpc3RvcnkubG9jYXRpb247XG4gICAgfSxcbiAgICBnZXQgY3JlYXRlSHJlZigpIHtcbiAgICAgIHJldHVybiBoaXN0b3J5LmNyZWF0ZUhyZWY7XG4gICAgfSxcbiAgICBnZXQgcHVzaCgpIHtcbiAgICAgIHJldHVybiBoaXN0b3J5LnB1c2g7XG4gICAgfSxcbiAgICBnZXQgcmVwbGFjZSgpIHtcbiAgICAgIHJldHVybiBoaXN0b3J5LnJlcGxhY2U7XG4gICAgfSxcbiAgICBnZXQgZ28oKSB7XG4gICAgICByZXR1cm4gaGlzdG9yeS5nbztcbiAgICB9LFxuICAgIGdldCBiYWNrKCkge1xuICAgICAgcmV0dXJuIGhpc3RvcnkuYmFjaztcbiAgICB9LFxuICAgIGdldCBmb3J3YXJkKCkge1xuICAgICAgcmV0dXJuIGhpc3RvcnkuZm9yd2FyZDtcbiAgICB9LFxuICAgIGdldCBibG9jaygpIHtcbiAgICAgIHJldHVybiBoaXN0b3J5LmJsb2NrO1xuICAgIH0sXG4gICAgLy8gT3ZlcnJpZGluZyBsaXN0ZW4gdG8gd29ya2Fyb3VuZCBhIHByb2JsZW0gd2hlcmUgbmF0aXZlIGhpc3RvcnkgcHJvdmlkZXMgaGlzdG9yeS5saXN0ZW4obG9jYXRpb24gPT4gdm9pZCksIGJ1dCB0aGUgbnBtIHBhY2thZ2UgaXMgaGlzdG9yeS5saXN0ZW4oKHthY3Rpb24sIGxvY2F0aW9ufSkgPT4gdm9pZClcbiAgICBsaXN0ZW4obGlzdGVuZXIpIHtcbiAgICAgIHJldHVybiBoaXN0b3J5Lmxpc3RlbigoeyBsb2NhdGlvbiB9KSA9PiB7XG4gICAgICAgIGxpc3RlbmVyKGxvY2F0aW9uKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfTtcbn1cbmZ1bmN0aW9uIFN0eWxlZENvbXBvbmVudHNSZWdpc3RyeSh7XG4gIGNoaWxkcmVuLFxuICBpc01vdW50ZWRcbn0pIHtcbiAgY29uc3QgW3N0eWxlZENvbXBvbmVudHNTdHlsZVNoZWV0XSA9IHVzZVN0YXRlKCgpID0+IG5ldyBTZXJ2ZXJTdHlsZVNoZWV0KCkpO1xuICByZXR1cm4gdXNlU2VydmVySW5zZXJ0ZWRIVE1MKCgpID0+IHtcbiAgICBjb25zdCBzdHlsZXMgPSBzdHlsZWRDb21wb25lbnRzU3R5bGVTaGVldC5nZXRTdHlsZUVsZW1lbnQoKTtcbiAgICByZXR1cm4gc3R5bGVkQ29tcG9uZW50c1N0eWxlU2hlZXQuaW5zdGFuY2UuY2xlYXJUYWcoKSwgLyogQF9fUFVSRV9fICovIGpzeChGcmFnbWVudCwgeyBjaGlsZHJlbjogc3R5bGVzIH0pO1xuICB9KSwgaXNNb3VudGVkID8gLyogQF9fUFVSRV9fICovIGpzeChGcmFnbWVudCwgeyBjaGlsZHJlbiB9KSA6IC8qIEBfX1BVUkVfXyAqLyBqc3goU3R5bGVTaGVldE1hbmFnZXIsIHsgc2hlZXQ6IHN0eWxlZENvbXBvbmVudHNTdHlsZVNoZWV0Lmluc3RhbmNlLCBjaGlsZHJlbiB9KTtcbn1cbmZ1bmN0aW9uIHVzZUlzTW91bnRlZCgpIHtcbiAgcmV0dXJuIHVzZVN5bmNFeHRlcm5hbFN0b3JlKFxuICAgIGVtcHR5U3Vic2NyaWJlLFxuICAgICgpID0+ICEwLFxuICAgICgpID0+ICExXG4gICk7XG59XG5jb25zdCBlbXB0eVN1YnNjcmliZSA9ICgpID0+ICgpID0+IHtcbn07XG5mdW5jdGlvbiBOZXh0U3R1ZGlvQ29tcG9uZW50KHtcbiAgY2hpbGRyZW4sXG4gIGNvbmZpZyxcbiAgdW5zdGFibGVfX25vU2NyaXB0ID0gITAsXG4gIHNjaGVtZSxcbiAgaGlzdG9yeSxcbiAgLi4ucHJvcHNcbn0pIHtcbiAgY29uc3QgaXNNb3VudGVkID0gdXNlSXNNb3VudGVkKCksIHVuc3RhYmxlSGlzdG9yeSA9IHVzZU1lbW8oKCkgPT4ge1xuICAgIGlmIChwcm9wcy51bnN0YWJsZV9oaXN0b3J5ICYmIGhpc3RvcnkpXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJDYW5ub3QgdXNlIGJvdGggYHVuc3RhYmxlX2hpc3RvcnlgIGFuZCBgaGlzdG9yeWAgcHJvcHMgYXQgdGhlIHNhbWUgdGltZVwiKTtcbiAgICByZXR1cm4gaXNNb3VudGVkICYmIGhpc3RvcnkgPT09IFwiaGFzaFwiID8gY3JlYXRlSGFzaEhpc3RvcnlGb3JTdHVkaW8oKSA6IHByb3BzLnVuc3RhYmxlX2hpc3Rvcnk7XG4gIH0sIFtoaXN0b3J5LCBpc01vdW50ZWQsIHByb3BzLnVuc3RhYmxlX2hpc3RvcnldKTtcbiAgcmV0dXJuIC8qIEBfX1BVUkVfXyAqLyBqc3hzKEZyYWdtZW50LCB7IGNoaWxkcmVuOiBbXG4gICAgdW5zdGFibGVfX25vU2NyaXB0ICYmIC8qIEBfX1BVUkVfXyAqLyBqc3goTmV4dFN0dWRpb05vU2NyaXB0LCB7fSksXG4gICAgLyogQF9fUFVSRV9fICovIGpzeChTdHlsZWRDb21wb25lbnRzUmVnaXN0cnksIHsgaXNNb3VudGVkLCBjaGlsZHJlbjogLyogQF9fUFVSRV9fICovIGpzeChOZXh0U3R1ZGlvTGF5b3V0LCB7IGNoaWxkcmVuOiBoaXN0b3J5ID09PSBcImhhc2hcIiAmJiAhaXNNb3VudGVkID8gbnVsbCA6IGNoaWxkcmVuIHx8IC8qIEBfX1BVUkVfXyAqLyBqc3goXG4gICAgICBTdHVkaW8sXG4gICAgICB7XG4gICAgICAgIGNvbmZpZyxcbiAgICAgICAgc2NoZW1lLFxuICAgICAgICB1bnN0YWJsZV9nbG9iYWxTdHlsZXM6ICEwLFxuICAgICAgICAuLi5wcm9wcyxcbiAgICAgICAgdW5zdGFibGVfaGlzdG9yeTogdW5zdGFibGVIaXN0b3J5XG4gICAgICB9XG4gICAgKSB9KSB9KVxuICBdIH0pO1xufVxuZXhwb3J0IHtcbiAgTmV4dFN0dWRpb0NvbXBvbmVudCBhcyBkZWZhdWx0XG59O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9TmV4dFN0dWRpby5qcy5tYXBcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/next-sanity/dist/_chunks-es/NextStudio.js\n");

/***/ }),

/***/ "(ssr)/./node_modules/next-sanity/dist/_chunks-es/NextStudioNoScript.js":
/*!************************************************************************!*\
  !*** ./node_modules/next-sanity/dist/_chunks-es/NextStudioNoScript.js ***!
  \************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   NextStudioLayout: () => (/* binding */ NextStudioLayout),\n/* harmony export */   NextStudioNoScript: () => (/* binding */ NextStudioNoScript)\n/* harmony export */ });\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"(ssr)/./node_modules/next/dist/server/future/route-modules/app-page/vendored/ssr/react-jsx-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(ssr)/./node_modules/next/dist/server/future/route-modules/app-page/vendored/ssr/react.js\");\n\n\nconst NextStudioLayoutComponent = ({ children }) => /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\n  \"div\",\n  {\n    id: \"sanity\",\n    \"data-ui\": \"NextStudioLayout\",\n    style: {\n      height: \"100vh\",\n      maxHeight: \"100dvh\",\n      overscrollBehavior: \"none\",\n      WebkitFontSmoothing: \"antialiased\",\n      overflow: \"auto\"\n    },\n    children\n  }\n), NextStudioLayout = (0,react__WEBPACK_IMPORTED_MODULE_1__.memo)(NextStudioLayoutComponent), NextStudioNoScript = () => /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"noscript\", { children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\n  \"div\",\n  {\n    style: {\n      position: \"absolute\",\n      top: 0,\n      right: 0,\n      left: 0,\n      bottom: 0,\n      background: \"#fff\",\n      zIndex: 1\n    },\n    children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\n      \"div\",\n      {\n        style: {\n          position: \"absolute\",\n          top: \"50%\",\n          left: \"50%\",\n          transform: \"translate(-50%, -50%)\",\n          textAlign: \"center\",\n          fontFamily: \"helvetica, arial, sans-serif\"\n        },\n        children: [\n          /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"h1\", { children: \"JavaScript disabled\" }),\n          /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"p\", { children: [\n            \"Please \",\n            /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"a\", { href: \"https://www.enable-javascript.com/\", children: \"enable JavaScript\" }),\n            \" in your browser and reload the page to proceed.\"\n          ] })\n        ]\n      }\n    )\n  }\n) });\n\n//# sourceMappingURL=NextStudioNoScript.js.map\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvbmV4dC1zYW5pdHkvZGlzdC9fY2h1bmtzLWVzL05leHRTdHVkaW9Ob1NjcmlwdC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQThDO0FBQ2pCO0FBQzdCLHFDQUFxQyxVQUFVLHFCQUFxQixzREFBRztBQUN2RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0Esc0JBQXNCLDJDQUFJLHdFQUF3RSxzREFBRyxlQUFlLDBCQUEwQixzREFBRztBQUNqSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCw4QkFBOEIsdURBQUk7QUFDbEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0EsMEJBQTBCLHNEQUFHLFNBQVMsaUNBQWlDO0FBQ3ZFLDBCQUEwQix1REFBSSxRQUFRO0FBQ3RDO0FBQ0EsNEJBQTRCLHNEQUFHLFFBQVEsMkVBQTJFO0FBQ2xIO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUlEO0FBQ0YiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wb3J0Zm9saW8vLi9ub2RlX21vZHVsZXMvbmV4dC1zYW5pdHkvZGlzdC9fY2h1bmtzLWVzL05leHRTdHVkaW9Ob1NjcmlwdC5qcz9kMjAyIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGpzeCwganN4cyB9IGZyb20gXCJyZWFjdC9qc3gtcnVudGltZVwiO1xuaW1wb3J0IHsgbWVtbyB9IGZyb20gXCJyZWFjdFwiO1xuY29uc3QgTmV4dFN0dWRpb0xheW91dENvbXBvbmVudCA9ICh7IGNoaWxkcmVuIH0pID0+IC8qIEBfX1BVUkVfXyAqLyBqc3goXG4gIFwiZGl2XCIsXG4gIHtcbiAgICBpZDogXCJzYW5pdHlcIixcbiAgICBcImRhdGEtdWlcIjogXCJOZXh0U3R1ZGlvTGF5b3V0XCIsXG4gICAgc3R5bGU6IHtcbiAgICAgIGhlaWdodDogXCIxMDB2aFwiLFxuICAgICAgbWF4SGVpZ2h0OiBcIjEwMGR2aFwiLFxuICAgICAgb3ZlcnNjcm9sbEJlaGF2aW9yOiBcIm5vbmVcIixcbiAgICAgIFdlYmtpdEZvbnRTbW9vdGhpbmc6IFwiYW50aWFsaWFzZWRcIixcbiAgICAgIG92ZXJmbG93OiBcImF1dG9cIlxuICAgIH0sXG4gICAgY2hpbGRyZW5cbiAgfVxuKSwgTmV4dFN0dWRpb0xheW91dCA9IG1lbW8oTmV4dFN0dWRpb0xheW91dENvbXBvbmVudCksIE5leHRTdHVkaW9Ob1NjcmlwdCA9ICgpID0+IC8qIEBfX1BVUkVfXyAqLyBqc3goXCJub3NjcmlwdFwiLCB7IGNoaWxkcmVuOiAvKiBAX19QVVJFX18gKi8ganN4KFxuICBcImRpdlwiLFxuICB7XG4gICAgc3R5bGU6IHtcbiAgICAgIHBvc2l0aW9uOiBcImFic29sdXRlXCIsXG4gICAgICB0b3A6IDAsXG4gICAgICByaWdodDogMCxcbiAgICAgIGxlZnQ6IDAsXG4gICAgICBib3R0b206IDAsXG4gICAgICBiYWNrZ3JvdW5kOiBcIiNmZmZcIixcbiAgICAgIHpJbmRleDogMVxuICAgIH0sXG4gICAgY2hpbGRyZW46IC8qIEBfX1BVUkVfXyAqLyBqc3hzKFxuICAgICAgXCJkaXZcIixcbiAgICAgIHtcbiAgICAgICAgc3R5bGU6IHtcbiAgICAgICAgICBwb3NpdGlvbjogXCJhYnNvbHV0ZVwiLFxuICAgICAgICAgIHRvcDogXCI1MCVcIixcbiAgICAgICAgICBsZWZ0OiBcIjUwJVwiLFxuICAgICAgICAgIHRyYW5zZm9ybTogXCJ0cmFuc2xhdGUoLTUwJSwgLTUwJSlcIixcbiAgICAgICAgICB0ZXh0QWxpZ246IFwiY2VudGVyXCIsXG4gICAgICAgICAgZm9udEZhbWlseTogXCJoZWx2ZXRpY2EsIGFyaWFsLCBzYW5zLXNlcmlmXCJcbiAgICAgICAgfSxcbiAgICAgICAgY2hpbGRyZW46IFtcbiAgICAgICAgICAvKiBAX19QVVJFX18gKi8ganN4KFwiaDFcIiwgeyBjaGlsZHJlbjogXCJKYXZhU2NyaXB0IGRpc2FibGVkXCIgfSksXG4gICAgICAgICAgLyogQF9fUFVSRV9fICovIGpzeHMoXCJwXCIsIHsgY2hpbGRyZW46IFtcbiAgICAgICAgICAgIFwiUGxlYXNlIFwiLFxuICAgICAgICAgICAgLyogQF9fUFVSRV9fICovIGpzeChcImFcIiwgeyBocmVmOiBcImh0dHBzOi8vd3d3LmVuYWJsZS1qYXZhc2NyaXB0LmNvbS9cIiwgY2hpbGRyZW46IFwiZW5hYmxlIEphdmFTY3JpcHRcIiB9KSxcbiAgICAgICAgICAgIFwiIGluIHlvdXIgYnJvd3NlciBhbmQgcmVsb2FkIHRoZSBwYWdlIHRvIHByb2NlZWQuXCJcbiAgICAgICAgICBdIH0pXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICApXG4gIH1cbikgfSk7XG5leHBvcnQge1xuICBOZXh0U3R1ZGlvTGF5b3V0LFxuICBOZXh0U3R1ZGlvTm9TY3JpcHRcbn07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1OZXh0U3R1ZGlvTm9TY3JpcHQuanMubWFwXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/next-sanity/dist/_chunks-es/NextStudioNoScript.js\n");

/***/ }),

/***/ "(ssr)/./node_modules/next-sanity/dist/studio/client-component.js":
/*!******************************************************************!*\
  !*** ./node_modules/next-sanity/dist/studio/client-component.js ***!
  \******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   NextStudio: () => (/* binding */ NextStudioLazyClientComponent)\n/* harmony export */ });\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"(ssr)/./node_modules/next/dist/server/future/route-modules/app-page/vendored/ssr/react-jsx-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(ssr)/./node_modules/next/dist/server/future/route-modules/app-page/vendored/ssr/react.js\");\n/* __next_internal_client_entry_do_not_use__ NextStudio auto */ \n\nconst NextStudioClientComponent = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.lazy)(()=>Promise.all(/*! import() */[__webpack_require__.e(\"vendor-chunks/next\"), __webpack_require__.e(\"vendor-chunks/next-sanity\")]).then(__webpack_require__.bind(__webpack_require__, /*! ../_chunks-es/NextStudio.js */ \"(ssr)/./node_modules/next-sanity/dist/_chunks-es/NextStudio.js\")));\nfunction NextStudioLazyClientComponent(props) {\n    return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react__WEBPACK_IMPORTED_MODULE_1__.Suspense, {\n        fallback: null,\n        children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(NextStudioClientComponent, {\n            ...props\n        })\n    });\n}\n //# sourceMappingURL=client-component.js.map\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvbmV4dC1zYW5pdHkvZGlzdC9zdHVkaW8vY2xpZW50LWNvbXBvbmVudC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQVlBLE1BQU1BLDBDQUE0QkMsMkNBQUlBLENBQUMsSUFBTSxzUkFBTztBQUU3QyxTQUFTQyw4QkFBOEJDLEtBQUE7SUFFMUMsdUJBQUFDLHNEQUFBQSxDQUFDQywyQ0FBUUEsRUFBUjtRQUFTQyxVQUFVO1FBQ2xCQyxVQUFBLGdCQUFBSCxzREFBQUEsQ0FBQ0osMkJBQTJCO1lBQUEsR0FBR0csS0FBQTtRQUFBO0lBQ2pDO0FBRUoiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wb3J0Zm9saW8vLi4vLi4vc3JjL3N0dWRpby9jbGllbnQtY29tcG9uZW50L05leHRTdHVkaW9MYXp5LnRzeD9hYzViIl0sInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICpcbiAqIElmIHBhZ2VzIHJvdXRlciBzdXBwb3J0ZWQgYG5leHQvZHluYW1pY2AgaW1wb3J0cyAoaXQgd2FudHMgYG5leHQvZHluYW1pYy5qc2ApLFxuICogb3IgaWYgdHVyYm9wYWNrIGluIGFwcCByb3V0ZXIgYWxsb3dlZCBgbmV4dC9keW5hbWljLmpzYCAoaXQgZG9lc24ndCB5ZXQpXG4gKiB3ZSBjb3VsZCB1c2UgYGR5bmFtaWMoKCkgPT4gaW1wb3J0KCcuLi4pLCB7c3NyOiBmYWxzZX0pYCBoZXJlLlxuICogU2luY2Ugd2UgY2FuJ3QsIHdlIG5lZWQgdG8gdXNlIGEgbGF6eSBpbXBvcnQgYW5kIFN1c3BlbnNlIG91cnNlbGYuXG4gKi9cblxuaW1wb3J0IHtsYXp5LCBTdXNwZW5zZX0gZnJvbSAncmVhY3QnXG5cbmltcG9ydCB0eXBlIHtOZXh0U3R1ZGlvUHJvcHN9IGZyb20gJy4vTmV4dFN0dWRpbydcblxuY29uc3QgTmV4dFN0dWRpb0NsaWVudENvbXBvbmVudCA9IGxhenkoKCkgPT4gaW1wb3J0KCcuL05leHRTdHVkaW8nKSlcblxuZXhwb3J0IGZ1bmN0aW9uIE5leHRTdHVkaW9MYXp5Q2xpZW50Q29tcG9uZW50KHByb3BzOiBOZXh0U3R1ZGlvUHJvcHMpOiBSZWFjdC5SZWFjdE5vZGUge1xuICByZXR1cm4gKFxuICAgIDxTdXNwZW5zZSBmYWxsYmFjaz17bnVsbH0+XG4gICAgICA8TmV4dFN0dWRpb0NsaWVudENvbXBvbmVudCB7Li4ucHJvcHN9IC8+XG4gICAgPC9TdXNwZW5zZT5cbiAgKVxufVxuIl0sIm5hbWVzIjpbIk5leHRTdHVkaW9DbGllbnRDb21wb25lbnQiLCJsYXp5IiwiTmV4dFN0dWRpb0xhenlDbGllbnRDb21wb25lbnQiLCJwcm9wcyIsImpzeCIsIlN1c3BlbnNlIiwiZmFsbGJhY2siLCJjaGlsZHJlbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/next-sanity/dist/studio/client-component.js\n");

/***/ }),

/***/ "(rsc)/./node_modules/next-sanity/dist/_chunks-es/NextStudioNoScript.js":
/*!************************************************************************!*\
  !*** ./node_modules/next-sanity/dist/_chunks-es/NextStudioNoScript.js ***!
  \************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   NextStudioLayout: () => (/* binding */ NextStudioLayout),\n/* harmony export */   NextStudioNoScript: () => (/* binding */ NextStudioNoScript)\n/* harmony export */ });\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"(rsc)/./node_modules/next/dist/server/future/route-modules/app-page/vendored/rsc/react-jsx-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(rsc)/./node_modules/next/dist/server/future/route-modules/app-page/vendored/rsc/react.js\");\n\n\nconst NextStudioLayoutComponent = ({ children }) => /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\n  \"div\",\n  {\n    id: \"sanity\",\n    \"data-ui\": \"NextStudioLayout\",\n    style: {\n      height: \"100vh\",\n      maxHeight: \"100dvh\",\n      overscrollBehavior: \"none\",\n      WebkitFontSmoothing: \"antialiased\",\n      overflow: \"auto\"\n    },\n    children\n  }\n), NextStudioLayout = (0,react__WEBPACK_IMPORTED_MODULE_1__.memo)(NextStudioLayoutComponent), NextStudioNoScript = () => /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"noscript\", { children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\n  \"div\",\n  {\n    style: {\n      position: \"absolute\",\n      top: 0,\n      right: 0,\n      left: 0,\n      bottom: 0,\n      background: \"#fff\",\n      zIndex: 1\n    },\n    children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\n      \"div\",\n      {\n        style: {\n          position: \"absolute\",\n          top: \"50%\",\n          left: \"50%\",\n          transform: \"translate(-50%, -50%)\",\n          textAlign: \"center\",\n          fontFamily: \"helvetica, arial, sans-serif\"\n        },\n        children: [\n          /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"h1\", { children: \"JavaScript disabled\" }),\n          /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"p\", { children: [\n            \"Please \",\n            /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"a\", { href: \"https://www.enable-javascript.com/\", children: \"enable JavaScript\" }),\n            \" in your browser and reload the page to proceed.\"\n          ] })\n        ]\n      }\n    )\n  }\n) });\n\n//# sourceMappingURL=NextStudioNoScript.js.map\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbmV4dC1zYW5pdHkvZGlzdC9fY2h1bmtzLWVzL05leHRTdHVkaW9Ob1NjcmlwdC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQThDO0FBQ2pCO0FBQzdCLHFDQUFxQyxVQUFVLHFCQUFxQixzREFBRztBQUN2RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0Esc0JBQXNCLDJDQUFJLHdFQUF3RSxzREFBRyxlQUFlLDBCQUEwQixzREFBRztBQUNqSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCw4QkFBOEIsdURBQUk7QUFDbEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0EsMEJBQTBCLHNEQUFHLFNBQVMsaUNBQWlDO0FBQ3ZFLDBCQUEwQix1REFBSSxRQUFRO0FBQ3RDO0FBQ0EsNEJBQTRCLHNEQUFHLFFBQVEsMkVBQTJFO0FBQ2xIO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUlEO0FBQ0YiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wb3J0Zm9saW8vLi9ub2RlX21vZHVsZXMvbmV4dC1zYW5pdHkvZGlzdC9fY2h1bmtzLWVzL05leHRTdHVkaW9Ob1NjcmlwdC5qcz8zODY5Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGpzeCwganN4cyB9IGZyb20gXCJyZWFjdC9qc3gtcnVudGltZVwiO1xuaW1wb3J0IHsgbWVtbyB9IGZyb20gXCJyZWFjdFwiO1xuY29uc3QgTmV4dFN0dWRpb0xheW91dENvbXBvbmVudCA9ICh7IGNoaWxkcmVuIH0pID0+IC8qIEBfX1BVUkVfXyAqLyBqc3goXG4gIFwiZGl2XCIsXG4gIHtcbiAgICBpZDogXCJzYW5pdHlcIixcbiAgICBcImRhdGEtdWlcIjogXCJOZXh0U3R1ZGlvTGF5b3V0XCIsXG4gICAgc3R5bGU6IHtcbiAgICAgIGhlaWdodDogXCIxMDB2aFwiLFxuICAgICAgbWF4SGVpZ2h0OiBcIjEwMGR2aFwiLFxuICAgICAgb3ZlcnNjcm9sbEJlaGF2aW9yOiBcIm5vbmVcIixcbiAgICAgIFdlYmtpdEZvbnRTbW9vdGhpbmc6IFwiYW50aWFsaWFzZWRcIixcbiAgICAgIG92ZXJmbG93OiBcImF1dG9cIlxuICAgIH0sXG4gICAgY2hpbGRyZW5cbiAgfVxuKSwgTmV4dFN0dWRpb0xheW91dCA9IG1lbW8oTmV4dFN0dWRpb0xheW91dENvbXBvbmVudCksIE5leHRTdHVkaW9Ob1NjcmlwdCA9ICgpID0+IC8qIEBfX1BVUkVfXyAqLyBqc3goXCJub3NjcmlwdFwiLCB7IGNoaWxkcmVuOiAvKiBAX19QVVJFX18gKi8ganN4KFxuICBcImRpdlwiLFxuICB7XG4gICAgc3R5bGU6IHtcbiAgICAgIHBvc2l0aW9uOiBcImFic29sdXRlXCIsXG4gICAgICB0b3A6IDAsXG4gICAgICByaWdodDogMCxcbiAgICAgIGxlZnQ6IDAsXG4gICAgICBib3R0b206IDAsXG4gICAgICBiYWNrZ3JvdW5kOiBcIiNmZmZcIixcbiAgICAgIHpJbmRleDogMVxuICAgIH0sXG4gICAgY2hpbGRyZW46IC8qIEBfX1BVUkVfXyAqLyBqc3hzKFxuICAgICAgXCJkaXZcIixcbiAgICAgIHtcbiAgICAgICAgc3R5bGU6IHtcbiAgICAgICAgICBwb3NpdGlvbjogXCJhYnNvbHV0ZVwiLFxuICAgICAgICAgIHRvcDogXCI1MCVcIixcbiAgICAgICAgICBsZWZ0OiBcIjUwJVwiLFxuICAgICAgICAgIHRyYW5zZm9ybTogXCJ0cmFuc2xhdGUoLTUwJSwgLTUwJSlcIixcbiAgICAgICAgICB0ZXh0QWxpZ246IFwiY2VudGVyXCIsXG4gICAgICAgICAgZm9udEZhbWlseTogXCJoZWx2ZXRpY2EsIGFyaWFsLCBzYW5zLXNlcmlmXCJcbiAgICAgICAgfSxcbiAgICAgICAgY2hpbGRyZW46IFtcbiAgICAgICAgICAvKiBAX19QVVJFX18gKi8ganN4KFwiaDFcIiwgeyBjaGlsZHJlbjogXCJKYXZhU2NyaXB0IGRpc2FibGVkXCIgfSksXG4gICAgICAgICAgLyogQF9fUFVSRV9fICovIGpzeHMoXCJwXCIsIHsgY2hpbGRyZW46IFtcbiAgICAgICAgICAgIFwiUGxlYXNlIFwiLFxuICAgICAgICAgICAgLyogQF9fUFVSRV9fICovIGpzeChcImFcIiwgeyBocmVmOiBcImh0dHBzOi8vd3d3LmVuYWJsZS1qYXZhc2NyaXB0LmNvbS9cIiwgY2hpbGRyZW46IFwiZW5hYmxlIEphdmFTY3JpcHRcIiB9KSxcbiAgICAgICAgICAgIFwiIGluIHlvdXIgYnJvd3NlciBhbmQgcmVsb2FkIHRoZSBwYWdlIHRvIHByb2NlZWQuXCJcbiAgICAgICAgICBdIH0pXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICApXG4gIH1cbikgfSk7XG5leHBvcnQge1xuICBOZXh0U3R1ZGlvTGF5b3V0LFxuICBOZXh0U3R1ZGlvTm9TY3JpcHRcbn07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1OZXh0U3R1ZGlvTm9TY3JpcHQuanMubWFwXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/next-sanity/dist/_chunks-es/NextStudioNoScript.js\n");

/***/ }),

/***/ "(rsc)/./node_modules/next-sanity/dist/studio.js":
/*!*************************************************!*\
  !*** ./node_modules/next-sanity/dist/studio.js ***!
  \*************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   NextStudio: () => (/* reexport safe */ next_sanity_studio_client_component__WEBPACK_IMPORTED_MODULE_0__.NextStudio),\n/* harmony export */   NextStudioLayout: () => (/* reexport safe */ _chunks_es_NextStudioNoScript_js__WEBPACK_IMPORTED_MODULE_1__.NextStudioLayout),\n/* harmony export */   NextStudioNoScript: () => (/* reexport safe */ _chunks_es_NextStudioNoScript_js__WEBPACK_IMPORTED_MODULE_1__.NextStudioNoScript),\n/* harmony export */   metadata: () => (/* binding */ metadata),\n/* harmony export */   viewport: () => (/* binding */ viewport)\n/* harmony export */ });\n/* harmony import */ var _chunks_es_NextStudioNoScript_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_chunks-es/NextStudioNoScript.js */ \"(rsc)/./node_modules/next-sanity/dist/_chunks-es/NextStudioNoScript.js\");\n/* harmony import */ var next_sanity_studio_client_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-sanity/studio/client-component */ \"(rsc)/./node_modules/next-sanity/dist/studio/client-component.js\");\n\n\nconst viewport = {\n  width: \"device-width\",\n  initialScale: 1,\n  // Studio implements display cutouts CSS (The iPhone Notch ™ ) and needs `viewport-fit=covered` for it to work correctly\n  viewportFit: \"cover\"\n}, metadata = {\n  referrer: \"same-origin\",\n  robots: \"noindex\"\n};\n\n//# sourceMappingURL=studio.js.map\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbmV4dC1zYW5pdHkvZGlzdC9zdHVkaW8uanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUEwRjtBQUN6QjtBQUNqRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQU9FO0FBQ0YiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wb3J0Zm9saW8vLi9ub2RlX21vZHVsZXMvbmV4dC1zYW5pdHkvZGlzdC9zdHVkaW8uanM/NjZmMCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZXh0U3R1ZGlvTGF5b3V0LCBOZXh0U3R1ZGlvTm9TY3JpcHQgfSBmcm9tIFwiLi9fY2h1bmtzLWVzL05leHRTdHVkaW9Ob1NjcmlwdC5qc1wiO1xuaW1wb3J0IHsgTmV4dFN0dWRpbyB9IGZyb20gXCJuZXh0LXNhbml0eS9zdHVkaW8vY2xpZW50LWNvbXBvbmVudFwiO1xuY29uc3Qgdmlld3BvcnQgPSB7XG4gIHdpZHRoOiBcImRldmljZS13aWR0aFwiLFxuICBpbml0aWFsU2NhbGU6IDEsXG4gIC8vIFN0dWRpbyBpbXBsZW1lbnRzIGRpc3BsYXkgY3V0b3V0cyBDU1MgKFRoZSBpUGhvbmUgTm90Y2gg4oSiICkgYW5kIG5lZWRzIGB2aWV3cG9ydC1maXQ9Y292ZXJlZGAgZm9yIGl0IHRvIHdvcmsgY29ycmVjdGx5XG4gIHZpZXdwb3J0Rml0OiBcImNvdmVyXCJcbn0sIG1ldGFkYXRhID0ge1xuICByZWZlcnJlcjogXCJzYW1lLW9yaWdpblwiLFxuICByb2JvdHM6IFwibm9pbmRleFwiXG59O1xuZXhwb3J0IHtcbiAgTmV4dFN0dWRpbyxcbiAgTmV4dFN0dWRpb0xheW91dCxcbiAgTmV4dFN0dWRpb05vU2NyaXB0LFxuICBtZXRhZGF0YSxcbiAgdmlld3BvcnRcbn07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1zdHVkaW8uanMubWFwXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/next-sanity/dist/studio.js\n");

/***/ }),

/***/ "(rsc)/./node_modules/next-sanity/dist/studio/client-component.js":
/*!******************************************************************!*\
  !*** ./node_modules/next-sanity/dist/studio/client-component.js ***!
  \******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NextStudio: () => (/* binding */ e0)
/* harmony export */ });
/* harmony import */ var next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/build/webpack/loaders/next-flight-loader/module-proxy */ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-flight-loader/module-proxy.js");


const e0 = (0,next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__.createProxy)(String.raw`C:\Users\musta\Development\Projects\portfolio\node_modules\next-sanity\dist\studio\client-component.js#NextStudio`);


/***/ })

};
;