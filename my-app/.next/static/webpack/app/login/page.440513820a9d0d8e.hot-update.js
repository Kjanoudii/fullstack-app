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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (\"c2ce5491672e\");\nif (true) { module.hot.accept() }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvZ2xvYmFscy5jc3MiLCJtYXBwaW5ncyI6IjtBQUFBLCtEQUFlLGNBQWM7QUFDN0IsSUFBSSxJQUFVLElBQUksaUJBQWlCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9hcHAvZ2xvYmFscy5jc3M/OWU2MyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBcImMyY2U1NDkxNjcyZVwiXG5pZiAobW9kdWxlLmhvdCkgeyBtb2R1bGUuaG90LmFjY2VwdCgpIH1cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/globals.css\n"));

/***/ }),

/***/ "(app-pages-browser)/./src/app/login/page.tsx":
/*!********************************!*\
  !*** ./src/app/login/page.tsx ***!
  \********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! axios */ \"(app-pages-browser)/./node_modules/axios/lib/axios.js\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/navigation */ \"(app-pages-browser)/./node_modules/next/dist/api/navigation.js\");\n/* harmony import */ var _layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../layout */ \"(app-pages-browser)/./src/app/layout.tsx\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\nfunction Login() {\n    _s();\n    const [username, setUsername] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [password, setPassword] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [errorMessage, setErrorMessage] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const { authState, setAuthState } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_layout__WEBPACK_IMPORTED_MODULE_3__.AuthContext);\n    const router = (0,next_navigation__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    const login = async ()=>{\n        const data = {\n            username,\n            password\n        };\n        try {\n            const response = await axios__WEBPACK_IMPORTED_MODULE_4__[\"default\"].post(\"http://localhost:3001/auth/login\", data);\n            console.log(\"Login successful:\", response.data);\n            localStorage.setItem(\"accessToken\", response.data.token);\n            const username = await response.data.username;\n            const id = await response.data.id;\n            setAuthState({\n                username: username,\n                id: response.data.username,\n                status: true\n            });\n            router.push(\"/\");\n            setErrorMessage(\"\"); // Clear any previous error messages\n        } catch (error) {\n            console.log(error);\n            alert(\"WRONG USER\");\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"loginContainer\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                children: \"Username:\"\n            }, void 0, false, {\n                fileName: \"C:\\\\VSCodeProjects\\\\NEXTJS-PROJECTS\\\\fullstack-app\\\\my-app\\\\src\\\\app\\\\login\\\\page.tsx\",\n                lineNumber: 40,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                className: \"px-3\",\n                type: \"text\",\n                value: username,\n                onChange: (event)=>{\n                    setUsername(event.target.value);\n                }\n            }, void 0, false, {\n                fileName: \"C:\\\\VSCodeProjects\\\\NEXTJS-PROJECTS\\\\fullstack-app\\\\my-app\\\\src\\\\app\\\\login\\\\page.tsx\",\n                lineNumber: 41,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                children: \"Password:\"\n            }, void 0, false, {\n                fileName: \"C:\\\\VSCodeProjects\\\\NEXTJS-PROJECTS\\\\fullstack-app\\\\my-app\\\\src\\\\app\\\\login\\\\page.tsx\",\n                lineNumber: 49,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                className: \"px-3\",\n                type: \"password\",\n                value: password,\n                onChange: (event)=>{\n                    setPassword(event.target.value);\n                }\n            }, void 0, false, {\n                fileName: \"C:\\\\VSCodeProjects\\\\NEXTJS-PROJECTS\\\\fullstack-app\\\\my-app\\\\src\\\\app\\\\login\\\\page.tsx\",\n                lineNumber: 50,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                onClick: login,\n                children: \"Login\"\n            }, void 0, false, {\n                fileName: \"C:\\\\VSCodeProjects\\\\NEXTJS-PROJECTS\\\\fullstack-app\\\\my-app\\\\src\\\\app\\\\login\\\\page.tsx\",\n                lineNumber: 59,\n                columnNumber: 7\n            }, this),\n            errorMessage && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"errorMessage\",\n                children: errorMessage\n            }, void 0, false, {\n                fileName: \"C:\\\\VSCodeProjects\\\\NEXTJS-PROJECTS\\\\fullstack-app\\\\my-app\\\\src\\\\app\\\\login\\\\page.tsx\",\n                lineNumber: 61,\n                columnNumber: 24\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\VSCodeProjects\\\\NEXTJS-PROJECTS\\\\fullstack-app\\\\my-app\\\\src\\\\app\\\\login\\\\page.tsx\",\n        lineNumber: 39,\n        columnNumber: 5\n    }, this);\n}\n_s(Login, \"3pCKCJ6E0PSWyau1rPtXAA8wits=\", false, function() {\n    return [\n        next_navigation__WEBPACK_IMPORTED_MODULE_2__.useRouter\n    ];\n});\n_c = Login;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Login);\nvar _c;\n$RefreshReg$(_c, \"Login\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvbG9naW4vcGFnZS50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ3dDO0FBQ2Q7QUFDa0I7QUFDSjtBQUNMO0FBQ25DLFNBQVNNOztJQUNQLE1BQU0sQ0FBQ0MsVUFBVUMsWUFBWSxHQUFHUCwrQ0FBUUEsQ0FBQztJQUN6QyxNQUFNLENBQUNRLFVBQVVDLFlBQVksR0FBR1QsK0NBQVFBLENBQUM7SUFDekMsTUFBTSxDQUFDVSxjQUFjQyxnQkFBZ0IsR0FBR1gsK0NBQVFBLENBQUM7SUFFbkQsTUFBTSxFQUFFWSxTQUFTLEVBQUVDLFlBQVksRUFBRSxHQUFHVCxpREFBVUEsQ0FBQ0QsZ0RBQVdBO0lBQ3hELE1BQU1XLFNBQVNaLDBEQUFTQTtJQUN4QixNQUFNYSxRQUFRO1FBQ1osTUFBTUMsT0FBTztZQUFFVjtZQUFVRTtRQUFTO1FBQ2xDLElBQUk7WUFDRixNQUFNUyxXQUFXLE1BQU1oQiw2Q0FBS0EsQ0FBQ2lCLElBQUksQ0FDL0Isb0NBQ0FGO1lBRUZHLFFBQVFDLEdBQUcsQ0FBQyxxQkFBcUJILFNBQVNELElBQUk7WUFDOUNLLGFBQWFDLE9BQU8sQ0FBQyxlQUFlTCxTQUFTRCxJQUFJLENBQUNPLEtBQUs7WUFDdkQsTUFBTWpCLFdBQVcsTUFBTVcsU0FBU0QsSUFBSSxDQUFDVixRQUFRO1lBQzdDLE1BQU1rQixLQUFLLE1BQU1QLFNBQVNELElBQUksQ0FBQ1EsRUFBRTtZQUNqQ1gsYUFBYTtnQkFDWFAsVUFBVUE7Z0JBQ1ZrQixJQUFJUCxTQUFTRCxJQUFJLENBQUNWLFFBQVE7Z0JBQzFCbUIsUUFBUTtZQUNWO1lBQ0FYLE9BQU9ZLElBQUksQ0FBQztZQUNaZixnQkFBZ0IsS0FBSyxvQ0FBb0M7UUFDM0QsRUFBRSxPQUFPZ0IsT0FBTztZQUNkUixRQUFRQyxHQUFHLENBQUNPO1lBQ1pDLE1BQU07UUFDUjtJQUNGO0lBRUEscUJBQ0UsOERBQUNDO1FBQUlDLFdBQVU7OzBCQUNiLDhEQUFDQzswQkFBTTs7Ozs7OzBCQUNQLDhEQUFDQztnQkFDQ0YsV0FBVTtnQkFDVkcsTUFBSztnQkFDTEMsT0FBTzVCO2dCQUNQNkIsVUFBVSxDQUFDQztvQkFDVDdCLFlBQVk2QixNQUFNQyxNQUFNLENBQUNILEtBQUs7Z0JBQ2hDOzs7Ozs7MEJBRUYsOERBQUNIOzBCQUFNOzs7Ozs7MEJBQ1AsOERBQUNDO2dCQUNDRixXQUFVO2dCQUNWRyxNQUFLO2dCQUNMQyxPQUFPMUI7Z0JBQ1AyQixVQUFVLENBQUNDO29CQUNUM0IsWUFBWTJCLE1BQU1DLE1BQU0sQ0FBQ0gsS0FBSztnQkFDaEM7Ozs7OzswQkFHRiw4REFBQ0k7Z0JBQU9DLFNBQVN4QjswQkFBTzs7Ozs7O1lBRXZCTCw4QkFBZ0IsOERBQUNtQjtnQkFBSUMsV0FBVTswQkFBZ0JwQjs7Ozs7Ozs7Ozs7O0FBR3REO0dBekRTTDs7UUFNUUgsc0RBQVNBOzs7S0FOakJHO0FBMkRULCtEQUFlQSxLQUFLQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9hcHAvbG9naW4vcGFnZS50c3g/ZmM2MyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIjtcclxuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvbmF2aWdhdGlvblwiO1xyXG5pbXBvcnQgeyBBdXRoQ29udGV4dCB9IGZyb20gXCIuLi9sYXlvdXRcIjtcclxuaW1wb3J0IHsgdXNlQ29udGV4dCB9IGZyb20gXCJyZWFjdFwiO1xyXG5mdW5jdGlvbiBMb2dpbigpIHtcclxuICBjb25zdCBbdXNlcm5hbWUsIHNldFVzZXJuYW1lXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IFtwYXNzd29yZCwgc2V0UGFzc3dvcmRdID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgW2Vycm9yTWVzc2FnZSwgc2V0RXJyb3JNZXNzYWdlXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG5cclxuY29uc3QgeyBhdXRoU3RhdGUsIHNldEF1dGhTdGF0ZSB9ID0gdXNlQ29udGV4dChBdXRoQ29udGV4dCk7XHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKClcclxuICBjb25zdCBsb2dpbiA9IGFzeW5jICgpID0+IHtcclxuICAgIGNvbnN0IGRhdGEgPSB7IHVzZXJuYW1lLCBwYXNzd29yZCB9O1xyXG4gICAgdHJ5IHtcclxuICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBheGlvcy5wb3N0KFxyXG4gICAgICAgIFwiaHR0cDovL2xvY2FsaG9zdDozMDAxL2F1dGgvbG9naW5cIixcclxuICAgICAgICBkYXRhXHJcbiAgICAgICk7XHJcbiAgICAgIGNvbnNvbGUubG9nKFwiTG9naW4gc3VjY2Vzc2Z1bDpcIiwgcmVzcG9uc2UuZGF0YSk7XHJcbiAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwiYWNjZXNzVG9rZW5cIiwgcmVzcG9uc2UuZGF0YS50b2tlbilcclxuICAgICAgY29uc3QgdXNlcm5hbWUgPSBhd2FpdCByZXNwb25zZS5kYXRhLnVzZXJuYW1lO1xyXG4gICAgICBjb25zdCBpZCA9IGF3YWl0IHJlc3BvbnNlLmRhdGEuaWQ7XHJcbiAgICAgIHNldEF1dGhTdGF0ZSh7XHJcbiAgICAgICAgdXNlcm5hbWU6IHVzZXJuYW1lLFxyXG4gICAgICAgIGlkOiByZXNwb25zZS5kYXRhLnVzZXJuYW1lLFxyXG4gICAgICAgIHN0YXR1czogdHJ1ZSxcclxuICAgICAgfSk7XHJcbiAgICAgIHJvdXRlci5wdXNoKCcvJylcclxuICAgICAgc2V0RXJyb3JNZXNzYWdlKFwiXCIpOyAvLyBDbGVhciBhbnkgcHJldmlvdXMgZXJyb3IgbWVzc2FnZXNcclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKGVycm9yKVxyXG4gICAgICBhbGVydChcIldST05HIFVTRVJcIilcclxuICAgIH1cclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJsb2dpbkNvbnRhaW5lclwiPlxyXG4gICAgICA8bGFiZWw+VXNlcm5hbWU6PC9sYWJlbD5cclxuICAgICAgPGlucHV0XHJcbiAgICAgICAgY2xhc3NOYW1lPVwicHgtM1wiXHJcbiAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgIHZhbHVlPXt1c2VybmFtZX1cclxuICAgICAgICBvbkNoYW5nZT17KGV2ZW50KSA9PiB7XHJcbiAgICAgICAgICBzZXRVc2VybmFtZShldmVudC50YXJnZXQudmFsdWUpO1xyXG4gICAgICAgIH19XHJcbiAgICAgIC8+XHJcbiAgICAgIDxsYWJlbD5QYXNzd29yZDo8L2xhYmVsPlxyXG4gICAgICA8aW5wdXRcclxuICAgICAgICBjbGFzc05hbWU9XCJweC0zXCJcclxuICAgICAgICB0eXBlPVwicGFzc3dvcmRcIlxyXG4gICAgICAgIHZhbHVlPXtwYXNzd29yZH1cclxuICAgICAgICBvbkNoYW5nZT17KGV2ZW50KSA9PiB7XHJcbiAgICAgICAgICBzZXRQYXNzd29yZChldmVudC50YXJnZXQudmFsdWUpO1xyXG4gICAgICAgIH19XHJcbiAgICAgIC8+XHJcblxyXG4gICAgICA8YnV0dG9uIG9uQ2xpY2s9e2xvZ2lufT5Mb2dpbjwvYnV0dG9uPlxyXG5cclxuICAgICAge2Vycm9yTWVzc2FnZSAmJiA8ZGl2IGNsYXNzTmFtZT1cImVycm9yTWVzc2FnZVwiPntlcnJvck1lc3NhZ2V9PC9kaXY+fVxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTG9naW47XHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwiYXhpb3MiLCJ1c2VSb3V0ZXIiLCJBdXRoQ29udGV4dCIsInVzZUNvbnRleHQiLCJMb2dpbiIsInVzZXJuYW1lIiwic2V0VXNlcm5hbWUiLCJwYXNzd29yZCIsInNldFBhc3N3b3JkIiwiZXJyb3JNZXNzYWdlIiwic2V0RXJyb3JNZXNzYWdlIiwiYXV0aFN0YXRlIiwic2V0QXV0aFN0YXRlIiwicm91dGVyIiwibG9naW4iLCJkYXRhIiwicmVzcG9uc2UiLCJwb3N0IiwiY29uc29sZSIsImxvZyIsImxvY2FsU3RvcmFnZSIsInNldEl0ZW0iLCJ0b2tlbiIsImlkIiwic3RhdHVzIiwicHVzaCIsImVycm9yIiwiYWxlcnQiLCJkaXYiLCJjbGFzc05hbWUiLCJsYWJlbCIsImlucHV0IiwidHlwZSIsInZhbHVlIiwib25DaGFuZ2UiLCJldmVudCIsInRhcmdldCIsImJ1dHRvbiIsIm9uQ2xpY2siXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/login/page.tsx\n"));

/***/ })

});