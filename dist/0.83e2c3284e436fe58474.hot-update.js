webpackHotUpdate(0,{

/***/ 43:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Column; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(13);
/* harmony import */ var _task__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(55);
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





var Column =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Column, _React$Component);

  function Column() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, Column);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Column)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleCreateTaskClick", function () {
      _this.props.handleCreateTaskClick(_this.props.name);
    });

    return _this;
  }

  _createClass(Column, [{
    key: "render",
    value: function render() {
      // do this in a map
      var buttonColor = this.props.name === 'Backlog' ? 'blue' : 'purple';
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "column"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "column__title"
      }, this.props.name), this.props.showCreateButton && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "create-button create-button__".concat(buttonColor),
        onClick: this.handleCreateTaskClick
      }, "Create Task"));
    }
  }]);

  return Column;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);



/***/ }),

/***/ 55:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Task; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }



var Task =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Task, _React$Component);

  function Task() {
    _classCallCheck(this, Task);

    return _possibleConstructorReturn(this, _getPrototypeOf(Task).apply(this, arguments));
  }

  _createClass(Task, [{
    key: "render",
    value: function render() {
      react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, this.props.title, this.props.description, this.props.dueDate);
    }
  }]);

  return Task;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);



/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvanMvY29tcG9uZW50cy9jb2x1bW4vaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2NvbXBvbmVudHMvdGFzay9pbmRleC5qcyJdLCJuYW1lcyI6WyJDb2x1bW4iLCJwcm9wcyIsImhhbmRsZUNyZWF0ZVRhc2tDbGljayIsIm5hbWUiLCJidXR0b25Db2xvciIsInNob3dDcmVhdGVCdXR0b24iLCJSZWFjdCIsIkNvbXBvbmVudCIsIlRhc2siLCJ0aXRsZSIsImRlc2NyaXB0aW9uIiwiZHVlRGF0ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7O0lBRXFCQSxNOzs7Ozs7Ozs7Ozs7Ozs7Ozs7b0dBQ0ssWUFBTTtBQUM1QixZQUFLQyxLQUFMLENBQVdDLHFCQUFYLENBQWlDLE1BQUtELEtBQUwsQ0FBV0UsSUFBNUM7QUFDRCxLOzs7Ozs7OzZCQUVRO0FBQ1A7QUFDQSxVQUFNQyxXQUFXLEdBQUcsS0FBS0gsS0FBTCxDQUFXRSxJQUFYLEtBQW9CLFNBQXBCLEdBQWdDLE1BQWhDLEdBQXlDLFFBQTdEO0FBQ0EsYUFDRTtBQUFLLGlCQUFTLEVBQUM7QUFBZixTQUNFO0FBQUssaUJBQVMsRUFBQztBQUFmLFNBQWdDLEtBQUtGLEtBQUwsQ0FBV0UsSUFBM0MsQ0FERixFQUVHLEtBQUtGLEtBQUwsQ0FBV0ksZ0JBQVgsSUFDQztBQUNFLGlCQUFTLHlDQUFrQ0QsV0FBbEMsQ0FEWDtBQUVFLGVBQU8sRUFBRSxLQUFLRjtBQUZoQix1QkFISixDQURGO0FBYUQ7Ozs7RUFyQmlDSSw0Q0FBSyxDQUFDQyxTOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0oxQzs7SUFFcUJDLEk7Ozs7Ozs7Ozs7Ozs7NkJBQ1Y7QUFDUCw4RUFDRyxLQUFLUCxLQUFMLENBQVdRLEtBRGQsRUFFRyxLQUFLUixLQUFMLENBQVdTLFdBRmQsRUFHRyxLQUFLVCxLQUFMLENBQVdVLE9BSGQ7QUFLRDs7OztFQVArQkwsNENBQUssQ0FBQ0MsUyIsImZpbGUiOiIwLjgzZTJjMzI4NGU0MzZmZTU4NDc0LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgQ29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcbmltcG9ydCAnLi4vdGFzayc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENvbHVtbiBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGhhbmRsZUNyZWF0ZVRhc2tDbGljayA9ICgpID0+IHtcbiAgICB0aGlzLnByb3BzLmhhbmRsZUNyZWF0ZVRhc2tDbGljayh0aGlzLnByb3BzLm5hbWUpO1xuICB9O1xuXG4gIHJlbmRlcigpIHtcbiAgICAvLyBkbyB0aGlzIGluIGEgbWFwXG4gICAgY29uc3QgYnV0dG9uQ29sb3IgPSB0aGlzLnByb3BzLm5hbWUgPT09ICdCYWNrbG9nJyA/ICdibHVlJyA6ICdwdXJwbGUnO1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbHVtblwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbHVtbl9fdGl0bGVcIj57dGhpcy5wcm9wcy5uYW1lfTwvZGl2PlxuICAgICAgICB7dGhpcy5wcm9wcy5zaG93Q3JlYXRlQnV0dG9uICYmIChcbiAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICBjbGFzc05hbWU9e2BjcmVhdGUtYnV0dG9uIGNyZWF0ZS1idXR0b25fXyR7YnV0dG9uQ29sb3J9YH1cbiAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMuaGFuZGxlQ3JlYXRlVGFza0NsaWNrfVxuICAgICAgICAgID5cbiAgICAgICAgICAgIENyZWF0ZSBUYXNrXG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICl9XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUYXNrIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgcmVuZGVyKCkge1xuICAgIDxkaXY+XG4gICAgICB7dGhpcy5wcm9wcy50aXRsZX1cbiAgICAgIHt0aGlzLnByb3BzLmRlc2NyaXB0aW9ufVxuICAgICAge3RoaXMucHJvcHMuZHVlRGF0ZX1cbiAgICA8L2Rpdj47XG4gIH1cbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=