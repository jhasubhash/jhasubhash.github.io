/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./config/themeConfig.ts":
/*!*******************************!*\
  !*** ./config/themeConfig.ts ***!
  \*******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"lightTheme\": function() { return /* binding */ lightTheme; },\n/* harmony export */   \"darkTheme\": function() { return /* binding */ darkTheme; },\n/* harmony export */   \"GlobalStyles\": function() { return /* binding */ GlobalStyles; }\n/* harmony export */ });\n/* harmony import */ var _Users_subhashjha_Documents_work_websites_jhasubhash_github_io_node_modules_next_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral */ \"./node_modules/next/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var polished__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! polished */ \"./node_modules/polished/dist/polished.esm.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\nfunction _templateObject() {\n  var data = (0,_Users_subhashjha_Documents_work_websites_jhasubhash_github_io_node_modules_next_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__.default)([\"\\n  body {\\n    background: \", \";\\n    color: \", \";\\n    font-family: Tahoma, Helvetica, Arial, Roboto, sans-serif;\\n    transition: all 0.50s linear;\\n  }\\n\\n  a {\\n      color: \", \";\\n      cursor: pointer;\\n  }\\n\\n  .btn {\\n    color: \", \";\\n    background: \", \";\\n    border-color: \", \";\\n  }\\n\\n  .linkinactive{\\n    color: \", \";\\n  }\\n\\n  .avatar {\\n      width:auto;\\n      border-radius:50%;\\n  }\\n\\n\\n  .projectcard {\\n    padding: 15px;\\n    border-radius: 10px;\\n    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);\\n    display:flex;\\n    flex-direction:column;\\n    justify-content:space-between;\\n  }\\n\"]);\n\n  _templateObject = function _templateObject() {\n    return data;\n  };\n\n  return data;\n}\n\n\n\nvar lightTheme = {\n  body: '#FFF',\n  text: '#363537',\n  toggleBorder: '#FFF',\n  background: '#363537'\n};\nvar darkTheme = {\n  body: '#363537',\n  text: '#FAFAFA',\n  toggleBorder: '#6B8096',\n  background: '#999'\n};\nvar GlobalStyles = (0,styled_components__WEBPACK_IMPORTED_MODULE_1__.createGlobalStyle)(_templateObject(), function (_ref) {\n  var theme = _ref.theme;\n  return theme.body;\n}, function (_ref2) {\n  var theme = _ref2.theme;\n  return theme.text;\n}, function (_ref3) {\n  var theme = _ref3.theme;\n  return theme.text;\n}, function (_ref4) {\n  var theme = _ref4.theme;\n  return theme.text;\n}, function (_ref5) {\n  var theme = _ref5.theme;\n  return (0,polished__WEBPACK_IMPORTED_MODULE_2__.lighten)(0.10, theme.body);\n}, function (_ref6) {\n  var theme = _ref6.theme;\n  return theme.text;\n}, function (_ref7) {\n  var theme = _ref7.theme;\n  return (0,polished__WEBPACK_IMPORTED_MODULE_2__.darken)(0.40, theme.text);\n});\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29uZmlnL3RoZW1lQ29uZmlnLnRzP2Y0ZmUiXSwibmFtZXMiOlsibGlnaHRUaGVtZSIsImJvZHkiLCJ0ZXh0IiwidG9nZ2xlQm9yZGVyIiwiYmFja2dyb3VuZCIsImRhcmtUaGVtZSIsIkdsb2JhbFN0eWxlcyIsImNyZWF0ZUdsb2JhbFN0eWxlIiwidGhlbWUiLCJsaWdodGVuIiwiZGFya2VuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUVPLElBQU1BLFVBQVUsR0FBRztBQUN4QkMsTUFBSSxFQUFFLE1BRGtCO0FBRXhCQyxNQUFJLEVBQUUsU0FGa0I7QUFHeEJDLGNBQVksRUFBRSxNQUhVO0FBSXhCQyxZQUFVLEVBQUU7QUFKWSxDQUFuQjtBQU9BLElBQU1DLFNBQVMsR0FBRztBQUN2QkosTUFBSSxFQUFFLFNBRGlCO0FBRXZCQyxNQUFJLEVBQUUsU0FGaUI7QUFHdkJDLGNBQVksRUFBRSxTQUhTO0FBSXZCQyxZQUFVLEVBQUU7QUFKVyxDQUFsQjtBQVFBLElBQU1FLFlBQVksR0FBR0Msb0VBQUgsb0JBRVA7QUFBQSxNQUFHQyxLQUFILFFBQUdBLEtBQUg7QUFBQSxTQUFlQSxLQUFLLENBQUNQLElBQXJCO0FBQUEsQ0FGTyxFQUdaO0FBQUEsTUFBR08sS0FBSCxTQUFHQSxLQUFIO0FBQUEsU0FBZUEsS0FBSyxDQUFDTixJQUFyQjtBQUFBLENBSFksRUFTVjtBQUFBLE1BQUdNLEtBQUgsU0FBR0EsS0FBSDtBQUFBLFNBQWVBLEtBQUssQ0FBQ04sSUFBckI7QUFBQSxDQVRVLEVBY1o7QUFBQSxNQUFHTSxLQUFILFNBQUdBLEtBQUg7QUFBQSxTQUFlQSxLQUFLLENBQUNOLElBQXJCO0FBQUEsQ0FkWSxFQWVQO0FBQUEsTUFBR00sS0FBSCxTQUFHQSxLQUFIO0FBQUEsU0FBZUMsaURBQU8sQ0FBQyxJQUFELEVBQU9ELEtBQUssQ0FBQ1AsSUFBYixDQUF0QjtBQUFBLENBZk8sRUFnQkw7QUFBQSxNQUFHTyxLQUFILFNBQUdBLEtBQUg7QUFBQSxTQUFlQSxLQUFLLENBQUNOLElBQXJCO0FBQUEsQ0FoQkssRUFvQlo7QUFBQSxNQUFHTSxLQUFILFNBQUdBLEtBQUg7QUFBQSxTQUFlRSxnREFBTSxDQUFDLElBQUQsRUFBT0YsS0FBSyxDQUFDTixJQUFiLENBQXJCO0FBQUEsQ0FwQlksQ0FBbEIiLCJmaWxlIjoiLi9jb25maWcvdGhlbWVDb25maWcudHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjcmVhdGVHbG9iYWxTdHlsZX0gZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCJcbmltcG9ydCB7IGxpZ2h0ZW4sIGRhcmtlbiB9IGZyb20gJ3BvbGlzaGVkJ1xuXG5leHBvcnQgY29uc3QgbGlnaHRUaGVtZSA9IHtcbiAgYm9keTogJyNGRkYnLFxuICB0ZXh0OiAnIzM2MzUzNycsXG4gIHRvZ2dsZUJvcmRlcjogJyNGRkYnLFxuICBiYWNrZ3JvdW5kOiAnIzM2MzUzNycsXG59XG5cbmV4cG9ydCBjb25zdCBkYXJrVGhlbWUgPSB7XG4gIGJvZHk6ICcjMzYzNTM3JyxcbiAgdGV4dDogJyNGQUZBRkEnLFxuICB0b2dnbGVCb3JkZXI6ICcjNkI4MDk2JyxcbiAgYmFja2dyb3VuZDogJyM5OTknLFxufVxuXG5cbmV4cG9ydCBjb25zdCBHbG9iYWxTdHlsZXMgPSBjcmVhdGVHbG9iYWxTdHlsZWBcbiAgYm9keSB7XG4gICAgYmFja2dyb3VuZDogJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5ib2R5fTtcbiAgICBjb2xvcjogJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS50ZXh0fTtcbiAgICBmb250LWZhbWlseTogVGFob21hLCBIZWx2ZXRpY2EsIEFyaWFsLCBSb2JvdG8sIHNhbnMtc2VyaWY7XG4gICAgdHJhbnNpdGlvbjogYWxsIDAuNTBzIGxpbmVhcjtcbiAgfVxuXG4gIGEge1xuICAgICAgY29sb3I6ICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUudGV4dH07XG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gIH1cblxuICAuYnRuIHtcbiAgICBjb2xvcjogJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS50ZXh0fTtcbiAgICBiYWNrZ3JvdW5kOiAkeyh7IHRoZW1lIH0pID0+IGxpZ2h0ZW4oMC4xMCwgdGhlbWUuYm9keSl9O1xuICAgIGJvcmRlci1jb2xvcjogJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS50ZXh0fTtcbiAgfVxuXG4gIC5saW5raW5hY3RpdmV7XG4gICAgY29sb3I6ICR7KHsgdGhlbWUgfSkgPT4gZGFya2VuKDAuNDAsIHRoZW1lLnRleHQpfTtcbiAgfVxuXG4gIC5hdmF0YXIge1xuICAgICAgd2lkdGg6YXV0bztcbiAgICAgIGJvcmRlci1yYWRpdXM6NTAlO1xuICB9XG5cblxuICAucHJvamVjdGNhcmQge1xuICAgIHBhZGRpbmc6IDE1cHg7XG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICBib3gtc2hhZG93OiAwIDRweCA4cHggMCByZ2JhKDAsIDAsIDAsIDAuMik7XG4gICAgZGlzcGxheTpmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOmNvbHVtbjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6c3BhY2UtYmV0d2VlbjtcbiAgfVxuYCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./config/themeConfig.ts\n");

/***/ })

});