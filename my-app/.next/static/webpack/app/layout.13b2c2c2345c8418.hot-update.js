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

/***/ "(app-pages-browser)/./src/app/globals.css":
/*!*****************************!*\
  !*** ./src/app/globals.css ***!
  \*****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (\"241f4ec04d88\");\nif (true) { module.hot.accept() }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvZ2xvYmFscy5jc3MiLCJtYXBwaW5ncyI6IjtBQUFBLCtEQUFlLGNBQWM7QUFDN0IsSUFBSSxJQUFVLElBQUksaUJBQWlCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9hcHAvZ2xvYmFscy5jc3M/OWU2MyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBcIjI0MWY0ZWMwNGQ4OFwiXG5pZiAobW9kdWxlLmhvdCkgeyBtb2R1bGUuaG90LmFjY2VwdCgpIH1cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/globals.css\n"));

/***/ }),

/***/ "(app-pages-browser)/./src/components/NavBar.tsx":
/*!***********************************!*\
  !*** ./src/components/NavBar.tsx ***!
  \***********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"(app-pages-browser)/./node_modules/next/dist/api/link.js\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/navigation */ \"(app-pages-browser)/./node_modules/next/dist/api/navigation.js\");\n/* harmony import */ var _app_layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../app/layout */ \"(app-pages-browser)/./src/app/layout.tsx\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\nconst NavBar = ()=>{\n    _s();\n    const pathname = (0,next_navigation__WEBPACK_IMPORTED_MODULE_3__.usePathname)();\n    const { authState, setAuthState } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_app_layout__WEBPACK_IMPORTED_MODULE_4__.AuthContext);\n    console.log(authState);\n    console.log(\"nav bar authenticated?\", authState.status);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"flex gap-2 items-center justify-evenly mt-3  \",\n            children: [\n                authState.username && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                    className: \"flex-1 text-gray-900 font-semibold   text-center\",\n                    children: authState.username\n                }, void 0, false, {\n                    fileName: \"C:\\\\VSCodeProjects\\\\NEXTJS-PROJECTS\\\\fullstack-app\\\\my-app\\\\src\\\\components\\\\NavBar.tsx\",\n                    lineNumber: 21,\n                    columnNumber: 11\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex gap-2 justify-center\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_link__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                            className: \"border border-gray-200 text-gray-900 bg-gray-100 transition duration-300 ease-in-out \\n        rounded-md py-3 flex justify-center w-36 hover:bg-gray-400 font-semibold\\n        hover:text-white \".concat(pathname == \"/\" ? \"bg-gray-400\" : \"\"),\n                            href: \"/\",\n                            children: \"HOME\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\VSCodeProjects\\\\NEXTJS-PROJECTS\\\\fullstack-app\\\\my-app\\\\src\\\\components\\\\NavBar.tsx\",\n                            lineNumber: 29,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_link__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                            className: \"border border-gray-200 text-gray-900 bg-gray-100 transition duration-300 ease-in-out \\n          rounded-md py-3 flex justify-center w-36 hover:bg-gray-400 font-semibold hover:text-white \".concat(pathname == \"/createpost\" ? \"bg-gray-400\" : \"\"),\n                            href: authState.status ? \"/createpost\" : \"login\",\n                            children: \"CREATE POST\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\VSCodeProjects\\\\NEXTJS-PROJECTS\\\\fullstack-app\\\\my-app\\\\src\\\\components\\\\NavBar.tsx\",\n                            lineNumber: 37,\n                            columnNumber: 11\n                        }, undefined),\n                        !authState.status && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_link__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                            className: \"border border-gray-200 text-gray-900 bg-gray-100 transition duration-300 ease-in-out \\n          rounded-md py-3 flex justify-center w-36 hover:bg-gray-400 font-semibold hover:text-white \".concat(pathname == \"/login\" ? \"bg-gray-400\" : \"\"),\n                            href: \"/login\",\n                            children: \"LOGIN\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\VSCodeProjects\\\\NEXTJS-PROJECTS\\\\fullstack-app\\\\my-app\\\\src\\\\components\\\\NavBar.tsx\",\n                            lineNumber: 47,\n                            columnNumber: 13\n                        }, undefined),\n                        !authState.status && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_link__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                            className: \"border border-gray-200 text-gray-900 bg-gray-100 transition duration-300 ease-in-out \\n          rounded-md py-3 flex justify-center w-36 hover:bg-gray-400 font-semibold hover:text-white \".concat(pathname == \"/registration\" ? \"bg-gray-400\" : \"\", \" \"),\n                            href: \"/registration\",\n                            children: \"REGISTER\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\VSCodeProjects\\\\NEXTJS-PROJECTS\\\\fullstack-app\\\\my-app\\\\src\\\\components\\\\NavBar.tsx\",\n                            lineNumber: 58,\n                            columnNumber: 13\n                        }, undefined),\n                        authState.status && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"border border-gray-200 text-gray-900 bg-gray-100 transition duration-300 ease-in-out \\n              rounded-md py-3 flex justify-center w-36 cursor-pointer hover:bg-gray-400 font-semibold hover:text-white \".concat(pathname == \"/login\" ? \"bg-gray-400\" : \"\"),\n                            onClick: ()=>{\n                                localStorage.removeItem(\"accessToken\");\n                                setAuthState({\n                                    username: \"\",\n                                    id: 0,\n                                    status: false\n                                });\n                            },\n                            children: \"LOGOUT\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\VSCodeProjects\\\\NEXTJS-PROJECTS\\\\fullstack-app\\\\my-app\\\\src\\\\components\\\\NavBar.tsx\",\n                            lineNumber: 69,\n                            columnNumber: 13\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\VSCodeProjects\\\\NEXTJS-PROJECTS\\\\fullstack-app\\\\my-app\\\\src\\\\components\\\\NavBar.tsx\",\n                    lineNumber: 28,\n                    columnNumber: 9\n                }, undefined),\n                authState.username && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex-1\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\VSCodeProjects\\\\NEXTJS-PROJECTS\\\\fullstack-app\\\\my-app\\\\src\\\\components\\\\NavBar.tsx\",\n                    lineNumber: 83,\n                    columnNumber: 32\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\VSCodeProjects\\\\NEXTJS-PROJECTS\\\\fullstack-app\\\\my-app\\\\src\\\\components\\\\NavBar.tsx\",\n            lineNumber: 19,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false);\n};\n_s(NavBar, \"GZbkjqvhJjR4Gx1dmVprfdUEffc=\", false, function() {\n    return [\n        next_navigation__WEBPACK_IMPORTED_MODULE_3__.usePathname\n    ];\n});\n_c = NavBar;\n/* harmony default export */ __webpack_exports__[\"default\"] = (NavBar);\nvar _c;\n$RefreshReg$(_c, \"NavBar\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL05hdkJhci50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQzBCO0FBQ0c7QUFDaUI7QUFFRjtBQUNUO0FBRW5DLE1BQU1LLFNBQVM7O0lBQ2IsTUFBTUMsV0FBV0osNERBQVdBO0lBRTVCLE1BQU0sRUFBRUssU0FBUyxFQUFFQyxZQUFZLEVBQUUsR0FBR0osaURBQVVBLENBQUNELG9EQUFXQTtJQUMxRE0sUUFBUUMsR0FBRyxDQUFDSDtJQUVaRSxRQUFRQyxHQUFHLENBQUMsMEJBQTBCSCxVQUFVSSxNQUFNO0lBRXRELHFCQUNFO2tCQUNFLDRFQUFDQztZQUFJQyxXQUFVOztnQkFDWk4sVUFBVU8sUUFBUSxrQkFDakIsOERBQUNDO29CQUNDRixXQUFVOzhCQUdUTixVQUFVTyxRQUFROzs7Ozs7OEJBR3ZCLDhEQUFDRjtvQkFBSUMsV0FBVTs7c0NBQ2IsOERBQUNaLGlEQUFJQTs0QkFDSFksV0FBVyxxTUFFeUMsT0FBckNQLFlBQVksTUFBTSxnQkFBZ0I7NEJBQ2pEVSxNQUFNO3NDQUNQOzs7Ozs7c0NBR0QsOERBQUNmLGlEQUFJQTs0QkFDSFksV0FBVyw4TEFHWixPQURDUCxZQUFZLGdCQUFnQixnQkFBZ0I7NEJBRTVDVSxNQUFNVCxVQUFVSSxNQUFNLEdBQUcsZ0JBQWdCO3NDQUMxQzs7Ozs7O3dCQUdBLENBQUNKLFVBQVVJLE1BQU0sa0JBQ2hCLDhEQUFDVixpREFBSUE7NEJBQ0hZLFdBQVcsOExBR2QsT0FEQ1AsWUFBWSxXQUFXLGdCQUFnQjs0QkFFckNVLE1BQU07c0NBQ1A7Ozs7Ozt3QkFJRixDQUFDVCxVQUFVSSxNQUFNLGtCQUNoQiw4REFBQ1YsaURBQUlBOzRCQUNIWSxXQUFXLDhMQUdkLE9BRENQLFlBQVksa0JBQWtCLGdCQUFnQixJQUMvQzs0QkFDR1UsTUFBTTtzQ0FDUDs7Ozs7O3dCQUlGVCxVQUFVSSxNQUFNLGtCQUNmLDhEQUFDQzs0QkFDQ0MsV0FBVyxpTkFHVixPQURDUCxZQUFZLFdBQVcsZ0JBQWdCOzRCQUV6Q1csU0FBUztnQ0FDUEMsYUFBYUMsVUFBVSxDQUFDO2dDQUN4QlgsYUFBYTtvQ0FBRU0sVUFBVTtvQ0FBSU0sSUFBSTtvQ0FBR1QsUUFBUTtnQ0FBTTs0QkFDcEQ7c0NBQ0Q7Ozs7Ozs7Ozs7OztnQkFLSkosVUFBVU8sUUFBUSxrQkFBSSw4REFBQ0Y7b0JBQUlDLFdBQVU7Ozs7Ozs7Ozs7Ozs7QUFJOUM7R0E5RU1SOztRQUNhSCx3REFBV0E7OztLQUR4Qkc7QUFnRk4sK0RBQWVBLE1BQU1BLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvTmF2QmFyLnRzeD9kOWVhIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiO1xyXG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcclxuaW1wb3J0IHsgdXNlUGF0aG5hbWUgfSBmcm9tIFwibmV4dC9uYXZpZ2F0aW9uXCI7XHJcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IEF1dGhDb250ZXh0IH0gZnJvbSBcIi4uL2FwcC9sYXlvdXRcIjtcclxuaW1wb3J0IHsgdXNlQ29udGV4dCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgaWNvbiBmcm9tIFwiLi4vXCJcclxuY29uc3QgTmF2QmFyID0gKCkgPT4ge1xyXG4gIGNvbnN0IHBhdGhuYW1lID0gdXNlUGF0aG5hbWUoKTtcclxuXHJcbiAgY29uc3QgeyBhdXRoU3RhdGUsIHNldEF1dGhTdGF0ZSB9ID0gdXNlQ29udGV4dChBdXRoQ29udGV4dCk7XHJcbiAgY29uc29sZS5sb2coYXV0aFN0YXRlKTtcclxuXHJcbiAgY29uc29sZS5sb2coXCJuYXYgYmFyIGF1dGhlbnRpY2F0ZWQ/XCIsIGF1dGhTdGF0ZS5zdGF0dXMpO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGdhcC0yIGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWV2ZW5seSBtdC0zICBcIj5cclxuICAgICAgICB7YXV0aFN0YXRlLnVzZXJuYW1lICYmIChcclxuICAgICAgICAgIDxoMlxyXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJmbGV4LTEgdGV4dC1ncmF5LTkwMCBmb250LXNlbWlib2xkXHJcbiAgICAgICAgdGV4dC1jZW50ZXJcIlxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICB7YXV0aFN0YXRlLnVzZXJuYW1lfVxyXG4gICAgICAgICAgPC9oMj5cclxuICAgICAgICApfVxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBnYXAtMiBqdXN0aWZ5LWNlbnRlclwiPlxyXG4gICAgICAgICAgPExpbmtcclxuICAgICAgICAgICAgY2xhc3NOYW1lPXtgYm9yZGVyIGJvcmRlci1ncmF5LTIwMCB0ZXh0LWdyYXktOTAwIGJnLWdyYXktMTAwIHRyYW5zaXRpb24gZHVyYXRpb24tMzAwIGVhc2UtaW4tb3V0IFxyXG4gICAgICAgIHJvdW5kZWQtbWQgcHktMyBmbGV4IGp1c3RpZnktY2VudGVyIHctMzYgaG92ZXI6YmctZ3JheS00MDAgZm9udC1zZW1pYm9sZFxyXG4gICAgICAgIGhvdmVyOnRleHQtd2hpdGUgJHtwYXRobmFtZSA9PSBcIi9cIiA/IFwiYmctZ3JheS00MDBcIiA6IFwiXCJ9YH1cclxuICAgICAgICAgICAgaHJlZj17XCIvXCJ9XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIEhPTUVcclxuICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgIDxMaW5rXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT17YGJvcmRlciBib3JkZXItZ3JheS0yMDAgdGV4dC1ncmF5LTkwMCBiZy1ncmF5LTEwMCB0cmFuc2l0aW9uIGR1cmF0aW9uLTMwMCBlYXNlLWluLW91dCBcclxuICAgICAgICAgIHJvdW5kZWQtbWQgcHktMyBmbGV4IGp1c3RpZnktY2VudGVyIHctMzYgaG92ZXI6YmctZ3JheS00MDAgZm9udC1zZW1pYm9sZCBob3Zlcjp0ZXh0LXdoaXRlICR7XHJcbiAgICAgICAgICAgIHBhdGhuYW1lID09IFwiL2NyZWF0ZXBvc3RcIiA/IFwiYmctZ3JheS00MDBcIiA6IFwiXCJcclxuICAgICAgICAgIH1gfVxyXG4gICAgICAgICAgICBocmVmPXthdXRoU3RhdGUuc3RhdHVzID8gXCIvY3JlYXRlcG9zdFwiIDogXCJsb2dpblwifVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICBDUkVBVEUgUE9TVFxyXG4gICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgeyFhdXRoU3RhdGUuc3RhdHVzICYmIChcclxuICAgICAgICAgICAgPExpbmtcclxuICAgICAgICAgICAgICBjbGFzc05hbWU9e2Bib3JkZXIgYm9yZGVyLWdyYXktMjAwIHRleHQtZ3JheS05MDAgYmctZ3JheS0xMDAgdHJhbnNpdGlvbiBkdXJhdGlvbi0zMDAgZWFzZS1pbi1vdXQgXHJcbiAgICAgICAgICByb3VuZGVkLW1kIHB5LTMgZmxleCBqdXN0aWZ5LWNlbnRlciB3LTM2IGhvdmVyOmJnLWdyYXktNDAwIGZvbnQtc2VtaWJvbGQgaG92ZXI6dGV4dC13aGl0ZSAke1xyXG4gICAgICAgICAgICBwYXRobmFtZSA9PSBcIi9sb2dpblwiID8gXCJiZy1ncmF5LTQwMFwiIDogXCJcIlxyXG4gICAgICAgICAgfWB9XHJcbiAgICAgICAgICAgICAgaHJlZj17XCIvbG9naW5cIn1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIExPR0lOXHJcbiAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICl9XHJcbiAgICAgICAgICB7IWF1dGhTdGF0ZS5zdGF0dXMgJiYgKFxyXG4gICAgICAgICAgICA8TGlua1xyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17YGJvcmRlciBib3JkZXItZ3JheS0yMDAgdGV4dC1ncmF5LTkwMCBiZy1ncmF5LTEwMCB0cmFuc2l0aW9uIGR1cmF0aW9uLTMwMCBlYXNlLWluLW91dCBcclxuICAgICAgICAgIHJvdW5kZWQtbWQgcHktMyBmbGV4IGp1c3RpZnktY2VudGVyIHctMzYgaG92ZXI6YmctZ3JheS00MDAgZm9udC1zZW1pYm9sZCBob3Zlcjp0ZXh0LXdoaXRlICR7XHJcbiAgICAgICAgICAgIHBhdGhuYW1lID09IFwiL3JlZ2lzdHJhdGlvblwiID8gXCJiZy1ncmF5LTQwMFwiIDogXCJcIlxyXG4gICAgICAgICAgfSBgfVxyXG4gICAgICAgICAgICAgIGhyZWY9e1wiL3JlZ2lzdHJhdGlvblwifVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgUkVHSVNURVJcclxuICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgKX1cclxuICAgICAgICAgIHthdXRoU3RhdGUuc3RhdHVzICYmIChcclxuICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17YGJvcmRlciBib3JkZXItZ3JheS0yMDAgdGV4dC1ncmF5LTkwMCBiZy1ncmF5LTEwMCB0cmFuc2l0aW9uIGR1cmF0aW9uLTMwMCBlYXNlLWluLW91dCBcclxuICAgICAgICAgICAgICByb3VuZGVkLW1kIHB5LTMgZmxleCBqdXN0aWZ5LWNlbnRlciB3LTM2IGN1cnNvci1wb2ludGVyIGhvdmVyOmJnLWdyYXktNDAwIGZvbnQtc2VtaWJvbGQgaG92ZXI6dGV4dC13aGl0ZSAke1xyXG4gICAgICAgICAgICAgICAgcGF0aG5hbWUgPT0gXCIvbG9naW5cIiA/IFwiYmctZ3JheS00MDBcIiA6IFwiXCJcclxuICAgICAgICAgICAgICB9YH1cclxuICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbShcImFjY2Vzc1Rva2VuXCIpO1xyXG4gICAgICAgICAgICAgICAgc2V0QXV0aFN0YXRlKHsgdXNlcm5hbWU6IFwiXCIsIGlkOiAwLCBzdGF0dXM6IGZhbHNlIH0pO1xyXG4gICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICBMT0dPVVRcclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICApfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIHthdXRoU3RhdGUudXNlcm5hbWUgJiYgPGRpdiBjbGFzc05hbWU9XCJmbGV4LTFcIj48L2Rpdj59XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC8+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IE5hdkJhcjtcclxuIl0sIm5hbWVzIjpbIlJlYWN0IiwiTGluayIsInVzZVBhdGhuYW1lIiwiQXV0aENvbnRleHQiLCJ1c2VDb250ZXh0IiwiTmF2QmFyIiwicGF0aG5hbWUiLCJhdXRoU3RhdGUiLCJzZXRBdXRoU3RhdGUiLCJjb25zb2xlIiwibG9nIiwic3RhdHVzIiwiZGl2IiwiY2xhc3NOYW1lIiwidXNlcm5hbWUiLCJoMiIsImhyZWYiLCJvbkNsaWNrIiwibG9jYWxTdG9yYWdlIiwicmVtb3ZlSXRlbSIsImlkIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/NavBar.tsx\n"));

/***/ })

});