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

/***/ "(app-pages-browser)/./src/app/globals.css":
/*!*****************************!*\
  !*** ./src/app/globals.css ***!
  \*****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (\"0bc184ea7f4d\");\nif (true) { module.hot.accept() }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvZ2xvYmFscy5jc3MiLCJtYXBwaW5ncyI6IjtBQUFBLCtEQUFlLGNBQWM7QUFDN0IsSUFBSSxJQUFVLElBQUksaUJBQWlCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9hcHAvZ2xvYmFscy5jc3M/OWU2MyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBcIjBiYzE4NGVhN2Y0ZFwiXG5pZiAobW9kdWxlLmhvdCkgeyBtb2R1bGUuaG90LmFjY2VwdCgpIH1cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/globals.css\n"));

/***/ }),

/***/ "(app-pages-browser)/./src/components/NavBar.tsx":
/*!***********************************!*\
  !*** ./src/components/NavBar.tsx ***!
  \***********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"(app-pages-browser)/./node_modules/next/dist/api/link.js\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/navigation */ \"(app-pages-browser)/./node_modules/next/dist/api/navigation.js\");\n/* harmony import */ var _app_layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../app/layout */ \"(app-pages-browser)/./src/app/layout.tsx\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\nconst NavBar = ()=>{\n    _s();\n    const pathname = (0,next_navigation__WEBPACK_IMPORTED_MODULE_3__.usePathname)();\n    const { authState, setAuthState } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_app_layout__WEBPACK_IMPORTED_MODULE_4__.AuthContext);\n    const [showNotSignedIn, setShowNotSignedIn] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    console.log(authState);\n    console.log(\"nav bar authenticated?\", authState.status);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"flex gap-2 items-center justify-evenly mt-3  \",\n            children: [\n                authState.username && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                    className: \"flex-1     text-center\",\n                    children: authState.username\n                }, void 0, false, {\n                    fileName: \"C:\\\\VSCodeProjects\\\\NEXTJS-PROJECTS\\\\fullstack-app\\\\my-app\\\\src\\\\components\\\\NavBar.tsx\",\n                    lineNumber: 22,\n                    columnNumber: 11\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex gap-2 justify-center\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_link__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                            className: \"border border-gray-200 text-gray-900 bg-gray-100 transition duration-300 ease-in-out \\n        rounded-md py-3 flex justify-center w-36 hover:bg-gray-400 font-semibold\\n        hover:text-white \".concat(pathname == \"/\" ? \"bg-gray-400 text-white\" : \"\"),\n                            href: \"/\",\n                            children: \"HOME\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\VSCodeProjects\\\\NEXTJS-PROJECTS\\\\fullstack-app\\\\my-app\\\\src\\\\components\\\\NavBar.tsx\",\n                            lineNumber: 30,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_link__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                            onClick: ()=>{\n                                authState.status ? setShowNotSignedIn(true) : setShowNotSignedIn(false);\n                            },\n                            className: \"border border-gray-200 text-gray-900 bg-gray-100 transition duration-300 ease-in-out \\n          rounded-md py-3 flex justify-center w-36 hover:bg-gray-400 font-semibold hover:text-white \".concat(pathname == \"/createpost\" ? \"bg-gray-400 text-white\" : \"\"),\n                            href: authState.status ? \"/createpost\" : \"login\",\n                            children: \"CREATE POST\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\VSCodeProjects\\\\NEXTJS-PROJECTS\\\\fullstack-app\\\\my-app\\\\src\\\\components\\\\NavBar.tsx\",\n                            lineNumber: 38,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {}, void 0, false, {\n                            fileName: \"C:\\\\VSCodeProjects\\\\NEXTJS-PROJECTS\\\\fullstack-app\\\\my-app\\\\src\\\\components\\\\NavBar.tsx\",\n                            lineNumber: 52,\n                            columnNumber: 11\n                        }, undefined),\n                        !authState.status && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_link__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                            className: \"border border-gray-200 text-gray-900 bg-gray-100 transition duration-300 ease-in-out \\n          rounded-md py-3 flex justify-center w-36 hover:bg-gray-400 font-semibold hover:text-white \".concat(pathname == \"/login\" ? \"bg-gray-400 text-white\" : \"\"),\n                            href: \"/login\",\n                            children: \"LOGIN\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\VSCodeProjects\\\\NEXTJS-PROJECTS\\\\fullstack-app\\\\my-app\\\\src\\\\components\\\\NavBar.tsx\",\n                            lineNumber: 54,\n                            columnNumber: 13\n                        }, undefined),\n                        !authState.status && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_link__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                            className: \"border border-gray-200 text-gray-900 bg-gray-100 transition duration-300 ease-in-out \\n          rounded-md py-3 flex justify-center w-36 hover:bg-gray-400 font-semibold hover:text-white \".concat(pathname == \"/registration\" ? \"bg-gray-400 text-white\" : \"\", \" \"),\n                            href: \"/registration\",\n                            children: \"REGISTER\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\VSCodeProjects\\\\NEXTJS-PROJECTS\\\\fullstack-app\\\\my-app\\\\src\\\\components\\\\NavBar.tsx\",\n                            lineNumber: 65,\n                            columnNumber: 13\n                        }, undefined),\n                        authState.status && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"border border-gray-200 text-gray-900 bg-gray-100 transition duration-300 ease-in-out \\n              rounded-md py-3 flex justify-center w-36 cursor-pointer hover:bg-gray-400 font-semibold hover:text-white \".concat(pathname == \"/login\" ? \"bg-gray-400 text-white\" : \"\"),\n                            onClick: ()=>{\n                                localStorage.removeItem(\"accessToken\");\n                                setAuthState({\n                                    username: \"\",\n                                    id: 0,\n                                    status: false\n                                });\n                            },\n                            children: \"LOGOUT\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\VSCodeProjects\\\\NEXTJS-PROJECTS\\\\fullstack-app\\\\my-app\\\\src\\\\components\\\\NavBar.tsx\",\n                            lineNumber: 76,\n                            columnNumber: 13\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\VSCodeProjects\\\\NEXTJS-PROJECTS\\\\fullstack-app\\\\my-app\\\\src\\\\components\\\\NavBar.tsx\",\n                    lineNumber: 29,\n                    columnNumber: 9\n                }, undefined),\n                authState.username && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex-1\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\VSCodeProjects\\\\NEXTJS-PROJECTS\\\\fullstack-app\\\\my-app\\\\src\\\\components\\\\NavBar.tsx\",\n                    lineNumber: 90,\n                    columnNumber: 32\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\VSCodeProjects\\\\NEXTJS-PROJECTS\\\\fullstack-app\\\\my-app\\\\src\\\\components\\\\NavBar.tsx\",\n            lineNumber: 20,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false);\n};\n_s(NavBar, \"7rm/ERqpkzyz99B1BENoQwxMC6M=\", false, function() {\n    return [\n        next_navigation__WEBPACK_IMPORTED_MODULE_3__.usePathname\n    ];\n});\n_c = NavBar;\n/* harmony default export */ __webpack_exports__[\"default\"] = (NavBar);\nvar _c;\n$RefreshReg$(_c, \"NavBar\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL05hdkJhci50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQzBCO0FBQ0c7QUFDaUI7QUFDYjtBQUNXO0FBQ1Q7QUFFbkMsTUFBTU0sU0FBUzs7SUFDYixNQUFNQyxXQUFXTCw0REFBV0E7SUFFNUIsTUFBTSxFQUFFTSxTQUFTLEVBQUVDLFlBQVksRUFBRSxHQUFHSixpREFBVUEsQ0FBQ0Qsb0RBQVdBO0lBQzFELE1BQU0sQ0FBQ00saUJBQWlCQyxtQkFBbUIsR0FBR1IsK0NBQVFBLENBQUM7SUFDdkRTLFFBQVFDLEdBQUcsQ0FBQ0w7SUFFWkksUUFBUUMsR0FBRyxDQUFDLDBCQUEwQkwsVUFBVU0sTUFBTTtJQUV0RCxxQkFDRTtrQkFDRSw0RUFBQ0M7WUFBSUMsV0FBVTs7Z0JBQ1pSLFVBQVVTLFFBQVEsa0JBQ2pCLDhEQUFDQztvQkFDQ0YsV0FBVTs4QkFHVFIsVUFBVVMsUUFBUTs7Ozs7OzhCQUd2Qiw4REFBQ0Y7b0JBQUlDLFdBQVU7O3NDQUNiLDhEQUFDZixpREFBSUE7NEJBQ0hlLFdBQVcscU1BRW9ELE9BQWhEVCxZQUFZLE1BQU0sMkJBQTJCOzRCQUM1RFksTUFBTTtzQ0FDUDs7Ozs7O3NDQUdELDhEQUFDbEIsaURBQUlBOzRCQUNIbUIsU0FBUztnQ0FDUFosVUFBVU0sTUFBTSxHQUNaSCxtQkFBbUIsUUFDbkJBLG1CQUFtQjs0QkFDekI7NEJBQ0FLLFdBQVcsOExBR1osT0FEQ1QsWUFBWSxnQkFBZ0IsMkJBQTJCOzRCQUV2RFksTUFBTVgsVUFBVU0sTUFBTSxHQUFHLGdCQUFnQjtzQ0FDMUM7Ozs7OztzQ0FHRCw4REFBQ0M7Ozs7O3dCQUNBLENBQUNQLFVBQVVNLE1BQU0sa0JBQ2hCLDhEQUFDYixpREFBSUE7NEJBQ0hlLFdBQVcsOExBR2QsT0FEQ1QsWUFBWSxXQUFXLDJCQUEyQjs0QkFFaERZLE1BQU07c0NBQ1A7Ozs7Ozt3QkFJRixDQUFDWCxVQUFVTSxNQUFNLGtCQUNoQiw4REFBQ2IsaURBQUlBOzRCQUNIZSxXQUFXLDhMQUdkLE9BRENULFlBQVksa0JBQWtCLDJCQUEyQixJQUMxRDs0QkFDR1ksTUFBTTtzQ0FDUDs7Ozs7O3dCQUlGWCxVQUFVTSxNQUFNLGtCQUNmLDhEQUFDQzs0QkFDQ0MsV0FBVyxpTkFHVixPQURDVCxZQUFZLFdBQVcsMkJBQTJCOzRCQUVwRGEsU0FBUztnQ0FDUEMsYUFBYUMsVUFBVSxDQUFDO2dDQUN4QmIsYUFBYTtvQ0FBRVEsVUFBVTtvQ0FBSU0sSUFBSTtvQ0FBR1QsUUFBUTtnQ0FBTTs0QkFDcEQ7c0NBQ0Q7Ozs7Ozs7Ozs7OztnQkFLSk4sVUFBVVMsUUFBUSxrQkFBSSw4REFBQ0Y7b0JBQUlDLFdBQVU7Ozs7Ozs7Ozs7Ozs7QUFJOUM7R0FyRk1WOztRQUNhSix3REFBV0E7OztLQUR4Qkk7QUF1Rk4sK0RBQWVBLE1BQU1BLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvTmF2QmFyLnRzeD9kOWVhIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiO1xyXG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcclxuaW1wb3J0IHsgdXNlUGF0aG5hbWUgfSBmcm9tIFwibmV4dC9uYXZpZ2F0aW9uXCI7XHJcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IEF1dGhDb250ZXh0IH0gZnJvbSBcIi4uL2FwcC9sYXlvdXRcIjtcclxuaW1wb3J0IHsgdXNlQ29udGV4dCB9IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuY29uc3QgTmF2QmFyID0gKCkgPT4ge1xyXG4gIGNvbnN0IHBhdGhuYW1lID0gdXNlUGF0aG5hbWUoKTtcclxuXHJcbiAgY29uc3QgeyBhdXRoU3RhdGUsIHNldEF1dGhTdGF0ZSB9ID0gdXNlQ29udGV4dChBdXRoQ29udGV4dCk7XHJcbiAgY29uc3QgW3Nob3dOb3RTaWduZWRJbiwgc2V0U2hvd05vdFNpZ25lZEluXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zb2xlLmxvZyhhdXRoU3RhdGUpO1xyXG5cclxuICBjb25zb2xlLmxvZyhcIm5hdiBiYXIgYXV0aGVudGljYXRlZD9cIiwgYXV0aFN0YXRlLnN0YXR1cyk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZ2FwLTIgaXRlbXMtY2VudGVyIGp1c3RpZnktZXZlbmx5IG10LTMgIFwiPlxyXG4gICAgICAgIHthdXRoU3RhdGUudXNlcm5hbWUgJiYgKFxyXG4gICAgICAgICAgPGgyXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImZsZXgtMSAgXHJcbiAgICAgICAgdGV4dC1jZW50ZXJcIlxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICB7YXV0aFN0YXRlLnVzZXJuYW1lfVxyXG4gICAgICAgICAgPC9oMj5cclxuICAgICAgICApfVxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBnYXAtMiBqdXN0aWZ5LWNlbnRlclwiPlxyXG4gICAgICAgICAgPExpbmtcclxuICAgICAgICAgICAgY2xhc3NOYW1lPXtgYm9yZGVyIGJvcmRlci1ncmF5LTIwMCB0ZXh0LWdyYXktOTAwIGJnLWdyYXktMTAwIHRyYW5zaXRpb24gZHVyYXRpb24tMzAwIGVhc2UtaW4tb3V0IFxyXG4gICAgICAgIHJvdW5kZWQtbWQgcHktMyBmbGV4IGp1c3RpZnktY2VudGVyIHctMzYgaG92ZXI6YmctZ3JheS00MDAgZm9udC1zZW1pYm9sZFxyXG4gICAgICAgIGhvdmVyOnRleHQtd2hpdGUgJHtwYXRobmFtZSA9PSBcIi9cIiA/IFwiYmctZ3JheS00MDAgdGV4dC13aGl0ZVwiIDogXCJcIn1gfVxyXG4gICAgICAgICAgICBocmVmPXtcIi9cIn1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgSE9NRVxyXG4gICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgPExpbmtcclxuICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgICAgICAgIGF1dGhTdGF0ZS5zdGF0dXNcclxuICAgICAgICAgICAgICAgID8gc2V0U2hvd05vdFNpZ25lZEluKHRydWUpXHJcbiAgICAgICAgICAgICAgICA6IHNldFNob3dOb3RTaWduZWRJbihmYWxzZSk7XHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT17YGJvcmRlciBib3JkZXItZ3JheS0yMDAgdGV4dC1ncmF5LTkwMCBiZy1ncmF5LTEwMCB0cmFuc2l0aW9uIGR1cmF0aW9uLTMwMCBlYXNlLWluLW91dCBcclxuICAgICAgICAgIHJvdW5kZWQtbWQgcHktMyBmbGV4IGp1c3RpZnktY2VudGVyIHctMzYgaG92ZXI6YmctZ3JheS00MDAgZm9udC1zZW1pYm9sZCBob3Zlcjp0ZXh0LXdoaXRlICR7XHJcbiAgICAgICAgICAgIHBhdGhuYW1lID09IFwiL2NyZWF0ZXBvc3RcIiA/IFwiYmctZ3JheS00MDAgdGV4dC13aGl0ZVwiIDogXCJcIlxyXG4gICAgICAgICAgfWB9XHJcbiAgICAgICAgICAgIGhyZWY9e2F1dGhTdGF0ZS5zdGF0dXMgPyBcIi9jcmVhdGVwb3N0XCIgOiBcImxvZ2luXCJ9XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIENSRUFURSBQT1NUXHJcbiAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICA8ZGl2PjwvZGl2PlxyXG4gICAgICAgICAgeyFhdXRoU3RhdGUuc3RhdHVzICYmIChcclxuICAgICAgICAgICAgPExpbmtcclxuICAgICAgICAgICAgICBjbGFzc05hbWU9e2Bib3JkZXIgYm9yZGVyLWdyYXktMjAwIHRleHQtZ3JheS05MDAgYmctZ3JheS0xMDAgdHJhbnNpdGlvbiBkdXJhdGlvbi0zMDAgZWFzZS1pbi1vdXQgXHJcbiAgICAgICAgICByb3VuZGVkLW1kIHB5LTMgZmxleCBqdXN0aWZ5LWNlbnRlciB3LTM2IGhvdmVyOmJnLWdyYXktNDAwIGZvbnQtc2VtaWJvbGQgaG92ZXI6dGV4dC13aGl0ZSAke1xyXG4gICAgICAgICAgICBwYXRobmFtZSA9PSBcIi9sb2dpblwiID8gXCJiZy1ncmF5LTQwMCB0ZXh0LXdoaXRlXCIgOiBcIlwiXHJcbiAgICAgICAgICB9YH1cclxuICAgICAgICAgICAgICBocmVmPXtcIi9sb2dpblwifVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgTE9HSU5cclxuICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgKX1cclxuICAgICAgICAgIHshYXV0aFN0YXRlLnN0YXR1cyAmJiAoXHJcbiAgICAgICAgICAgIDxMaW5rXHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgYm9yZGVyIGJvcmRlci1ncmF5LTIwMCB0ZXh0LWdyYXktOTAwIGJnLWdyYXktMTAwIHRyYW5zaXRpb24gZHVyYXRpb24tMzAwIGVhc2UtaW4tb3V0IFxyXG4gICAgICAgICAgcm91bmRlZC1tZCBweS0zIGZsZXgganVzdGlmeS1jZW50ZXIgdy0zNiBob3ZlcjpiZy1ncmF5LTQwMCBmb250LXNlbWlib2xkIGhvdmVyOnRleHQtd2hpdGUgJHtcclxuICAgICAgICAgICAgcGF0aG5hbWUgPT0gXCIvcmVnaXN0cmF0aW9uXCIgPyBcImJnLWdyYXktNDAwIHRleHQtd2hpdGVcIiA6IFwiXCJcclxuICAgICAgICAgIH0gYH1cclxuICAgICAgICAgICAgICBocmVmPXtcIi9yZWdpc3RyYXRpb25cIn1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIFJFR0lTVEVSXHJcbiAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICl9XHJcbiAgICAgICAgICB7YXV0aFN0YXRlLnN0YXR1cyAmJiAoXHJcbiAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICBjbGFzc05hbWU9e2Bib3JkZXIgYm9yZGVyLWdyYXktMjAwIHRleHQtZ3JheS05MDAgYmctZ3JheS0xMDAgdHJhbnNpdGlvbiBkdXJhdGlvbi0zMDAgZWFzZS1pbi1vdXQgXHJcbiAgICAgICAgICAgICAgcm91bmRlZC1tZCBweS0zIGZsZXgganVzdGlmeS1jZW50ZXIgdy0zNiBjdXJzb3ItcG9pbnRlciBob3ZlcjpiZy1ncmF5LTQwMCBmb250LXNlbWlib2xkIGhvdmVyOnRleHQtd2hpdGUgJHtcclxuICAgICAgICAgICAgICAgIHBhdGhuYW1lID09IFwiL2xvZ2luXCIgPyBcImJnLWdyYXktNDAwIHRleHQtd2hpdGVcIiA6IFwiXCJcclxuICAgICAgICAgICAgICB9YH1cclxuICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbShcImFjY2Vzc1Rva2VuXCIpO1xyXG4gICAgICAgICAgICAgICAgc2V0QXV0aFN0YXRlKHsgdXNlcm5hbWU6IFwiXCIsIGlkOiAwLCBzdGF0dXM6IGZhbHNlIH0pO1xyXG4gICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICBMT0dPVVRcclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICApfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIHthdXRoU3RhdGUudXNlcm5hbWUgJiYgPGRpdiBjbGFzc05hbWU9XCJmbGV4LTFcIj48L2Rpdj59XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC8+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IE5hdkJhcjtcclxuIl0sIm5hbWVzIjpbIlJlYWN0IiwiTGluayIsInVzZVBhdGhuYW1lIiwidXNlU3RhdGUiLCJBdXRoQ29udGV4dCIsInVzZUNvbnRleHQiLCJOYXZCYXIiLCJwYXRobmFtZSIsImF1dGhTdGF0ZSIsInNldEF1dGhTdGF0ZSIsInNob3dOb3RTaWduZWRJbiIsInNldFNob3dOb3RTaWduZWRJbiIsImNvbnNvbGUiLCJsb2ciLCJzdGF0dXMiLCJkaXYiLCJjbGFzc05hbWUiLCJ1c2VybmFtZSIsImgyIiwiaHJlZiIsIm9uQ2xpY2siLCJsb2NhbFN0b3JhZ2UiLCJyZW1vdmVJdGVtIiwiaWQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/NavBar.tsx\n"));

/***/ })

});