webpackHotUpdate(0,{

/***/ 43:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Column; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(13);
/* harmony import */ var _task__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(44);
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
      }, this.props.name), this.props.tasks.map(function (task) {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_task__WEBPACK_IMPORTED_MODULE_2__["default"], {
          title: task.title,
          description: task.description,
          dueDate: task.dueDate
        });
      }), this.props.showCreateButton && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "create-button create-button__".concat(buttonColor),
        onClick: this.handleCreateTaskClick
      }, "Create Task"));
    }
  }]);

  return Column;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);



/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvanMvY29tcG9uZW50cy9jb2x1bW4vaW5kZXguanMiXSwibmFtZXMiOlsiQ29sdW1uIiwicHJvcHMiLCJoYW5kbGVDcmVhdGVUYXNrQ2xpY2siLCJuYW1lIiwiYnV0dG9uQ29sb3IiLCJ0YXNrcyIsIm1hcCIsInRhc2siLCJ0aXRsZSIsImRlc2NyaXB0aW9uIiwiZHVlRGF0ZSIsInNob3dDcmVhdGVCdXR0b24iLCJSZWFjdCIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7O0lBRXFCQSxNOzs7Ozs7Ozs7Ozs7Ozs7Ozs7b0dBQ0ssWUFBTTtBQUM1QixZQUFLQyxLQUFMLENBQVdDLHFCQUFYLENBQWlDLE1BQUtELEtBQUwsQ0FBV0UsSUFBNUM7QUFDRCxLOzs7Ozs7OzZCQUVRO0FBQ1A7QUFDQSxVQUFNQyxXQUFXLEdBQUcsS0FBS0gsS0FBTCxDQUFXRSxJQUFYLEtBQW9CLFNBQXBCLEdBQWdDLE1BQWhDLEdBQXlDLFFBQTdEO0FBQ0EsYUFDRTtBQUFLLGlCQUFTLEVBQUM7QUFBZixTQUNFO0FBQUssaUJBQVMsRUFBQztBQUFmLFNBQWdDLEtBQUtGLEtBQUwsQ0FBV0UsSUFBM0MsQ0FERixFQUVHLEtBQUtGLEtBQUwsQ0FBV0ksS0FBWCxDQUFpQkMsR0FBakIsQ0FBcUIsVUFBQUMsSUFBSTtBQUFBLGVBQ3hCLDJEQUFDLDZDQUFEO0FBQ0UsZUFBSyxFQUFFQSxJQUFJLENBQUNDLEtBRGQ7QUFFRSxxQkFBVyxFQUFFRCxJQUFJLENBQUNFLFdBRnBCO0FBR0UsaUJBQU8sRUFBRUYsSUFBSSxDQUFDRztBQUhoQixVQUR3QjtBQUFBLE9BQXpCLENBRkgsRUFTRyxLQUFLVCxLQUFMLENBQVdVLGdCQUFYLElBQ0M7QUFDRSxpQkFBUyx5Q0FBa0NQLFdBQWxDLENBRFg7QUFFRSxlQUFPLEVBQUUsS0FBS0Y7QUFGaEIsdUJBVkosQ0FERjtBQW9CRDs7OztFQTVCaUNVLDRDQUFLLENBQUNDLFMiLCJmaWxlIjoiMC4wMDYyZDdjNDJhYzcyMWMwM2FlNi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IENvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5pbXBvcnQgVGFzayBmcm9tICcuLi90YXNrJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ29sdW1uIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgaGFuZGxlQ3JlYXRlVGFza0NsaWNrID0gKCkgPT4ge1xuICAgIHRoaXMucHJvcHMuaGFuZGxlQ3JlYXRlVGFza0NsaWNrKHRoaXMucHJvcHMubmFtZSk7XG4gIH07XG5cbiAgcmVuZGVyKCkge1xuICAgIC8vIGRvIHRoaXMgaW4gYSBtYXBcbiAgICBjb25zdCBidXR0b25Db2xvciA9IHRoaXMucHJvcHMubmFtZSA9PT0gJ0JhY2tsb2cnID8gJ2JsdWUnIDogJ3B1cnBsZSc7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sdW1uXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sdW1uX190aXRsZVwiPnt0aGlzLnByb3BzLm5hbWV9PC9kaXY+XG4gICAgICAgIHt0aGlzLnByb3BzLnRhc2tzLm1hcCh0YXNrID0+IChcbiAgICAgICAgICA8VGFza1xuICAgICAgICAgICAgdGl0bGU9e3Rhc2sudGl0bGV9XG4gICAgICAgICAgICBkZXNjcmlwdGlvbj17dGFzay5kZXNjcmlwdGlvbn1cbiAgICAgICAgICAgIGR1ZURhdGU9e3Rhc2suZHVlRGF0ZX1cbiAgICAgICAgICAvPlxuICAgICAgICApKX1cbiAgICAgICAge3RoaXMucHJvcHMuc2hvd0NyZWF0ZUJ1dHRvbiAmJiAoXG4gICAgICAgICAgPGRpdlxuICAgICAgICAgICAgY2xhc3NOYW1lPXtgY3JlYXRlLWJ1dHRvbiBjcmVhdGUtYnV0dG9uX18ke2J1dHRvbkNvbG9yfWB9XG4gICAgICAgICAgICBvbkNsaWNrPXt0aGlzLmhhbmRsZUNyZWF0ZVRhc2tDbGlja31cbiAgICAgICAgICA+XG4gICAgICAgICAgICBDcmVhdGUgVGFza1xuICAgICAgICAgIDwvZGl2PlxuICAgICAgICApfVxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==