"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./src/app/globals.css":
/*!*****************************!*\
  !*** ./src/app/globals.css ***!
  \*****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (\"bac1a63e321e\");\nif (true) { module.hot.accept() }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvZ2xvYmFscy5jc3MiLCJtYXBwaW5ncyI6IjtBQUFBLCtEQUFlLGNBQWM7QUFDN0IsSUFBSSxJQUFVLElBQUksaUJBQWlCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9hcHAvZ2xvYmFscy5jc3M/OWU2MyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBcImJhYzFhNjNlMzIxZVwiXG5pZiAobW9kdWxlLmhvdCkgeyBtb2R1bGUuaG90LmFjY2VwdCgpIH1cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/globals.css\n"));

/***/ }),

/***/ "(app-pages-browser)/./src/components/NavBar.tsx":
/*!***********************************!*\
  !*** ./src/components/NavBar.tsx ***!
  \***********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"(app-pages-browser)/./node_modules/next/dist/api/link.js\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/navigation */ \"(app-pages-browser)/./node_modules/next/dist/api/navigation.js\");\n/* harmony import */ var _app_layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../app/layout */ \"(app-pages-browser)/./src/app/layout.tsx\");\n/* harmony import */ var _icons_icons8_administrator_male_24_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../icons/icons8-administrator-male-24.png */ \"(app-pages-browser)/./src/icons/icons8-administrator-male-24.png\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/image */ \"(app-pages-browser)/./node_modules/next/dist/api/image.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\nconst NavBar = ()=>{\n    _s();\n    const pathname = (0,next_navigation__WEBPACK_IMPORTED_MODULE_3__.usePathname)();\n    const { authState, setAuthState } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_app_layout__WEBPACK_IMPORTED_MODULE_4__.AuthContext);\n    console.log(authState);\n    console.log(\"nav bar authenticated?\", authState.status);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"flex gap-2 items-center justify-evenly mt-3  \",\n            children: [\n                authState.username && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex-1 ju text-gray-900 font-semibold\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_image__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                            src: _icons_icons8_administrator_male_24_png__WEBPACK_IMPORTED_MODULE_5__[\"default\"],\n                            alt: \"\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\VSCodeProjects\\\\NEXTJS-PROJECTS\\\\fullstack-app\\\\my-app\\\\src\\\\components\\\\NavBar.tsx\",\n                            lineNumber: 23,\n                            columnNumber: 13\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                            className: \"   text-center\",\n                            children: authState.username\n                        }, void 0, false, {\n                            fileName: \"C:\\\\VSCodeProjects\\\\NEXTJS-PROJECTS\\\\fullstack-app\\\\my-app\\\\src\\\\components\\\\NavBar.tsx\",\n                            lineNumber: 24,\n                            columnNumber: 13\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\VSCodeProjects\\\\NEXTJS-PROJECTS\\\\fullstack-app\\\\my-app\\\\src\\\\components\\\\NavBar.tsx\",\n                    lineNumber: 22,\n                    columnNumber: 11\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex gap-2 justify-center\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_link__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                            className: \"border border-gray-200 text-gray-900 bg-gray-100 transition duration-300 ease-in-out \\n        rounded-md py-3 flex justify-center w-36 hover:bg-gray-400 font-semibold\\n        hover:text-white \".concat(pathname == \"/\" ? \"bg-gray-400\" : \"\"),\n                            href: \"/\",\n                            children: \"HOME\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\VSCodeProjects\\\\NEXTJS-PROJECTS\\\\fullstack-app\\\\my-app\\\\src\\\\components\\\\NavBar.tsx\",\n                            lineNumber: 33,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_link__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                            className: \"border border-gray-200 text-gray-900 bg-gray-100 transition duration-300 ease-in-out \\n          rounded-md py-3 flex justify-center w-36 hover:bg-gray-400 font-semibold hover:text-white \".concat(pathname == \"/createpost\" ? \"bg-gray-400\" : \"\"),\n                            href: authState.status ? \"/createpost\" : \"login\",\n                            children: \"CREATE POST\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\VSCodeProjects\\\\NEXTJS-PROJECTS\\\\fullstack-app\\\\my-app\\\\src\\\\components\\\\NavBar.tsx\",\n                            lineNumber: 41,\n                            columnNumber: 11\n                        }, undefined),\n                        !authState.status && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_link__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                            className: \"border border-gray-200 text-gray-900 bg-gray-100 transition duration-300 ease-in-out \\n          rounded-md py-3 flex justify-center w-36 hover:bg-gray-400 font-semibold hover:text-white \".concat(pathname == \"/login\" ? \"bg-gray-400\" : \"\"),\n                            href: \"/login\",\n                            children: \"LOGIN\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\VSCodeProjects\\\\NEXTJS-PROJECTS\\\\fullstack-app\\\\my-app\\\\src\\\\components\\\\NavBar.tsx\",\n                            lineNumber: 51,\n                            columnNumber: 13\n                        }, undefined),\n                        !authState.status && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_link__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                            className: \"border border-gray-200 text-gray-900 bg-gray-100 transition duration-300 ease-in-out \\n          rounded-md py-3 flex justify-center w-36 hover:bg-gray-400 font-semibold hover:text-white \".concat(pathname == \"/registration\" ? \"bg-gray-400\" : \"\", \" \"),\n                            href: \"/registration\",\n                            children: \"REGISTER\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\VSCodeProjects\\\\NEXTJS-PROJECTS\\\\fullstack-app\\\\my-app\\\\src\\\\components\\\\NavBar.tsx\",\n                            lineNumber: 62,\n                            columnNumber: 13\n                        }, undefined),\n                        authState.status && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"border border-gray-200 text-gray-900 bg-gray-100 transition duration-300 ease-in-out \\n              rounded-md py-3 flex justify-center w-36 cursor-pointer hover:bg-gray-400 font-semibold hover:text-white \".concat(pathname == \"/login\" ? \"bg-gray-400\" : \"\"),\n                            onClick: ()=>{\n                                localStorage.removeItem(\"accessToken\");\n                                setAuthState({\n                                    username: \"\",\n                                    id: 0,\n                                    status: false\n                                });\n                            },\n                            children: \"LOGOUT\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\VSCodeProjects\\\\NEXTJS-PROJECTS\\\\fullstack-app\\\\my-app\\\\src\\\\components\\\\NavBar.tsx\",\n                            lineNumber: 73,\n                            columnNumber: 13\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\VSCodeProjects\\\\NEXTJS-PROJECTS\\\\fullstack-app\\\\my-app\\\\src\\\\components\\\\NavBar.tsx\",\n                    lineNumber: 32,\n                    columnNumber: 9\n                }, undefined),\n                authState.username && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex-1\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\VSCodeProjects\\\\NEXTJS-PROJECTS\\\\fullstack-app\\\\my-app\\\\src\\\\components\\\\NavBar.tsx\",\n                    lineNumber: 87,\n                    columnNumber: 32\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\VSCodeProjects\\\\NEXTJS-PROJECTS\\\\fullstack-app\\\\my-app\\\\src\\\\components\\\\NavBar.tsx\",\n            lineNumber: 20,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false);\n};\n_s(NavBar, \"GZbkjqvhJjR4Gx1dmVprfdUEffc=\", false, function() {\n    return [\n        next_navigation__WEBPACK_IMPORTED_MODULE_3__.usePathname\n    ];\n});\n_c = NavBar;\n/* harmony default export */ __webpack_exports__[\"default\"] = (NavBar);\nvar _c;\n$RefreshReg$(_c, \"NavBar\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL05hdkJhci50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFDMEI7QUFDRztBQUNpQjtBQUVGO0FBQ1Q7QUFDMEI7QUFDOUI7QUFDL0IsTUFBTU8sU0FBUzs7SUFDYixNQUFNQyxXQUFXTiw0REFBV0E7SUFFNUIsTUFBTSxFQUFFTyxTQUFTLEVBQUVDLFlBQVksRUFBRSxHQUFHTixpREFBVUEsQ0FBQ0Qsb0RBQVdBO0lBQzFEUSxRQUFRQyxHQUFHLENBQUNIO0lBRVpFLFFBQVFDLEdBQUcsQ0FBQywwQkFBMEJILFVBQVVJLE1BQU07SUFFdEQscUJBQ0U7a0JBQ0UsNEVBQUNDO1lBQUlDLFdBQVU7O2dCQUNaTixVQUFVTyxRQUFRLGtCQUNqQiw4REFBQ0Y7b0JBQUlDLFdBQVU7O3NDQUNiLDhEQUFDVCxrREFBS0E7NEJBQUNXLEtBQUtaLCtFQUFJQTs0QkFBRWEsS0FBSTs7Ozs7O3NDQUN0Qiw4REFBQ0M7NEJBQ0NKLFdBQVU7c0NBR1ROLFVBQVVPLFFBQVE7Ozs7Ozs7Ozs7Ozs4QkFJekIsOERBQUNGO29CQUFJQyxXQUFVOztzQ0FDYiw4REFBQ2QsaURBQUlBOzRCQUNIYyxXQUFXLHFNQUV5QyxPQUFyQ1AsWUFBWSxNQUFNLGdCQUFnQjs0QkFDakRZLE1BQU07c0NBQ1A7Ozs7OztzQ0FHRCw4REFBQ25CLGlEQUFJQTs0QkFDSGMsV0FBVyw4TEFHWixPQURDUCxZQUFZLGdCQUFnQixnQkFBZ0I7NEJBRTVDWSxNQUFNWCxVQUFVSSxNQUFNLEdBQUcsZ0JBQWdCO3NDQUMxQzs7Ozs7O3dCQUdBLENBQUNKLFVBQVVJLE1BQU0sa0JBQ2hCLDhEQUFDWixpREFBSUE7NEJBQ0hjLFdBQVcsOExBR2QsT0FEQ1AsWUFBWSxXQUFXLGdCQUFnQjs0QkFFckNZLE1BQU07c0NBQ1A7Ozs7Ozt3QkFJRixDQUFDWCxVQUFVSSxNQUFNLGtCQUNoQiw4REFBQ1osaURBQUlBOzRCQUNIYyxXQUFXLDhMQUdkLE9BRENQLFlBQVksa0JBQWtCLGdCQUFnQixJQUMvQzs0QkFDR1ksTUFBTTtzQ0FDUDs7Ozs7O3dCQUlGWCxVQUFVSSxNQUFNLGtCQUNmLDhEQUFDQzs0QkFDQ0MsV0FBVyxpTkFHVixPQURDUCxZQUFZLFdBQVcsZ0JBQWdCOzRCQUV6Q2EsU0FBUztnQ0FDUEMsYUFBYUMsVUFBVSxDQUFDO2dDQUN4QmIsYUFBYTtvQ0FBRU0sVUFBVTtvQ0FBSVEsSUFBSTtvQ0FBR1gsUUFBUTtnQ0FBTTs0QkFDcEQ7c0NBQ0Q7Ozs7Ozs7Ozs7OztnQkFLSkosVUFBVU8sUUFBUSxrQkFBSSw4REFBQ0Y7b0JBQUlDLFdBQVU7Ozs7Ozs7Ozs7Ozs7QUFJOUM7R0FqRk1SOztRQUNhTCx3REFBV0E7OztLQUR4Qks7QUFtRk4sK0RBQWVBLE1BQU1BLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvTmF2QmFyLnRzeD9kOWVhIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiO1xyXG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcclxuaW1wb3J0IHsgdXNlUGF0aG5hbWUgfSBmcm9tIFwibmV4dC9uYXZpZ2F0aW9uXCI7XHJcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IEF1dGhDb250ZXh0IH0gZnJvbSBcIi4uL2FwcC9sYXlvdXRcIjtcclxuaW1wb3J0IHsgdXNlQ29udGV4dCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgaWNvbiBmcm9tIFwiLi4vaWNvbnMvaWNvbnM4LWFkbWluaXN0cmF0b3ItbWFsZS0yNC5wbmdcIjtcclxuaW1wb3J0IEltYWdlIGZyb20gXCJuZXh0L2ltYWdlXCI7XHJcbmNvbnN0IE5hdkJhciA9ICgpID0+IHtcclxuICBjb25zdCBwYXRobmFtZSA9IHVzZVBhdGhuYW1lKCk7XHJcblxyXG4gIGNvbnN0IHsgYXV0aFN0YXRlLCBzZXRBdXRoU3RhdGUgfSA9IHVzZUNvbnRleHQoQXV0aENvbnRleHQpO1xyXG4gIGNvbnNvbGUubG9nKGF1dGhTdGF0ZSk7XHJcblxyXG4gIGNvbnNvbGUubG9nKFwibmF2IGJhciBhdXRoZW50aWNhdGVkP1wiLCBhdXRoU3RhdGUuc3RhdHVzKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBnYXAtMiBpdGVtcy1jZW50ZXIganVzdGlmeS1ldmVubHkgbXQtMyAgXCI+XHJcbiAgICAgICAge2F1dGhTdGF0ZS51c2VybmFtZSAmJiAoXHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgtMSBqdSB0ZXh0LWdyYXktOTAwIGZvbnQtc2VtaWJvbGRcIj5cclxuICAgICAgICAgICAgPEltYWdlIHNyYz17aWNvbn0gYWx0PVwiXCIgLz5cclxuICAgICAgICAgICAgPGgyXHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiXHJcbiAgICAgICAgICAgIHRleHQtY2VudGVyXCJcclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIHthdXRoU3RhdGUudXNlcm5hbWV9XHJcbiAgICAgICAgICAgIDwvaDI+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApfVxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBnYXAtMiBqdXN0aWZ5LWNlbnRlclwiPlxyXG4gICAgICAgICAgPExpbmtcclxuICAgICAgICAgICAgY2xhc3NOYW1lPXtgYm9yZGVyIGJvcmRlci1ncmF5LTIwMCB0ZXh0LWdyYXktOTAwIGJnLWdyYXktMTAwIHRyYW5zaXRpb24gZHVyYXRpb24tMzAwIGVhc2UtaW4tb3V0IFxyXG4gICAgICAgIHJvdW5kZWQtbWQgcHktMyBmbGV4IGp1c3RpZnktY2VudGVyIHctMzYgaG92ZXI6YmctZ3JheS00MDAgZm9udC1zZW1pYm9sZFxyXG4gICAgICAgIGhvdmVyOnRleHQtd2hpdGUgJHtwYXRobmFtZSA9PSBcIi9cIiA/IFwiYmctZ3JheS00MDBcIiA6IFwiXCJ9YH1cclxuICAgICAgICAgICAgaHJlZj17XCIvXCJ9XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIEhPTUVcclxuICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgIDxMaW5rXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT17YGJvcmRlciBib3JkZXItZ3JheS0yMDAgdGV4dC1ncmF5LTkwMCBiZy1ncmF5LTEwMCB0cmFuc2l0aW9uIGR1cmF0aW9uLTMwMCBlYXNlLWluLW91dCBcclxuICAgICAgICAgIHJvdW5kZWQtbWQgcHktMyBmbGV4IGp1c3RpZnktY2VudGVyIHctMzYgaG92ZXI6YmctZ3JheS00MDAgZm9udC1zZW1pYm9sZCBob3Zlcjp0ZXh0LXdoaXRlICR7XHJcbiAgICAgICAgICAgIHBhdGhuYW1lID09IFwiL2NyZWF0ZXBvc3RcIiA/IFwiYmctZ3JheS00MDBcIiA6IFwiXCJcclxuICAgICAgICAgIH1gfVxyXG4gICAgICAgICAgICBocmVmPXthdXRoU3RhdGUuc3RhdHVzID8gXCIvY3JlYXRlcG9zdFwiIDogXCJsb2dpblwifVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICBDUkVBVEUgUE9TVFxyXG4gICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgeyFhdXRoU3RhdGUuc3RhdHVzICYmIChcclxuICAgICAgICAgICAgPExpbmtcclxuICAgICAgICAgICAgICBjbGFzc05hbWU9e2Bib3JkZXIgYm9yZGVyLWdyYXktMjAwIHRleHQtZ3JheS05MDAgYmctZ3JheS0xMDAgdHJhbnNpdGlvbiBkdXJhdGlvbi0zMDAgZWFzZS1pbi1vdXQgXHJcbiAgICAgICAgICByb3VuZGVkLW1kIHB5LTMgZmxleCBqdXN0aWZ5LWNlbnRlciB3LTM2IGhvdmVyOmJnLWdyYXktNDAwIGZvbnQtc2VtaWJvbGQgaG92ZXI6dGV4dC13aGl0ZSAke1xyXG4gICAgICAgICAgICBwYXRobmFtZSA9PSBcIi9sb2dpblwiID8gXCJiZy1ncmF5LTQwMFwiIDogXCJcIlxyXG4gICAgICAgICAgfWB9XHJcbiAgICAgICAgICAgICAgaHJlZj17XCIvbG9naW5cIn1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIExPR0lOXHJcbiAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICl9XHJcbiAgICAgICAgICB7IWF1dGhTdGF0ZS5zdGF0dXMgJiYgKFxyXG4gICAgICAgICAgICA8TGlua1xyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17YGJvcmRlciBib3JkZXItZ3JheS0yMDAgdGV4dC1ncmF5LTkwMCBiZy1ncmF5LTEwMCB0cmFuc2l0aW9uIGR1cmF0aW9uLTMwMCBlYXNlLWluLW91dCBcclxuICAgICAgICAgIHJvdW5kZWQtbWQgcHktMyBmbGV4IGp1c3RpZnktY2VudGVyIHctMzYgaG92ZXI6YmctZ3JheS00MDAgZm9udC1zZW1pYm9sZCBob3Zlcjp0ZXh0LXdoaXRlICR7XHJcbiAgICAgICAgICAgIHBhdGhuYW1lID09IFwiL3JlZ2lzdHJhdGlvblwiID8gXCJiZy1ncmF5LTQwMFwiIDogXCJcIlxyXG4gICAgICAgICAgfSBgfVxyXG4gICAgICAgICAgICAgIGhyZWY9e1wiL3JlZ2lzdHJhdGlvblwifVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgUkVHSVNURVJcclxuICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgKX1cclxuICAgICAgICAgIHthdXRoU3RhdGUuc3RhdHVzICYmIChcclxuICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17YGJvcmRlciBib3JkZXItZ3JheS0yMDAgdGV4dC1ncmF5LTkwMCBiZy1ncmF5LTEwMCB0cmFuc2l0aW9uIGR1cmF0aW9uLTMwMCBlYXNlLWluLW91dCBcclxuICAgICAgICAgICAgICByb3VuZGVkLW1kIHB5LTMgZmxleCBqdXN0aWZ5LWNlbnRlciB3LTM2IGN1cnNvci1wb2ludGVyIGhvdmVyOmJnLWdyYXktNDAwIGZvbnQtc2VtaWJvbGQgaG92ZXI6dGV4dC13aGl0ZSAke1xyXG4gICAgICAgICAgICAgICAgcGF0aG5hbWUgPT0gXCIvbG9naW5cIiA/IFwiYmctZ3JheS00MDBcIiA6IFwiXCJcclxuICAgICAgICAgICAgICB9YH1cclxuICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbShcImFjY2Vzc1Rva2VuXCIpO1xyXG4gICAgICAgICAgICAgICAgc2V0QXV0aFN0YXRlKHsgdXNlcm5hbWU6IFwiXCIsIGlkOiAwLCBzdGF0dXM6IGZhbHNlIH0pO1xyXG4gICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICBMT0dPVVRcclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICApfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIHthdXRoU3RhdGUudXNlcm5hbWUgJiYgPGRpdiBjbGFzc05hbWU9XCJmbGV4LTFcIj48L2Rpdj59XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC8+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IE5hdkJhcjtcclxuIl0sIm5hbWVzIjpbIlJlYWN0IiwiTGluayIsInVzZVBhdGhuYW1lIiwiQXV0aENvbnRleHQiLCJ1c2VDb250ZXh0IiwiaWNvbiIsIkltYWdlIiwiTmF2QmFyIiwicGF0aG5hbWUiLCJhdXRoU3RhdGUiLCJzZXRBdXRoU3RhdGUiLCJjb25zb2xlIiwibG9nIiwic3RhdHVzIiwiZGl2IiwiY2xhc3NOYW1lIiwidXNlcm5hbWUiLCJzcmMiLCJhbHQiLCJoMiIsImhyZWYiLCJvbkNsaWNrIiwibG9jYWxTdG9yYWdlIiwicmVtb3ZlSXRlbSIsImlkIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/NavBar.tsx\n"));

/***/ })

});