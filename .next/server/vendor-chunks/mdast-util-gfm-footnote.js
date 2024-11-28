"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/mdast-util-gfm-footnote";
exports.ids = ["vendor-chunks/mdast-util-gfm-footnote"];
exports.modules = {

/***/ "(rsc)/./node_modules/mdast-util-gfm-footnote/lib/index.js":
/*!***********************************************************!*\
  !*** ./node_modules/mdast-util-gfm-footnote/lib/index.js ***!
  \***********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   gfmFootnoteFromMarkdown: () => (/* binding */ gfmFootnoteFromMarkdown),\n/* harmony export */   gfmFootnoteToMarkdown: () => (/* binding */ gfmFootnoteToMarkdown)\n/* harmony export */ });\n/* harmony import */ var devlop__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! devlop */ \"(rsc)/./node_modules/devlop/lib/development.js\");\n/* harmony import */ var micromark_util_normalize_identifier__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! micromark-util-normalize-identifier */ \"(rsc)/./node_modules/micromark-util-normalize-identifier/dev/index.js\");\n/**\n * @typedef {import('mdast').FootnoteDefinition} FootnoteDefinition\n * @typedef {import('mdast').FootnoteReference} FootnoteReference\n * @typedef {import('mdast-util-from-markdown').CompileContext} CompileContext\n * @typedef {import('mdast-util-from-markdown').Extension} FromMarkdownExtension\n * @typedef {import('mdast-util-from-markdown').Handle} FromMarkdownHandle\n * @typedef {import('mdast-util-to-markdown').Handle} ToMarkdownHandle\n * @typedef {import('mdast-util-to-markdown').Map} Map\n * @typedef {import('mdast-util-to-markdown').Options} ToMarkdownExtension\n */\n\n\n\n\nfootnoteReference.peek = footnoteReferencePeek\n\n/**\n * Create an extension for `mdast-util-from-markdown` to enable GFM footnotes\n * in markdown.\n *\n * @returns {FromMarkdownExtension}\n *   Extension for `mdast-util-from-markdown`.\n */\nfunction gfmFootnoteFromMarkdown() {\n  return {\n    enter: {\n      gfmFootnoteDefinition: enterFootnoteDefinition,\n      gfmFootnoteDefinitionLabelString: enterFootnoteDefinitionLabelString,\n      gfmFootnoteCall: enterFootnoteCall,\n      gfmFootnoteCallString: enterFootnoteCallString\n    },\n    exit: {\n      gfmFootnoteDefinition: exitFootnoteDefinition,\n      gfmFootnoteDefinitionLabelString: exitFootnoteDefinitionLabelString,\n      gfmFootnoteCall: exitFootnoteCall,\n      gfmFootnoteCallString: exitFootnoteCallString\n    }\n  }\n}\n\n/**\n * Create an extension for `mdast-util-to-markdown` to enable GFM footnotes\n * in markdown.\n *\n * @returns {ToMarkdownExtension}\n *   Extension for `mdast-util-to-markdown`.\n */\nfunction gfmFootnoteToMarkdown() {\n  return {\n    // This is on by default already.\n    unsafe: [{character: '[', inConstruct: ['phrasing', 'label', 'reference']}],\n    handlers: {footnoteDefinition, footnoteReference}\n  }\n}\n\n/**\n * @this {CompileContext}\n * @type {FromMarkdownHandle}\n */\nfunction enterFootnoteDefinition(token) {\n  this.enter(\n    {type: 'footnoteDefinition', identifier: '', label: '', children: []},\n    token\n  )\n}\n\n/**\n * @this {CompileContext}\n * @type {FromMarkdownHandle}\n */\nfunction enterFootnoteDefinitionLabelString() {\n  this.buffer()\n}\n\n/**\n * @this {CompileContext}\n * @type {FromMarkdownHandle}\n */\nfunction exitFootnoteDefinitionLabelString(token) {\n  const label = this.resume()\n  const node = this.stack[this.stack.length - 1]\n  ;(0,devlop__WEBPACK_IMPORTED_MODULE_0__.ok)(node.type === 'footnoteDefinition')\n  node.label = label\n  node.identifier = (0,micromark_util_normalize_identifier__WEBPACK_IMPORTED_MODULE_1__.normalizeIdentifier)(\n    this.sliceSerialize(token)\n  ).toLowerCase()\n}\n\n/**\n * @this {CompileContext}\n * @type {FromMarkdownHandle}\n */\nfunction exitFootnoteDefinition(token) {\n  this.exit(token)\n}\n\n/**\n * @this {CompileContext}\n * @type {FromMarkdownHandle}\n */\nfunction enterFootnoteCall(token) {\n  this.enter({type: 'footnoteReference', identifier: '', label: ''}, token)\n}\n\n/**\n * @this {CompileContext}\n * @type {FromMarkdownHandle}\n */\nfunction enterFootnoteCallString() {\n  this.buffer()\n}\n\n/**\n * @this {CompileContext}\n * @type {FromMarkdownHandle}\n */\nfunction exitFootnoteCallString(token) {\n  const label = this.resume()\n  const node = this.stack[this.stack.length - 1]\n  ;(0,devlop__WEBPACK_IMPORTED_MODULE_0__.ok)(node.type === 'footnoteReference')\n  node.label = label\n  node.identifier = (0,micromark_util_normalize_identifier__WEBPACK_IMPORTED_MODULE_1__.normalizeIdentifier)(\n    this.sliceSerialize(token)\n  ).toLowerCase()\n}\n\n/**\n * @this {CompileContext}\n * @type {FromMarkdownHandle}\n */\nfunction exitFootnoteCall(token) {\n  this.exit(token)\n}\n\n/**\n * @type {ToMarkdownHandle}\n * @param {FootnoteReference} node\n */\nfunction footnoteReference(node, _, state, info) {\n  const tracker = state.createTracker(info)\n  let value = tracker.move('[^')\n  const exit = state.enter('footnoteReference')\n  const subexit = state.enter('reference')\n  value += tracker.move(\n    state.safe(state.associationId(node), {\n      ...tracker.current(),\n      before: value,\n      after: ']'\n    })\n  )\n  subexit()\n  exit()\n  value += tracker.move(']')\n  return value\n}\n\n/** @type {ToMarkdownHandle} */\nfunction footnoteReferencePeek() {\n  return '['\n}\n\n/**\n * @type {ToMarkdownHandle}\n * @param {FootnoteDefinition} node\n */\nfunction footnoteDefinition(node, _, state, info) {\n  const tracker = state.createTracker(info)\n  let value = tracker.move('[^')\n  const exit = state.enter('footnoteDefinition')\n  const subexit = state.enter('label')\n  value += tracker.move(\n    state.safe(state.associationId(node), {\n      ...tracker.current(),\n      before: value,\n      after: ']'\n    })\n  )\n  subexit()\n  value += tracker.move(\n    ']:' + (node.children && node.children.length > 0 ? ' ' : '')\n  )\n  tracker.shift(4)\n  value += tracker.move(\n    state.indentLines(state.containerFlow(node, tracker.current()), map)\n  )\n  exit()\n\n  return value\n}\n\n/** @type {Map} */\nfunction map(line, index, blank) {\n  if (index === 0) {\n    return line\n  }\n\n  return (blank ? '' : '    ') + line\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbWRhc3QtdXRpbC1nZm0tZm9vdG5vdGUvbGliL2luZGV4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTtBQUNBLGFBQWEsb0NBQW9DO0FBQ2pELGFBQWEsbUNBQW1DO0FBQ2hELGFBQWEsbURBQW1EO0FBQ2hFLGFBQWEsOENBQThDO0FBQzNELGFBQWEsMkNBQTJDO0FBQ3hELGFBQWEseUNBQXlDO0FBQ3RELGFBQWEsc0NBQXNDO0FBQ25ELGFBQWEsMENBQTBDO0FBQ3ZEOztBQUVtQztBQUNvQzs7QUFFdkU7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBLGNBQWMsZ0VBQWdFO0FBQzlFLGVBQWU7QUFDZjtBQUNBOztBQUVBO0FBQ0EsVUFBVTtBQUNWLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQSxLQUFLLG9FQUFvRTtBQUN6RTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxVQUFVO0FBQ1YsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsVUFBVTtBQUNWLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUUsMkNBQU07QUFDUjtBQUNBLG9CQUFvQix3RkFBbUI7QUFDdkM7QUFDQTtBQUNBOztBQUVBO0FBQ0EsVUFBVTtBQUNWLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLFVBQVU7QUFDVixVQUFVO0FBQ1Y7QUFDQTtBQUNBLGNBQWMscURBQXFEO0FBQ25FOztBQUVBO0FBQ0EsVUFBVTtBQUNWLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLFVBQVU7QUFDVixVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFLDJDQUFNO0FBQ1I7QUFDQSxvQkFBb0Isd0ZBQW1CO0FBQ3ZDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLFVBQVU7QUFDVixVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxVQUFVO0FBQ1YsV0FBVyxtQkFBbUI7QUFDOUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsV0FBVyxrQkFBa0I7QUFDN0I7QUFDQTtBQUNBOztBQUVBO0FBQ0EsVUFBVTtBQUNWLFdBQVcsb0JBQW9CO0FBQy9CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSxXQUFXLEtBQUs7QUFDaEI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3BvcnRmb2xpby8uL25vZGVfbW9kdWxlcy9tZGFzdC11dGlsLWdmbS1mb290bm90ZS9saWIvaW5kZXguanM/NmI0ZiJdLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEB0eXBlZGVmIHtpbXBvcnQoJ21kYXN0JykuRm9vdG5vdGVEZWZpbml0aW9ufSBGb290bm90ZURlZmluaXRpb25cbiAqIEB0eXBlZGVmIHtpbXBvcnQoJ21kYXN0JykuRm9vdG5vdGVSZWZlcmVuY2V9IEZvb3Rub3RlUmVmZXJlbmNlXG4gKiBAdHlwZWRlZiB7aW1wb3J0KCdtZGFzdC11dGlsLWZyb20tbWFya2Rvd24nKS5Db21waWxlQ29udGV4dH0gQ29tcGlsZUNvbnRleHRcbiAqIEB0eXBlZGVmIHtpbXBvcnQoJ21kYXN0LXV0aWwtZnJvbS1tYXJrZG93bicpLkV4dGVuc2lvbn0gRnJvbU1hcmtkb3duRXh0ZW5zaW9uXG4gKiBAdHlwZWRlZiB7aW1wb3J0KCdtZGFzdC11dGlsLWZyb20tbWFya2Rvd24nKS5IYW5kbGV9IEZyb21NYXJrZG93bkhhbmRsZVxuICogQHR5cGVkZWYge2ltcG9ydCgnbWRhc3QtdXRpbC10by1tYXJrZG93bicpLkhhbmRsZX0gVG9NYXJrZG93bkhhbmRsZVxuICogQHR5cGVkZWYge2ltcG9ydCgnbWRhc3QtdXRpbC10by1tYXJrZG93bicpLk1hcH0gTWFwXG4gKiBAdHlwZWRlZiB7aW1wb3J0KCdtZGFzdC11dGlsLXRvLW1hcmtkb3duJykuT3B0aW9uc30gVG9NYXJrZG93bkV4dGVuc2lvblxuICovXG5cbmltcG9ydCB7b2sgYXMgYXNzZXJ0fSBmcm9tICdkZXZsb3AnXG5pbXBvcnQge25vcm1hbGl6ZUlkZW50aWZpZXJ9IGZyb20gJ21pY3JvbWFyay11dGlsLW5vcm1hbGl6ZS1pZGVudGlmaWVyJ1xuXG5mb290bm90ZVJlZmVyZW5jZS5wZWVrID0gZm9vdG5vdGVSZWZlcmVuY2VQZWVrXG5cbi8qKlxuICogQ3JlYXRlIGFuIGV4dGVuc2lvbiBmb3IgYG1kYXN0LXV0aWwtZnJvbS1tYXJrZG93bmAgdG8gZW5hYmxlIEdGTSBmb290bm90ZXNcbiAqIGluIG1hcmtkb3duLlxuICpcbiAqIEByZXR1cm5zIHtGcm9tTWFya2Rvd25FeHRlbnNpb259XG4gKiAgIEV4dGVuc2lvbiBmb3IgYG1kYXN0LXV0aWwtZnJvbS1tYXJrZG93bmAuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBnZm1Gb290bm90ZUZyb21NYXJrZG93bigpIHtcbiAgcmV0dXJuIHtcbiAgICBlbnRlcjoge1xuICAgICAgZ2ZtRm9vdG5vdGVEZWZpbml0aW9uOiBlbnRlckZvb3Rub3RlRGVmaW5pdGlvbixcbiAgICAgIGdmbUZvb3Rub3RlRGVmaW5pdGlvbkxhYmVsU3RyaW5nOiBlbnRlckZvb3Rub3RlRGVmaW5pdGlvbkxhYmVsU3RyaW5nLFxuICAgICAgZ2ZtRm9vdG5vdGVDYWxsOiBlbnRlckZvb3Rub3RlQ2FsbCxcbiAgICAgIGdmbUZvb3Rub3RlQ2FsbFN0cmluZzogZW50ZXJGb290bm90ZUNhbGxTdHJpbmdcbiAgICB9LFxuICAgIGV4aXQ6IHtcbiAgICAgIGdmbUZvb3Rub3RlRGVmaW5pdGlvbjogZXhpdEZvb3Rub3RlRGVmaW5pdGlvbixcbiAgICAgIGdmbUZvb3Rub3RlRGVmaW5pdGlvbkxhYmVsU3RyaW5nOiBleGl0Rm9vdG5vdGVEZWZpbml0aW9uTGFiZWxTdHJpbmcsXG4gICAgICBnZm1Gb290bm90ZUNhbGw6IGV4aXRGb290bm90ZUNhbGwsXG4gICAgICBnZm1Gb290bm90ZUNhbGxTdHJpbmc6IGV4aXRGb290bm90ZUNhbGxTdHJpbmdcbiAgICB9XG4gIH1cbn1cblxuLyoqXG4gKiBDcmVhdGUgYW4gZXh0ZW5zaW9uIGZvciBgbWRhc3QtdXRpbC10by1tYXJrZG93bmAgdG8gZW5hYmxlIEdGTSBmb290bm90ZXNcbiAqIGluIG1hcmtkb3duLlxuICpcbiAqIEByZXR1cm5zIHtUb01hcmtkb3duRXh0ZW5zaW9ufVxuICogICBFeHRlbnNpb24gZm9yIGBtZGFzdC11dGlsLXRvLW1hcmtkb3duYC5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGdmbUZvb3Rub3RlVG9NYXJrZG93bigpIHtcbiAgcmV0dXJuIHtcbiAgICAvLyBUaGlzIGlzIG9uIGJ5IGRlZmF1bHQgYWxyZWFkeS5cbiAgICB1bnNhZmU6IFt7Y2hhcmFjdGVyOiAnWycsIGluQ29uc3RydWN0OiBbJ3BocmFzaW5nJywgJ2xhYmVsJywgJ3JlZmVyZW5jZSddfV0sXG4gICAgaGFuZGxlcnM6IHtmb290bm90ZURlZmluaXRpb24sIGZvb3Rub3RlUmVmZXJlbmNlfVxuICB9XG59XG5cbi8qKlxuICogQHRoaXMge0NvbXBpbGVDb250ZXh0fVxuICogQHR5cGUge0Zyb21NYXJrZG93bkhhbmRsZX1cbiAqL1xuZnVuY3Rpb24gZW50ZXJGb290bm90ZURlZmluaXRpb24odG9rZW4pIHtcbiAgdGhpcy5lbnRlcihcbiAgICB7dHlwZTogJ2Zvb3Rub3RlRGVmaW5pdGlvbicsIGlkZW50aWZpZXI6ICcnLCBsYWJlbDogJycsIGNoaWxkcmVuOiBbXX0sXG4gICAgdG9rZW5cbiAgKVxufVxuXG4vKipcbiAqIEB0aGlzIHtDb21waWxlQ29udGV4dH1cbiAqIEB0eXBlIHtGcm9tTWFya2Rvd25IYW5kbGV9XG4gKi9cbmZ1bmN0aW9uIGVudGVyRm9vdG5vdGVEZWZpbml0aW9uTGFiZWxTdHJpbmcoKSB7XG4gIHRoaXMuYnVmZmVyKClcbn1cblxuLyoqXG4gKiBAdGhpcyB7Q29tcGlsZUNvbnRleHR9XG4gKiBAdHlwZSB7RnJvbU1hcmtkb3duSGFuZGxlfVxuICovXG5mdW5jdGlvbiBleGl0Rm9vdG5vdGVEZWZpbml0aW9uTGFiZWxTdHJpbmcodG9rZW4pIHtcbiAgY29uc3QgbGFiZWwgPSB0aGlzLnJlc3VtZSgpXG4gIGNvbnN0IG5vZGUgPSB0aGlzLnN0YWNrW3RoaXMuc3RhY2subGVuZ3RoIC0gMV1cbiAgYXNzZXJ0KG5vZGUudHlwZSA9PT0gJ2Zvb3Rub3RlRGVmaW5pdGlvbicpXG4gIG5vZGUubGFiZWwgPSBsYWJlbFxuICBub2RlLmlkZW50aWZpZXIgPSBub3JtYWxpemVJZGVudGlmaWVyKFxuICAgIHRoaXMuc2xpY2VTZXJpYWxpemUodG9rZW4pXG4gICkudG9Mb3dlckNhc2UoKVxufVxuXG4vKipcbiAqIEB0aGlzIHtDb21waWxlQ29udGV4dH1cbiAqIEB0eXBlIHtGcm9tTWFya2Rvd25IYW5kbGV9XG4gKi9cbmZ1bmN0aW9uIGV4aXRGb290bm90ZURlZmluaXRpb24odG9rZW4pIHtcbiAgdGhpcy5leGl0KHRva2VuKVxufVxuXG4vKipcbiAqIEB0aGlzIHtDb21waWxlQ29udGV4dH1cbiAqIEB0eXBlIHtGcm9tTWFya2Rvd25IYW5kbGV9XG4gKi9cbmZ1bmN0aW9uIGVudGVyRm9vdG5vdGVDYWxsKHRva2VuKSB7XG4gIHRoaXMuZW50ZXIoe3R5cGU6ICdmb290bm90ZVJlZmVyZW5jZScsIGlkZW50aWZpZXI6ICcnLCBsYWJlbDogJyd9LCB0b2tlbilcbn1cblxuLyoqXG4gKiBAdGhpcyB7Q29tcGlsZUNvbnRleHR9XG4gKiBAdHlwZSB7RnJvbU1hcmtkb3duSGFuZGxlfVxuICovXG5mdW5jdGlvbiBlbnRlckZvb3Rub3RlQ2FsbFN0cmluZygpIHtcbiAgdGhpcy5idWZmZXIoKVxufVxuXG4vKipcbiAqIEB0aGlzIHtDb21waWxlQ29udGV4dH1cbiAqIEB0eXBlIHtGcm9tTWFya2Rvd25IYW5kbGV9XG4gKi9cbmZ1bmN0aW9uIGV4aXRGb290bm90ZUNhbGxTdHJpbmcodG9rZW4pIHtcbiAgY29uc3QgbGFiZWwgPSB0aGlzLnJlc3VtZSgpXG4gIGNvbnN0IG5vZGUgPSB0aGlzLnN0YWNrW3RoaXMuc3RhY2subGVuZ3RoIC0gMV1cbiAgYXNzZXJ0KG5vZGUudHlwZSA9PT0gJ2Zvb3Rub3RlUmVmZXJlbmNlJylcbiAgbm9kZS5sYWJlbCA9IGxhYmVsXG4gIG5vZGUuaWRlbnRpZmllciA9IG5vcm1hbGl6ZUlkZW50aWZpZXIoXG4gICAgdGhpcy5zbGljZVNlcmlhbGl6ZSh0b2tlbilcbiAgKS50b0xvd2VyQ2FzZSgpXG59XG5cbi8qKlxuICogQHRoaXMge0NvbXBpbGVDb250ZXh0fVxuICogQHR5cGUge0Zyb21NYXJrZG93bkhhbmRsZX1cbiAqL1xuZnVuY3Rpb24gZXhpdEZvb3Rub3RlQ2FsbCh0b2tlbikge1xuICB0aGlzLmV4aXQodG9rZW4pXG59XG5cbi8qKlxuICogQHR5cGUge1RvTWFya2Rvd25IYW5kbGV9XG4gKiBAcGFyYW0ge0Zvb3Rub3RlUmVmZXJlbmNlfSBub2RlXG4gKi9cbmZ1bmN0aW9uIGZvb3Rub3RlUmVmZXJlbmNlKG5vZGUsIF8sIHN0YXRlLCBpbmZvKSB7XG4gIGNvbnN0IHRyYWNrZXIgPSBzdGF0ZS5jcmVhdGVUcmFja2VyKGluZm8pXG4gIGxldCB2YWx1ZSA9IHRyYWNrZXIubW92ZSgnW14nKVxuICBjb25zdCBleGl0ID0gc3RhdGUuZW50ZXIoJ2Zvb3Rub3RlUmVmZXJlbmNlJylcbiAgY29uc3Qgc3ViZXhpdCA9IHN0YXRlLmVudGVyKCdyZWZlcmVuY2UnKVxuICB2YWx1ZSArPSB0cmFja2VyLm1vdmUoXG4gICAgc3RhdGUuc2FmZShzdGF0ZS5hc3NvY2lhdGlvbklkKG5vZGUpLCB7XG4gICAgICAuLi50cmFja2VyLmN1cnJlbnQoKSxcbiAgICAgIGJlZm9yZTogdmFsdWUsXG4gICAgICBhZnRlcjogJ10nXG4gICAgfSlcbiAgKVxuICBzdWJleGl0KClcbiAgZXhpdCgpXG4gIHZhbHVlICs9IHRyYWNrZXIubW92ZSgnXScpXG4gIHJldHVybiB2YWx1ZVxufVxuXG4vKiogQHR5cGUge1RvTWFya2Rvd25IYW5kbGV9ICovXG5mdW5jdGlvbiBmb290bm90ZVJlZmVyZW5jZVBlZWsoKSB7XG4gIHJldHVybiAnWydcbn1cblxuLyoqXG4gKiBAdHlwZSB7VG9NYXJrZG93bkhhbmRsZX1cbiAqIEBwYXJhbSB7Rm9vdG5vdGVEZWZpbml0aW9ufSBub2RlXG4gKi9cbmZ1bmN0aW9uIGZvb3Rub3RlRGVmaW5pdGlvbihub2RlLCBfLCBzdGF0ZSwgaW5mbykge1xuICBjb25zdCB0cmFja2VyID0gc3RhdGUuY3JlYXRlVHJhY2tlcihpbmZvKVxuICBsZXQgdmFsdWUgPSB0cmFja2VyLm1vdmUoJ1teJylcbiAgY29uc3QgZXhpdCA9IHN0YXRlLmVudGVyKCdmb290bm90ZURlZmluaXRpb24nKVxuICBjb25zdCBzdWJleGl0ID0gc3RhdGUuZW50ZXIoJ2xhYmVsJylcbiAgdmFsdWUgKz0gdHJhY2tlci5tb3ZlKFxuICAgIHN0YXRlLnNhZmUoc3RhdGUuYXNzb2NpYXRpb25JZChub2RlKSwge1xuICAgICAgLi4udHJhY2tlci5jdXJyZW50KCksXG4gICAgICBiZWZvcmU6IHZhbHVlLFxuICAgICAgYWZ0ZXI6ICddJ1xuICAgIH0pXG4gIClcbiAgc3ViZXhpdCgpXG4gIHZhbHVlICs9IHRyYWNrZXIubW92ZShcbiAgICAnXTonICsgKG5vZGUuY2hpbGRyZW4gJiYgbm9kZS5jaGlsZHJlbi5sZW5ndGggPiAwID8gJyAnIDogJycpXG4gIClcbiAgdHJhY2tlci5zaGlmdCg0KVxuICB2YWx1ZSArPSB0cmFja2VyLm1vdmUoXG4gICAgc3RhdGUuaW5kZW50TGluZXMoc3RhdGUuY29udGFpbmVyRmxvdyhub2RlLCB0cmFja2VyLmN1cnJlbnQoKSksIG1hcClcbiAgKVxuICBleGl0KClcblxuICByZXR1cm4gdmFsdWVcbn1cblxuLyoqIEB0eXBlIHtNYXB9ICovXG5mdW5jdGlvbiBtYXAobGluZSwgaW5kZXgsIGJsYW5rKSB7XG4gIGlmIChpbmRleCA9PT0gMCkge1xuICAgIHJldHVybiBsaW5lXG4gIH1cblxuICByZXR1cm4gKGJsYW5rID8gJycgOiAnICAgICcpICsgbGluZVxufVxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/mdast-util-gfm-footnote/lib/index.js\n");

/***/ })

};
;