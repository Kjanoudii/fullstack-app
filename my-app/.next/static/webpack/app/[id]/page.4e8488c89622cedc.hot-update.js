"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/[id]/page",{

/***/ "(app-pages-browser)/./src/app/[id]/page.tsx":
/*!*******************************!*\
  !*** ./src/app/[id]/page.tsx ***!
  \*******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ \"(app-pages-browser)/./node_modules/axios/lib/axios.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\nconst Page = (param)=>{\n    let { params } = param;\n    _s();\n    const [post, setPost] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({});\n    const { id } = params;\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        axios__WEBPACK_IMPORTED_MODULE_2__[\"default\"].get(\"http://localhost:3001/posts/byId/\".concat(id)).then((res)=>{\n            set(res.data);\n        });\n    }, []);\n    console.log(id);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"text-3xl\",\n        children: params.id\n    }, void 0, false, {\n        fileName: \"C:\\\\VSCodeProjects\\\\NEXTJS-PROJECTS\\\\fullstack-app\\\\my-app\\\\src\\\\app\\\\[id]\\\\page.tsx\",\n        lineNumber: 25,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Page, \"4GS+YXYxyueLsdYC6PKVvqC0Cl4=\");\n_c = Page;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Page);\nvar _c;\n$RefreshReg$(_c, \"Page\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvW2lkXS9wYWdlLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBRXlDO0FBQ2hCO0FBTXpCLE1BQU1HLE9BQU87UUFBQyxFQUFDQyxNQUFNLEVBQVc7O0lBRWhDLE1BQU0sQ0FBQ0MsTUFBTUMsUUFBUSxHQUFHTCwrQ0FBUUEsQ0FBQyxDQUFDO0lBR2xDLE1BQU0sRUFBQ00sRUFBRSxFQUFDLEdBQUdIO0lBQ1pKLGdEQUFTQSxDQUFDO1FBQ1JFLDZDQUFLQSxDQUFDTSxHQUFHLENBQUMsb0NBQXVDLE9BQUhELEtBQU1FLElBQUksQ0FBQyxDQUFDQztZQUN4REMsSUFBSUQsSUFBSUUsSUFBSTtRQUNkO0lBQ0YsR0FBRyxFQUFFO0lBRUZDLFFBQVFDLEdBQUcsQ0FBQ1A7SUFFZCxxQkFDRSw4REFBQ1E7UUFBSUMsV0FBVTtrQkFBWVosT0FBT0csRUFBRTs7Ozs7O0FBRXhDO0dBakJNSjtLQUFBQTtBQW1CTiwrREFBZUEsSUFBSUEsRUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvYXBwL1tpZF0vcGFnZS50c3g/ZmExNyJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIGNsaWVudCdcclxuXHJcbmltcG9ydCB7dXNlRWZmZWN0LCB1c2VTdGF0ZX0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcydcclxudHlwZSBQYWdlUHJvcHMgPSB7XHJcbiAgcGFyYW1zOiB7XHJcbiAgICBpZDogYW55O1xyXG4gIH07XHJcbn07XHJcbmNvbnN0IFBhZ2UgPSAoe3BhcmFtc306UGFnZVByb3BzKSA9PiB7XHJcblxyXG5jb25zdCBbcG9zdCwgc2V0UG9zdF0gPSB1c2VTdGF0ZSh7fSlcclxuXHJcblxyXG5jb25zdCB7aWR9ID0gcGFyYW1zXHJcbiB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICBheGlvcy5nZXQoYGh0dHA6Ly9sb2NhbGhvc3Q6MzAwMS9wb3N0cy9ieUlkLyR7aWR9YCkudGhlbigocmVzKSA9PiB7XHJcbiAgICAgc2V0KHJlcy5kYXRhKVxyXG4gICB9KTtcclxuIH0sIFtdKTtcclxuICBcclxuICAgIGNvbnNvbGUubG9nKGlkKVxyXG4gICBcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9J3RleHQtM3hsJz57cGFyYW1zLmlkfTwvZGl2PlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUGFnZSJdLCJuYW1lcyI6WyJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsImF4aW9zIiwiUGFnZSIsInBhcmFtcyIsInBvc3QiLCJzZXRQb3N0IiwiaWQiLCJnZXQiLCJ0aGVuIiwicmVzIiwic2V0IiwiZGF0YSIsImNvbnNvbGUiLCJsb2ciLCJkaXYiLCJjbGFzc05hbWUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/[id]/page.tsx\n"));

/***/ })

});