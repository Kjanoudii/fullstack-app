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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (\"883ed291dcc6\");\nif (true) { module.hot.accept() }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvZ2xvYmFscy5jc3MiLCJtYXBwaW5ncyI6IjtBQUFBLCtEQUFlLGNBQWM7QUFDN0IsSUFBSSxJQUFVLElBQUksaUJBQWlCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9hcHAvZ2xvYmFscy5jc3M/OWU2MyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBcIjg4M2VkMjkxZGNjNlwiXG5pZiAobW9kdWxlLmhvdCkgeyBtb2R1bGUuaG90LmFjY2VwdCgpIH1cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/globals.css\n"));

/***/ }),

/***/ "(app-pages-browser)/./src/components/NavBar.tsx":
/*!***********************************!*\
  !*** ./src/components/NavBar.tsx ***!
  \***********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"(app-pages-browser)/./node_modules/next/dist/api/link.js\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/navigation */ \"(app-pages-browser)/./node_modules/next/dist/api/navigation.js\");\n/* harmony import */ var _app_layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../app/layout */ \"(app-pages-browser)/./src/app/layout.tsx\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\nconst NavBar = ()=>{\n    _s();\n    const pathname = (0,next_navigation__WEBPACK_IMPORTED_MODULE_3__.usePathname)();\n    const { authState, setAuthState } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_app_layout__WEBPACK_IMPORTED_MODULE_4__.AuthContext);\n    const [showNotSignedIn, setShowNotSignedIn] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    console.log(authState);\n    console.log(\"nav bar authenticated?\", authState.status);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"flex gap-2 items-center justify-evenly mt-3  \",\n            children: [\n                authState.username && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                    className: \"flex-1     text-center\",\n                    children: authState.username\n                }, void 0, false, {\n                    fileName: \"C:\\\\VSCodeProjects\\\\NEXTJS-PROJECTS\\\\fullstack-app\\\\my-app\\\\src\\\\components\\\\NavBar.tsx\",\n                    lineNumber: 22,\n                    columnNumber: 11\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex gap-2 justify-center\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_link__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                            className: \"border border-gray-200 text-gray-900 bg-gray-100 transition duration-300 ease-in-out \\n        rounded-md py-3 flex justify-center w-36 hover:bg-gray-400 font-semibold\\n        hover:text-white \".concat(pathname == \"/\" ? \"bg-gray-400 text-white\" : \"\"),\n                            href: \"/\",\n                            children: \"HOME\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\VSCodeProjects\\\\NEXTJS-PROJECTS\\\\fullstack-app\\\\my-app\\\\src\\\\components\\\\NavBar.tsx\",\n                            lineNumber: 30,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_link__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                            onClick: ()=>{\n                                authState.status ? setShowNotSignedIn(false) : setShowNotSignedIn(true);\n                            },\n                            className: \"border border-gray-200 text-gray-900 bg-gray-100 transition duration-300 ease-in-out \\n          rounded-md py-3 flex justify-center w-36 hover:bg-gray-400 font-semibold hover:text-white \".concat(pathname == \"/createpost\" ? \"bg-gray-400 text-white\" : \"\"),\n                            href: authState.status ? \"/createpost\" : \"login\",\n                            children: \"CREATE POST\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\VSCodeProjects\\\\NEXTJS-PROJECTS\\\\fullstack-app\\\\my-app\\\\src\\\\components\\\\NavBar.tsx\",\n                            lineNumber: 38,\n                            columnNumber: 11\n                        }, undefined),\n                        showNotSignedIn ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            className: \"block\",\n                            children: \" You have to login first!\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\VSCodeProjects\\\\NEXTJS-PROJECTS\\\\fullstack-app\\\\my-app\\\\src\\\\components\\\\NavBar.tsx\",\n                            lineNumber: 52,\n                            columnNumber: 30\n                        }, undefined) : \"\",\n                        !authState.status && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_link__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                            className: \"border border-gray-200 text-gray-900 bg-gray-100 transition duration-300 ease-in-out \\n          rounded-md py-3 flex justify-center w-36 hover:bg-gray-400 font-semibold hover:text-white \".concat(pathname == \"/login\" ? \"bg-gray-400 text-white\" : \"\"),\n                            href: \"/login\",\n                            children: \"LOGIN\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\VSCodeProjects\\\\NEXTJS-PROJECTS\\\\fullstack-app\\\\my-app\\\\src\\\\components\\\\NavBar.tsx\",\n                            lineNumber: 54,\n                            columnNumber: 13\n                        }, undefined),\n                        !authState.status && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_link__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                            className: \"border border-gray-200 text-gray-900 bg-gray-100 transition duration-300 ease-in-out \\n          rounded-md py-3 flex justify-center w-36 hover:bg-gray-400 font-semibold hover:text-white \".concat(pathname == \"/registration\" ? \"bg-gray-400 text-white\" : \"\", \" \"),\n                            href: \"/registration\",\n                            children: \"REGISTER\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\VSCodeProjects\\\\NEXTJS-PROJECTS\\\\fullstack-app\\\\my-app\\\\src\\\\components\\\\NavBar.tsx\",\n                            lineNumber: 65,\n                            columnNumber: 13\n                        }, undefined),\n                        authState.status && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"border border-gray-200 text-gray-900 bg-gray-100 transition duration-300 ease-in-out \\n              rounded-md py-3 flex justify-center w-36 cursor-pointer hover:bg-gray-400 font-semibold hover:text-white \".concat(pathname == \"/login\" ? \"bg-gray-400 text-white\" : \"\"),\n                            onClick: ()=>{\n                                localStorage.removeItem(\"accessToken\");\n                                setAuthState({\n                                    username: \"\",\n                                    id: 0,\n                                    status: false\n                                });\n                            },\n                            children: \"LOGOUT\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\VSCodeProjects\\\\NEXTJS-PROJECTS\\\\fullstack-app\\\\my-app\\\\src\\\\components\\\\NavBar.tsx\",\n                            lineNumber: 76,\n                            columnNumber: 13\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\VSCodeProjects\\\\NEXTJS-PROJECTS\\\\fullstack-app\\\\my-app\\\\src\\\\components\\\\NavBar.tsx\",\n                    lineNumber: 29,\n                    columnNumber: 9\n                }, undefined),\n                authState.username && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex-1\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\VSCodeProjects\\\\NEXTJS-PROJECTS\\\\fullstack-app\\\\my-app\\\\src\\\\components\\\\NavBar.tsx\",\n                    lineNumber: 90,\n                    columnNumber: 32\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\VSCodeProjects\\\\NEXTJS-PROJECTS\\\\fullstack-app\\\\my-app\\\\src\\\\components\\\\NavBar.tsx\",\n            lineNumber: 20,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false);\n};\n_s(NavBar, \"0jRRhgbk7d7kHp5Gy2K42HP3dHQ=\", false, function() {\n    return [\n        next_navigation__WEBPACK_IMPORTED_MODULE_3__.usePathname\n    ];\n});\n_c = NavBar;\n/* harmony default export */ __webpack_exports__[\"default\"] = (NavBar);\nvar _c;\n$RefreshReg$(_c, \"NavBar\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL05hdkJhci50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQzBCO0FBQ0c7QUFDaUI7QUFDYjtBQUNXO0FBQ1Q7QUFFbkMsTUFBTU0sU0FBUzs7SUFDYixNQUFNQyxXQUFXTCw0REFBV0E7SUFFNUIsTUFBTSxFQUFFTSxTQUFTLEVBQUVDLFlBQVksRUFBRSxHQUFHSixpREFBVUEsQ0FBQ0Qsb0RBQVdBO0lBQzFELE1BQU0sQ0FBQ00saUJBQWlCQyxtQkFBbUIsR0FBR1IsK0NBQVFBLENBQUM7SUFDdkRTLFFBQVFDLEdBQUcsQ0FBQ0w7SUFFWkksUUFBUUMsR0FBRyxDQUFDLDBCQUEwQkwsVUFBVU0sTUFBTTtJQUV0RCxxQkFDRTtrQkFDRSw0RUFBQ0M7WUFBSUMsV0FBVTs7Z0JBQ1pSLFVBQVVTLFFBQVEsa0JBQ2pCLDhEQUFDQztvQkFDQ0YsV0FBVTs4QkFHVFIsVUFBVVMsUUFBUTs7Ozs7OzhCQUd2Qiw4REFBQ0Y7b0JBQUlDLFdBQVU7O3NDQUNiLDhEQUFDZixpREFBSUE7NEJBQ0hlLFdBQVcscU1BRW9ELE9BQWhEVCxZQUFZLE1BQU0sMkJBQTJCOzRCQUM1RFksTUFBTTtzQ0FDUDs7Ozs7O3NDQUdELDhEQUFDbEIsaURBQUlBOzRCQUNIbUIsU0FBUztnQ0FDUFosVUFBVU0sTUFBTSxHQUNaSCxtQkFBbUIsU0FDbkJBLG1CQUFtQjs0QkFDekI7NEJBQ0FLLFdBQVcsOExBR1osT0FEQ1QsWUFBWSxnQkFBZ0IsMkJBQTJCOzRCQUV2RFksTUFBTVgsVUFBVU0sTUFBTSxHQUFHLGdCQUFnQjtzQ0FDMUM7Ozs7Ozt3QkFHQUosZ0NBQWtCLDhEQUFDVzs0QkFBRUwsV0FBVTtzQ0FBUTs7Ozs7d0NBQWdDO3dCQUN2RSxDQUFDUixVQUFVTSxNQUFNLGtCQUNoQiw4REFBQ2IsaURBQUlBOzRCQUNIZSxXQUFXLDhMQUdkLE9BRENULFlBQVksV0FBVywyQkFBMkI7NEJBRWhEWSxNQUFNO3NDQUNQOzs7Ozs7d0JBSUYsQ0FBQ1gsVUFBVU0sTUFBTSxrQkFDaEIsOERBQUNiLGlEQUFJQTs0QkFDSGUsV0FBVyw4TEFHZCxPQURDVCxZQUFZLGtCQUFrQiwyQkFBMkIsSUFDMUQ7NEJBQ0dZLE1BQU07c0NBQ1A7Ozs7Ozt3QkFJRlgsVUFBVU0sTUFBTSxrQkFDZiw4REFBQ0M7NEJBQ0NDLFdBQVcsaU5BR1YsT0FEQ1QsWUFBWSxXQUFXLDJCQUEyQjs0QkFFcERhLFNBQVM7Z0NBQ1BFLGFBQWFDLFVBQVUsQ0FBQztnQ0FDeEJkLGFBQWE7b0NBQUVRLFVBQVU7b0NBQUlPLElBQUk7b0NBQUdWLFFBQVE7Z0NBQU07NEJBQ3BEO3NDQUNEOzs7Ozs7Ozs7Ozs7Z0JBS0pOLFVBQVVTLFFBQVEsa0JBQUksOERBQUNGO29CQUFJQyxXQUFVOzs7Ozs7Ozs7Ozs7O0FBSTlDO0dBckZNVjs7UUFDYUosd0RBQVdBOzs7S0FEeEJJO0FBdUZOLCtEQUFlQSxNQUFNQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL05hdkJhci50c3g/ZDllYSJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIjtcclxuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XHJcbmltcG9ydCB7IHVzZVBhdGhuYW1lIH0gZnJvbSBcIm5leHQvbmF2aWdhdGlvblwiO1xyXG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBBdXRoQ29udGV4dCB9IGZyb20gXCIuLi9hcHAvbGF5b3V0XCI7XHJcbmltcG9ydCB7IHVzZUNvbnRleHQgfSBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmNvbnN0IE5hdkJhciA9ICgpID0+IHtcclxuICBjb25zdCBwYXRobmFtZSA9IHVzZVBhdGhuYW1lKCk7XHJcblxyXG4gIGNvbnN0IHsgYXV0aFN0YXRlLCBzZXRBdXRoU3RhdGUgfSA9IHVzZUNvbnRleHQoQXV0aENvbnRleHQpO1xyXG4gIGNvbnN0IFtzaG93Tm90U2lnbmVkSW4sIHNldFNob3dOb3RTaWduZWRJbl0gPSB1c2VTdGF0ZShudWxsKTtcclxuICBjb25zb2xlLmxvZyhhdXRoU3RhdGUpO1xyXG5cclxuICBjb25zb2xlLmxvZyhcIm5hdiBiYXIgYXV0aGVudGljYXRlZD9cIiwgYXV0aFN0YXRlLnN0YXR1cyk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZ2FwLTIgaXRlbXMtY2VudGVyIGp1c3RpZnktZXZlbmx5IG10LTMgIFwiPlxyXG4gICAgICAgIHthdXRoU3RhdGUudXNlcm5hbWUgJiYgKFxyXG4gICAgICAgICAgPGgyXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImZsZXgtMSAgXHJcbiAgICAgICAgdGV4dC1jZW50ZXJcIlxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICB7YXV0aFN0YXRlLnVzZXJuYW1lfVxyXG4gICAgICAgICAgPC9oMj5cclxuICAgICAgICApfVxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBnYXAtMiBqdXN0aWZ5LWNlbnRlclwiPlxyXG4gICAgICAgICAgPExpbmtcclxuICAgICAgICAgICAgY2xhc3NOYW1lPXtgYm9yZGVyIGJvcmRlci1ncmF5LTIwMCB0ZXh0LWdyYXktOTAwIGJnLWdyYXktMTAwIHRyYW5zaXRpb24gZHVyYXRpb24tMzAwIGVhc2UtaW4tb3V0IFxyXG4gICAgICAgIHJvdW5kZWQtbWQgcHktMyBmbGV4IGp1c3RpZnktY2VudGVyIHctMzYgaG92ZXI6YmctZ3JheS00MDAgZm9udC1zZW1pYm9sZFxyXG4gICAgICAgIGhvdmVyOnRleHQtd2hpdGUgJHtwYXRobmFtZSA9PSBcIi9cIiA/IFwiYmctZ3JheS00MDAgdGV4dC13aGl0ZVwiIDogXCJcIn1gfVxyXG4gICAgICAgICAgICBocmVmPXtcIi9cIn1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgSE9NRVxyXG4gICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgPExpbmtcclxuICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgICAgICAgIGF1dGhTdGF0ZS5zdGF0dXNcclxuICAgICAgICAgICAgICAgID8gc2V0U2hvd05vdFNpZ25lZEluKGZhbHNlKVxyXG4gICAgICAgICAgICAgICAgOiBzZXRTaG93Tm90U2lnbmVkSW4odHJ1ZSk7XHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT17YGJvcmRlciBib3JkZXItZ3JheS0yMDAgdGV4dC1ncmF5LTkwMCBiZy1ncmF5LTEwMCB0cmFuc2l0aW9uIGR1cmF0aW9uLTMwMCBlYXNlLWluLW91dCBcclxuICAgICAgICAgIHJvdW5kZWQtbWQgcHktMyBmbGV4IGp1c3RpZnktY2VudGVyIHctMzYgaG92ZXI6YmctZ3JheS00MDAgZm9udC1zZW1pYm9sZCBob3Zlcjp0ZXh0LXdoaXRlICR7XHJcbiAgICAgICAgICAgIHBhdGhuYW1lID09IFwiL2NyZWF0ZXBvc3RcIiA/IFwiYmctZ3JheS00MDAgdGV4dC13aGl0ZVwiIDogXCJcIlxyXG4gICAgICAgICAgfWB9XHJcbiAgICAgICAgICAgIGhyZWY9e2F1dGhTdGF0ZS5zdGF0dXMgPyBcIi9jcmVhdGVwb3N0XCIgOiBcImxvZ2luXCJ9XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIENSRUFURSBQT1NUXHJcbiAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgIHsgc2hvd05vdFNpZ25lZEluPyAgPHAgY2xhc3NOYW1lPVwiYmxvY2tcIj4gWW91IGhhdmUgdG8gbG9naW4gZmlyc3QhPC9wPiA6IFwiXCJ9XHJcbiAgICAgICAgICB7IWF1dGhTdGF0ZS5zdGF0dXMgJiYgKFxyXG4gICAgICAgICAgICA8TGlua1xyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17YGJvcmRlciBib3JkZXItZ3JheS0yMDAgdGV4dC1ncmF5LTkwMCBiZy1ncmF5LTEwMCB0cmFuc2l0aW9uIGR1cmF0aW9uLTMwMCBlYXNlLWluLW91dCBcclxuICAgICAgICAgIHJvdW5kZWQtbWQgcHktMyBmbGV4IGp1c3RpZnktY2VudGVyIHctMzYgaG92ZXI6YmctZ3JheS00MDAgZm9udC1zZW1pYm9sZCBob3Zlcjp0ZXh0LXdoaXRlICR7XHJcbiAgICAgICAgICAgIHBhdGhuYW1lID09IFwiL2xvZ2luXCIgPyBcImJnLWdyYXktNDAwIHRleHQtd2hpdGVcIiA6IFwiXCJcclxuICAgICAgICAgIH1gfVxyXG4gICAgICAgICAgICAgIGhyZWY9e1wiL2xvZ2luXCJ9XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICBMT0dJTlxyXG4gICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICApfVxyXG4gICAgICAgICAgeyFhdXRoU3RhdGUuc3RhdHVzICYmIChcclxuICAgICAgICAgICAgPExpbmtcclxuICAgICAgICAgICAgICBjbGFzc05hbWU9e2Bib3JkZXIgYm9yZGVyLWdyYXktMjAwIHRleHQtZ3JheS05MDAgYmctZ3JheS0xMDAgdHJhbnNpdGlvbiBkdXJhdGlvbi0zMDAgZWFzZS1pbi1vdXQgXHJcbiAgICAgICAgICByb3VuZGVkLW1kIHB5LTMgZmxleCBqdXN0aWZ5LWNlbnRlciB3LTM2IGhvdmVyOmJnLWdyYXktNDAwIGZvbnQtc2VtaWJvbGQgaG92ZXI6dGV4dC13aGl0ZSAke1xyXG4gICAgICAgICAgICBwYXRobmFtZSA9PSBcIi9yZWdpc3RyYXRpb25cIiA/IFwiYmctZ3JheS00MDAgdGV4dC13aGl0ZVwiIDogXCJcIlxyXG4gICAgICAgICAgfSBgfVxyXG4gICAgICAgICAgICAgIGhyZWY9e1wiL3JlZ2lzdHJhdGlvblwifVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgUkVHSVNURVJcclxuICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgKX1cclxuICAgICAgICAgIHthdXRoU3RhdGUuc3RhdHVzICYmIChcclxuICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17YGJvcmRlciBib3JkZXItZ3JheS0yMDAgdGV4dC1ncmF5LTkwMCBiZy1ncmF5LTEwMCB0cmFuc2l0aW9uIGR1cmF0aW9uLTMwMCBlYXNlLWluLW91dCBcclxuICAgICAgICAgICAgICByb3VuZGVkLW1kIHB5LTMgZmxleCBqdXN0aWZ5LWNlbnRlciB3LTM2IGN1cnNvci1wb2ludGVyIGhvdmVyOmJnLWdyYXktNDAwIGZvbnQtc2VtaWJvbGQgaG92ZXI6dGV4dC13aGl0ZSAke1xyXG4gICAgICAgICAgICAgICAgcGF0aG5hbWUgPT0gXCIvbG9naW5cIiA/IFwiYmctZ3JheS00MDAgdGV4dC13aGl0ZVwiIDogXCJcIlxyXG4gICAgICAgICAgICAgIH1gfVxyXG4gICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKFwiYWNjZXNzVG9rZW5cIik7XHJcbiAgICAgICAgICAgICAgICBzZXRBdXRoU3RhdGUoeyB1c2VybmFtZTogXCJcIiwgaWQ6IDAsIHN0YXR1czogZmFsc2UgfSk7XHJcbiAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIExPR09VVFxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICl9XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAge2F1dGhTdGF0ZS51c2VybmFtZSAmJiA8ZGl2IGNsYXNzTmFtZT1cImZsZXgtMVwiPjwvZGl2Pn1cclxuICAgICAgPC9kaXY+XHJcbiAgICA8Lz5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgTmF2QmFyO1xyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJMaW5rIiwidXNlUGF0aG5hbWUiLCJ1c2VTdGF0ZSIsIkF1dGhDb250ZXh0IiwidXNlQ29udGV4dCIsIk5hdkJhciIsInBhdGhuYW1lIiwiYXV0aFN0YXRlIiwic2V0QXV0aFN0YXRlIiwic2hvd05vdFNpZ25lZEluIiwic2V0U2hvd05vdFNpZ25lZEluIiwiY29uc29sZSIsImxvZyIsInN0YXR1cyIsImRpdiIsImNsYXNzTmFtZSIsInVzZXJuYW1lIiwiaDIiLCJocmVmIiwib25DbGljayIsInAiLCJsb2NhbFN0b3JhZ2UiLCJyZW1vdmVJdGVtIiwiaWQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/NavBar.tsx\n"));

/***/ })

});