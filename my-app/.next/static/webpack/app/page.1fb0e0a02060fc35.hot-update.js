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

/***/ "(app-pages-browser)/./src/app/page.tsx":
/*!**************************!*\
  !*** ./src/app/page.tsx ***!
  \**************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ \"(app-pages-browser)/./node_modules/axios/lib/axios.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"(app-pages-browser)/./node_modules/next/dist/api/link.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\nfunction Home() {\n    _s();\n    // Use the defined type in the state\n    const [postsData, setPostsData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        axios__WEBPACK_IMPORTED_MODULE_3__[\"default\"].get(\"http://localhost:3001/posts\").then((res)=>{\n            setPostsData(res.data);\n        });\n    }, []);\n    console.log(\"hello\");\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"App\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex gap-2\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_link__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                        className: \"border border-gray-200 text-gray-900 bg-gray-100 transition duration-300 ease-in-out  rounded-md py-3 px-5 hover:bg-gray-400 font-semibold hover:text-white\",\n                        href: \"/\",\n                        children: \"HOME\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\VSCodeProjects\\\\NEXTJS-PROJECTS\\\\fullstack-app\\\\my-app\\\\src\\\\app\\\\page.tsx\",\n                        lineNumber: 27,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_link__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                        className: \"border border-gray-200 text-gray-900 bg-gray-100 transition duration-300 ease-in-out  rounded-md py-3 px-5 hover:bg-gray-400 font-semibold hover:text-white\",\n                        href: \"/createpost\",\n                        children: \"CREATE POST\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\VSCodeProjects\\\\NEXTJS-PROJECTS\\\\fullstack-app\\\\my-app\\\\src\\\\app\\\\page.tsx\",\n                        lineNumber: 34,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_link__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                        className: \"border border-gray-200 text-gray-900 bg-gray-100 transition duration-300 ease-in-out  rounded-md py-3 px-5 hover:bg-gray-400 font-semibold hover:text-white\",\n                        href: \"/\",\n                        children: \"LOGIN\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\VSCodeProjects\\\\NEXTJS-PROJECTS\\\\fullstack-app\\\\my-app\\\\src\\\\app\\\\page.tsx\",\n                        lineNumber: 41,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_link__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                        className: \"border border-gray-200 text-gray-900 bg-gray-100 transition duration-300 ease-in-out  rounded-md py-3 px-5 hover:bg-gray-400 font-semibold hover:text-white\",\n                        href: \"/createpost\",\n                        children: \"REGISTER\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\VSCodeProjects\\\\NEXTJS-PROJECTS\\\\fullstack-app\\\\my-app\\\\src\\\\app\\\\page.tsx\",\n                        lineNumber: 48,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\VSCodeProjects\\\\NEXTJS-PROJECTS\\\\fullstack-app\\\\my-app\\\\src\\\\app\\\\page.tsx\",\n                lineNumber: 26,\n                columnNumber: 7\n            }, this),\n            postsData.map((item)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_link__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                    href: \"/\".concat(item.id),\n                    className: \"post\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                            className: \"title\",\n                            children: item.title\n                        }, void 0, false, {\n                            fileName: \"C:\\\\VSCodeProjects\\\\NEXTJS-PROJECTS\\\\fullstack-app\\\\my-app\\\\src\\\\app\\\\page.tsx\",\n                            lineNumber: 59,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                            className: \"body\",\n                            children: item.postText\n                        }, void 0, false, {\n                            fileName: \"C:\\\\VSCodeProjects\\\\NEXTJS-PROJECTS\\\\fullstack-app\\\\my-app\\\\src\\\\app\\\\page.tsx\",\n                            lineNumber: 60,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            className: \"footer\",\n                            children: item.username\n                        }, void 0, false, {\n                            fileName: \"C:\\\\VSCodeProjects\\\\NEXTJS-PROJECTS\\\\fullstack-app\\\\my-app\\\\src\\\\app\\\\page.tsx\",\n                            lineNumber: 61,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, item.id, true, {\n                    fileName: \"C:\\\\VSCodeProjects\\\\NEXTJS-PROJECTS\\\\fullstack-app\\\\my-app\\\\src\\\\app\\\\page.tsx\",\n                    lineNumber: 58,\n                    columnNumber: 9\n                }, this))\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\VSCodeProjects\\\\NEXTJS-PROJECTS\\\\fullstack-app\\\\my-app\\\\src\\\\app\\\\page.tsx\",\n        lineNumber: 25,\n        columnNumber: 5\n    }, this);\n}\n_s(Home, \"xcN1JQRfxYgwe2dIbXazSJ7Bp4M=\");\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvcGFnZS50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFFNEM7QUFDbEI7QUFDRztBQVNkLFNBQVNJOztJQUN0QixvQ0FBb0M7SUFDcEMsTUFBTSxDQUFDQyxXQUFXQyxhQUFhLEdBQUdMLCtDQUFRQSxDQUFTLEVBQUU7SUFFckRELGdEQUFTQSxDQUFDO1FBQ1JFLDZDQUFLQSxDQUFDSyxHQUFHLENBQUMsK0JBQStCQyxJQUFJLENBQUMsQ0FBQ0M7WUFDN0NILGFBQWFHLElBQUlDLElBQUk7UUFDdkI7SUFDRixHQUFHLEVBQUU7SUFDUEMsUUFBUUMsR0FBRyxDQUFDO0lBQ1YscUJBQ0UsOERBQUNDO1FBQUlDLFdBQVU7OzBCQUNiLDhEQUFDRDtnQkFBSUMsV0FBVTs7a0NBQ2IsOERBQUNYLGlEQUFJQTt3QkFDSFcsV0FBVTt3QkFFVkMsTUFBTTtrQ0FDUDs7Ozs7O2tDQUdELDhEQUFDWixpREFBSUE7d0JBQ0hXLFdBQVU7d0JBRVZDLE1BQU07a0NBQ1A7Ozs7OztrQ0FHRCw4REFBQ1osaURBQUlBO3dCQUNIVyxXQUFVO3dCQUVWQyxNQUFNO2tDQUNQOzs7Ozs7a0NBR0QsOERBQUNaLGlEQUFJQTt3QkFDSFcsV0FBVTt3QkFFVkMsTUFBTTtrQ0FDUDs7Ozs7Ozs7Ozs7O1lBS0ZWLFVBQVVXLEdBQUcsQ0FBQyxDQUFDQyxxQkFDZCw4REFBQ2QsaURBQUlBO29CQUFDWSxNQUFNLElBQVksT0FBUkUsS0FBS0MsRUFBRTtvQkFBSUosV0FBVTs7c0NBQ25DLDhEQUFDSzs0QkFBR0wsV0FBVTtzQ0FBU0csS0FBS0csS0FBSzs7Ozs7O3NDQUNqQyw4REFBQ0M7NEJBQUdQLFdBQVU7c0NBQVFHLEtBQUtLLFFBQVE7Ozs7OztzQ0FDbkMsOERBQUNDOzRCQUFFVCxXQUFVO3NDQUFVRyxLQUFLTyxRQUFROzs7Ozs7O21CQUhXUCxLQUFLQyxFQUFFOzs7Ozs7Ozs7OztBQVFoRTtHQXBEd0JkO0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9hcHAvcGFnZS50c3g/ZjY4YSJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIjtcbmltcG9ydCBJbWFnZSBmcm9tIFwibmV4dC9pbWFnZVwiO1xuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xuLy8gRGVmaW5lIHRoZSB0eXBlIGZvciB0aGUgcG9zdCBkYXRhXG50eXBlIFBvc3QgPSB7XG4gIGlkOiBudW1iZXI7XG4gIHRpdGxlOiBzdHJpbmc7XG4gcG9zdFRleHQ6c3RyaW5nO1xuIHVzZXJuYW1lOnN0cmluZztcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoKSB7XG4gIC8vIFVzZSB0aGUgZGVmaW5lZCB0eXBlIGluIHRoZSBzdGF0ZVxuICBjb25zdCBbcG9zdHNEYXRhLCBzZXRQb3N0c0RhdGFdID0gdXNlU3RhdGU8UG9zdFtdPihbXSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBheGlvcy5nZXQoXCJodHRwOi8vbG9jYWxob3N0OjMwMDEvcG9zdHNcIikudGhlbigocmVzKSA9PiB7XG4gICAgICBzZXRQb3N0c0RhdGEocmVzLmRhdGEpO1xuICAgIH0pO1xuICB9LCBbXSk7XG5jb25zb2xlLmxvZyhcImhlbGxvXCIpXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJBcHBcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBnYXAtMlwiPlxuICAgICAgICA8TGlua1xuICAgICAgICAgIGNsYXNzTmFtZT1cImJvcmRlciBib3JkZXItZ3JheS0yMDAgdGV4dC1ncmF5LTkwMCBiZy1ncmF5LTEwMCB0cmFuc2l0aW9uIGR1cmF0aW9uLTMwMCBlYXNlLWluLW91dCBcbiAgICAgICAgcm91bmRlZC1tZCBweS0zIHB4LTUgaG92ZXI6YmctZ3JheS00MDAgZm9udC1zZW1pYm9sZCBob3Zlcjp0ZXh0LXdoaXRlXCJcbiAgICAgICAgICBocmVmPXtcIi9cIn1cbiAgICAgICAgPlxuICAgICAgICAgIEhPTUVcbiAgICAgICAgPC9MaW5rPlxuICAgICAgICA8TGlua1xuICAgICAgICAgIGNsYXNzTmFtZT1cImJvcmRlciBib3JkZXItZ3JheS0yMDAgdGV4dC1ncmF5LTkwMCBiZy1ncmF5LTEwMCB0cmFuc2l0aW9uIGR1cmF0aW9uLTMwMCBlYXNlLWluLW91dCBcbiAgICAgICAgcm91bmRlZC1tZCBweS0zIHB4LTUgaG92ZXI6YmctZ3JheS00MDAgZm9udC1zZW1pYm9sZCBob3Zlcjp0ZXh0LXdoaXRlXCJcbiAgICAgICAgICBocmVmPXtcIi9jcmVhdGVwb3N0XCJ9XG4gICAgICAgID5cbiAgICAgICAgICBDUkVBVEUgUE9TVFxuICAgICAgICA8L0xpbms+XG4gICAgICAgIDxMaW5rXG4gICAgICAgICAgY2xhc3NOYW1lPVwiYm9yZGVyIGJvcmRlci1ncmF5LTIwMCB0ZXh0LWdyYXktOTAwIGJnLWdyYXktMTAwIHRyYW5zaXRpb24gZHVyYXRpb24tMzAwIGVhc2UtaW4tb3V0IFxuICAgICAgICByb3VuZGVkLW1kIHB5LTMgcHgtNSBob3ZlcjpiZy1ncmF5LTQwMCBmb250LXNlbWlib2xkIGhvdmVyOnRleHQtd2hpdGVcIlxuICAgICAgICAgIGhyZWY9e1wiL1wifVxuICAgICAgICA+XG4gICAgICAgICAgTE9HSU5cbiAgICAgICAgPC9MaW5rPlxuICAgICAgICA8TGlua1xuICAgICAgICAgIGNsYXNzTmFtZT1cImJvcmRlciBib3JkZXItZ3JheS0yMDAgdGV4dC1ncmF5LTkwMCBiZy1ncmF5LTEwMCB0cmFuc2l0aW9uIGR1cmF0aW9uLTMwMCBlYXNlLWluLW91dCBcbiAgICAgICAgcm91bmRlZC1tZCBweS0zIHB4LTUgaG92ZXI6YmctZ3JheS00MDAgZm9udC1zZW1pYm9sZCBob3Zlcjp0ZXh0LXdoaXRlXCJcbiAgICAgICAgICBocmVmPXtcIi9jcmVhdGVwb3N0XCJ9XG4gICAgICAgID5cbiAgICAgICAgIFJFR0lTVEVSXG4gICAgICAgIDwvTGluaz5cbiAgICAgIDwvZGl2PlxuXG4gICAgICB7cG9zdHNEYXRhLm1hcCgoaXRlbSkgPT4gKFxuICAgICAgICA8TGluayBocmVmPXtgLyR7aXRlbS5pZH1gfSBjbGFzc05hbWU9XCJwb3N0XCIga2V5PXtpdGVtLmlkfT5cbiAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwidGl0bGVcIj57aXRlbS50aXRsZX08L2gzPlxuICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJib2R5XCI+e2l0ZW0ucG9zdFRleHR9PC9oMj5cbiAgICAgICAgICA8cCBjbGFzc05hbWU9XCJmb290ZXJcIj57aXRlbS51c2VybmFtZX08L3A+XG4gICAgICAgIDwvTGluaz5cbiAgICAgICkpfVxuICAgIDwvZGl2PlxuICApO1xufVxuIl0sIm5hbWVzIjpbInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiYXhpb3MiLCJMaW5rIiwiSG9tZSIsInBvc3RzRGF0YSIsInNldFBvc3RzRGF0YSIsImdldCIsInRoZW4iLCJyZXMiLCJkYXRhIiwiY29uc29sZSIsImxvZyIsImRpdiIsImNsYXNzTmFtZSIsImhyZWYiLCJtYXAiLCJpdGVtIiwiaWQiLCJoMyIsInRpdGxlIiwiaDIiLCJwb3N0VGV4dCIsInAiLCJ1c2VybmFtZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/page.tsx\n"));

/***/ })

});