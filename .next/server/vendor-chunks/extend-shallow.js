"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/extend-shallow";
exports.ids = ["vendor-chunks/extend-shallow"];
exports.modules = {

/***/ "(action-browser)/./node_modules/extend-shallow/index.js":
/*!**********************************************!*\
  !*** ./node_modules/extend-shallow/index.js ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\nvar isObject = __webpack_require__(/*! is-extendable */ \"(action-browser)/./node_modules/is-extendable/index.js\");\nmodule.exports = function extend(o /*, objects*/ ) {\n    if (!isObject(o)) {\n        o = {};\n    }\n    var len = arguments.length;\n    for(var i = 1; i < len; i++){\n        var obj = arguments[i];\n        if (isObject(obj)) {\n            assign(o, obj);\n        }\n    }\n    return o;\n};\nfunction assign(a, b) {\n    for(var key in b){\n        if (hasOwn(b, key)) {\n            a[key] = b[key];\n        }\n    }\n}\n/**\n * Returns true if the given `key` is an own property of `obj`.\n */ function hasOwn(obj, key) {\n    return Object.prototype.hasOwnProperty.call(obj, key);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFjdGlvbi1icm93c2VyKS8uL25vZGVfbW9kdWxlcy9leHRlbmQtc2hhbGxvdy9pbmRleC5qcyIsIm1hcHBpbmdzIjoiQUFBQTtBQUVBLElBQUlBLFdBQVdDLG1CQUFPQSxDQUFDO0FBRXZCQyxPQUFPQyxPQUFPLEdBQUcsU0FBU0MsT0FBT0MsRUFBQyxXQUFXLEdBQVg7SUFDaEMsSUFBSSxDQUFDTCxTQUFTSyxJQUFJO1FBQUVBLElBQUksQ0FBQztJQUFHO0lBRTVCLElBQUlDLE1BQU1DLFVBQVVDLE1BQU07SUFDMUIsSUFBSyxJQUFJQyxJQUFJLEdBQUdBLElBQUlILEtBQUtHLElBQUs7UUFDNUIsSUFBSUMsTUFBTUgsU0FBUyxDQUFDRSxFQUFFO1FBRXRCLElBQUlULFNBQVNVLE1BQU07WUFDakJDLE9BQU9OLEdBQUdLO1FBQ1o7SUFDRjtJQUNBLE9BQU9MO0FBQ1Q7QUFFQSxTQUFTTSxPQUFPQyxDQUFDLEVBQUVDLENBQUM7SUFDbEIsSUFBSyxJQUFJQyxPQUFPRCxFQUFHO1FBQ2pCLElBQUlFLE9BQU9GLEdBQUdDLE1BQU07WUFDbEJGLENBQUMsQ0FBQ0UsSUFBSSxHQUFHRCxDQUFDLENBQUNDLElBQUk7UUFDakI7SUFDRjtBQUNGO0FBRUE7O0NBRUMsR0FFRCxTQUFTQyxPQUFPTCxHQUFHLEVBQUVJLEdBQUc7SUFDdEIsT0FBT0UsT0FBT0MsU0FBUyxDQUFDQyxjQUFjLENBQUNDLElBQUksQ0FBQ1QsS0FBS0k7QUFDbkQiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90aGVoYXNobWFwLmdpdGh1Yi5pby8uL25vZGVfbW9kdWxlcy9leHRlbmQtc2hhbGxvdy9pbmRleC5qcz81Y2RjIl0sInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxudmFyIGlzT2JqZWN0ID0gcmVxdWlyZSgnaXMtZXh0ZW5kYWJsZScpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGV4dGVuZChvLyosIG9iamVjdHMqLykge1xuICBpZiAoIWlzT2JqZWN0KG8pKSB7IG8gPSB7fTsgfVxuXG4gIHZhciBsZW4gPSBhcmd1bWVudHMubGVuZ3RoO1xuICBmb3IgKHZhciBpID0gMTsgaSA8IGxlbjsgaSsrKSB7XG4gICAgdmFyIG9iaiA9IGFyZ3VtZW50c1tpXTtcblxuICAgIGlmIChpc09iamVjdChvYmopKSB7XG4gICAgICBhc3NpZ24obywgb2JqKTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIG87XG59O1xuXG5mdW5jdGlvbiBhc3NpZ24oYSwgYikge1xuICBmb3IgKHZhciBrZXkgaW4gYikge1xuICAgIGlmIChoYXNPd24oYiwga2V5KSkge1xuICAgICAgYVtrZXldID0gYltrZXldO1xuICAgIH1cbiAgfVxufVxuXG4vKipcbiAqIFJldHVybnMgdHJ1ZSBpZiB0aGUgZ2l2ZW4gYGtleWAgaXMgYW4gb3duIHByb3BlcnR5IG9mIGBvYmpgLlxuICovXG5cbmZ1bmN0aW9uIGhhc093bihvYmosIGtleSkge1xuICByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwga2V5KTtcbn1cbiJdLCJuYW1lcyI6WyJpc09iamVjdCIsInJlcXVpcmUiLCJtb2R1bGUiLCJleHBvcnRzIiwiZXh0ZW5kIiwibyIsImxlbiIsImFyZ3VtZW50cyIsImxlbmd0aCIsImkiLCJvYmoiLCJhc3NpZ24iLCJhIiwiYiIsImtleSIsImhhc093biIsIk9iamVjdCIsInByb3RvdHlwZSIsImhhc093blByb3BlcnR5IiwiY2FsbCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(action-browser)/./node_modules/extend-shallow/index.js\n");

/***/ })

};
;