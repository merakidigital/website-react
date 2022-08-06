"use strict";
exports.id = 977;
exports.ids = [977];
exports.modules = {

/***/ 6802:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const fadeWhenScroll = ()=>{
    window.addEventListener("scroll", ()=>{
        var scrolled = window.pageYOffset;
        if (document.querySelector(".fixed-slider .caption")) {
            document.querySelectorAll(".fixed-slider .caption").forEach((caption)=>{
                caption.style.transform = "translate3d(0, " + -(scrolled * 0.2) + "px, 0)";
                caption.style.opacity = 1 - scrolled / 600;
            });
        }
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (fadeWhenScroll);


/***/ }),

/***/ 2206:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ About_us1)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./src/components/Split/index.jsx
var Split = __webpack_require__(8636);
;// CONCATENATED MODULE: ./src/data/sections/about-us1.json
const about_us1_namespaceObject = JSON.parse('{"wp":"/img/intro/1.jpg","Lx":"/img/intro/3.jpg","_g":"/img/intro/2.jpg","bH":"About Us","TN":{"P":"We are more than just","E":"a digital agency."},"kQ":"Our agency stands apart. We\'re a company that builds relationships and drives results. Being able to understand, adapt and develop innovative solutions is crucial in keeping up with the ever-changing market.","R2":[{"id":1,"icon":"gleam","name":{"first":"Technology","second":"Driven"},"wowDelay":".3s"},{"id":2,"icon":"paint-bucket","name":{"first":"Creative","second":"Design"},"wowDelay":".5s"},{"id":3,"icon":"medal","name":{"first":"Results","second":"Focused"},"wowDelay":".8s"}]}');
;// CONCATENATED MODULE: ./src/components/About-us1/index.jsx

/* eslint-disable @next/next/no-img-element */ 


const AboutUs1 = ()=>{
    return(/*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: "about section-padding",
        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
            className: "container",
            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "row",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "col-lg-5",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "img-mons",
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "row",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "col-md-5 cmd-padding valign",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: "img1 wow imago",
                                            "data-wow-delay": ".5s",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                src: about_us1_namespaceObject.wp,
                                                alt: ""
                                            })
                                        })
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "col-md-7 cmd-padding",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                className: "img2 wow imago",
                                                "data-wow-delay": ".3s",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                    src: about_us1_namespaceObject.Lx,
                                                    alt: ""
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                className: "img3 wow imago",
                                                "data-wow-delay": ".8s",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                    src: about_us1_namespaceObject._g,
                                                    alt: ""
                                                })
                                            })
                                        ]
                                    })
                                ]
                            })
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "col-lg-6 offset-lg-1 valign",
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "content",
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "sub-title",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("h6", {
                                            children: about_us1_namespaceObject.bH
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(Split/* default */.Z, {
                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("h3", {
                                        className: "words chars splitting main-title wow",
                                        "data-splitting": true,
                                        children: [
                                            about_us1_namespaceObject.TN.P,
                                            " ",
                                            /*#__PURE__*/ jsx_runtime_.jsx("br", {
                                            }),
                                            " ",
                                            about_us1_namespaceObject.TN.E
                                        ]
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(Split/* default */.Z, {
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                        className: "words chars splitting wow txt",
                                        "data-splitting": true,
                                        children: about_us1_namespaceObject.kQ
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "ftbox mt-30",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("ul", {
                                        children: about_us1_namespaceObject.R2.map((feature)=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                                className: `wow fadeIn ${feature.id == 2 ? "space" : ""}`,
                                                "data-wow-delay": feature.wowDelay,
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                        className: `icon color-font pe-7s-${feature.icon}`
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("h6", {
                                                        className: "custom-font",
                                                        children: [
                                                            feature.name.first,
                                                            " ",
                                                            /*#__PURE__*/ jsx_runtime_.jsx("br", {
                                                            }),
                                                            " ",
                                                            feature.name.second
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                        className: "dots",
                                                        children: [
                                                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                            })
                                                        ]
                                                    })
                                                ]
                                            }, feature.id)
                                        )
                                    })
                                })
                            ]
                        })
                    })
                ]
            })
        })
    }));
};
/* harmony default export */ const About_us1 = (AboutUs1);


/***/ }),

/***/ 2595:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _data_sections_intro_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5754);
/* harmony import */ var swiper_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3015);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1664);
/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(3877);
/* harmony import */ var _Split__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(8636);
/* harmony import */ var _common_fadeWhenScroll__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(6802);
/* harmony import */ var _common_removeSlashFromPagination__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(5850);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([swiper_react__WEBPACK_IMPORTED_MODULE_3__, swiper__WEBPACK_IMPORTED_MODULE_5__]);
([swiper_react__WEBPACK_IMPORTED_MODULE_3__, swiper__WEBPACK_IMPORTED_MODULE_5__] = __webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__);












swiper__WEBPACK_IMPORTED_MODULE_5__["default"].use([
    swiper__WEBPACK_IMPORTED_MODULE_5__.Navigation,
    swiper__WEBPACK_IMPORTED_MODULE_5__.Pagination,
    swiper__WEBPACK_IMPORTED_MODULE_5__.Parallax,
    swiper__WEBPACK_IMPORTED_MODULE_5__.Autoplay
]);
const IntroWithSlider1 = ({ sliderRef  })=>{
    const [load, setLoad] = react__WEBPACK_IMPORTED_MODULE_1___default().useState(true);
    react__WEBPACK_IMPORTED_MODULE_1___default().useEffect(()=>{
        (0,_common_fadeWhenScroll__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z)();
        setTimeout(()=>{
            setLoad(false);
            (0,_common_removeSlashFromPagination__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z)();
        }, 1000);
    }, []);
    const navigationPrevRef = react__WEBPACK_IMPORTED_MODULE_1___default().useRef(null);
    const navigationNextRef = react__WEBPACK_IMPORTED_MODULE_1___default().useRef(null);
    const paginationRef = react__WEBPACK_IMPORTED_MODULE_1___default().useRef(null);
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("header", {
        ref: sliderRef,
        className: "slider slider-prlx fixed-slider text-center",
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "swiper-container parallax-slider",
            children: [
                !load ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(swiper_react__WEBPACK_IMPORTED_MODULE_3__.Swiper, {
                    speed: 2000,
                    autoplay: {
                        delay: 5000,
                        disableOnInteraction: true
                    },
                    parallax: true,
                    navigation: {
                        prevEl: navigationPrevRef.current,
                        nextEl: navigationNextRef.current
                    },
                    pagination: {
                        type: "fraction",
                        clickable: true,
                        el: paginationRef.current
                    },
                    onBeforeInit: (swiper)=>{
                        swiper.params.navigation.prevEl = navigationPrevRef.current;
                        swiper.params.navigation.nextEl = navigationNextRef.current;
                        swiper.params.pagination.el = paginationRef.current;
                    },
                    onSwiper: (swiper)=>{
                        setTimeout(()=>{
                            for(var i = 0; i < swiper.slides.length; i++){
                                swiper.slides[i].childNodes[0].setAttribute("data-swiper-parallax", 0.75 * swiper.width);
                            }
                            swiper.params.navigation.prevEl = navigationPrevRef.current;
                            swiper.params.navigation.nextEl = navigationNextRef.current;
                            swiper.params.pagination.el = paginationRef.current;
                            swiper.navigation.destroy();
                            swiper.navigation.init();
                            swiper.navigation.update();
                            swiper.pagination.destroy();
                            swiper.pagination.init();
                            swiper.pagination.update();
                        });
                    },
                    className: "swiper-wrapper",
                    slidesPerView: 1,
                    children: _data_sections_intro_json__WEBPACK_IMPORTED_MODULE_2__.map((slide)=>{
                        return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(swiper_react__WEBPACK_IMPORTED_MODULE_3__.SwiperSlide, {
                            className: "swiper-slide",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "bg-img valign",
                                style: {
                                    backgroundImage: `url(${slide.image})`
                                },
                                "data-overlay-dark": "6",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "container",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "row justify-content-center",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "col-lg-7 col-md-9",
                                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                className: "caption center",
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Split__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                                                            className: "words chars splitting",
                                                            children: typeof slide.title === "object" ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                                                children: [
                                                                    slide.title.first,
                                                                    " ",
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {
                                                                    }),
                                                                    slide.title.second
                                                                ]
                                                            }) : slide.title
                                                        })
                                                    }),
                                                    (slide === null || slide === void 0 ? void 0 : slide.content) && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                        children: slide.content
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_link__WEBPACK_IMPORTED_MODULE_4__["default"], {
                                                        href: "/about/about-dark",
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                            className: "btn-curve btn-lit mt-30",
                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                children: "Learn More"
                                                            })
                                                        })
                                                    })
                                                ]
                                            })
                                        })
                                    })
                                })
                            })
                        }, slide.id));
                    })
                }) : null,
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "setone setwo",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            ref: navigationNextRef,
                            className: "swiper-button-next swiper-nav-ctrl next-ctrl cursor-pointer",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                className: "fas fa-chevron-right"
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            ref: navigationPrevRef,
                            className: "swiper-button-prev swiper-nav-ctrl prev-ctrl cursor-pointer",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                className: "fas fa-chevron-left"
                            })
                        })
                    ]
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    ref: paginationRef,
                    className: "swiper-pagination top botm custom-font"
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "social-icon",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                            href: "https://www.facebook.com/mrk.digitalsolutions",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                className: "fab fa-facebook-f"
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                            href: "#https://www.instagram.com/mrk.digitalsolutions/",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                className: "fab fa-instagram"
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                            href: "#0",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                className: "fab fa-behance"
                            })
                        })
                    ]
                })
            ]
        })
    }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (IntroWithSlider1);

});

/***/ }),

/***/ 4412:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ Numbers)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "react-countup"
var external_react_countup_ = __webpack_require__(609);
var external_react_countup_default = /*#__PURE__*/__webpack_require__.n(external_react_countup_);
;// CONCATENATED MODULE: ./src/data/sections/numbers1.json
const numbers1_namespaceObject = JSON.parse('[{"id":1,"icon":"pe-7s-smile","txt":"Satisfied Clients","value":"34"},{"id":2,"icon":"pe-7s-portfolio","txt":"Completed Projects","value":"160"},{"id":3,"icon":"pe-7s-cloud-download","txt":"Online Impressions","value":"100"}]');
// EXTERNAL MODULE: ./src/components/Split/index.jsx
var Split = __webpack_require__(8636);
// EXTERNAL MODULE: external "react-visibility-sensor"
var external_react_visibility_sensor_ = __webpack_require__(6882);
var external_react_visibility_sensor_default = /*#__PURE__*/__webpack_require__.n(external_react_visibility_sensor_);
;// CONCATENATED MODULE: ./src/components/Numbers/index.jsx






const Numbers1 = ()=>{
    return(/*#__PURE__*/ jsx_runtime_.jsx("section", {
        className: "number-sec section-padding sub-bg",
        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
            className: "container",
            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "row",
                children: numbers1_namespaceObject.map((item)=>/*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "col-lg-4 col-md-6",
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: `item ${item.id == 1 ? "no-bord" : ""}`,
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                    className: `icon ${item.icon}`
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("h3", {
                                    className: "custom-font",
                                    children: [
                                        "\xa0",
                                        /*#__PURE__*/ jsx_runtime_.jsx((external_react_countup_default()), {
                                            redraw: true,
                                            end: item.value,
                                            duration: "3",
                                            children: ({ countUpRef , start  })=>/*#__PURE__*/ jsx_runtime_.jsx((external_react_visibility_sensor_default()), {
                                                    onChange: start,
                                                    delayedCall: true,
                                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
                                                        children: [
                                                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                className: "count",
                                                                ref: countUpRef
                                                            }),
                                                            " ",
                                                            item.id == 3 ? "K" : ""
                                                        ]
                                                    })
                                                })
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(Split/* default */.Z, {
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                        className: "wow txt words chars splitting",
                                        "data-splitting": true,
                                        children: item.txt
                                    })
                                })
                            ]
                        })
                    }, item.id)
                )
            })
        })
    }));
};
/* harmony default export */ const Numbers = (Numbers1);


/***/ }),

/***/ 5715:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Split__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8636);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1664);




const Services1 = ()=>{
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("section", {
        className: "services",
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "container",
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "sec-head custom-font text-center",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h6", {
                                className: "wow fadeIn",
                                "data-wow-delay": ".5s",
                                children: "HOW WE HELP"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Split__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                                    className: "wow words chars splitting",
                                    "data-splitting": true,
                                    children: "Services"
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                className: "tbg",
                                children: "Services"
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "row",
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "col-lg-3 col-md-6 item-box bg-img wow fadeInLeft",
                                "data-wow-delay": ".3s",
                                style: {
                                    backgroundImage: "url(/img/1.jpg)"
                                },
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h4", {
                                        className: "custom-font",
                                        children: [
                                            "OUR FEATURED ",
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {
                                            }),
                                            " SERVICES"
                                        ]
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_link__WEBPACK_IMPORTED_MODULE_3__["default"], {
                                        href: "/about",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                            className: "btn-curve btn-bord btn-lit mt-40",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                children: "See All"
                                            })
                                        })
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "col-lg-3 col-md-6 item-box wow fadeInLeft",
                                "data-wow-delay": ".5s",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                        className: "icon pe-7s-paint-bucket"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h6", {
                                        children: "BRANDING & GRAPHIC DESIGN"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                        children: "In a world where everyone is trying to get your attention we'll get you noticed. We design to be clicked. To be seen. And to persuade."
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "col-lg-3 col-md-6 item-box wow fadeInLeft",
                                "data-wow-delay": ".7s",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                        className: "icon pe-7s-phone"
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h6", {
                                        children: [
                                            "WEB DESIGN & ",
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {
                                            }),
                                            " DEVELOPMENT"
                                        ]
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                        children: "We create responsive, mobile-first websites which are 100% customisable to fit your business needs and help grow your online sales."
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "col-lg-3 col-md-6 item-box wow fadeInLeft",
                                "data-wow-delay": ".9s",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                        className: "icon pe-7s-display1"
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h6", {
                                        children: [
                                            "DIGITAL",
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {
                                            }),
                                            "MARKETING"
                                        ]
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                        children: "We combine our creative flair and digital expertise to create targeted, automated digital marketing solutions to help your business grow. "
                                    })
                                ]
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "half-bg bottom"
            })
        ]
    }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Services1);


/***/ }),

/***/ 441:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(968);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1664);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var swiper_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3015);
/* harmony import */ var _data_showcases_full_screen_slider_json__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(265);
/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(3877);
/* harmony import */ var _Split__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(8636);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([swiper_react__WEBPACK_IMPORTED_MODULE_4__, swiper__WEBPACK_IMPORTED_MODULE_6__]);
([swiper_react__WEBPACK_IMPORTED_MODULE_4__, swiper__WEBPACK_IMPORTED_MODULE_6__] = __webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__);

/* eslint-disable @next/next/no-css-tags */ 








swiper__WEBPACK_IMPORTED_MODULE_6__["default"].use([
    swiper__WEBPACK_IMPORTED_MODULE_6__.Navigation
]);
const Works2Slider = ({ subBG  })=>{
    const [load, setLoad] = react__WEBPACK_IMPORTED_MODULE_3___default().useState(true);
    react__WEBPACK_IMPORTED_MODULE_3___default().useEffect(()=>{
        setTimeout(()=>{
            setLoad(false);
        });
    }, []);
    const navigationPrevRef = react__WEBPACK_IMPORTED_MODULE_3___default().useRef(null);
    const navigationNextRef = react__WEBPACK_IMPORTED_MODULE_3___default().useRef(null);
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("link", {
                    rel: "stylesheet",
                    href: "/css/ionicons.min.css"
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("section", {
                className: `work-carousel section-padding caroul ${subBG ? "sub-bg" : ""} position-re`,
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "container-fluid mt-100",
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "sec-head custom-font text-center",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h6", {
                                    className: "wow fadeIn",
                                    "data-wow-delay": ".5s",
                                    children: "Portfolio"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Split__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                                        className: "wow words chars splitting",
                                        "data-splitting": true,
                                        children: "Our Work"
                                    })
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                    className: "tbg",
                                    children: "Portfolio"
                                })
                            ]
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "row",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "col-lg-12 no-padding",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "swiper-container",
                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "swiper-container",
                                        children: [
                                            !load ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(swiper_react__WEBPACK_IMPORTED_MODULE_4__.Swiper, {
                                                speed: 1000,
                                                loop: true,
                                                spaceBetween: 0,
                                                breakpoints: {
                                                    320: {
                                                        slidesPerView: 1,
                                                        spaceBetween: 0
                                                    },
                                                    767: {
                                                        slidesPerView: 2,
                                                        spaceBetween: 0
                                                    },
                                                    991: {
                                                        slidesPerView: 3,
                                                        spaceBetween: 0
                                                    },
                                                    1024: {
                                                        slidesPerView: 4,
                                                        spaceBetween: 0
                                                    }
                                                },
                                                navigation: {
                                                    prevEl: navigationPrevRef.current,
                                                    nextEl: navigationNextRef.current
                                                },
                                                onBeforeInit: (swiper)=>{
                                                    swiper.params.navigation.prevEl = navigationPrevRef.current;
                                                    swiper.params.navigation.nextEl = navigationNextRef.current;
                                                },
                                                onSwiper: (swiper)=>{
                                                    setTimeout(()=>{
                                                        swiper.params.navigation.prevEl = navigationPrevRef.current;
                                                        swiper.params.navigation.nextEl = navigationNextRef.current;
                                                        swiper.navigation.destroy();
                                                        swiper.navigation.init();
                                                        swiper.navigation.update();
                                                    });
                                                },
                                                className: "swiper-wrapper",
                                                slidesPerView: 1,
                                                children: _data_showcases_full_screen_slider_json__WEBPACK_IMPORTED_MODULE_5__.map((slide)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(swiper_react__WEBPACK_IMPORTED_MODULE_4__.SwiperSlide, {
                                                        className: "swiper-slide",
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_link__WEBPACK_IMPORTED_MODULE_2__["default"], {
                                                            passHref: true,
                                                            href: "..//" + slide.url,
                                                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                                className: "content wow fadeInUp",
                                                                "data-wow-delay": ".3s",
                                                                children: [
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                        className: "item-img bg-img wow imago",
                                                                        style: {
                                                                            backgroundImage: `url(${slide.image})`
                                                                        }
                                                                    }),
                                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                                        className: "cont bgbox",
                                                                        children: [
                                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h6", {
                                                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_link__WEBPACK_IMPORTED_MODULE_2__["default"], {
                                                                                    href: "..//" + slide.url,
                                                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                                        children: slide.sub
                                                                                    })
                                                                                })
                                                                            }),
                                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h4", {
                                                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_link__WEBPACK_IMPORTED_MODULE_2__["default"], {
                                                                                    href: "..//" + slide.url,
                                                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                                                        children: slide.title.first + " " + slide.title.second
                                                                                    })
                                                                                })
                                                                            }),
                                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_link__WEBPACK_IMPORTED_MODULE_2__["default"], {
                                                                                href: "..//" + slide.url,
                                                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                                        className: "icon",
                                                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                                                            className: "fas fa-plus"
                                                                                        })
                                                                                    })
                                                                                })
                                                                            })
                                                                        ]
                                                                    })
                                                                ]
                                                            })
                                                        })
                                                    }, slide.id)
                                                )
                                            }) : null,
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                ref: navigationNextRef,
                                                className: "swiper-button-next swiper-nav-ctrl next-ctrl cursor-pointer",
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                    className: "ion-ios-arrow-right"
                                                })
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                ref: navigationPrevRef,
                                                className: "swiper-button-prev swiper-nav-ctrl prev-ctrl cursor-pointer",
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                    className: "ion-ios-arrow-left"
                                                })
                                            })
                                        ]
                                    })
                                })
                            })
                        })
                    ]
                })
            })
        ]
    }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Works2Slider);

});

/***/ }),

/***/ 8977:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_About_us1__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2206);
/* harmony import */ var _components_Call_to_action__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(621);
/* harmony import */ var _components_Clients1__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2385);
/* harmony import */ var _components_Footer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1690);
/* harmony import */ var _components_Intro_with_slider1__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(2595);
/* harmony import */ var _components_Navbar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(4848);
/* harmony import */ var _components_Numbers__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(4412);
/* harmony import */ var _components_Services1__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(5715);
/* harmony import */ var _components_Works2_slider__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(441);
/* harmony import */ var _layouts_Dark__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(2532);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_Works2_slider__WEBPACK_IMPORTED_MODULE_10__, _components_Intro_with_slider1__WEBPACK_IMPORTED_MODULE_6__]);
([_components_Works2_slider__WEBPACK_IMPORTED_MODULE_10__, _components_Intro_with_slider1__WEBPACK_IMPORTED_MODULE_6__] = __webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__);












const Homepage1 = ()=>{
    const fixedSlider = react__WEBPACK_IMPORTED_MODULE_1___default().useRef(null);
    const MainContent = react__WEBPACK_IMPORTED_MODULE_1___default().useRef(null);
    const navbarRef = react__WEBPACK_IMPORTED_MODULE_1___default().useRef(null);
    const logoRef = react__WEBPACK_IMPORTED_MODULE_1___default().useRef(null);
    react__WEBPACK_IMPORTED_MODULE_1___default().useEffect(()=>{
        setInterval(()=>{
            if (fixedSlider.current) {
                var slidHeight = fixedSlider.current.offsetHeight;
            }
            if (MainContent.current) {
                MainContent.current.style.marginTop = slidHeight + "px";
            }
        }, 1000);
        var navbar = navbarRef.current;
        if (window.pageYOffset > 300) {
            navbar.classList.add("nav-scroll");
        } else {
            navbar.classList.remove("nav-scroll");
        }
        window.addEventListener("scroll", ()=>{
            if (window.pageYOffset > 300) {
                navbar.classList.add("nav-scroll");
            } else {
                navbar.classList.remove("nav-scroll");
            }
        });
    }, [
        fixedSlider,
        MainContent,
        navbarRef
    ]);
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_layouts_Dark__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Navbar__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
                nr: navbarRef,
                lr: logoRef
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Intro_with_slider1__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                sliderRef: fixedSlider
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                ref: MainContent,
                className: "main-content",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_About_us1__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Services1__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Numbers__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Works2_slider__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Clients1__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                        theme: "dark"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Call_to_action__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                        subBG: true
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Footer__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                    })
                ]
            })
        ]
    }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Homepage1);

});

/***/ }),

/***/ 5754:
/***/ ((module) => {

module.exports = JSON.parse('[{"id":1,"title":{"first":"Technology Solutions","second":""},"content":"Our team of developers will take care of the whole process from design and build to launching the site and making it live.","image":"/img/slid/hero-cover1.jpg"},{"id":2,"title":{"first":"Creative","second":"Design"},"content":"Our expertise in graphic design, web and branding will help your business stand out from the crowd and reach your target market","image":"/img/slid/cover2.jpg"},{"id":3,"title":"We are Meraki Digital","content":"We create design and develop digital solutions for your business.","image":"/img/slid/cover3.jpg"}]');

/***/ })

};
;