/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/projects",{

/***/ "./components/ProejctItem.tsx":
/*!************************************!*\
  !*** ./components/ProejctItem.tsx ***!
  \************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Users_subhashjha_Documents_work_websites_jhasubhash_github_io_node_modules_next_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral */ \"./node_modules/next/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var polished__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! polished */ \"./node_modules/polished/dist/polished.esm.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\nvar _jsxFileName = \"/Users/subhashjha/Documents/work/websites/jhasubhash.github.io/components/ProejctItem.tsx\";\n\nfunction _templateObject3() {\n  var data = (0,_Users_subhashjha_Documents_work_websites_jhasubhash_github_io_node_modules_next_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__.default)([\"\\n    width: 20%;\\n    height: 100%;\\n    min-height: 50px;\\n\"]);\n\n  _templateObject3 = function _templateObject3() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _templateObject2() {\n  var data = (0,_Users_subhashjha_Documents_work_websites_jhasubhash_github_io_node_modules_next_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__.default)([\"\\n    padding-left: 2rem;\\n    display:flex;\\n    flex-direction:column;\\n    width: 100%;\\n\"]);\n\n  _templateObject2 = function _templateObject2() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _templateObject() {\n  var data = (0,_Users_subhashjha_Documents_work_websites_jhasubhash_github_io_node_modules_next_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__.default)([\"\\n    padding: 15px;\\n    border-radius: 10px;\\n    box-shadow: 0 4px 8px 0 \", \";\\n    display:flex;\\n    justify-content:space-between;\\n    transition: 0.2s box-shadow;\\n    cursor: pointer;\\n    &:hover {\\n        box-shadow: 0 4px 8px 0 \", \";\\n    }\\n\"]);\n\n  _templateObject = function _templateObject() {\n    return data;\n  };\n\n  return data;\n}\n\n\n\nvar ProjectCard = styled_components__WEBPACK_IMPORTED_MODULE_2__.default.a(_templateObject(), function (_ref) {\n  var theme = _ref.theme;\n  return (0,polished__WEBPACK_IMPORTED_MODULE_3__.darken)(0.70, theme.text);\n}, function (_ref2) {\n  var theme = _ref2.theme;\n  return (0,polished__WEBPACK_IMPORTED_MODULE_3__.darken)(0.60, theme.text);\n});\n_c = ProjectCard;\nvar ProjectCardBody = styled_components__WEBPACK_IMPORTED_MODULE_2__.default.div(_templateObject2());\n_c2 = ProjectCardBody;\nvar ProjectImage = styled_components__WEBPACK_IMPORTED_MODULE_2__.default.img(_templateObject3());\n_c3 = ProjectImage;\n\nfunction ProjectItem(_ref3) {\n  var project = _ref3.project;\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ProjectCard, {\n    href: project.frontMatter.web_url,\n    target: \"__blank\",\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ProjectImage, {\n      src: project.frontMatter.cover_image,\n      alt: \" \"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 34,\n      columnNumber: 9\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ProjectCardBody, {\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n        children: project.frontMatter.title\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 36,\n        columnNumber: 9\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n        style: {\n          color: 'grey'\n        },\n        children: project.frontMatter.excerpt\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 37,\n        columnNumber: 9\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 35,\n      columnNumber: 9\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 33,\n    columnNumber: 12\n  }, this);\n}\n\n_c4 = ProjectItem;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ProjectItem);\n\nvar _c, _c2, _c3, _c4;\n\n$RefreshReg$(_c, \"ProjectCard\");\n$RefreshReg$(_c2, \"ProjectCardBody\");\n$RefreshReg$(_c3, \"ProjectImage\");\n$RefreshReg$(_c4, \"ProjectItem\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Qcm9lamN0SXRlbS50c3g/OWEzYyJdLCJuYW1lcyI6WyJQcm9qZWN0Q2FyZCIsInN0eWxlZCIsInRoZW1lIiwiZGFya2VuIiwidGV4dCIsIlByb2plY3RDYXJkQm9keSIsIlByb2plY3RJbWFnZSIsIlByb2plY3RJdGVtIiwicHJvamVjdCIsImZyb250TWF0dGVyIiwid2ViX3VybCIsImNvdmVyX2ltYWdlIiwidGl0bGUiLCJjb2xvciIsImV4Y2VycHQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0E7QUFDQTtBQUVBLElBQU1BLFdBQVcsR0FBR0Msd0RBQUgsb0JBR2E7QUFBQSxNQUFHQyxLQUFILFFBQUdBLEtBQUg7QUFBQSxTQUFlQyxnREFBTSxDQUFDLElBQUQsRUFBT0QsS0FBSyxDQUFDRSxJQUFiLENBQXJCO0FBQUEsQ0FIYixFQVNpQjtBQUFBLE1BQUdGLEtBQUgsU0FBR0EsS0FBSDtBQUFBLFNBQWVDLGdEQUFNLENBQUMsSUFBRCxFQUFPRCxLQUFLLENBQUNFLElBQWIsQ0FBckI7QUFBQSxDQVRqQixDQUFqQjtLQUFNSixXO0FBYU4sSUFBTUssZUFBZSxHQUFHSiwwREFBSCxvQkFBckI7TUFBTUksZTtBQU9OLElBQU1DLFlBQVksR0FBR0wsMERBQUgsb0JBQWxCO01BQU1LLFk7O0FBT04sU0FBU0MsV0FBVCxRQUFnQztBQUFBLE1BQVZDLE9BQVUsU0FBVkEsT0FBVTtBQUM1QixzQkFBTyw4REFBQyxXQUFEO0FBQWEsUUFBSSxFQUFFQSxPQUFPLENBQUNDLFdBQVIsQ0FBb0JDLE9BQXZDO0FBQWdELFVBQU0sRUFBQyxTQUF2RDtBQUFBLDRCQUNILDhEQUFDLFlBQUQ7QUFBYyxTQUFHLEVBQUVGLE9BQU8sQ0FBQ0MsV0FBUixDQUFvQkUsV0FBdkM7QUFBb0QsU0FBRyxFQUFDO0FBQXhEO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFERyxlQUVILDhEQUFDLGVBQUQ7QUFBQSw4QkFDQTtBQUFBLGtCQUFLSCxPQUFPLENBQUNDLFdBQVIsQ0FBb0JHO0FBQXpCO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FEQSxlQUVBO0FBQUcsYUFBSyxFQUFFO0FBQUNDLGVBQUssRUFBQztBQUFQLFNBQVY7QUFBQSxrQkFBMkJMLE9BQU8sQ0FBQ0MsV0FBUixDQUFvQks7QUFBL0M7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUZBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUZHO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQUFQO0FBYUg7O01BZFFQLFc7QUFnQlQsK0RBQWVBLFdBQWYiLCJmaWxlIjoiLi9jb21wb25lbnRzL1Byb2VqY3RJdGVtLnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcbmltcG9ydCBzdHlsZWQgZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCJcbmltcG9ydCB7IGxpZ2h0ZW4sIGRhcmtlbiB9IGZyb20gJ3BvbGlzaGVkJ1xuXG5jb25zdCBQcm9qZWN0Q2FyZCA9IHN0eWxlZC5hYFxuICAgIHBhZGRpbmc6IDE1cHg7XG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICBib3gtc2hhZG93OiAwIDRweCA4cHggMCAkeyh7IHRoZW1lIH0pID0+IGRhcmtlbigwLjcwLCB0aGVtZS50ZXh0KX07XG4gICAgZGlzcGxheTpmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDpzcGFjZS1iZXR3ZWVuO1xuICAgIHRyYW5zaXRpb246IDAuMnMgYm94LXNoYWRvdztcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgJjpob3ZlciB7XG4gICAgICAgIGJveC1zaGFkb3c6IDAgNHB4IDhweCAwICR7KHsgdGhlbWUgfSkgPT4gZGFya2VuKDAuNjAsIHRoZW1lLnRleHQpfTtcbiAgICB9XG5gO1xuXG5jb25zdCBQcm9qZWN0Q2FyZEJvZHkgPSBzdHlsZWQuZGl2YFxuICAgIHBhZGRpbmctbGVmdDogMnJlbTtcbiAgICBkaXNwbGF5OmZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246Y29sdW1uO1xuICAgIHdpZHRoOiAxMDAlO1xuYDtcblxuY29uc3QgUHJvamVjdEltYWdlID0gc3R5bGVkLmltZ2BcbiAgICB3aWR0aDogMjAlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBtaW4taGVpZ2h0OiA1MHB4O1xuYDtcblxuXG5mdW5jdGlvbiBQcm9qZWN0SXRlbSh7cHJvamVjdH0pIHtcbiAgICByZXR1cm4gPFByb2plY3RDYXJkIGhyZWY9e3Byb2plY3QuZnJvbnRNYXR0ZXIud2ViX3VybH0gdGFyZ2V0PVwiX19ibGFua1wiPlxuICAgICAgICA8UHJvamVjdEltYWdlIHNyYz17cHJvamVjdC5mcm9udE1hdHRlci5jb3Zlcl9pbWFnZX0gYWx0PVwiIFwiLz5cbiAgICAgICAgPFByb2plY3RDYXJkQm9keT5cbiAgICAgICAgPGgzPntwcm9qZWN0LmZyb250TWF0dGVyLnRpdGxlfTwvaDM+XG4gICAgICAgIDxwIHN0eWxlPXt7Y29sb3I6J2dyZXknfX0+e3Byb2plY3QuZnJvbnRNYXR0ZXIuZXhjZXJwdH08L3A+XG4gICAgICAgIHsvKiogXG4gICAgICAgIDxkaXYgc3R5bGU9e3tkaXNwbGF5OidmbGV4JywganVzdGlmeUNvbnRlbnQ6J3NwYWNlLWJldHdlZW4nfX0+XG4gICAgICAgIDxhIGNsYXNzTmFtZT1cImJ0blwiIHN0eWxlPXt7Ym9yZGVyUmFkaXVzOiAnNXB4J319IGhyZWY9e3Byb2plY3QuZnJvbnRNYXR0ZXIud2ViX3VybH0gdGFyZ2V0PVwiX2JsYW5rXCI+PGNvZGU+Q2hlY2sgaXQgb3V0PC9jb2RlPjwvYT5cbiAgICAgICAgPGEgY2xhc3NOYW1lPVwiYnRuXCIgc3R5bGU9e3tib3JkZXJSYWRpdXM6ICc1cHgnfX0gaHJlZj17cHJvamVjdC5mcm9udE1hdHRlci5jb2RlX3VybH0gdGFyZ2V0PVwiX2JsYW5rXCI+PGNvZGU+c291cmNlX2NvZGU8L2NvZGU+PC9hPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgKi99XG4gICAgICAgIDwvUHJvamVjdENhcmRCb2R5PlxuICAgICAgICA8L1Byb2plY3RDYXJkPlxufVxuXG5leHBvcnQgZGVmYXVsdCBQcm9qZWN0SXRlbTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/ProejctItem.tsx\n");

/***/ })

});