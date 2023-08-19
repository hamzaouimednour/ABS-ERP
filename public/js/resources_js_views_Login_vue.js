(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_views_Login_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/Login.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/Login.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mixins__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../mixins */ "./resources/js/mixins/index.js");


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  mixins: [_mixins__WEBPACK_IMPORTED_MODULE_1__.formFieldsMixin],
  data: function data() {
    return {
      form: {
        login: "",
        password: "",
        remember: false
      },
      authError: {
        'state': false,
        'message': ''
      },
      authSuccess: {
        'state': false,
        'message': ''
      }
    };
  },
  methods: {
    resetAuth: function resetAuth() {
      Object.assign(this.$data.authError, this.$options.data().authError);
      Object.assign(this.$data.authSuccess, this.$options.data().authSuccess);
    },
    handleLogin: function handleLogin() {
      var _this = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _this.resetAuth();

                _context.next = 3;
                return _this.$store.dispatch("auth/handleLogin", _this.form);

              case 3:
                if (_this.$store.getters["auth/authenticated"]) {
                  _this.authSuccess.message = _this.$store.getters["auth/error"].message;
                  _this.authSuccess.state = true;
                  setTimeout(function () {
                    return window.location.href = _this.$store.getters["auth/redirectTo"];
                  }, 900); // this.$router.replace(this.$store.getters["auth/redirectTo"]);
                } else {
                  _this.authError.message = _this.$store.getters["auth/error"].error;
                  _this.authError.state = true;
                }

              case 4:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }))();
    }
  }
});

/***/ }),

/***/ "./resources/js/mixins/index.js":
/*!**************************************!*\
  !*** ./resources/js/mixins/index.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "formFieldsMixin": () => (/* binding */ formFieldsMixin)
/* harmony export */ });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var formFieldsMixin = {
  data: function data() {
    return {};
  },
  methods: {
    scrollToTop: function scrollToTop() {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
      });
    },
    scrollToTopModal: function scrollToTopModal(modal) {
      document.getElementById(modal).scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
      });
    },
    // number filter input
    number: function number(e) {
      // if (e.which < 48 || e.which > 57) e.preventDefault();
      return e.replace(/[^0-9]/gi, '');
    },
    // float filter input
    "float": function float(e) {
      // if (e.which != 46 && (e.which < 48 || e.which > 57))  e.preventDefault();
      return e.replace(/[^0-9.]/gi, '');
    },
    alpha: function alpha(e) {
      return e.replace(/[^a-z]/gi, '');
    },
    lower_alpha: function lower_alpha(e) {
      return e.replace(/[^a-z]/g, '');
    },
    alphanum: function alphanum(e) {
      return e.replace(/[^a-z0-9_-]/gi, '');
    },
    lower_alphanum: function lower_alphanum(e) {
      return e.replace(/[^a-z0-9_-]/g, '');
    },
    domain: function domain(e) {
      return e.replace(/[^a-z0-9-]/g, '');
    },
    getStatus: function getStatus() {
      var index = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
      var status = ['Suspendu', 'Actif', 'Verrouillé'];
      return index !== null ? status[index] : status;
    },
    getAuthority: function getAuthority() {
      var index = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
      var authority = ['Aucun', 'Webmaster', 'Manager', 'Modérateur', 'Utilisateur tiers'];
      return index !== null ? authority[index] : authority;
    },
    getAuth: function getAuth() {
      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                return _context.abrupt("return", axios.get('/api/auth/authority').then(function (response) {
                  return response.data;
                }));

              case 1:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }))();
    },
    getPermissions: function getPermissions() {
      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee2() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                return _context2.abrupt("return", axios.get('/api/auth/permissions?gates=1').then(function (response) {
                  return response.data;
                }));

              case 1:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }))();
    },
    initDropify: function initDropify() {
      return $('.dropify').dropify({
        messages: {
          'default': 'Glissez et déposez un fichier ici ou cliquez sur',
          'replace': 'Glissez-déposez ou cliquez pour remplacer',
          'remove': 'Supprimer',
          'error': 'Oups, quelque chose de mal ajouté.'
        },
        error: {
          'fileSize': 'La taille du fichier est trop grande (1M max).'
        }
      });
    }
  }
};

/***/ }),

/***/ "./resources/js/views/Login.vue":
/*!**************************************!*\
  !*** ./resources/js/views/Login.vue ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Login_vue_vue_type_template_id_12f5395a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Login.vue?vue&type=template&id=12f5395a& */ "./resources/js/views/Login.vue?vue&type=template&id=12f5395a&");
/* harmony import */ var _Login_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Login.vue?vue&type=script&lang=js& */ "./resources/js/views/Login.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _Login_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _Login_vue_vue_type_template_id_12f5395a___WEBPACK_IMPORTED_MODULE_0__.render,
  _Login_vue_vue_type_template_id_12f5395a___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/Login.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/views/Login.vue?vue&type=script&lang=js&":
/*!***************************************************************!*\
  !*** ./resources/js/views/Login.vue?vue&type=script&lang=js& ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Login_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Login.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/Login.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Login_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/views/Login.vue?vue&type=template&id=12f5395a&":
/*!*********************************************************************!*\
  !*** ./resources/js/views/Login.vue?vue&type=template&id=12f5395a& ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Login_vue_vue_type_template_id_12f5395a___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Login_vue_vue_type_template_id_12f5395a___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Login_vue_vue_type_template_id_12f5395a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Login.vue?vue&type=template&id=12f5395a& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/Login.vue?vue&type=template&id=12f5395a&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/Login.vue?vue&type=template&id=12f5395a&":
/*!************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/Login.vue?vue&type=template&id=12f5395a& ***!
  \************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "w-100" }, [
    _c("div", { staticClass: "custom-logo" }),
    _vm._v(" "),
    _vm._m(0),
    _vm._v(" "),
    _vm.authSuccess.state
      ? _c(
          "div",
          { staticClass: "alert alert-primary", attrs: { role: "alert" } },
          [
            _c("i", { staticClass: "fe fe-check-square me-2" }),
            _vm._v(" " + _vm._s(_vm.authSuccess.message) + "\n    ")
          ]
        )
      : _vm._e(),
    _vm._v(" "),
    _vm.authError.state
      ? _c(
          "div",
          { staticClass: "alert alert-secondary", attrs: { role: "alert" } },
          [
            _c("i", { staticClass: "fe fe-alert-circle me-2" }),
            _vm._v(" " + _vm._s(_vm.authError.message) + "\n    ")
          ]
        )
      : _vm._e(),
    _vm._v(" "),
    _c(
      "form",
      {
        attrs: { autocomplete: "off" },
        on: {
          submit: function($event) {
            $event.preventDefault()
            return _vm.handleLogin.apply(null, arguments)
          }
        }
      },
      [
        _c("div", { staticClass: "form-group" }, [
          _c(
            "label",
            { staticClass: "form-label text-muted font-weight-normal" },
            [_vm._v("Pseudo d'utilisateur")]
          ),
          _vm._v(" "),
          _c("div", { staticClass: "input-group" }, [
            _c("input", {
              directives: [
                {
                  name: "model",
                  rawName: "v-model",
                  value: _vm.form.login,
                  expression: "form.login"
                }
              ],
              staticClass: "form-control",
              attrs: {
                type: "text",
                pattern: "[a-zA-Z0-9_-]*",
                placeholder: "identifiant",
                required: ""
              },
              domProps: { value: _vm.form.login },
              on: {
                keyup: function($event) {
                  _vm.form.login = _vm.alphanum(_vm.form.login)
                },
                change: function($event) {
                  _vm.form.login = _vm.alphanum(_vm.form.login)
                },
                input: function($event) {
                  if ($event.target.composing) {
                    return
                  }
                  _vm.$set(_vm.form, "login", $event.target.value)
                }
              }
            }),
            _vm._v(" "),
            _vm._m(1)
          ])
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "form-group" }, [
          _c(
            "label",
            { staticClass: "form-label text-muted font-weight-normal" },
            [_vm._v("Mot de passe")]
          ),
          _vm._v(" "),
          _c("div", { staticClass: "input-group" }, [
            _c("input", {
              directives: [
                {
                  name: "model",
                  rawName: "v-model",
                  value: _vm.form.password,
                  expression: "form.password"
                }
              ],
              staticClass: "form-control",
              attrs: { type: "password", placeholder: "******", required: "" },
              domProps: { value: _vm.form.password },
              on: {
                input: function($event) {
                  if ($event.target.composing) {
                    return
                  }
                  _vm.$set(_vm.form, "password", $event.target.value)
                }
              }
            }),
            _vm._v(" "),
            _vm._m(2)
          ])
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "form-group mb-0" }, [
          _c("label", { staticClass: "custom-control custom-checkbox mb-0" }, [
            _c("input", {
              directives: [
                {
                  name: "model",
                  rawName: "v-model",
                  value: _vm.form.remember,
                  expression: "form.remember"
                }
              ],
              staticClass: "custom-control-input",
              attrs: { type: "checkbox" },
              domProps: {
                checked: Array.isArray(_vm.form.remember)
                  ? _vm._i(_vm.form.remember, null) > -1
                  : _vm.form.remember
              },
              on: {
                click: function($event) {
                  _vm.form.remember = !_vm.form.remember
                },
                change: function($event) {
                  var $$a = _vm.form.remember,
                    $$el = $event.target,
                    $$c = $$el.checked ? true : false
                  if (Array.isArray($$a)) {
                    var $$v = null,
                      $$i = _vm._i($$a, $$v)
                    if ($$el.checked) {
                      $$i < 0 &&
                        _vm.$set(_vm.form, "remember", $$a.concat([$$v]))
                    } else {
                      $$i > -1 &&
                        _vm.$set(
                          _vm.form,
                          "remember",
                          $$a.slice(0, $$i).concat($$a.slice($$i + 1))
                        )
                    }
                  } else {
                    _vm.$set(_vm.form, "remember", $$c)
                  }
                }
              }
            }),
            _vm._v(" "),
            _c("span", { staticClass: "custom-control-label text-muted" }, [
              _vm._v("Rester connecté")
            ])
          ])
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "form-group" }, [
          _c("div", { staticClass: "container-login100-form-btn" }, [
            _c(
              "button",
              {
                staticClass: "btn btn-radius btn-auth btn-block",
                attrs: { disabled: _vm.authSuccess.state, type: "submit" }
              },
              [_vm._v(" CONNECTER ")]
            )
          ])
        ])
      ]
    ),
    _vm._v(" "),
    _vm._m(3)
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "text-center mb-4" }, [
      _c("img", {
        staticClass: "avatar avatar-xxl brround mb-2",
        attrs: { src: "assets/images/avatar2.png", alt: "lockscreen image" }
      })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", {}, [
      _c("button", { staticClass: "btn btn-auth", attrs: { type: "button" } }, [
        _c("i", { staticClass: "ti-user", attrs: { "aria-hidden": "true" } })
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", {}, [
      _c("button", { staticClass: "btn btn-auth", attrs: { type: "button" } }, [
        _c("i", { staticClass: "ti-lock", attrs: { "aria-hidden": "true" } })
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "mt-5 mb-5" }, [
      _c("div", { staticClass: "font-weight-normal fs-16 text-muted" }, [
        _vm._v("\n            Mot de passe oublié ? "),
        _c(
          "a",
          { staticClass: "btn-link font-weight-normal", attrs: { href: "#" } },
          [_vm._v(" cliquez ici")]
        )
      ])
    ])
  }
]
render._withStripped = true



/***/ })

}]);