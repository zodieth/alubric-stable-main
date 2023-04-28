"use strict";
exports.id = 787;
exports.ids = [787];
exports.modules = {

/***/ 2787:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6290);
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_icons_fa__WEBPACK_IMPORTED_MODULE_2__);



function Paginado({ paginado , filesPerPage , files , current  }) {
    const pageNumbers = [];
    for(let i = 1; i < Math.ceil(files?.length / filesPerPage); i++){
        pageNumbers.push(i);
    }
    let mayor = pageNumbers[0];
    for(let i = 1; i < pageNumbers.length; i++){
        if (pageNumbers[i] > mayor) {
            mayor = pageNumbers[i];
        }
    }
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("nav", {
        className: "w-full bg-gray-50  border-gray-200 border-t-4 rounded-sm",
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ul", {
            className: "flex flex-row items-center justify-center  ",
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                    className: "my-2 mx-1 flex justify-center items-center bg-slate-300 h-6 w-6 rounded-sm hover:bg-blue-400 text-white",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                        className: "",
                        onClick: ()=>paginado(current === 1 ? 1 : current - 1),
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_fa__WEBPACK_IMPORTED_MODULE_2__.FaLongArrowAltLeft, {})
                    })
                }),
                pageNumbers && pageNumbers.map((number)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                            className: number === current ? "bg-blue-500 my-2 mx-1 flex justify-center items-center  h-full w-6  text-white rounded-sm cursor-pointer" : `my-2 mx-1 flex justify-center items-center  h-full w-6 bg-blue-300 text-white rounded-sm cursor-pointer hover:bg-blue-400`,
                            onClick: ()=>paginado(number),
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                className: "",
                                children: number
                            })
                        }, number)
                    }, number)),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                    className: "my-2 mx-1 flex justify-center items-center bg-slate-300 h-6 w-6 rounded-sm hover:bg-blue-400 text-white",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                        className: "",
                        onClick: ()=>paginado(current === mayor ? mayor : current + 1),
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_fa__WEBPACK_IMPORTED_MODULE_2__.FaLongArrowAltRight, {})
                    })
                })
            ]
        })
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Paginado);


/***/ })

};
;