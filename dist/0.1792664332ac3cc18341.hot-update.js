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
      }, this.props.name), this.props.tasks.forEach(function (task) {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvanMvY29tcG9uZW50cy9jb2x1bW4vaW5kZXguanMiXSwibmFtZXMiOlsiQ29sdW1uIiwicHJvcHMiLCJoYW5kbGVDcmVhdGVUYXNrQ2xpY2siLCJuYW1lIiwiYnV0dG9uQ29sb3IiLCJ0YXNrcyIsImZvckVhY2giLCJ0YXNrIiwidGl0bGUiLCJkZXNjcmlwdGlvbiIsImR1ZURhdGUiLCJzaG93Q3JlYXRlQnV0dG9uIiwiUmVhY3QiLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBOztJQUVxQkEsTTs7Ozs7Ozs7Ozs7Ozs7Ozs7O29HQUNLLFlBQU07QUFDNUIsWUFBS0MsS0FBTCxDQUFXQyxxQkFBWCxDQUFpQyxNQUFLRCxLQUFMLENBQVdFLElBQTVDO0FBQ0QsSzs7Ozs7Ozs2QkFFUTtBQUNQO0FBQ0EsVUFBTUMsV0FBVyxHQUFHLEtBQUtILEtBQUwsQ0FBV0UsSUFBWCxLQUFvQixTQUFwQixHQUFnQyxNQUFoQyxHQUF5QyxRQUE3RDtBQUNBLGFBQ0U7QUFBSyxpQkFBUyxFQUFDO0FBQWYsU0FDRTtBQUFLLGlCQUFTLEVBQUM7QUFBZixTQUFnQyxLQUFLRixLQUFMLENBQVdFLElBQTNDLENBREYsRUFFRyxLQUFLRixLQUFMLENBQVdJLEtBQVgsQ0FBaUJDLE9BQWpCLENBQXlCLFVBQUFDLElBQUk7QUFBQSxlQUM1QiwyREFBQyw2Q0FBRDtBQUNFLGVBQUssRUFBRUEsSUFBSSxDQUFDQyxLQURkO0FBRUUscUJBQVcsRUFBRUQsSUFBSSxDQUFDRSxXQUZwQjtBQUdFLGlCQUFPLEVBQUVGLElBQUksQ0FBQ0c7QUFIaEIsVUFENEI7QUFBQSxPQUE3QixDQUZILEVBU0csS0FBS1QsS0FBTCxDQUFXVSxnQkFBWCxJQUNDO0FBQ0UsaUJBQVMseUNBQWtDUCxXQUFsQyxDQURYO0FBRUUsZUFBTyxFQUFFLEtBQUtGO0FBRmhCLHVCQVZKLENBREY7QUFvQkQ7Ozs7RUE1QmlDVSw0Q0FBSyxDQUFDQyxTIiwiZmlsZSI6IjAuMTc5MjY2NDMzMmFjM2NjMTgzNDEuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBDb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuaW1wb3J0IFRhc2sgZnJvbSAnLi4vdGFzayc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENvbHVtbiBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGhhbmRsZUNyZWF0ZVRhc2tDbGljayA9ICgpID0+IHtcbiAgICB0aGlzLnByb3BzLmhhbmRsZUNyZWF0ZVRhc2tDbGljayh0aGlzLnByb3BzLm5hbWUpO1xuICB9O1xuXG4gIHJlbmRlcigpIHtcbiAgICAvLyBkbyB0aGlzIGluIGEgbWFwXG4gICAgY29uc3QgYnV0dG9uQ29sb3IgPSB0aGlzLnByb3BzLm5hbWUgPT09ICdCYWNrbG9nJyA/ICdibHVlJyA6ICdwdXJwbGUnO1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbHVtblwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbHVtbl9fdGl0bGVcIj57dGhpcy5wcm9wcy5uYW1lfTwvZGl2PlxuICAgICAgICB7dGhpcy5wcm9wcy50YXNrcy5mb3JFYWNoKHRhc2sgPT4gKFxuICAgICAgICAgIDxUYXNrXG4gICAgICAgICAgICB0aXRsZT17dGFzay50aXRsZX1cbiAgICAgICAgICAgIGRlc2NyaXB0aW9uPXt0YXNrLmRlc2NyaXB0aW9ufVxuICAgICAgICAgICAgZHVlRGF0ZT17dGFzay5kdWVEYXRlfVxuICAgICAgICAgIC8+XG4gICAgICAgICkpfVxuICAgICAgICB7dGhpcy5wcm9wcy5zaG93Q3JlYXRlQnV0dG9uICYmIChcbiAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICBjbGFzc05hbWU9e2BjcmVhdGUtYnV0dG9uIGNyZWF0ZS1idXR0b25fXyR7YnV0dG9uQ29sb3J9YH1cbiAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMuaGFuZGxlQ3JlYXRlVGFza0NsaWNrfVxuICAgICAgICAgID5cbiAgICAgICAgICAgIENyZWF0ZSBUYXNrXG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICl9XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG4iXSwic291cmNlUm9vdCI6IiJ9