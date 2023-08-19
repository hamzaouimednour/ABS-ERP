(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_views_auth_entreprises_EntreprisesAdd_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/auth/entreprises/EntreprisesAdd.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/auth/entreprises/EntreprisesAdd.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mixins__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../mixins */ "./resources/js/mixins/index.js");
/* harmony import */ var _assets_plugins_fileuploads_css_fileupload_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../assets/plugins/fileuploads/css/fileupload.css */ "./public/assets/plugins/fileuploads/css/fileupload.css");
/* harmony import */ var _assets_plugins_fileuploads_js_fileupload_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../assets/plugins/fileuploads/js/fileupload.js */ "./public/assets/plugins/fileuploads/js/fileupload.js");
/* harmony import */ var _assets_plugins_fileuploads_js_fileupload_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_assets_plugins_fileuploads_js_fileupload_js__WEBPACK_IMPORTED_MODULE_3__);
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



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  mixins: [_mixins__WEBPACK_IMPORTED_MODULE_1__.formFieldsMixin],
  data: function data() {
    return {
      dropify: {},
      form: {
        uid: '',
        name: '',
        description: '',
        email: '',
        phone: null,
        address: '',
        user_licenses: 0,
        component_licenses: 0,
        logo: null,
        status: 1,
        subdomain: '',
        tenant: ''
      },
      data: {
        managers: []
      },
      currentUser: {
        auth_level: null
      },
      formValidated: false,
      formErrors: [],
      formStored: false,
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
              axios.get('/api/auth/users?auth_lvl=2').then(function (response) {
                _this.data.managers = response.data;
              });
              _this.dropify = _this.initDropify();
              _this.statusList = _this.getStatus();

            case 6:
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
      this.$refs.logo.files = [];
    },
    handleFileUpload: function handleFileUpload() {
      var vlogo = this.$data;
      vlogo.form.logo = this.$refs.logo.files[0];
      this.dropify.on('dropify.errors', function (event, element) {
        vlogo.form.logo = null;
      });
      this.dropify.on('dropify.afterClear', function (e, el) {
        vlogo.form.logo = null;
      });
    },
    handleAddEntreprise: function handleAddEntreprise(e) {
      var _this2 = this;

      e.preventDefault(); // reset some attrs

      this.clearFormErrors();
      this.setFormStored(false); // form valdiation using JQuery

      if ($('#newElementForm')[0].checkValidity() === false) {
        e.preventDefault();
        e.stopPropagation();
      } else {
        var formData = new FormData();

        _.each(this.form, function (value, key) {
          formData.append(key, value);
        });

        axios.post('/api/auth/entreprises', formData, {
          headers: {
            'Content-Type': 'multipart/form-data'
          }
        }).then(function (response) {
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

/***/ "./public/assets/plugins/fileuploads/js/fileupload.js":
/*!************************************************************!*\
  !*** ./public/assets/plugins/fileuploads/js/fileupload.js ***!
  \************************************************************/
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/*!
 * =============================================================
 * dropify v0.2.2 - Override your input files with style.
 * https://github.com/JeremyFagis/dropify
 *
 * (c) 2017 - Jeremy FAGIS <jeremy@fagis.fr> (http://fagis.fr)
 * =============================================================
 */
;

(function (root, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js")], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
		__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
		(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else {}
})(this, function ($) {
  var pluginName = "dropify";
  /**
   * Dropify plugin
   *
   * @param {Object} element
   * @param {Array} options
   */

  function Dropify(element, options) {
    if (!(window.File && window.FileReader && window.FileList && window.Blob)) {
      return;
    }

    var defaults = {
      defaultFile: '',
      maxFileSize: 0,
      minWidth: 0,
      maxWidth: 0,
      minHeight: 0,
      maxHeight: 0,
      showRemove: true,
      showLoader: true,
      showErrors: true,
      errorTimeout: 3000,
      errorsPosition: 'overlay',
      imgFileExtensions: ['png', 'jpg', 'jpeg', 'gif', 'bmp'],
      maxFileSizePreview: "5M",
      allowedFormats: ['portrait', 'square', 'landscape'],
      allowedFileExtensions: ['*'],
      messages: {
        'default': 'Drag and drop a file here or click',
        'replace': 'Drag and drop or click to replace',
        'remove': 'Remove',
        'error': 'Ooops, something wrong happended.'
      },
      error: {
        'fileSize': 'The file size is too big ({{ value }} max).',
        'minWidth': 'The image width is too small ({{ value }}}px min).',
        'maxWidth': 'The image width is too big ({{ value }}}px max).',
        'minHeight': 'The image height is too small ({{ value }}}px min).',
        'maxHeight': 'The image height is too big ({{ value }}px max).',
        'imageFormat': 'The image format is not allowed ({{ value }} only).',
        'fileExtension': 'The file is not allowed ({{ value }} only).'
      },
      tpl: {
        wrap: '<div class="dropify-wrapper"></div>',
        loader: '<div class="dropify-loader"></div>',
        message: '<div class="dropify-message"><span class="file-icon" /> <p>{{ default }}</p></div>',
        preview: '<div class="dropify-preview"><span class="dropify-render"></span><div class="dropify-infos"><div class="dropify-infos-inner"><p class="dropify-infos-message">{{ replace }}</p></div></div></div>',
        filename: '<p class="dropify-filename"><span class="dropify-filename-inner"></span></p>',
        clearButton: '<button type="button" class="dropify-clear">{{ remove }}</button>',
        errorLine: '<p class="dropify-error">{{ error }}</p>',
        errorsContainer: '<div class="dropify-errors-container"><ul></ul></div>'
      }
    };
    this.element = element;
    this.input = $(this.element);
    this.wrapper = null;
    this.preview = null;
    this.filenameWrapper = null;
    this.settings = $.extend(true, defaults, options, this.input.data());
    this.errorsEvent = $.Event('dropify.errors');
    this.isDisabled = false;
    this.isInit = false;
    this.file = {
      object: null,
      name: null,
      size: null,
      width: null,
      height: null,
      type: null
    };

    if (!Array.isArray(this.settings.allowedFormats)) {
      this.settings.allowedFormats = this.settings.allowedFormats.split(' ');
    }

    if (!Array.isArray(this.settings.allowedFileExtensions)) {
      this.settings.allowedFileExtensions = this.settings.allowedFileExtensions.split(' ');
    }

    this.onChange = this.onChange.bind(this);
    this.clearElement = this.clearElement.bind(this);
    this.onFileReady = this.onFileReady.bind(this);
    this.translateMessages();
    this.createElements();
    this.setContainerSize();
    this.errorsEvent.errors = [];
    this.input.on('change', this.onChange);
  }
  /**
   * On change event
   */


  Dropify.prototype.onChange = function () {
    this.resetPreview();
    this.readFile(this.element);
  };
  /**
   * Create dom elements
   */


  Dropify.prototype.createElements = function () {
    this.isInit = true;
    this.input.wrap($(this.settings.tpl.wrap));
    this.wrapper = this.input.parent();
    var messageWrapper = $(this.settings.tpl.message).insertBefore(this.input);
    $(this.settings.tpl.errorLine).appendTo(messageWrapper);

    if (this.isTouchDevice() === true) {
      this.wrapper.addClass('touch-fallback');
    }

    if (this.input.attr('disabled')) {
      this.isDisabled = true;
      this.wrapper.addClass('disabled');
    }

    if (this.settings.showLoader === true) {
      this.loader = $(this.settings.tpl.loader);
      this.loader.insertBefore(this.input);
    }

    this.preview = $(this.settings.tpl.preview);
    this.preview.insertAfter(this.input);

    if (this.isDisabled === false && this.settings.showRemove === true) {
      this.clearButton = $(this.settings.tpl.clearButton);
      this.clearButton.insertAfter(this.input);
      this.clearButton.on('click', this.clearElement);
    }

    this.filenameWrapper = $(this.settings.tpl.filename);
    this.filenameWrapper.prependTo(this.preview.find('.dropify-infos-inner'));

    if (this.settings.showErrors === true) {
      this.errorsContainer = $(this.settings.tpl.errorsContainer);

      if (this.settings.errorsPosition === 'outside') {
        this.errorsContainer.insertAfter(this.wrapper);
      } else {
        this.errorsContainer.insertBefore(this.input);
      }
    }

    var defaultFile = this.settings.defaultFile || '';

    if (defaultFile.trim() !== '') {
      this.file.name = this.cleanFilename(defaultFile);
      this.setPreview(this.isImage(), defaultFile);
    }
  };
  /**
   * Read the file using FileReader
   *
   * @param  {Object} input
   */


  Dropify.prototype.readFile = function (input) {
    if (input.files && input.files[0]) {
      var reader = new FileReader();
      var image = new Image();
      var file = input.files[0];
      var srcBase64 = null;

      var _this = this;

      var eventFileReady = $.Event("dropify.fileReady");
      this.clearErrors();
      this.showLoader();
      this.setFileInformations(file);
      this.errorsEvent.errors = [];
      this.checkFileSize();
      this.isFileExtensionAllowed();

      if (this.isImage() && this.file.size < this.sizeToByte(this.settings.maxFileSizePreview)) {
        this.input.on('dropify.fileReady', this.onFileReady);
        reader.readAsDataURL(file);

        reader.onload = function (_file) {
          srcBase64 = _file.target.result;
          image.src = _file.target.result;

          image.onload = function () {
            _this.setFileDimensions(this.width, this.height);

            _this.validateImage();

            _this.input.trigger(eventFileReady, [true, srcBase64]);
          };
        }.bind(this);
      } else {
        this.onFileReady(false);
      }
    }
  };
  /**
   * On file ready to show
   *
   * @param  {Event} event
   * @param  {Bool} previewable
   * @param  {String} src
   */


  Dropify.prototype.onFileReady = function (event, previewable, src) {
    this.input.off('dropify.fileReady', this.onFileReady);

    if (this.errorsEvent.errors.length === 0) {
      this.setPreview(previewable, src);
    } else {
      this.input.trigger(this.errorsEvent, [this]);

      for (var i = this.errorsEvent.errors.length - 1; i >= 0; i--) {
        var errorNamespace = this.errorsEvent.errors[i].namespace;
        var errorKey = errorNamespace.split('.').pop();
        this.showError(errorKey);
      }

      if (typeof this.errorsContainer !== "undefined") {
        this.errorsContainer.addClass('visible');
        var errorsContainer = this.errorsContainer;
        setTimeout(function () {
          errorsContainer.removeClass('visible');
        }, this.settings.errorTimeout);
      }

      this.wrapper.addClass('has-error');
      this.resetPreview();
      this.clearElement();
    }
  };
  /**
   * Set file informations
   *
   * @param {File} file
   */


  Dropify.prototype.setFileInformations = function (file) {
    this.file.object = file;
    this.file.name = file.name;
    this.file.size = file.size;
    this.file.type = file.type;
    this.file.width = null;
    this.file.height = null;
  };
  /**
   * Set file dimensions
   *
   * @param {Int} width
   * @param {Int} height
   */


  Dropify.prototype.setFileDimensions = function (width, height) {
    this.file.width = width;
    this.file.height = height;
  };
  /**
   * Set the preview and animate it
   *
   * @param {String} src
   */


  Dropify.prototype.setPreview = function (previewable, src) {
    this.wrapper.removeClass('has-error').addClass('has-preview');
    this.filenameWrapper.children('.dropify-filename-inner').html(this.file.name);
    var render = this.preview.children('.dropify-render');
    this.hideLoader();

    if (previewable === true) {
      var imgTag = $('<img />').attr('src', src);

      if (this.settings.height) {
        imgTag.css("max-height", this.settings.height);
      }

      imgTag.appendTo(render);
    } else {
      $('<i />').attr('class', 'dropify-font-file').appendTo(render);
      $('<span class="dropify-extension" />').html(this.getFileType()).appendTo(render);
    }

    this.preview.fadeIn();
  };
  /**
   * Reset the preview
   */


  Dropify.prototype.resetPreview = function () {
    this.wrapper.removeClass('has-preview');
    var render = this.preview.children('.dropify-render');
    render.find('.dropify-extension').remove();
    render.find('i').remove();
    render.find('img').remove();
    this.preview.hide();
    this.hideLoader();
  };
  /**
   * Clean the src and get the filename
   *
   * @param  {String} src
   *
   * @return {String} filename
   */


  Dropify.prototype.cleanFilename = function (src) {
    var filename = src.split('\\').pop();

    if (filename == src) {
      filename = src.split('/').pop();
    }

    return src !== "" ? filename : '';
  };
  /**
   * Clear the element, events are available
   */


  Dropify.prototype.clearElement = function () {
    if (this.errorsEvent.errors.length === 0) {
      var eventBefore = $.Event("dropify.beforeClear");
      this.input.trigger(eventBefore, [this]);

      if (eventBefore.result !== false) {
        this.resetFile();
        this.input.val('');
        this.resetPreview();
        this.input.trigger($.Event("dropify.afterClear"), [this]);
      }
    } else {
      this.resetFile();
      this.input.val('');
      this.resetPreview();
    }
  };
  /**
   * Reset file informations
   */


  Dropify.prototype.resetFile = function () {
    this.file.object = null;
    this.file.name = null;
    this.file.size = null;
    this.file.type = null;
    this.file.width = null;
    this.file.height = null;
  };
  /**
   * Set the container height
   */


  Dropify.prototype.setContainerSize = function () {
    if (this.settings.height) {
      this.wrapper.height(this.settings.height);
    }
  };
  /**
   * Test if it's touch screen
   *
   * @return {Boolean}
   */


  Dropify.prototype.isTouchDevice = function () {
    return 'ontouchstart' in window || navigator.MaxTouchPoints > 0 || navigator.msMaxTouchPoints > 0;
  };
  /**
   * Get the file type.
   *
   * @return {String}
   */


  Dropify.prototype.getFileType = function () {
    return this.file.name.split('.').pop().toLowerCase();
  };
  /**
   * Test if the file is an image
   *
   * @return {Boolean}
   */


  Dropify.prototype.isImage = function () {
    if (this.settings.imgFileExtensions.indexOf(this.getFileType()) != "-1") {
      return true;
    }

    return false;
  };
  /**
  * Test if the file extension is allowed
  *
  * @return {Boolean}
  */


  Dropify.prototype.isFileExtensionAllowed = function () {
    if (this.settings.allowedFileExtensions.indexOf('*') != "-1" || this.settings.allowedFileExtensions.indexOf(this.getFileType()) != "-1") {
      return true;
    }

    this.pushError("fileExtension");
    return false;
  };
  /**
   * Translate messages if needed.
   */


  Dropify.prototype.translateMessages = function () {
    for (var name in this.settings.tpl) {
      for (var key in this.settings.messages) {
        this.settings.tpl[name] = this.settings.tpl[name].replace('{{ ' + key + ' }}', this.settings.messages[key]);
      }
    }
  };
  /**
   * Check the limit filesize.
   */


  Dropify.prototype.checkFileSize = function () {
    if (this.sizeToByte(this.settings.maxFileSize) !== 0 && this.file.size > this.sizeToByte(this.settings.maxFileSize)) {
      this.pushError("fileSize");
    }
  };
  /**
   * Convert filesize to byte.
   *
   * @return {Int} value
   */


  Dropify.prototype.sizeToByte = function (size) {
    var value = 0;

    if (size !== 0) {
      var unit = size.slice(-1).toUpperCase(),
          kb = 1024,
          mb = kb * 1024,
          gb = mb * 1024;

      if (unit === 'K') {
        value = parseFloat(size) * kb;
      } else if (unit === 'M') {
        value = parseFloat(size) * mb;
      } else if (unit === 'G') {
        value = parseFloat(size) * gb;
      }
    }

    return value;
  };
  /**
   * Validate image dimensions and format
   */


  Dropify.prototype.validateImage = function () {
    if (this.settings.minWidth !== 0 && this.settings.minWidth >= this.file.width) {
      this.pushError("minWidth");
    }

    if (this.settings.maxWidth !== 0 && this.settings.maxWidth <= this.file.width) {
      this.pushError("maxWidth");
    }

    if (this.settings.minHeight !== 0 && this.settings.minHeight >= this.file.height) {
      this.pushError("minHeight");
    }

    if (this.settings.maxHeight !== 0 && this.settings.maxHeight <= this.file.height) {
      this.pushError("maxHeight");
    }

    if (this.settings.allowedFormats.indexOf(this.getImageFormat()) == "-1") {
      this.pushError("imageFormat");
    }
  };
  /**
   * Get image format.
   *
   * @return {String}
   */


  Dropify.prototype.getImageFormat = function () {
    if (this.file.width == this.file.height) {
      return "square";
    }

    if (this.file.width < this.file.height) {
      return "portrait";
    }

    if (this.file.width > this.file.height) {
      return "landscape";
    }
  };
  /**
  * Push error
  *
  * @param {String} errorKey
  */


  Dropify.prototype.pushError = function (errorKey) {
    var e = $.Event("dropify.error." + errorKey);
    this.errorsEvent.errors.push(e);
    this.input.trigger(e, [this]);
  };
  /**
   * Clear errors
   */


  Dropify.prototype.clearErrors = function () {
    if (typeof this.errorsContainer !== "undefined") {
      this.errorsContainer.children('ul').html('');
    }
  };
  /**
   * Show error in DOM
   *
   * @param  {String} errorKey
   */


  Dropify.prototype.showError = function (errorKey) {
    if (typeof this.errorsContainer !== "undefined") {
      this.errorsContainer.children('ul').append('<li>' + this.getError(errorKey) + '</li>');
    }
  };
  /**
   * Get error message
   *
   * @return  {String} message
   */


  Dropify.prototype.getError = function (errorKey) {
    var error = this.settings.error[errorKey],
        value = '';

    if (errorKey === 'fileSize') {
      value = this.settings.maxFileSize;
    } else if (errorKey === 'minWidth') {
      value = this.settings.minWidth;
    } else if (errorKey === 'maxWidth') {
      value = this.settings.maxWidth;
    } else if (errorKey === 'minHeight') {
      value = this.settings.minHeight;
    } else if (errorKey === 'maxHeight') {
      value = this.settings.maxHeight;
    } else if (errorKey === 'imageFormat') {
      value = this.settings.allowedFormats.join(', ');
    } else if (errorKey === 'fileExtension') {
      value = this.settings.allowedFileExtensions.join(', ');
    }

    if (value !== '') {
      return error.replace('{{ value }}', value);
    }

    return error;
  };
  /**
   * Show the loader
   */


  Dropify.prototype.showLoader = function () {
    if (typeof this.loader !== "undefined") {
      this.loader.show();
    }
  };
  /**
   * Hide the loader
   */


  Dropify.prototype.hideLoader = function () {
    if (typeof this.loader !== "undefined") {
      this.loader.hide();
    }
  };
  /**
   * Destroy dropify
   */


  Dropify.prototype.destroy = function () {
    this.input.siblings().remove();
    this.input.unwrap();
    this.isInit = false;
  };
  /**
   * Init dropify
   */


  Dropify.prototype.init = function () {
    this.createElements();
  };
  /**
   * Test if element is init
   */


  Dropify.prototype.isDropified = function () {
    return this.isInit;
  };

  $.fn[pluginName] = function (options) {
    this.each(function () {
      if (!$.data(this, pluginName)) {
        $.data(this, pluginName, new Dropify(this, options));
      }
    });
    return this;
  };

  return Dropify;
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

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./public/assets/plugins/fileuploads/css/fileupload.css":
/*!**********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./public/assets/plugins/fileuploads/css/fileupload.css ***!
  \**********************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _fonts_dropify_eot__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../fonts/dropify.eot */ "./public/assets/plugins/fileuploads/fonts/dropify.eot");
/* harmony import */ var _fonts_dropify_woff__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../fonts/dropify.woff */ "./public/assets/plugins/fileuploads/fonts/dropify.woff");
/* harmony import */ var _fonts_dropify_ttf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../fonts/dropify.ttf */ "./public/assets/plugins/fileuploads/fonts/dropify.ttf");
/* harmony import */ var _fonts_dropify_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../fonts/dropify.svg */ "./public/assets/plugins/fileuploads/fonts/dropify.svg");
// Imports






var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default()(_fonts_dropify_eot__WEBPACK_IMPORTED_MODULE_2__.default);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default()(_fonts_dropify_eot__WEBPACK_IMPORTED_MODULE_2__.default, { hash: "#iefix" });
var ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default()(_fonts_dropify_woff__WEBPACK_IMPORTED_MODULE_3__.default);
var ___CSS_LOADER_URL_REPLACEMENT_3___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default()(_fonts_dropify_ttf__WEBPACK_IMPORTED_MODULE_4__.default);
var ___CSS_LOADER_URL_REPLACEMENT_4___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default()(_fonts_dropify_svg__WEBPACK_IMPORTED_MODULE_5__.default, { hash: "#dropify" });
// Module
___CSS_LOADER_EXPORT___.push([module.id, "/*!\n * =============================================================\n * dropify v0.2.2 - Override your input files with style.\n * https://github.com/JeremyFagis/dropify\n *\n * (c) 2017 - Jeremy FAGIS <jeremy@fagis.fr> (http://fagis.fr)\n * =============================================================\n */\n\n@charset \"UTF-8\";\n@font-face {\n  font-family: 'dropify';\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ") format(\"embedded-opentype\"), url(" + ___CSS_LOADER_URL_REPLACEMENT_2___ + ") format(\"woff\"), url(" + ___CSS_LOADER_URL_REPLACEMENT_3___ + ") format(\"truetype\"), url(" + ___CSS_LOADER_URL_REPLACEMENT_4___ + ") format(\"svg\");\n  font-weight: normal;\n  font-style: normal; }\n\n[class^=\"dropify-font-\"]:before, [class*=\" dropify-font-\"]:before, .dropify-font:before, .dropify-wrapper .dropify-message span.file-icon:before {\n  font-family: \"dropify\";\n  font-style: normal;\n  font-weight: normal;\n  speak: none;\n  display: inline-block;\n  text-decoration: inherit;\n  width: 1em;\n  margin-left: .2em;\n  margin-right: .2em;\n  text-align: center;\n  font-variant: normal;\n  text-transform: none;\n  line-height: 1em; }\n\n.dropify-font-upload:before, .dropify-wrapper .dropify-message span.file-icon:before {\n  content: '\\e800'; }\n\n.dropify-font-file:before {\n  content: '\\e801'; }\n\n.dropify-wrapper {\n  display: block;\n  position: relative;\n  cursor: pointer;\n  overflow: hidden;\n  width: 100%;\n  max-width: 100%;\n  height: 200px;\n  padding: 5px 10px;\n  font-size: 14px;\n  line-height: 22px;\n  color: #000;\n  background-color: #FFF;\n  background-image: none;\n  text-align: center;\n  border: 1px solid #f0f0f4;\n  transition: border-color 0.15s linear; }\n  .dropify-wrapper:hover {\n    background-size: 30px 30px;\n    background-image: linear-gradient(-45deg, #F6F6F6 25%, transparent 25%, transparent 50%, #F6F6F6 50%, #F6F6F6 75%, transparent 75%, transparent);\n    -webkit-animation: stripes 2s linear infinite;\n            animation: stripes 2s linear infinite; }\n  .dropify-wrapper.has-preview .dropify-clear {\n    display: block; }\n  .dropify-wrapper.has-error {\n    border-color: #F34141; }\n    .dropify-wrapper.has-error .dropify-message .dropify-error {\n      display: block; }\n    .dropify-wrapper.has-error:hover .dropify-errors-container  {\n      visibility: visible;\n      opacity: 1;\n      transition-delay: 0s; }\n  .dropify-wrapper.disabled input {\n    cursor: not-allowed; }\n  .dropify-wrapper.disabled:hover {\n    background-image: none;\n    -webkit-animation: none;\n            animation: none; }\n  .dropify-wrapper.disabled .dropify-message {\n    opacity: 0.5;\n    text-decoration: line-through; }\n  .dropify-wrapper.disabled .dropify-infos-message {\n    display: none; }\n  .dropify-wrapper input {\n    position: absolute;\n    top: 0;\n    right: 0;\n    bottom: 0;\n    left: 0;\n    height: 100%;\n    width: 100%;\n    opacity: 0;\n    cursor: pointer;\n    z-index: 5; }\n  .dropify-wrapper .dropify-message {\n    position: relative;\n    top: 50%;\n    transform: translateY(-50%); }\n    .dropify-wrapper .dropify-message span.file-icon {\n      font-size: 50px;\n      color: #68798b; }\n    .dropify-wrapper .dropify-message p {\n      margin: 5px 0 0 0;\n      color: #000; \n      font-size: 14px;}\n      .dropify-wrapper .dropify-message p.dropify-error {\n        color: #F34141;\n        font-weight: bold;\n        display: none; }\n  .dropify-wrapper .dropify-clear {\n    display: none;\n    position: absolute;\n    opacity: 0;\n    z-index: 7;\n    top: 10px;\n    right: 10px;\n    background: none;\n    border: 2px solid #FFF;\n    text-transform: uppercase;\n    font-family: \"Roboto\", \"Helvetica Neue\", \"Helvetica\", \"Arial\";\n    font-size: 11px;\n    padding: 4px 8px;\n    font-weight: bold;\n    color: #FFF;\n    transition: all 0.15s linear; }\n    .dropify-wrapper .dropify-clear:hover {\n      background: rgba(255, 255, 255, 0.2); }\n  .dropify-wrapper .dropify-preview {\n    display: none;\n    position: absolute;\n    z-index: 1;\n    background-color: #FFF;\n    padding: 5px;\n    width: 100%;\n    height: 100%;\n    top: 0;\n    right: 0;\n    bottom: 0;\n    left: 0;\n    overflow: hidden;\n    text-align: center; }\n    .dropify-wrapper .dropify-preview .dropify-render img {\n      top: 50%;\n      transform: translate(0, -50%);\n      position: relative;\n      max-width: 100%;\n      max-height: 100%;\n      background-color: #FFF;\n      transition: border-color 0.15s linear; }\n    .dropify-wrapper .dropify-preview .dropify-render i {\n      font-size: 70px;\n      top: 50%;\n      left: 50%;\n      transform: translate(-50%, -50%);\n      position: absolute;\n      color: #777; }\n    .dropify-wrapper .dropify-preview .dropify-render .dropify-extension {\n      position: absolute;\n      top: 50%;\n      left: 50%;\n      transform: translate(-50%, -50%);\n      margin-top: 10px;\n      text-transform: uppercase;\n      font-weight: 900;\n      letter-spacing: -0.03em;\n      font-size: 13px;\n      width: 42px;\n      white-space: nowrap;\n      overflow: hidden;\n      text-overflow: ellipsis; }\n    .dropify-wrapper .dropify-preview .dropify-infos {\n      position: absolute;\n      left: 0;\n      top: 0;\n      right: 0;\n      bottom: 0;\n      z-index: 3;\n      background: rgba(0, 0, 0, 0.7);\n      opacity: 0;\n      transition: opacity 0.15s linear; }\n      .dropify-wrapper .dropify-preview .dropify-infos .dropify-infos-inner {\n        position: absolute;\n        top: 50%;\n        transform: translate(0, -40%);\n        -webkit-backface-visibility: hidden;\n                backface-visibility: hidden;\n        width: 100%;\n        padding: 0 20px;\n        transition: all 0.2s ease; }\n        .dropify-wrapper .dropify-preview .dropify-infos .dropify-infos-inner p {\n          padding: 0;\n          margin: 0;\n          position: relative;\n          width: 100%;\n          white-space: nowrap;\n          overflow: hidden;\n          text-overflow: ellipsis;\n          color: #FFF;\n          text-align: center;\n          line-height: 25px;\n          font-weight: bold; }\n          .dropify-wrapper .dropify-preview .dropify-infos .dropify-infos-inner p.dropify-infos-message {\n            margin-top: 15px;\n            padding-top: 15px;\n            font-size: 12px;\n            position: relative;\n            opacity: 0.5; }\n            .dropify-wrapper .dropify-preview .dropify-infos .dropify-infos-inner p.dropify-infos-message::before {\n              content: '';\n              position: absolute;\n              top: 0;\n              left: 50%;\n              transform: translate(-50%, 0);\n              background: #FFF;\n              width: 30px;\n              height: 2px; }\n  .dropify-wrapper:hover .dropify-clear {\n    opacity: 1; }\n  .dropify-wrapper:hover .dropify-preview .dropify-infos {\n    opacity: 1; }\n    .dropify-wrapper:hover .dropify-preview .dropify-infos .dropify-infos-inner {\n      margin-top: -5px; }\n  .dropify-wrapper.touch-fallback {\n    height: auto !important; }\n    .dropify-wrapper.touch-fallback:hover {\n      background-image: none;\n      -webkit-animation: none;\n              animation: none; }\n    .dropify-wrapper.touch-fallback .dropify-preview {\n      position: relative;\n      padding: 0; }\n      .dropify-wrapper.touch-fallback .dropify-preview .dropify-render {\n        display: block;\n        position: relative; }\n        .dropify-wrapper.touch-fallback .dropify-preview .dropify-render .dropify-font-file {\n          position: relative;\n          transform: translate(0, 0);\n          top: 0;\n          left: 0; }\n          .dropify-wrapper.touch-fallback .dropify-preview .dropify-render .dropify-font-file::before {\n            margin-top: 30px;\n            margin-bottom: 30px; }\n        .dropify-wrapper.touch-fallback .dropify-preview .dropify-render img {\n          position: relative;\n          transform: translate(0, 0); }\n      .dropify-wrapper.touch-fallback .dropify-preview .dropify-infos {\n        position: relative;\n        opacity: 1;\n        background: transparent; }\n        .dropify-wrapper.touch-fallback .dropify-preview .dropify-infos .dropify-infos-inner {\n          position: relative;\n          top: 0;\n          transform: translate(0, 0);\n          padding: 5px 90px 5px 0; }\n          .dropify-wrapper.touch-fallback .dropify-preview .dropify-infos .dropify-infos-inner p {\n            padding: 0;\n            margin: 0;\n            position: relative;\n            width: 100%;\n            white-space: nowrap;\n            overflow: hidden;\n            text-overflow: ellipsis;\n            color: #777;\n            text-align: left;\n            line-height: 25px; }\n            .dropify-wrapper.touch-fallback .dropify-preview .dropify-infos .dropify-infos-inner p.dropify-filename {\n              font-weight: bold; }\n            .dropify-wrapper.touch-fallback .dropify-preview .dropify-infos .dropify-infos-inner p.dropify-infos-message {\n              margin-top: 0;\n              padding-top: 0;\n              font-size: 11px;\n              position: relative;\n              opacity: 1; }\n              .dropify-wrapper.touch-fallback .dropify-preview .dropify-infos .dropify-infos-inner p.dropify-infos-message::before {\n                display: none; }\n    .dropify-wrapper.touch-fallback .dropify-message {\n      transform: translate(0, 0);\n      padding: 40px 0; }\n    .dropify-wrapper.touch-fallback .dropify-clear {\n      top: auto;\n      bottom: 23px;\n      opacity: 1;\n      border-color: rgba(119, 119, 119, 0.7);\n      color: #777; }\n    .dropify-wrapper.touch-fallback.has-preview .dropify-message {\n      display: none; }\n    .dropify-wrapper.touch-fallback:hover .dropify-preview .dropify-infos .dropify-infos-inner {\n      margin-top: 0; }\n  .dropify-wrapper .dropify-loader {\n    position: absolute;\n    top: 15px;\n    right: 15px;\n    display: none;\n    z-index: 9; }\n    .dropify-wrapper .dropify-loader::after {\n      display: block;\n      position: relative;\n      width: 20px;\n      height: 20px;\n      -webkit-animation: rotate 0.6s linear infinite;\n              animation: rotate 0.6s linear infinite;\n      border-radius: 100%;\n      border-top: 1px solid #CCC;\n      border-bottom: 1px solid #777;\n      border-left: 1px solid #CCC;\n      border-right: 1px solid #777;\n      content: ''; }\n  .dropify-wrapper .dropify-errors-container {\n    position: absolute;\n    left: 0;\n    top: 0;\n    right: 0;\n    bottom: 0;\n    z-index: 3;\n    background: rgba(243, 65, 65, 0.8);\n    text-align: left;\n    visibility: hidden;\n    opacity: 0;\n    transition: visibility 0s linear 0.15s,opacity 0.15s linear; }\n    .dropify-wrapper .dropify-errors-container ul {\n      padding: 10px 20px;\n      margin: 0;\n      position: absolute;\n      left: 0;\n      top: 50%;\n      transform: translateY(-50%); }\n      .dropify-wrapper .dropify-errors-container ul li {\n        margin-left: 20px;\n        color: #FFF;\n        font-weight: bold; }\n    .dropify-wrapper .dropify-errors-container.visible {\n      visibility: visible;\n      opacity: 1;\n      transition-delay: 0s; }\n  .dropify-wrapper ~ .dropify-errors-container ul {\n    padding: 0;\n    margin: 15px 0; }\n    .dropify-wrapper ~ .dropify-errors-container ul li {\n      margin-left: 20px;\n      color: #F34141;\n      font-weight: bold; }\n\n@-webkit-keyframes stripes {\n  from {\n    background-position: 0 0; }\n  to {\n    background-position: 60px 30px; } }\n\n@keyframes stripes {\n  from {\n    background-position: 0 0; }\n  to {\n    background-position: 60px 30px; } }\n\n@-webkit-keyframes rotate {\n  0% {\n    transform: rotateZ(-360deg); }\n  100% {\n    transform: rotateZ(0deg); } }\n\n@keyframes rotate {\n  0% {\n    transform: rotateZ(-360deg); }\n  100% {\n    transform: rotateZ(0deg); } }\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join("");
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === "string") {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, ""]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {

"use strict";


module.exports = function (url, options) {
  if (!options) {
    // eslint-disable-next-line no-param-reassign
    options = {};
  } // eslint-disable-next-line no-underscore-dangle, no-param-reassign


  url = url && url.__esModule ? url.default : url;

  if (typeof url !== "string") {
    return url;
  } // If url is already wrapped in quotes, remove them


  if (/^['"].*['"]$/.test(url)) {
    // eslint-disable-next-line no-param-reassign
    url = url.slice(1, -1);
  }

  if (options.hash) {
    // eslint-disable-next-line no-param-reassign
    url += options.hash;
  } // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls


  if (/["'() \t\n]/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }

  return url;
};

/***/ }),

/***/ "./public/assets/plugins/fileuploads/fonts/dropify.eot":
/*!*************************************************************!*\
  !*** ./public/assets/plugins/fileuploads/fonts/dropify.eot ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("/fonts/dropify.eot?533b98a9bdcedcf6e79462b7a69d36d3");

/***/ }),

/***/ "./public/assets/plugins/fileuploads/fonts/dropify.svg":
/*!*************************************************************!*\
  !*** ./public/assets/plugins/fileuploads/fonts/dropify.svg ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("/fonts/dropify.svg?86d35fae3d79c87952d7d7d23ab70ad5");

/***/ }),

/***/ "./public/assets/plugins/fileuploads/fonts/dropify.ttf":
/*!*************************************************************!*\
  !*** ./public/assets/plugins/fileuploads/fonts/dropify.ttf ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("/fonts/dropify.ttf?fa3ea434d36806e79512410176c79a25");

/***/ }),

/***/ "./public/assets/plugins/fileuploads/fonts/dropify.woff":
/*!**************************************************************!*\
  !*** ./public/assets/plugins/fileuploads/fonts/dropify.woff ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("/fonts/dropify.woff?26224e3857435de14aab7966088b98b5");

/***/ }),

/***/ "./public/assets/plugins/fileuploads/css/fileupload.css":
/*!**************************************************************!*\
  !*** ./public/assets/plugins/fileuploads/css/fileupload.css ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_fileupload_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./fileupload.css */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./public/assets/plugins/fileuploads/css/fileupload.css");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_fileupload_css__WEBPACK_IMPORTED_MODULE_1__.default, options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_fileupload_css__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
        try {
          // This will throw an exception if access to iframe is blocked
          // due to cross-origin restrictions
          styleTarget = styleTarget.contentDocument.head;
        } catch (e) {
          // istanbul ignore next
          styleTarget = null;
        }
      }

      memo[target] = styleTarget;
    }

    return memo[target];
  };
}();

var stylesInDom = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDom.length; i++) {
    if (stylesInDom[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var index = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3]
    };

    if (index !== -1) {
      stylesInDom[index].references++;
      stylesInDom[index].updater(obj);
    } else {
      stylesInDom.push({
        identifier: identifier,
        updater: addStyle(obj, options),
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function insertStyleElement(options) {
  var style = document.createElement('style');
  var attributes = options.attributes || {};

  if (typeof attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : 0;

    if (nonce) {
      attributes.nonce = nonce;
    }
  }

  Object.keys(attributes).forEach(function (key) {
    style.setAttribute(key, attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.media ? "@media ".concat(obj.media, " {").concat(obj.css, "}") : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  } else {
    style.removeAttribute('media');
  }

  if (sourceMap && typeof btoa !== 'undefined') {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    if (Object.prototype.toString.call(newList) !== '[object Array]') {
      return;
    }

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDom[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDom[_index].references === 0) {
        stylesInDom[_index].updater();

        stylesInDom.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./resources/js/views/auth/entreprises/EntreprisesAdd.vue":
/*!****************************************************************!*\
  !*** ./resources/js/views/auth/entreprises/EntreprisesAdd.vue ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _EntreprisesAdd_vue_vue_type_template_id_7ad782b8___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./EntreprisesAdd.vue?vue&type=template&id=7ad782b8& */ "./resources/js/views/auth/entreprises/EntreprisesAdd.vue?vue&type=template&id=7ad782b8&");
/* harmony import */ var _EntreprisesAdd_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./EntreprisesAdd.vue?vue&type=script&lang=js& */ "./resources/js/views/auth/entreprises/EntreprisesAdd.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _EntreprisesAdd_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _EntreprisesAdd_vue_vue_type_template_id_7ad782b8___WEBPACK_IMPORTED_MODULE_0__.render,
  _EntreprisesAdd_vue_vue_type_template_id_7ad782b8___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/auth/entreprises/EntreprisesAdd.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/views/auth/entreprises/EntreprisesAdd.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************!*\
  !*** ./resources/js/views/auth/entreprises/EntreprisesAdd.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_EntreprisesAdd_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./EntreprisesAdd.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/auth/entreprises/EntreprisesAdd.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_EntreprisesAdd_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/views/auth/entreprises/EntreprisesAdd.vue?vue&type=template&id=7ad782b8&":
/*!***********************************************************************************************!*\
  !*** ./resources/js/views/auth/entreprises/EntreprisesAdd.vue?vue&type=template&id=7ad782b8& ***!
  \***********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_EntreprisesAdd_vue_vue_type_template_id_7ad782b8___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_EntreprisesAdd_vue_vue_type_template_id_7ad782b8___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_EntreprisesAdd_vue_vue_type_template_id_7ad782b8___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./EntreprisesAdd.vue?vue&type=template&id=7ad782b8& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/auth/entreprises/EntreprisesAdd.vue?vue&type=template&id=7ad782b8&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/auth/entreprises/EntreprisesAdd.vue?vue&type=template&id=7ad782b8&":
/*!**************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/auth/entreprises/EntreprisesAdd.vue?vue&type=template&id=7ad782b8& ***!
  \**************************************************************************************************************************************************************************************************************************************/
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
                return _vm.handleAddEntreprise.apply(null, arguments)
              }
            }
          },
          [
            _c("div", { staticClass: "row" }, [
              _c("div", { staticClass: "col" }, [
                _c("div", { staticClass: "mb-4" }, [
                  _vm._m(3),
                  _vm._v(" "),
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.form.name,
                        expression: "form.name"
                      }
                    ],
                    staticClass: "form-control",
                    attrs: {
                      type: "text",
                      placeholder: "Nom de l'entreprise",
                      required: ""
                    },
                    domProps: { value: _vm.form.name },
                    on: {
                      input: function($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.$set(_vm.form, "name", $event.target.value)
                      }
                    }
                  }),
                  _vm._v(" "),
                  _c("div", { staticClass: "invalid-feedback" }, [
                    _vm._v(" Ce champ n'est pas valide.")
                  ])
                ]),
                _vm._v(" "),
                _vm.currentUser.auth_level == 1
                  ? _c("div", { staticClass: "form-group" }, [
                      _vm._m(4),
                      _vm._v(" "),
                      _c(
                        "select",
                        {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.form.uid,
                              expression: "form.uid"
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
                                "uid",
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
                            {
                              attrs: { value: "", selected: "", disabled: "" }
                            },
                            [_vm._v("Sélectionnez un utilisateur")]
                          ),
                          _vm._v(" "),
                          _vm._l(_vm.data.managers, function(item) {
                            return _c(
                              "option",
                              { key: item.key, domProps: { value: item.id } },
                              [
                                _vm._v(
                                  " " +
                                    _vm._s(
                                      item.login +
                                        " - " +
                                        item.nom +
                                        " " +
                                        item.prenom
                                    ) +
                                    " "
                                )
                              ]
                            )
                          })
                        ],
                        2
                      ),
                      _vm._v(" "),
                      _c("div", { staticClass: "invalid-feedback" }, [
                        _vm._v(" Ce champ n'est pas valide.")
                      ])
                    ])
                  : _vm._e(),
                _vm._v(" "),
                _c("div", { staticClass: "mb-4" }, [
                  _vm._m(5),
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
                    attrs: {
                      type: "email",
                      maxlength: "250",
                      placeholder: "E-mail"
                    },
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
                _c("div", { staticClass: "mb-4" }, [
                  _c("label", { staticClass: "form-label" }, [
                    _vm._v("Numéro de Téléphone")
                  ]),
                  _vm._v(" "),
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.form.phone,
                        expression: "form.phone"
                      }
                    ],
                    staticClass: "form-control",
                    attrs: {
                      type: "text",
                      maxlength: "",
                      placeholder: "Numéro de téléphone"
                    },
                    domProps: { value: _vm.form.phone },
                    on: {
                      keyup: function($event) {
                        _vm.form.phone = _vm.number(_vm.form.phone)
                      },
                      change: function($event) {
                        _vm.form.phone = _vm.number(_vm.form.phone)
                      },
                      input: function($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.$set(_vm.form, "phone", $event.target.value)
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
                  _c("label", { staticClass: "form-label" }, [
                    _vm._v("Adresse")
                  ]),
                  _vm._v(" "),
                  _c("textarea", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.form.address,
                        expression: "form.address"
                      }
                    ],
                    staticClass: "form-control",
                    attrs: {
                      rows: "3",
                      placeholder: "adresse de l'entreprise ..."
                    },
                    domProps: { value: _vm.form.address },
                    on: {
                      input: function($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.$set(_vm.form, "address", $event.target.value)
                      }
                    }
                  })
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "mb-4" }, [
                  _c("label", { staticClass: "form-label" }, [
                    _vm._v("Description")
                  ]),
                  _vm._v(" "),
                  _c("textarea", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.form.description,
                        expression: "form.description"
                      }
                    ],
                    staticClass: "form-control",
                    attrs: {
                      rows: "3",
                      placeholder: "description de l'entreprise ..."
                    },
                    domProps: { value: _vm.form.description },
                    on: {
                      input: function($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.$set(_vm.form, "description", $event.target.value)
                      }
                    }
                  })
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "form-group" }, [
                  _vm._m(6),
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
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "col" }, [
                _c("div", { staticClass: "form-group" }, [
                  _vm._m(7),
                  _vm._v(" "),
                  _c("div", { staticClass: "input-group" }, [
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.form.subdomain,
                          expression: "form.subdomain"
                        }
                      ],
                      staticClass: "form-control",
                      attrs: {
                        type: "text",
                        pattern: "[a-z0-9-]*",
                        placeholder: "subdomain",
                        required: ""
                      },
                      domProps: { value: _vm.form.subdomain },
                      on: {
                        keyup: function($event) {
                          _vm.form.subdomain = _vm.domain(_vm.form.subdomain)
                        },
                        change: function($event) {
                          _vm.form.subdomain = _vm.domain(_vm.form.subdomain)
                        },
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(_vm.form, "subdomain", $event.target.value)
                        }
                      }
                    }),
                    _vm._v(" "),
                    _vm._m(8)
                  ])
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "form-group" }, [
                  _vm._m(9),
                  _vm._v(" "),
                  _c("div", { staticClass: "input-group" }, [
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.form.tenant,
                          expression: "form.tenant"
                        }
                      ],
                      staticClass: "form-control",
                      attrs: {
                        type: "text",
                        pattern: "[a-z0-9-_]*",
                        placeholder: "db",
                        required: ""
                      },
                      domProps: { value: _vm.form.tenant },
                      on: {
                        keyup: function($event) {
                          _vm.form.tenant = _vm.lower_alphanum(_vm.form.tenant)
                        },
                        change: function($event) {
                          _vm.form.tenant = _vm.lower_alphanum(_vm.form.tenant)
                        },
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(_vm.form, "tenant", $event.target.value)
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
                  _c("div", { staticClass: "input-group" }, [
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.form.user_licenses,
                          expression: "form.user_licenses"
                        }
                      ],
                      staticClass: "form-control",
                      attrs: {
                        type: "number",
                        min: "-1",
                        pattern: "[0-9-]*",
                        placeholder: "0",
                        required: ""
                      },
                      domProps: { value: _vm.form.user_licenses },
                      on: {
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(
                            _vm.form,
                            "user_licenses",
                            $event.target.value
                          )
                        }
                      }
                    }),
                    _vm._v(" "),
                    _vm._m(12)
                  ])
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "form-group" }, [
                  _vm._m(13),
                  _vm._v(" "),
                  _c("div", { staticClass: "input-group" }, [
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.form.component_licenses,
                          expression: "form.component_licenses"
                        }
                      ],
                      staticClass: "form-control",
                      attrs: {
                        type: "number",
                        min: "-1",
                        placeholder: "0",
                        required: ""
                      },
                      domProps: { value: _vm.form.component_licenses },
                      on: {
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(
                            _vm.form,
                            "component_licenses",
                            $event.target.value
                          )
                        }
                      }
                    }),
                    _vm._v(" "),
                    _vm._m(14)
                  ])
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "form-group" }, [
                  _vm._m(15),
                  _vm._v(" "),
                  _c("input", {
                    ref: "logo",
                    staticClass: "dropify",
                    attrs: {
                      type: "file",
                      "data-height": "272",
                      "data-allowed-file-extensions": "png jpg jpeg gif",
                      "data-max-file-size": "1M"
                    },
                    on: {
                      change: function($event) {
                        return _vm.handleFileUpload()
                      }
                    }
                  })
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
                  _vm._m(16)
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
        _vm._v("Nouvelle Entreprise")
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
      _vm._v(" une nouvelle entreprise a été ajouté.")
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("label", { staticClass: "form-label" }, [
      _vm._v("Nom de l'entreprise "),
      _c("small", { staticClass: "text-danger" }, [_vm._v("*")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("label", { staticClass: "form-label" }, [
      _vm._v("Propriétaire (Manager) "),
      _c("small", { staticClass: "text-danger" }, [_vm._v("*")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("label", { staticClass: "form-label" }, [
      _vm._v("Email "),
      _c("small", { staticClass: "text-danger" }, [_vm._v("*")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("label", { staticClass: "form-label" }, [
      _vm._v("Etat de l'entreprise "),
      _c("small", { staticClass: "text-danger" }, [_vm._v("*")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("label", { staticClass: "form-label" }, [
      _vm._v("Sous domaine "),
      _c("small", [_vm._v("[a-z0-9-]")]),
      _vm._v(" "),
      _c("small", { staticClass: "text-danger" }, [_vm._v("*")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", {}, [
      _c("button", { staticClass: "btn btn-auth", attrs: { type: "button" } }, [
        _c("i", {
          staticClass: "fe fe-globe",
          attrs: { "aria-hidden": "true" }
        })
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("label", { staticClass: "form-label" }, [
      _vm._v("Base de données "),
      _c("small", [_vm._v("[a-z0-9-_]")]),
      _vm._v(" "),
      _c("small", { staticClass: "text-danger" }, [_vm._v("*")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", {}, [
      _c("button", { staticClass: "btn btn-auth", attrs: { type: "button" } }, [
        _c("i", {
          staticClass: "fe fe-database",
          attrs: { "aria-hidden": "true" }
        })
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("label", { staticClass: "form-label" }, [
      _vm._v("Licenses des utilisateurs "),
      _c("small", [_vm._v("(-1 pour illimité)")]),
      _vm._v(" "),
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
      _vm._v("Licenses des produits "),
      _c("small", [_vm._v("(-1 pour tous les produits)")]),
      _vm._v(" "),
      _c("small", { staticClass: "text-danger" }, [_vm._v("*")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", {}, [
      _c("button", { staticClass: "btn btn-auth", attrs: { type: "button" } }, [
        _c("i", {
          staticClass: "fe fe-layers",
          attrs: { "aria-hidden": "true" }
        })
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("label", { staticClass: "form-label" }, [
      _vm._v("Logo d'entreprise "),
      _c("small", [_vm._v("(max 1M)")])
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