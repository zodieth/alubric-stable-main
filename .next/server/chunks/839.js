"use strict";
exports.id = 839;
exports.ids = [839];
exports.modules = {

/***/ 9839:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1649);
/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _ui_Toast__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3852);
/* harmony import */ var react_icons_bs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(567);
/* harmony import */ var react_icons_bs__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_icons_bs__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_icons_bi__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6652);
/* harmony import */ var react_icons_bi__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_icons_bi__WEBPACK_IMPORTED_MODULE_5__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_ui_Toast__WEBPACK_IMPORTED_MODULE_3__]);
_ui_Toast__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];
"use client";






const SignInButton = ({})=>{
    const [isLoading, setIsLoading] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);
    const signInWithGoogle = async ()=>{
        setIsLoading(true);
        try {
            await (0,next_auth_react__WEBPACK_IMPORTED_MODULE_1__.signIn)("google");
        } catch (error) {
            (0,_ui_Toast__WEBPACK_IMPORTED_MODULE_3__.toast)({
                title: "Error signing in",
                message: "Please try again later",
                type: "error"
            });
        }
    };
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
        disabled: isLoading ? true : false,
        className: isLoading ? "text-white bg-red-300 w-80 h-10 rounded-md" : "text-white bg-red-600 w-80 h-10 rounded-md",
        onClick: signInWithGoogle,
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "flex items-center justify-center",
            children: [
                "Sign In With Google",
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_bs__WEBPACK_IMPORTED_MODULE_4__.BsGoogle, {
                    className: "ml-2"
                }),
                isLoading ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_bi__WEBPACK_IMPORTED_MODULE_5__.BiLoaderAlt, {
                    className: "animate-spin ml-2"
                }) : ""
            ]
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SignInButton);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;