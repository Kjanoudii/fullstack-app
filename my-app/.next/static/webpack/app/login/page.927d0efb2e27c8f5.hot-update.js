"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/login/page",{

/***/ "(app-pages-browser)/./src/app/globals.css":
/*!*****************************!*\
  !*** ./src/app/globals.css ***!
  \*****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (\"4090d594880a\");\nif (true) { module.hot.accept() }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvZ2xvYmFscy5jc3MiLCJtYXBwaW5ncyI6IjtBQUFBLCtEQUFlLGNBQWM7QUFDN0IsSUFBSSxJQUFVLElBQUksaUJBQWlCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9hcHAvZ2xvYmFscy5jc3M/OWU2MyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBcIjQwOTBkNTk0ODgwYVwiXG5pZiAobW9kdWxlLmhvdCkgeyBtb2R1bGUuaG90LmFjY2VwdCgpIH1cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/globals.css\n"));

/***/ }),

/***/ "(app-pages-browser)/./src/app/layout.tsx":
/*!****************************!*\
  !*** ./src/app/layout.tsx ***!
  \****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   AuthContext: function() { return /* binding */ AuthContext; },\n/* harmony export */   \"default\": function() { return /* binding */ RootLayout; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var next_font_google_target_css_path_src_app_layout_tsx_import_Inter_arguments_subsets_latin_variableName_inter___WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/font/google/target.css?{\"path\":\"src\\\\app\\\\layout.tsx\",\"import\":\"Inter\",\"arguments\":[{\"subsets\":[\"latin\"]}],\"variableName\":\"inter\"} */ \"(app-pages-browser)/./node_modules/next/font/google/target.css?{\\\"path\\\":\\\"src\\\\\\\\app\\\\\\\\layout.tsx\\\",\\\"import\\\":\\\"Inter\\\",\\\"arguments\\\":[{\\\"subsets\\\":[\\\"latin\\\"]}],\\\"variableName\\\":\\\"inter\\\"}\");\n/* harmony import */ var next_font_google_target_css_path_src_app_layout_tsx_import_Inter_arguments_subsets_latin_variableName_inter___WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_font_google_target_css_path_src_app_layout_tsx_import_Inter_arguments_subsets_latin_variableName_inter___WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _globals_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./globals.css */ \"(app-pages-browser)/./src/app/globals.css\");\n/* harmony import */ var _components_NavBar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/NavBar */ \"(app-pages-browser)/./src/components/NavBar.tsx\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! axios */ \"(app-pages-browser)/./node_modules/axios/lib/axios.js\");\n/* __next_internal_client_entry_do_not_use__ AuthContext,default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\nconst defaultAuthContext = {\n    authState: {\n        username: \"\",\n        id: 0,\n        status: false\n    },\n    setAuthState: ()=>{}\n};\nconst AuthContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_3__.createContext)(defaultAuthContext);\nfunction RootLayout(param) {\n    let { children } = param;\n    _s();\n    const [authState, setAuthState] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)({\n        username: \"\",\n        id: 0,\n        status: false\n    });\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{\n        axios__WEBPACK_IMPORTED_MODULE_4__[\"default\"].get(\"http://localhost:3001/auth/auth\", {\n            headers: {\n                accessToken: localStorage.getItem(\"accessToken\")\n            }\n        }).then((response)=>{\n            if (response.data.error) {\n                setAuthState({\n                    ...authState,\n                    status: false\n                });\n            } else {\n                setAuthState({\n                    username: response.data.username,\n                    id: response.data.id,\n                    status: true\n                });\n            }\n        });\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"html\", {\n        lang: \"en\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"body\", {\n            className: (next_font_google_target_css_path_src_app_layout_tsx_import_Inter_arguments_subsets_latin_variableName_inter___WEBPACK_IMPORTED_MODULE_5___default().className),\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(AuthContext.Provider, {\n                value: {\n                    authState,\n                    setAuthState\n                },\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_NavBar__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                        fileName: \"C:\\\\VSCodeProjects\\\\NEXTJS-PROJECTS\\\\fullstack-app\\\\my-app\\\\src\\\\app\\\\layout.tsx\",\n                        lineNumber: 67,\n                        columnNumber: 11\n                    }, this),\n                    children\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\VSCodeProjects\\\\NEXTJS-PROJECTS\\\\fullstack-app\\\\my-app\\\\src\\\\app\\\\layout.tsx\",\n                lineNumber: 66,\n                columnNumber: 9\n            }, this)\n        }, void 0, false, {\n            fileName: \"C:\\\\VSCodeProjects\\\\NEXTJS-PROJECTS\\\\fullstack-app\\\\my-app\\\\src\\\\app\\\\layout.tsx\",\n            lineNumber: 65,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\VSCodeProjects\\\\NEXTJS-PROJECTS\\\\fullstack-app\\\\my-app\\\\src\\\\app\\\\layout.tsx\",\n        lineNumber: 64,\n        columnNumber: 5\n    }, this);\n}\n_s(RootLayout, \"tnaETSGZZVgFJ8iuDwVvfYyMJ9w=\");\n_c = RootLayout;\nvar _c;\n$RefreshReg$(_c, \"RootLayout\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvbGF5b3V0LnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFLTUE7QUFGaUI7QUFDbUI7QUFFSjtBQUNNO0FBQ2xCO0FBaUIxQixNQUFNTSxxQkFBc0M7SUFDMUNDLFdBQVc7UUFBRUMsVUFBVTtRQUFJQyxJQUFJO1FBQUdDLFFBQVE7SUFBTTtJQUNoREMsY0FBYyxLQUFPO0FBQ3ZCO0FBQ08sTUFBTUMsNEJBQWNWLG9EQUFhQSxDQUFrQkksb0JBQW9CO0FBRS9ELFNBQVNPLFdBQVcsS0FJakM7UUFKaUMsRUFDakNDLFFBQVEsRUFHUixHQUppQzs7SUFLakMsTUFBTSxDQUFDUCxXQUFXSSxhQUFhLEdBQUdSLCtDQUFRQSxDQUFDO1FBQ3pDSyxVQUFVO1FBQ1ZDLElBQUk7UUFDSkMsUUFBUTtJQUNWO0lBRUFOLGdEQUFTQSxDQUFDO1FBQ1JDLDZDQUFLQSxDQUNGVSxHQUFHLENBQUMsbUNBQW1DO1lBQ3RDQyxTQUFTO2dCQUNQQyxhQUFhQyxhQUFhQyxPQUFPLENBQUM7WUFDcEM7UUFDRixHQUNDQyxJQUFJLENBQUMsQ0FBQ0M7WUFDTCxJQUFJQSxTQUFTQyxJQUFJLENBQUNDLEtBQUssRUFBRTtnQkFDdkJaLGFBQWE7b0JBQUUsR0FBR0osU0FBUztvQkFBRUcsUUFBUTtnQkFBTTtZQUM3QyxPQUFPO2dCQUNMQyxhQUFhO29CQUNYSCxVQUFVYSxTQUFTQyxJQUFJLENBQUNkLFFBQVE7b0JBQ2hDQyxJQUFJWSxTQUFTQyxJQUFJLENBQUNiLEVBQUU7b0JBQ3BCQyxRQUFRO2dCQUNWO1lBQ0Y7UUFDRjtJQUNKLEdBQUcsRUFBRTtJQUVMLHFCQUNFLDhEQUFDYztRQUFLQyxNQUFLO2tCQUNULDRFQUFDQztZQUFLQyxXQUFXM0IsK0pBQWU7c0JBQzlCLDRFQUFDWSxZQUFZZ0IsUUFBUTtnQkFBQ0MsT0FBTztvQkFBRXRCO29CQUFXSTtnQkFBYTs7a0NBQ3JELDhEQUFDViwwREFBTUE7Ozs7O29CQUNOYTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFLWDtHQXpDd0JEO0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9hcHAvbGF5b3V0LnRzeD81N2E5Il0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiO1xuXG5pbXBvcnQgeyBJbnRlciB9IGZyb20gXCJuZXh0L2ZvbnQvZ29vZ2xlXCI7XG5pbXBvcnQgXCIuL2dsb2JhbHMuY3NzXCI7XG5pbXBvcnQgTmF2QmFyIGZyb20gXCIuLi9jb21wb25lbnRzL05hdkJhclwiO1xuY29uc3QgaW50ZXIgPSBJbnRlcih7IHN1YnNldHM6IFtcImxhdGluXCJdIH0pO1xuaW1wb3J0IHsgY3JlYXRlQ29udGV4dCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xuLy8gZXhwb3J0IGNvbnN0IG1ldGFkYXRhOiBNZXRhZGF0YSA9IHtcbi8vICAgdGl0bGU6IFwiQ3JlYXRlIE5leHQgQXBwXCIsXG4vLyAgIGRlc2NyaXB0aW9uOiBcIkdlbmVyYXRlZCBieSBjcmVhdGUgbmV4dCBhcHBcIixcbi8vIH07XG5cbmludGVyZmFjZSBBdXRoU3RhdGVUeXBlIHtcbiAgdXNlcm5hbWU6IHN0cmluZztcbiAgaWQ6IG51bWJlcjtcbiAgc3RhdHVzOiBib29sZWFuO1xufVxuXG5pbnRlcmZhY2UgQXV0aENvbnRleHRUeXBlIHtcbiAgYXV0aFN0YXRlOiBBdXRoU3RhdGVUeXBlO1xuICBzZXRBdXRoU3RhdGU6IFJlYWN0LkRpc3BhdGNoPFJlYWN0LlNldFN0YXRlQWN0aW9uPEF1dGhTdGF0ZVR5cGU+Pjtcbn1cblxuY29uc3QgZGVmYXVsdEF1dGhDb250ZXh0OiBBdXRoQ29udGV4dFR5cGUgPSB7XG4gIGF1dGhTdGF0ZTogeyB1c2VybmFtZTogXCJcIiwgaWQ6IDAsIHN0YXR1czogZmFsc2UgfSxcbiAgc2V0QXV0aFN0YXRlOiAoKSA9PiB7fSxcbn07XG5leHBvcnQgY29uc3QgQXV0aENvbnRleHQgPSBjcmVhdGVDb250ZXh0PEF1dGhDb250ZXh0VHlwZT4oZGVmYXVsdEF1dGhDb250ZXh0KTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUm9vdExheW91dCh7XG4gIGNoaWxkcmVuLFxufTogUmVhZG9ubHk8e1xuICBjaGlsZHJlbjogUmVhY3QuUmVhY3ROb2RlO1xufT4pIHtcbiAgY29uc3QgW2F1dGhTdGF0ZSwgc2V0QXV0aFN0YXRlXSA9IHVzZVN0YXRlKHtcbiAgICB1c2VybmFtZTogXCJcIixcbiAgICBpZDogMCxcbiAgICBzdGF0dXM6IGZhbHNlLFxuICB9KTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGF4aW9zXG4gICAgICAuZ2V0KFwiaHR0cDovL2xvY2FsaG9zdDozMDAxL2F1dGgvYXV0aFwiLCB7XG4gICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICBhY2Nlc3NUb2tlbjogbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJhY2Nlc3NUb2tlblwiKSxcbiAgICAgICAgfSxcbiAgICAgIH0pXG4gICAgICAudGhlbigocmVzcG9uc2UpID0+IHtcbiAgICAgICAgaWYgKHJlc3BvbnNlLmRhdGEuZXJyb3IpIHtcbiAgICAgICAgICBzZXRBdXRoU3RhdGUoeyAuLi5hdXRoU3RhdGUsIHN0YXR1czogZmFsc2UgfSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgc2V0QXV0aFN0YXRlKHtcbiAgICAgICAgICAgIHVzZXJuYW1lOiByZXNwb25zZS5kYXRhLnVzZXJuYW1lLFxuICAgICAgICAgICAgaWQ6IHJlc3BvbnNlLmRhdGEuaWQsXG4gICAgICAgICAgICBzdGF0dXM6IHRydWUsXG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICB9LCBbXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8aHRtbCBsYW5nPVwiZW5cIj5cbiAgICAgIDxib2R5IGNsYXNzTmFtZT17aW50ZXIuY2xhc3NOYW1lfT5cbiAgICAgICAgPEF1dGhDb250ZXh0LlByb3ZpZGVyIHZhbHVlPXt7IGF1dGhTdGF0ZSwgc2V0QXV0aFN0YXRlIH19PlxuICAgICAgICAgIDxOYXZCYXIgLz5cbiAgICAgICAgICB7Y2hpbGRyZW59XG4gICAgICAgIDwvQXV0aENvbnRleHQuUHJvdmlkZXI+XG4gICAgICA8L2JvZHk+XG4gICAgPC9odG1sPlxuICApO1xufVxuIl0sIm5hbWVzIjpbImludGVyIiwiTmF2QmFyIiwiY3JlYXRlQ29udGV4dCIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiYXhpb3MiLCJkZWZhdWx0QXV0aENvbnRleHQiLCJhdXRoU3RhdGUiLCJ1c2VybmFtZSIsImlkIiwic3RhdHVzIiwic2V0QXV0aFN0YXRlIiwiQXV0aENvbnRleHQiLCJSb290TGF5b3V0IiwiY2hpbGRyZW4iLCJnZXQiLCJoZWFkZXJzIiwiYWNjZXNzVG9rZW4iLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwidGhlbiIsInJlc3BvbnNlIiwiZGF0YSIsImVycm9yIiwiaHRtbCIsImxhbmciLCJib2R5IiwiY2xhc3NOYW1lIiwiUHJvdmlkZXIiLCJ2YWx1ZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/layout.tsx\n"));

/***/ })

});