"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/is-whitespace";
exports.ids = ["vendor-chunks/is-whitespace"];
exports.modules = {

/***/ "(action-browser)/./node_modules/is-whitespace/index.js":
/*!*********************************************!*\
  !*** ./node_modules/is-whitespace/index.js ***!
  \*********************************************/
/***/ ((module) => {

eval("/*!\n * is-whitespace <https://github.com/jonschlinkert/is-whitespace>\n *\n * Copyright (c) 2014-2015, Jon Schlinkert.\n * Licensed under the MIT License.\n */ \nvar cache;\nmodule.exports = function isWhitespace(str) {\n    return typeof str === \"string\" && regex().test(str);\n};\nfunction regex() {\n    // ensure that runtime compilation only happens once\n    return cache || (cache = new RegExp('^[\\\\s\t\\n\\v\\f\\r \\xa0 ᠎             　\\u2028\\u2029\\uFEFF\"]+$'));\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFjdGlvbi1icm93c2VyKS8uL25vZGVfbW9kdWxlcy9pcy13aGl0ZXNwYWNlL2luZGV4LmpzIiwibWFwcGluZ3MiOiJBQUFBOzs7OztDQUtDLEdBRUQ7QUFFQSxJQUFJQTtBQUVKQyxPQUFPQyxPQUFPLEdBQUcsU0FBU0MsYUFBYUMsR0FBRztJQUN4QyxPQUFPLE9BQVFBLFFBQVEsWUFBYUMsUUFBUUMsSUFBSSxDQUFDRjtBQUNuRDtBQUVBLFNBQVNDO0lBQ1Asb0RBQW9EO0lBQ3BELE9BQU9MLFNBQVVBLENBQUFBLFFBQVEsSUFBSU8sT0FBTyw0REFBeUo7QUFDL0wiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90aGVoYXNobWFwLmdpdGh1Yi5pby8uL25vZGVfbW9kdWxlcy9pcy13aGl0ZXNwYWNlL2luZGV4LmpzPzlhMjMiXSwic291cmNlc0NvbnRlbnQiOlsiLyohXG4gKiBpcy13aGl0ZXNwYWNlIDxodHRwczovL2dpdGh1Yi5jb20vam9uc2NobGlua2VydC9pcy13aGl0ZXNwYWNlPlxuICpcbiAqIENvcHlyaWdodCAoYykgMjAxNC0yMDE1LCBKb24gU2NobGlua2VydC5cbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS5cbiAqL1xuXG4ndXNlIHN0cmljdCc7XG5cbnZhciBjYWNoZTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBpc1doaXRlc3BhY2Uoc3RyKSB7XG4gIHJldHVybiAodHlwZW9mIHN0ciA9PT0gJ3N0cmluZycpICYmIHJlZ2V4KCkudGVzdChzdHIpO1xufTtcblxuZnVuY3Rpb24gcmVnZXgoKSB7XG4gIC8vIGVuc3VyZSB0aGF0IHJ1bnRpbWUgY29tcGlsYXRpb24gb25seSBoYXBwZW5zIG9uY2VcbiAgcmV0dXJuIGNhY2hlIHx8IChjYWNoZSA9IG5ldyBSZWdFeHAoJ15bXFxcXHNcXHgwOVxceDBBXFx4MEJcXHgwQ1xceDBEXFx4MjBcXHhBMFxcdTE2ODBcXHUxODBFXFx1MjAwMFxcdTIwMDFcXHUyMDAyXFx1MjAwM1xcdTIwMDRcXHUyMDA1XFx1MjAwNlxcdTIwMDdcXHUyMDA4XFx1MjAwOVxcdTIwMEFcXHUyMDJGXFx1MjA1RlxcdTMwMDBcXHUyMDI4XFx1MjAyOVxcdUZFRkZcIl0rJCcpKTtcbn1cbiJdLCJuYW1lcyI6WyJjYWNoZSIsIm1vZHVsZSIsImV4cG9ydHMiLCJpc1doaXRlc3BhY2UiLCJzdHIiLCJyZWdleCIsInRlc3QiLCJSZWdFeHAiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(action-browser)/./node_modules/is-whitespace/index.js\n");

/***/ })

};
;