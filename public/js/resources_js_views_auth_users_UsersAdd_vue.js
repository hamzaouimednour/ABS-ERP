(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_views_auth_users_UsersAdd_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/auth/users/UsersAdd.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/auth/users/UsersAdd.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mixins__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../mixins */ "./resources/js/mixins/index.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }



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
        auth_level: '',
        nom: '',
        prenom: '',
        deuxieme_prenom: '',
        email: '',
        country_code: '',
        dialling_code: '',
        telephone_mobile: '',
        telephone: '',
        login: '',
        password: '',
        password_confirmation: '',
        status: 1,
        photo: ''
      },
      currentUser: {
        auth_level: null
      },
      formValidated: false,
      formErrors: [],
      formStored: false,
      authority: [],
      statusList: []
    };
  },
  mounted: function mounted() {
    var _this = this;

    return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return _this.$store.dispatch("auth/checkAuth");

            case 2:
              _this.currentUser = _this.$store.getters["auth/user"];
              _this.authority = _this.getAuthority();
              _this.statusList = _this.getStatus();

            case 5:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }))();
  },
  methods: {
    clearFormErrors: function clearFormErrors() {
      this.formErrors = [];
    },
    setFormStored: function setFormStored(value) {
      this.formStored = value;
    },
    resetForm: function resetForm() {
      // Object.assign(this.$data, this.$options.data());
      // reset only data.form attrs
      Object.assign(this.$data.form, this.$options.data().form);
      this.formValidated = false;
      this.clearFormErrors();
    },
    handleAddUser: function handleAddUser(e) {
      var _this2 = this;

      e.preventDefault(); // reset some attrs

      this.clearFormErrors();
      this.setFormStored(false); // form valdiation using JQuery

      if ($('#newElementForm')[0].checkValidity() === false) {
        e.preventDefault();
        e.stopPropagation();
      } else if (this.form.password !== this.form.password_confirmation) {
        this.formErrors.push('Les deux mots de passe ne correspond pas.');
      } else {
        axios.post('/api/auth/users', this.form).then(function (response) {
          if (response.status) {
            _this2.setFormStored(true);

            _this2.resetForm();
          }
        })["catch"](function (error) {
          if (error.response.status != 422) {
            console.log(error);

            _this2.formErrors.push('Echoué!, Une erreur est survenue.');
          } else {
            for (var _i = 0, _Object$entries = Object.entries(error.response.data.errors); _i < _Object$entries.length; _i++) {
              var _Object$entries$_i = _slicedToArray(_Object$entries[_i], 2),
                  key = _Object$entries$_i[0],
                  value = _Object$entries$_i[1];

              for (var _key in value) {
                if (Object.hasOwnProperty.call(value, _key)) {
                  _this2.formErrors.push(value[_key]);
                }
              }
            }
          }
        });
      } // validate form.


      this.formValidated = true; // scroll to request msg

      this.scrollToTop();
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

/***/ "./resources/js/views/auth/users/UsersAdd.vue":
/*!****************************************************!*\
  !*** ./resources/js/views/auth/users/UsersAdd.vue ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _UsersAdd_vue_vue_type_template_id_08c88f50___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./UsersAdd.vue?vue&type=template&id=08c88f50& */ "./resources/js/views/auth/users/UsersAdd.vue?vue&type=template&id=08c88f50&");
/* harmony import */ var _UsersAdd_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./UsersAdd.vue?vue&type=script&lang=js& */ "./resources/js/views/auth/users/UsersAdd.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _UsersAdd_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _UsersAdd_vue_vue_type_template_id_08c88f50___WEBPACK_IMPORTED_MODULE_0__.render,
  _UsersAdd_vue_vue_type_template_id_08c88f50___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/auth/users/UsersAdd.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/views/auth/users/UsersAdd.vue?vue&type=script&lang=js&":
/*!*****************************************************************************!*\
  !*** ./resources/js/views/auth/users/UsersAdd.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_UsersAdd_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./UsersAdd.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/auth/users/UsersAdd.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_UsersAdd_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/views/auth/users/UsersAdd.vue?vue&type=template&id=08c88f50&":
/*!***********************************************************************************!*\
  !*** ./resources/js/views/auth/users/UsersAdd.vue?vue&type=template&id=08c88f50& ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_UsersAdd_vue_vue_type_template_id_08c88f50___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_UsersAdd_vue_vue_type_template_id_08c88f50___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_UsersAdd_vue_vue_type_template_id_08c88f50___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./UsersAdd.vue?vue&type=template&id=08c88f50& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/auth/users/UsersAdd.vue?vue&type=template&id=08c88f50&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/auth/users/UsersAdd.vue?vue&type=template&id=08c88f50&":
/*!**************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/auth/users/UsersAdd.vue?vue&type=template&id=08c88f50& ***!
  \**************************************************************************************************************************************************************************************************************************/
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
  return _c("div", { staticClass: "col-md-12" }, [
    _c("div", { staticClass: "card" }, [
      _c("div", { staticClass: "card-status bg-black br-tr-7 br-tl-7" }),
      _vm._v(" "),
      _vm._m(0),
      _vm._v(" "),
      _c("div", { staticClass: "card-body" }, [
        _vm.formErrors.length
          ? _c(
              "div",
              {
                staticClass: "alert alert-secondary",
                attrs: { role: "alert" }
              },
              _vm._l(_vm.formErrors, function(error) {
                return _c("div", { key: error.key }, [_vm._v(_vm._s(error))])
              }),
              0
            )
          : _vm._e(),
        _vm._v(" "),
        _vm.formStored
          ? _c(
              "div",
              { staticClass: "alert alert-primary", attrs: { role: "alert" } },
              [_vm._m(1), _vm._v(" "), _vm._m(2)]
            )
          : _vm._e(),
        _vm._v(" "),
        _c(
          "form",
          {
            class: { "was-validated": _vm.formValidated },
            attrs: { id: "newElementForm" },
            on: {
              submit: function($event) {
                $event.preventDefault()
                return _vm.handleAddUser.apply(null, arguments)
              }
            }
          },
          [
            _c("div", { staticClass: "row" }, [
              _c("div", { staticClass: "col-md-6" }, [
                _c("div", { staticClass: "row" }, [
                  _c("div", { staticClass: "col-md mb-4" }, [
                    _vm._m(3),
                    _vm._v(" "),
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.form.nom,
                          expression: "form.nom"
                        }
                      ],
                      staticClass: "form-control",
                      attrs: {
                        type: "text",
                        placeholder: "Nom",
                        pattern: "[a-zA-Z ]*",
                        required: ""
                      },
                      domProps: { value: _vm.form.nom },
                      on: {
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(_vm.form, "nom", $event.target.value)
                        }
                      }
                    }),
                    _vm._v(" "),
                    _c("div", { staticClass: "invalid-feedback" }, [
                      _vm._v(" Ce champ n'est pas valide.")
                    ])
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-md mb-4" }, [
                    _vm._m(4),
                    _vm._v(" "),
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.form.prenom,
                          expression: "form.prenom"
                        }
                      ],
                      staticClass: "form-control",
                      attrs: {
                        type: "text",
                        placeholder: "Prénom",
                        pattern: "[a-zA-Z ]*",
                        required: ""
                      },
                      domProps: { value: _vm.form.prenom },
                      on: {
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(_vm.form, "prenom", $event.target.value)
                        }
                      }
                    }),
                    _vm._v(" "),
                    _c("div", { staticClass: "invalid-feedback" }, [
                      _vm._v(" Ce champ n'est pas valide.")
                    ])
                  ])
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "mb-4" }, [
                  _c("label", { staticClass: "form-label" }, [
                    _vm._v("Deuxiéme prénom")
                  ]),
                  _vm._v(" "),
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.form.deuxieme_prenom,
                        expression: "form.deuxieme_prenom"
                      }
                    ],
                    staticClass: "form-control",
                    attrs: {
                      type: "text",
                      placeholder: "Deuxiéme prénom",
                      pattern: "[a-zA-Z ]*"
                    },
                    domProps: { value: _vm.form.deuxieme_prenom },
                    on: {
                      input: function($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.$set(
                          _vm.form,
                          "deuxieme_prenom",
                          $event.target.value
                        )
                      }
                    }
                  }),
                  _vm._v(" "),
                  _c("div", { staticClass: "invalid-feedback" }, [
                    _vm._v(" Ce champ n'est pas valide.")
                  ])
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "mb-4" }, [
                  _c("label", { staticClass: "form-label" }, [_vm._v("Email")]),
                  _vm._v(" "),
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.form.email,
                        expression: "form.email"
                      }
                    ],
                    staticClass: "form-control",
                    attrs: { type: "email", placeholder: "E-mail" },
                    domProps: { value: _vm.form.email },
                    on: {
                      input: function($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.$set(_vm.form, "email", $event.target.value)
                      }
                    }
                  }),
                  _vm._v(" "),
                  _c("div", { staticClass: "invalid-feedback" }, [
                    _vm._v(" Ce champ n'est pas valide.")
                  ])
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "row" }, [
                  _c("div", { staticClass: "col-md mb-4" }, [
                    _c("label", { staticClass: "form-label" }, [
                      _vm._v("Numéro de Téléphone")
                    ]),
                    _vm._v(" "),
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.form.telephone,
                          expression: "form.telephone"
                        }
                      ],
                      staticClass: "form-control",
                      attrs: { type: "text", placeholder: "téléphone" },
                      domProps: { value: _vm.form.telephone },
                      on: {
                        keyup: function($event) {
                          _vm.form.telephone = _vm.number(_vm.form.telephone)
                        },
                        change: function($event) {
                          _vm.form.telephone = _vm.number(_vm.form.telephone)
                        },
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(_vm.form, "telephone", $event.target.value)
                        }
                      }
                    }),
                    _vm._v(" "),
                    _c("div", { staticClass: "invalid-feedback" }, [
                      _vm._v(" Ce champ n'est pas valide.")
                    ])
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-md mb-4" }, [
                    _c("label", { staticClass: "form-label" }, [
                      _vm._v("Numéro de Téléphone Mobile")
                    ]),
                    _vm._v(" "),
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.form.telephone_mobile,
                          expression: "form.telephone_mobile"
                        }
                      ],
                      staticClass: "form-control",
                      attrs: { type: "text", placeholder: "téléphone mobile" },
                      domProps: { value: _vm.form.telephone_mobile },
                      on: {
                        keyup: function($event) {
                          _vm.form.telephone_mobile = _vm.number(
                            _vm.form.telephone_mobile
                          )
                        },
                        change: function($event) {
                          _vm.form.telephone_mobile = _vm.number(
                            _vm.form.telephone_mobile
                          )
                        },
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(
                            _vm.form,
                            "telephone_mobile",
                            $event.target.value
                          )
                        }
                      }
                    }),
                    _vm._v(" "),
                    _c("div", { staticClass: "invalid-feedback" }, [
                      _vm._v(" Ce champ n'est pas valide.")
                    ])
                  ])
                ]),
                _vm._v(" "),
                _c("hr"),
                _vm._v(" "),
                _c("div", { staticClass: "mb-4" }, [
                  _vm._m(5),
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
                        pattern: "[a-zA-Z0-9-_]*",
                        placeholder: "Identifiant",
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
                    _vm._m(6)
                  ])
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "mb-4" }, [
                  _vm._m(7),
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
                      attrs: {
                        type: "password",
                        placeholder: "******",
                        required: ""
                      },
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
                    _vm._m(8)
                  ])
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "mb-4" }, [
                  _vm._m(9),
                  _vm._v(" "),
                  _c("div", { staticClass: "input-group" }, [
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.form.password_confirmation,
                          expression: "form.password_confirmation"
                        }
                      ],
                      staticClass: "form-control",
                      attrs: {
                        type: "password",
                        placeholder: "******",
                        required: ""
                      },
                      domProps: { value: _vm.form.password_confirmation },
                      on: {
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(
                            _vm.form,
                            "password_confirmation",
                            $event.target.value
                          )
                        }
                      }
                    }),
                    _vm._v(" "),
                    _vm._m(10)
                  ])
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "form-group" }, [
                  _vm._m(11),
                  _vm._v(" "),
                  _c(
                    "select",
                    {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.form.auth_level,
                          expression: "form.auth_level"
                        }
                      ],
                      staticClass: "form-control form-select",
                      attrs: { required: "" },
                      on: {
                        change: function($event) {
                          var $$selectedVal = Array.prototype.filter
                            .call($event.target.options, function(o) {
                              return o.selected
                            })
                            .map(function(o) {
                              var val = "_value" in o ? o._value : o.value
                              return val
                            })
                          _vm.$set(
                            _vm.form,
                            "auth_level",
                            $event.target.multiple
                              ? $$selectedVal
                              : $$selectedVal[0]
                          )
                        }
                      }
                    },
                    [
                      _c(
                        "option",
                        { attrs: { value: "", selected: "", disabled: "" } },
                        [_vm._v("Sélectionnez un rôle")]
                      ),
                      _vm._v(" "),
                      _vm._l(_vm.authority, function(item, index) {
                        return _c(
                          "option",
                          { key: index, domProps: { value: index } },
                          [_vm._v(" " + _vm._s(item) + " ")]
                        )
                      })
                    ],
                    2
                  ),
                  _vm._v(" "),
                  _c("div", { staticClass: "invalid-feedback" }, [
                    _vm._v(" Ce champ n'est pas valide.")
                  ])
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "form-group" }, [
                  _c("label", { staticClass: "form-label" }, [
                    _vm._v("Etat de l'utilisateur :")
                  ]),
                  _vm._v(" "),
                  _c(
                    "select",
                    {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.form.status,
                          expression: "form.status"
                        }
                      ],
                      staticClass: "form-control form-select",
                      attrs: { required: "" },
                      on: {
                        change: function($event) {
                          var $$selectedVal = Array.prototype.filter
                            .call($event.target.options, function(o) {
                              return o.selected
                            })
                            .map(function(o) {
                              var val = "_value" in o ? o._value : o.value
                              return val
                            })
                          _vm.$set(
                            _vm.form,
                            "status",
                            $event.target.multiple
                              ? $$selectedVal
                              : $$selectedVal[0]
                          )
                        }
                      }
                    },
                    _vm._l(_vm.statusList, function(item, index) {
                      return _c(
                        "option",
                        { key: index, domProps: { value: index } },
                        [_vm._v(" " + _vm._s(item) + " ")]
                      )
                    }),
                    0
                  )
                ])
              ])
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "row mt-5" }, [
              _c(
                "div",
                {
                  staticClass:
                    "col-md btn-toolbar justify-content-end btn-group"
                },
                [
                  _c(
                    "button",
                    {
                      staticClass: "btn btn-radius btn-black",
                      on: {
                        click: function($event) {
                          $event.preventDefault()
                          return _vm.resetForm.apply(null, arguments)
                        }
                      }
                    },
                    [
                      _c("i", { staticClass: "fe fe-refresh-ccw me-2" }),
                      _vm._v(" Réinitialiser")
                    ]
                  ),
                  _vm._v(" "),
                  _vm._m(12)
                ]
              )
            ])
          ]
        )
      ])
    ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "card-header" }, [
      _c("h3", { staticClass: "mb-0 card-title" }, [
        _vm._v("Nouveau Utilisateur")
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("span", { staticClass: "alert-inner--icon" }, [
      _c("i", { staticClass: "fe fe-check-square" })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("span", { staticClass: "alert-inner--text" }, [
      _c("strong", [_vm._v(" Succès! ")]),
      _vm._v(" un nouvel utilisateur a été ajouté.")
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("label", { staticClass: "form-label" }, [
      _vm._v("Nom "),
      _c("small", { staticClass: "text-danger" }, [_vm._v("*")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("label", { staticClass: "form-label" }, [
      _vm._v("Prénom "),
      _c("small", { staticClass: "text-danger" }, [_vm._v("*")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("label", { staticClass: "form-label" }, [
      _vm._v("Pseudo d'utilisateur "),
      _c("small", { staticClass: "text-danger" }, [_vm._v("*")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", {}, [
      _c("button", { staticClass: "btn btn-auth", attrs: { type: "button" } }, [
        _c("i", { staticClass: "fe fe-user", attrs: { "aria-hidden": "true" } })
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("label", { staticClass: "form-label" }, [
      _vm._v("Mot de passe "),
      _c("small", { staticClass: "text-danger" }, [_vm._v("*")])
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
    return _c("label", { staticClass: "form-label" }, [
      _vm._v("Confirmer le Mot de passe "),
      _c("small", { staticClass: "text-danger" }, [_vm._v("*")])
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
    return _c("label", { staticClass: "form-label" }, [
      _vm._v("Rôle "),
      _c("small", { staticClass: "text-danger" }, [_vm._v("*")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "button",
      { staticClass: "btn btn-radius btn-brand", attrs: { type: "submit" } },
      [_c("i", { staticClass: "fe fe-save me-2" }), _vm._v(" Sauvgarder")]
    )
  }
]
render._withStripped = true



/***/ })

}]);