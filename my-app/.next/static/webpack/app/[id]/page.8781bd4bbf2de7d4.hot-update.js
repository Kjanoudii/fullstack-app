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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ \"(app-pages-browser)/./node_modules/axios/lib/axios.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\nconst Page = (param)=>{\n    let { params } = param;\n    _s();\n    const [post, setPost] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({});\n    const { id } = params;\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const fetchData = async ()=>{\n            try {\n                const res = await axios__WEBPACK_IMPORTED_MODULE_2__[\"default\"].get(\"http://localhost:3001/posts/byId/\".concat(id));\n                setPost(res.data);\n                console.log(\"This is the data:\", res.data);\n            } catch (error) {\n                console.error(\"Error fetching data:\", error);\n            }\n        };\n        fetchData();\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"text-3xl\",\n        children: post\n    }, void 0, false, {\n        fileName: \"C:\\\\VSCodeProjects\\\\NEXTJS-PROJECTS\\\\fullstack-app\\\\my-app\\\\src\\\\app\\\\[id]\\\\page.tsx\",\n        lineNumber: 33,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Page, \"4GS+YXYxyueLsdYC6PKVvqC0Cl4=\");\n_c = Page;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Page);\nvar _c;\n$RefreshReg$(_c, \"Page\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvW2lkXS9wYWdlLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBRXlDO0FBQ2hCO0FBTXpCLE1BQU1HLE9BQU87UUFBQyxFQUFDQyxNQUFNLEVBQVc7O0lBRWhDLE1BQU0sQ0FBQ0MsTUFBTUMsUUFBUSxHQUFHTCwrQ0FBUUEsQ0FBQyxDQUFDO0lBR2xDLE1BQU0sRUFBQ00sRUFBRSxFQUFDLEdBQUdIO0lBQ1hKLGdEQUFTQSxDQUFDO1FBQ1IsTUFBTVEsWUFBWTtZQUNoQixJQUFJO2dCQUNGLE1BQU1DLE1BQU0sTUFBTVAsNkNBQUtBLENBQUNRLEdBQUcsQ0FBQyxvQ0FBdUMsT0FBSEg7Z0JBQ2hFRCxRQUFRRyxJQUFJRSxJQUFJO2dCQUNoQkMsUUFBUUMsR0FBRyxDQUFDLHFCQUFxQkosSUFBSUUsSUFBSTtZQUMzQyxFQUFFLE9BQU9HLE9BQU87Z0JBQ2RGLFFBQVFFLEtBQUssQ0FBQyx3QkFBd0JBO1lBQ3hDO1FBQ0Y7UUFFQU47SUFDRixHQUFHLEVBQUU7SUFJTCxxQkFDRSw4REFBQ087UUFBSUMsV0FBVTtrQkFBWVg7Ozs7OztBQUUvQjtHQXpCTUY7S0FBQUE7QUEyQk4sK0RBQWVBLElBQUlBLEVBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2FwcC9baWRdL3BhZ2UudHN4P2ZhMTciXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBjbGllbnQnXHJcblxyXG5pbXBvcnQge3VzZUVmZmVjdCwgdXNlU3RhdGV9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnXHJcbnR5cGUgUGFnZVByb3BzID0ge1xyXG4gIHBhcmFtczoge1xyXG4gICAgaWQ6IGFueTtcclxuICB9O1xyXG59O1xyXG5jb25zdCBQYWdlID0gKHtwYXJhbXN9OlBhZ2VQcm9wcykgPT4ge1xyXG5cclxuY29uc3QgW3Bvc3QsIHNldFBvc3RdID0gdXNlU3RhdGUoe30pXHJcblxyXG5cclxuY29uc3Qge2lkfSA9IHBhcmFtc1xyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBjb25zdCBmZXRjaERhdGEgPSBhc3luYyAoKSA9PiB7XHJcbiAgICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgcmVzID0gYXdhaXQgYXhpb3MuZ2V0KGBodHRwOi8vbG9jYWxob3N0OjMwMDEvcG9zdHMvYnlJZC8ke2lkfWApO1xyXG4gICAgICAgIHNldFBvc3QocmVzLmRhdGEpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiVGhpcyBpcyB0aGUgZGF0YTpcIiwgcmVzLmRhdGEpO1xyXG4gICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvciBmZXRjaGluZyBkYXRhOlwiLCBlcnJvcik7XHJcbiAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgZmV0Y2hEYXRhKCk7XHJcbiAgfSwgW10pO1xyXG4gIFxyXG4gICAgXHJcbiAgIFxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT0ndGV4dC0zeGwnPntwb3N0fTwvZGl2PlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUGFnZSJdLCJuYW1lcyI6WyJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsImF4aW9zIiwiUGFnZSIsInBhcmFtcyIsInBvc3QiLCJzZXRQb3N0IiwiaWQiLCJmZXRjaERhdGEiLCJyZXMiLCJnZXQiLCJkYXRhIiwiY29uc29sZSIsImxvZyIsImVycm9yIiwiZGl2IiwiY2xhc3NOYW1lIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/[id]/page.tsx\n"));

/***/ })

});