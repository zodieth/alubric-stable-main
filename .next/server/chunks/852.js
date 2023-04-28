"use strict";
exports.id = 852;
exports.ids = [852];
exports.modules = {

/***/ 2294:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Icons": () => (/* binding */ Icons)
/* harmony export */ });
/* harmony import */ var react_icons_bs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(567);
/* harmony import */ var react_icons_bs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_icons_bs__WEBPACK_IMPORTED_MODULE_0__);

const Icons = {
    Bs0Circle: react_icons_bs__WEBPACK_IMPORTED_MODULE_0__.Bs0Circle
};


/***/ }),

/***/ 3852:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Toast": () => (/* binding */ Toast),
/* harmony export */   "Toaster": () => (/* binding */ Toaster),
/* harmony export */   "toast": () => (/* binding */ toast)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2294);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_hot_toast__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6201);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([react_hot_toast__WEBPACK_IMPORTED_MODULE_3__]);
react_hot_toast__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];
"use client";


// import { cn } from "../../lib/utils";


const Toaster = react_hot_toast__WEBPACK_IMPORTED_MODULE_3__.Toaster;
function Toast({ visible , className , ...props }) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "min-h-16 mb-2 flex w-[350px] flex-col items-start gap-1 rounded-md bg-white px-6 py-4 shadow-lg",
        ...props
    });
}
Toast.Icon = function ToastIcon({ name , className , ...props }) {
    const Icon = _Icons__WEBPACK_IMPORTED_MODULE_1__.Icons[name];
    if (!Icon) {
        return null;
    }
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "flex h-20 w-20 items-center justify-center rounded-full bg-slate-100",
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Icon, {
            className: "h-10 w-10",
            ...props
        })
    });
};
Toast.Title = function ToastTitle({ className , ...props }) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
        className: "text-sm font-medium",
        ...props
    });
};
Toast.Description = function ToastDescription({ className , ...props }) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
        className: "text-sm opacity-80",
        ...props
    });
};
function toast(opts) {
    const { title , message , type ="default" , duration =3000  } = opts;
    return react_hot_toast__WEBPACK_IMPORTED_MODULE_3__["default"].custom(({ visible  })=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(Toast, {
            visible: visible,
            className: "bg-black text-white",
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Toast.Title, {
                    children: title
                }),
                message && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Toast.Description, {
                    children: message
                })
            ]
        }), {
        duration
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;