"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/quick-lru";
exports.ids = ["vendor-chunks/quick-lru"];
exports.modules = {

/***/ "(ssr)/./node_modules/quick-lru/index.js":
/*!*****************************************!*\
  !*** ./node_modules/quick-lru/index.js ***!
  \*****************************************/
/***/ ((module) => {

eval("\n\nclass QuickLRU {\n\tconstructor(options = {}) {\n\t\tif (!(options.maxSize && options.maxSize > 0)) {\n\t\t\tthrow new TypeError('`maxSize` must be a number greater than 0');\n\t\t}\n\n\t\tthis.maxSize = options.maxSize;\n\t\tthis.onEviction = options.onEviction;\n\t\tthis.cache = new Map();\n\t\tthis.oldCache = new Map();\n\t\tthis._size = 0;\n\t}\n\n\t_set(key, value) {\n\t\tthis.cache.set(key, value);\n\t\tthis._size++;\n\n\t\tif (this._size >= this.maxSize) {\n\t\t\tthis._size = 0;\n\n\t\t\tif (typeof this.onEviction === 'function') {\n\t\t\t\tfor (const [key, value] of this.oldCache.entries()) {\n\t\t\t\t\tthis.onEviction(key, value);\n\t\t\t\t}\n\t\t\t}\n\n\t\t\tthis.oldCache = this.cache;\n\t\t\tthis.cache = new Map();\n\t\t}\n\t}\n\n\tget(key) {\n\t\tif (this.cache.has(key)) {\n\t\t\treturn this.cache.get(key);\n\t\t}\n\n\t\tif (this.oldCache.has(key)) {\n\t\t\tconst value = this.oldCache.get(key);\n\t\t\tthis.oldCache.delete(key);\n\t\t\tthis._set(key, value);\n\t\t\treturn value;\n\t\t}\n\t}\n\n\tset(key, value) {\n\t\tif (this.cache.has(key)) {\n\t\t\tthis.cache.set(key, value);\n\t\t} else {\n\t\t\tthis._set(key, value);\n\t\t}\n\n\t\treturn this;\n\t}\n\n\thas(key) {\n\t\treturn this.cache.has(key) || this.oldCache.has(key);\n\t}\n\n\tpeek(key) {\n\t\tif (this.cache.has(key)) {\n\t\t\treturn this.cache.get(key);\n\t\t}\n\n\t\tif (this.oldCache.has(key)) {\n\t\t\treturn this.oldCache.get(key);\n\t\t}\n\t}\n\n\tdelete(key) {\n\t\tconst deleted = this.cache.delete(key);\n\t\tif (deleted) {\n\t\t\tthis._size--;\n\t\t}\n\n\t\treturn this.oldCache.delete(key) || deleted;\n\t}\n\n\tclear() {\n\t\tthis.cache.clear();\n\t\tthis.oldCache.clear();\n\t\tthis._size = 0;\n\t}\n\n\t* keys() {\n\t\tfor (const [key] of this) {\n\t\t\tyield key;\n\t\t}\n\t}\n\n\t* values() {\n\t\tfor (const [, value] of this) {\n\t\t\tyield value;\n\t\t}\n\t}\n\n\t* [Symbol.iterator]() {\n\t\tfor (const item of this.cache) {\n\t\t\tyield item;\n\t\t}\n\n\t\tfor (const item of this.oldCache) {\n\t\t\tconst [key] = item;\n\t\t\tif (!this.cache.has(key)) {\n\t\t\t\tyield item;\n\t\t\t}\n\t\t}\n\t}\n\n\tget size() {\n\t\tlet oldCacheSize = 0;\n\t\tfor (const key of this.oldCache.keys()) {\n\t\t\tif (!this.cache.has(key)) {\n\t\t\t\toldCacheSize++;\n\t\t\t}\n\t\t}\n\n\t\treturn Math.min(this._size + oldCacheSize, this.maxSize);\n\t}\n}\n\nmodule.exports = QuickLRU;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvcXVpY2stbHJ1L2luZGV4LmpzIiwibWFwcGluZ3MiOiJBQUFhOztBQUViO0FBQ0EseUJBQXlCO0FBQ3pCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcG9ydGZvbGlvLy4vbm9kZV9tb2R1bGVzL3F1aWNrLWxydS9pbmRleC5qcz9hZTI2Il0sInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY2xhc3MgUXVpY2tMUlUge1xuXHRjb25zdHJ1Y3RvcihvcHRpb25zID0ge30pIHtcblx0XHRpZiAoIShvcHRpb25zLm1heFNpemUgJiYgb3B0aW9ucy5tYXhTaXplID4gMCkpIHtcblx0XHRcdHRocm93IG5ldyBUeXBlRXJyb3IoJ2BtYXhTaXplYCBtdXN0IGJlIGEgbnVtYmVyIGdyZWF0ZXIgdGhhbiAwJyk7XG5cdFx0fVxuXG5cdFx0dGhpcy5tYXhTaXplID0gb3B0aW9ucy5tYXhTaXplO1xuXHRcdHRoaXMub25FdmljdGlvbiA9IG9wdGlvbnMub25FdmljdGlvbjtcblx0XHR0aGlzLmNhY2hlID0gbmV3IE1hcCgpO1xuXHRcdHRoaXMub2xkQ2FjaGUgPSBuZXcgTWFwKCk7XG5cdFx0dGhpcy5fc2l6ZSA9IDA7XG5cdH1cblxuXHRfc2V0KGtleSwgdmFsdWUpIHtcblx0XHR0aGlzLmNhY2hlLnNldChrZXksIHZhbHVlKTtcblx0XHR0aGlzLl9zaXplKys7XG5cblx0XHRpZiAodGhpcy5fc2l6ZSA+PSB0aGlzLm1heFNpemUpIHtcblx0XHRcdHRoaXMuX3NpemUgPSAwO1xuXG5cdFx0XHRpZiAodHlwZW9mIHRoaXMub25FdmljdGlvbiA9PT0gJ2Z1bmN0aW9uJykge1xuXHRcdFx0XHRmb3IgKGNvbnN0IFtrZXksIHZhbHVlXSBvZiB0aGlzLm9sZENhY2hlLmVudHJpZXMoKSkge1xuXHRcdFx0XHRcdHRoaXMub25FdmljdGlvbihrZXksIHZhbHVlKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXG5cdFx0XHR0aGlzLm9sZENhY2hlID0gdGhpcy5jYWNoZTtcblx0XHRcdHRoaXMuY2FjaGUgPSBuZXcgTWFwKCk7XG5cdFx0fVxuXHR9XG5cblx0Z2V0KGtleSkge1xuXHRcdGlmICh0aGlzLmNhY2hlLmhhcyhrZXkpKSB7XG5cdFx0XHRyZXR1cm4gdGhpcy5jYWNoZS5nZXQoa2V5KTtcblx0XHR9XG5cblx0XHRpZiAodGhpcy5vbGRDYWNoZS5oYXMoa2V5KSkge1xuXHRcdFx0Y29uc3QgdmFsdWUgPSB0aGlzLm9sZENhY2hlLmdldChrZXkpO1xuXHRcdFx0dGhpcy5vbGRDYWNoZS5kZWxldGUoa2V5KTtcblx0XHRcdHRoaXMuX3NldChrZXksIHZhbHVlKTtcblx0XHRcdHJldHVybiB2YWx1ZTtcblx0XHR9XG5cdH1cblxuXHRzZXQoa2V5LCB2YWx1ZSkge1xuXHRcdGlmICh0aGlzLmNhY2hlLmhhcyhrZXkpKSB7XG5cdFx0XHR0aGlzLmNhY2hlLnNldChrZXksIHZhbHVlKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0dGhpcy5fc2V0KGtleSwgdmFsdWUpO1xuXHRcdH1cblxuXHRcdHJldHVybiB0aGlzO1xuXHR9XG5cblx0aGFzKGtleSkge1xuXHRcdHJldHVybiB0aGlzLmNhY2hlLmhhcyhrZXkpIHx8IHRoaXMub2xkQ2FjaGUuaGFzKGtleSk7XG5cdH1cblxuXHRwZWVrKGtleSkge1xuXHRcdGlmICh0aGlzLmNhY2hlLmhhcyhrZXkpKSB7XG5cdFx0XHRyZXR1cm4gdGhpcy5jYWNoZS5nZXQoa2V5KTtcblx0XHR9XG5cblx0XHRpZiAodGhpcy5vbGRDYWNoZS5oYXMoa2V5KSkge1xuXHRcdFx0cmV0dXJuIHRoaXMub2xkQ2FjaGUuZ2V0KGtleSk7XG5cdFx0fVxuXHR9XG5cblx0ZGVsZXRlKGtleSkge1xuXHRcdGNvbnN0IGRlbGV0ZWQgPSB0aGlzLmNhY2hlLmRlbGV0ZShrZXkpO1xuXHRcdGlmIChkZWxldGVkKSB7XG5cdFx0XHR0aGlzLl9zaXplLS07XG5cdFx0fVxuXG5cdFx0cmV0dXJuIHRoaXMub2xkQ2FjaGUuZGVsZXRlKGtleSkgfHwgZGVsZXRlZDtcblx0fVxuXG5cdGNsZWFyKCkge1xuXHRcdHRoaXMuY2FjaGUuY2xlYXIoKTtcblx0XHR0aGlzLm9sZENhY2hlLmNsZWFyKCk7XG5cdFx0dGhpcy5fc2l6ZSA9IDA7XG5cdH1cblxuXHQqIGtleXMoKSB7XG5cdFx0Zm9yIChjb25zdCBba2V5XSBvZiB0aGlzKSB7XG5cdFx0XHR5aWVsZCBrZXk7XG5cdFx0fVxuXHR9XG5cblx0KiB2YWx1ZXMoKSB7XG5cdFx0Zm9yIChjb25zdCBbLCB2YWx1ZV0gb2YgdGhpcykge1xuXHRcdFx0eWllbGQgdmFsdWU7XG5cdFx0fVxuXHR9XG5cblx0KiBbU3ltYm9sLml0ZXJhdG9yXSgpIHtcblx0XHRmb3IgKGNvbnN0IGl0ZW0gb2YgdGhpcy5jYWNoZSkge1xuXHRcdFx0eWllbGQgaXRlbTtcblx0XHR9XG5cblx0XHRmb3IgKGNvbnN0IGl0ZW0gb2YgdGhpcy5vbGRDYWNoZSkge1xuXHRcdFx0Y29uc3QgW2tleV0gPSBpdGVtO1xuXHRcdFx0aWYgKCF0aGlzLmNhY2hlLmhhcyhrZXkpKSB7XG5cdFx0XHRcdHlpZWxkIGl0ZW07XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cblx0Z2V0IHNpemUoKSB7XG5cdFx0bGV0IG9sZENhY2hlU2l6ZSA9IDA7XG5cdFx0Zm9yIChjb25zdCBrZXkgb2YgdGhpcy5vbGRDYWNoZS5rZXlzKCkpIHtcblx0XHRcdGlmICghdGhpcy5jYWNoZS5oYXMoa2V5KSkge1xuXHRcdFx0XHRvbGRDYWNoZVNpemUrKztcblx0XHRcdH1cblx0XHR9XG5cblx0XHRyZXR1cm4gTWF0aC5taW4odGhpcy5fc2l6ZSArIG9sZENhY2hlU2l6ZSwgdGhpcy5tYXhTaXplKTtcblx0fVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFF1aWNrTFJVO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/quick-lru/index.js\n");

/***/ })

};
;