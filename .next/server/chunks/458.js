"use strict";
exports.id = 458;
exports.ids = [458];
exports.modules = {

/***/ 4458:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_icons_bs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(567);
/* harmony import */ var react_icons_bs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_icons_bs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_icons_ai__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9847);
/* harmony import */ var react_icons_ai__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_icons_ai__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9648);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([axios__WEBPACK_IMPORTED_MODULE_4__]);
axios__WEBPACK_IMPORTED_MODULE_4__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];
"use client";





const API_KEY = "f8f1e0d6ae9924a3331ac71108507015abbf0369";
const ths = [
    "Id",
    "Name",
    "Asunto",
    "Email",
    "Number",
    "Status",
    "File",
    "Date"
];
const FilesTable = ({ cotizacion  })=>{
    const label = {
        inputProps: {
            "aria-label": "Switch demo"
        }
    };
    const deleteFile = (filename, id)=>{
        axios__WEBPACK_IMPORTED_MODULE_4__["default"]["delete"](`https://alubric-api.admin.alubric.com/uploads/${filename}?apikey=${API_KEY}`);
        axios__WEBPACK_IMPORTED_MODULE_4__["default"].put(`https://alubric-api.admin.alubric.com/file/${id}/update?apikey=${API_KEY}`);
    };
    cotizacion?.sort((a, b)=>{
        if (a.active === true && b.active !== true) {
            return -1;
        } else if (a.active === true && b.active !== true) {
            return 1;
        } else {
            return 0;
        }
    });
    cotizacion?.sort((a, b)=>{
        if (a.createdAt > b.createdAt) {
            return -1;
        } else if (b.createdAt > a.createdAt) {
            return 1;
        } else {
            return 0;
        }
    });
    const tableBody = cotizacion?.map((item, index)=>{
        const colorClass = index % 2 === 0 ? "bg-white" : "bg-gray-50";
        const date = new Date(item.createdAt);
        const year = date.getFullYear();
        const month = date.getMonth();
        const day = date.getDate();
        const dateString = `${day}/${month + 1}/${year}`;
        return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("tr", {
            className: item.active === false ? "bg-gray-100" : `${colorClass}`,
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("td", {
                    className: item.active ? "p-3 text-sm font-bold text-blue-500 hover:underline" : "p-3 text-sm font-bold text-blue-200 ",
                    children: [
                        item._id.substring(0, 5),
                        "..."
                    ]
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("td", {
                    className: item.active ? "p-3 text-sm text-gray-700" : "p-3 text-sm text-gray-300",
                    children: [
                        item.firstName,
                        " ",
                        item.lastName
                    ]
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                    className: item.active ? "p-3 text-sm text-gray-700" : "p-3 text-sm text-gray-300",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_ai__WEBPACK_IMPORTED_MODULE_2__.AiFillEye, {
                        className: ""
                    })
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                    className: item.active ? "p-3 text-sm text-gray-700" : "p-3 text-sm text-gray-300",
                    children: item.email
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                    className: item.active ? "p-3 text-sm text-gray-700" : "p-3 text-sm text-gray-300",
                    children: item.phoneNumber
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                    className: item.active ? "p-3 text-sm text-gray-700" : "p-3 text-sm text-gray-300",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_bs__WEBPACK_IMPORTED_MODULE_1__.BsFillTrashFill, {
                        className: item.active ? `cursor-pointer` : "",
                        onClick: ()=>item.active ? deleteFile(item.fileName, item._id) : ""
                    })
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                    className: item.active ? "p-3 text-sm text-gray-700" : "p-3 text-sm text-gray-300",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {
                        className: item.active ? "p-3 mt-3" : "p-3 mt-3 pointer-events-none",
                        href: `https://alubric-api.admin.alubric.com/download/${item.fileName}?apikey=${API_KEY}`,
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_bs__WEBPACK_IMPORTED_MODULE_1__.BsDownload, {})
                    })
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                    className: item.active ? "p-3 text-sm text-gray-700" : "p-3 text-sm text-gray-300",
                    children: dateString
                })
            ]
        }, item._id);
    });
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "overflow-x-auto rounded-md",
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("table", {
            className: "w-full",
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("thead", {
                    className: "bg-gray-50 border-b-2 border-gray-200",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("tr", {
                        children: ths ? ths.map((e, index)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("th", {
                                className: "p-3 text-sm font-semibold tracking-wide text-left",
                                children: e
                            }, index)) : ""
                    })
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("tbody", {
                    children: tableBody
                })
            ]
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FilesTable);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;