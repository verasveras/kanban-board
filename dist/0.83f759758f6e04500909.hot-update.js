webpackHotUpdate(0,{

/***/ 42:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_column__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(43);
/* harmony import */ var _components_modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(44);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(13);
/* harmony import */ var _reducers_actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(45);
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }







var App =
/*#__PURE__*/
function (_React$Component) {
  _inherits(App, _React$Component);

  function App() {
    _classCallCheck(this, App);

    return _possibleConstructorReturn(this, _getPrototypeOf(App).apply(this, arguments));
  }

  _createClass(App, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "app-container"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_column__WEBPACK_IMPORTED_MODULE_1__["default"], {
        name: "Backlog",
        handleCreateTaskClick: this.props.showModal,
        showCreateButton: true,
        tasks: this.props.backlogTasks
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_column__WEBPACK_IMPORTED_MODULE_1__["default"], {
        name: "In Progress",
        handleCreateTaskClick: this.props.showModal,
        showCreateButton: true,
        tasks: this.props.inProgress
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_column__WEBPACK_IMPORTED_MODULE_1__["default"], {
        name: "Completed",
        handleCreateTaskClick: this.props.showModal,
        tasks: this.props.completedTasks
      }), this.props.modalVisibile && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_modal__WEBPACK_IMPORTED_MODULE_2__["ModalContainer"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_modal__WEBPACK_IMPORTED_MODULE_2__["Modal"], null)));
    }
  }]);

  return App;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

var mapStateToProps = function mapStateToProps(state) {
  return {
    modalVisibile: state.showModal,
    backlogTasks: state.backlog,
    inProgressTasks: state.inProgress,
    completedTasks: state.completed
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    showModal: function showModal(payload) {
      dispatch(Object(_reducers_actions__WEBPACK_IMPORTED_MODULE_4__["showModal"])(payload));
    }
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["connect"])(mapStateToProps, mapDispatchToProps)(App));

/***/ }),

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
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_task__WEBPACK_IMPORTED_MODULE_2__["default"], null);
      }), this.props.showCreateButton && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvanMvYXBwLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9jb21wb25lbnRzL2NvbHVtbi9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvY29tcG9uZW50cy90YXNrL2luZGV4LmpzIl0sIm5hbWVzIjpbIkFwcCIsInByb3BzIiwic2hvd01vZGFsIiwiYmFja2xvZ1Rhc2tzIiwiaW5Qcm9ncmVzcyIsImNvbXBsZXRlZFRhc2tzIiwibW9kYWxWaXNpYmlsZSIsIlJlYWN0IiwiQ29tcG9uZW50IiwibWFwU3RhdGVUb1Byb3BzIiwic3RhdGUiLCJiYWNrbG9nIiwiaW5Qcm9ncmVzc1Rhc2tzIiwiY29tcGxldGVkIiwibWFwRGlzcGF0Y2hUb1Byb3BzIiwiZGlzcGF0Y2giLCJwYXlsb2FkIiwiY29ubmVjdCIsIkNvbHVtbiIsImhhbmRsZUNyZWF0ZVRhc2tDbGljayIsIm5hbWUiLCJidXR0b25Db2xvciIsInRhc2tzIiwiZm9yRWFjaCIsInRhc2siLCJzaG93Q3JlYXRlQnV0dG9uIiwiVGFzayIsInRpdGxlIiwiZGVzY3JpcHRpb24iLCJkdWVEYXRlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7SUFFTUEsRzs7Ozs7Ozs7Ozs7Ozs2QkFDSztBQUNQLGFBQ0U7QUFBSyxpQkFBUyxFQUFDO0FBQWYsU0FDRSwyREFBQywwREFBRDtBQUNFLFlBQUksRUFBQyxTQURQO0FBRUUsNkJBQXFCLEVBQUUsS0FBS0MsS0FBTCxDQUFXQyxTQUZwQztBQUdFLHdCQUFnQixNQUhsQjtBQUlFLGFBQUssRUFBRSxLQUFLRCxLQUFMLENBQVdFO0FBSnBCLFFBREYsRUFPRSwyREFBQywwREFBRDtBQUNFLFlBQUksRUFBQyxhQURQO0FBRUUsNkJBQXFCLEVBQUUsS0FBS0YsS0FBTCxDQUFXQyxTQUZwQztBQUdFLHdCQUFnQixNQUhsQjtBQUlFLGFBQUssRUFBRSxLQUFLRCxLQUFMLENBQVdHO0FBSnBCLFFBUEYsRUFhRSwyREFBQywwREFBRDtBQUNFLFlBQUksRUFBQyxXQURQO0FBRUUsNkJBQXFCLEVBQUUsS0FBS0gsS0FBTCxDQUFXQyxTQUZwQztBQUdFLGFBQUssRUFBRSxLQUFLRCxLQUFMLENBQVdJO0FBSHBCLFFBYkYsRUFrQkcsS0FBS0osS0FBTCxDQUFXSyxhQUFYLElBQ0MsMkRBQUMsZ0VBQUQsUUFDRSwyREFBQyx1REFBRCxPQURGLENBbkJKLENBREY7QUEwQkQ7Ozs7RUE1QmVDLDRDQUFLLENBQUNDLFM7O0FBK0J4QixJQUFNQyxlQUFlLEdBQUcsU0FBbEJBLGVBQWtCLENBQUFDLEtBQUs7QUFBQSxTQUFLO0FBQ2hDSixpQkFBYSxFQUFFSSxLQUFLLENBQUNSLFNBRFc7QUFFaENDLGdCQUFZLEVBQUVPLEtBQUssQ0FBQ0MsT0FGWTtBQUdoQ0MsbUJBQWUsRUFBRUYsS0FBSyxDQUFDTixVQUhTO0FBSWhDQyxrQkFBYyxFQUFFSyxLQUFLLENBQUNHO0FBSlUsR0FBTDtBQUFBLENBQTdCOztBQU9BLElBQU1DLGtCQUFrQixHQUFHLFNBQXJCQSxrQkFBcUIsQ0FBQUMsUUFBUTtBQUFBLFNBQUs7QUFDdENiLGFBRHNDLHFCQUM1QmMsT0FENEIsRUFDbkI7QUFDakJELGNBQVEsQ0FBQ2IsbUVBQVMsQ0FBQ2MsT0FBRCxDQUFWLENBQVI7QUFDRDtBQUhxQyxHQUFMO0FBQUEsQ0FBbkM7O0FBTWVDLDBIQUFPLENBQ3BCUixlQURvQixFQUVwQkssa0JBRm9CLENBQVAsQ0FHYmQsR0FIYSxDQUFmLEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNsREE7QUFDQTtBQUNBOztJQUVxQmtCLE07Ozs7Ozs7Ozs7Ozs7Ozs7OztvR0FDSyxZQUFNO0FBQzVCLFlBQUtqQixLQUFMLENBQVdrQixxQkFBWCxDQUFpQyxNQUFLbEIsS0FBTCxDQUFXbUIsSUFBNUM7QUFDRCxLOzs7Ozs7OzZCQUVRO0FBQ1A7QUFDQSxVQUFNQyxXQUFXLEdBQUcsS0FBS3BCLEtBQUwsQ0FBV21CLElBQVgsS0FBb0IsU0FBcEIsR0FBZ0MsTUFBaEMsR0FBeUMsUUFBN0Q7QUFDQSxhQUNFO0FBQUssaUJBQVMsRUFBQztBQUFmLFNBQ0U7QUFBSyxpQkFBUyxFQUFDO0FBQWYsU0FBZ0MsS0FBS25CLEtBQUwsQ0FBV21CLElBQTNDLENBREYsRUFFRyxLQUFLbkIsS0FBTCxDQUFXcUIsS0FBWCxDQUFpQkMsT0FBakIsQ0FBeUIsVUFBQUMsSUFBSTtBQUFBLGVBQzVCLDJEQUFDLDZDQUFELE9BRDRCO0FBQUEsT0FBN0IsQ0FGSCxFQUtHLEtBQUt2QixLQUFMLENBQVd3QixnQkFBWCxJQUNDO0FBQ0UsaUJBQVMseUNBQWtDSixXQUFsQyxDQURYO0FBRUUsZUFBTyxFQUFFLEtBQUtGO0FBRmhCLHVCQU5KLENBREY7QUFnQkQ7Ozs7RUF4QmlDWiw0Q0FBSyxDQUFDQyxTOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0oxQzs7SUFFcUJrQixJOzs7Ozs7Ozs7Ozs7OzZCQUNWO0FBQ1AsOEVBQ0csS0FBS3pCLEtBQUwsQ0FBVzBCLEtBRGQsRUFFRyxLQUFLMUIsS0FBTCxDQUFXMkIsV0FGZCxFQUdHLEtBQUszQixLQUFMLENBQVc0QixPQUhkO0FBS0Q7Ozs7RUFQK0J0Qiw0Q0FBSyxDQUFDQyxTIiwiZmlsZSI6IjAuODNmNzU5NzU4ZjZlMDQ1MDA5MDkuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgQ29sdW1uIGZyb20gJy4vY29tcG9uZW50cy9jb2x1bW4nO1xuaW1wb3J0IHsgTW9kYWxDb250YWluZXIsIE1vZGFsIH0gZnJvbSAnLi9jb21wb25lbnRzL21vZGFsJztcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5pbXBvcnQgeyBzaG93TW9kYWwgfSBmcm9tICcuL3JlZHVjZXJzL2FjdGlvbnMnO1xuXG5jbGFzcyBBcHAgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYXBwLWNvbnRhaW5lclwiPlxuICAgICAgICA8Q29sdW1uXG4gICAgICAgICAgbmFtZT1cIkJhY2tsb2dcIlxuICAgICAgICAgIGhhbmRsZUNyZWF0ZVRhc2tDbGljaz17dGhpcy5wcm9wcy5zaG93TW9kYWx9XG4gICAgICAgICAgc2hvd0NyZWF0ZUJ1dHRvblxuICAgICAgICAgIHRhc2tzPXt0aGlzLnByb3BzLmJhY2tsb2dUYXNrc31cbiAgICAgICAgLz5cbiAgICAgICAgPENvbHVtblxuICAgICAgICAgIG5hbWU9XCJJbiBQcm9ncmVzc1wiXG4gICAgICAgICAgaGFuZGxlQ3JlYXRlVGFza0NsaWNrPXt0aGlzLnByb3BzLnNob3dNb2RhbH1cbiAgICAgICAgICBzaG93Q3JlYXRlQnV0dG9uXG4gICAgICAgICAgdGFza3M9e3RoaXMucHJvcHMuaW5Qcm9ncmVzc31cbiAgICAgICAgLz5cbiAgICAgICAgPENvbHVtblxuICAgICAgICAgIG5hbWU9XCJDb21wbGV0ZWRcIlxuICAgICAgICAgIGhhbmRsZUNyZWF0ZVRhc2tDbGljaz17dGhpcy5wcm9wcy5zaG93TW9kYWx9XG4gICAgICAgICAgdGFza3M9e3RoaXMucHJvcHMuY29tcGxldGVkVGFza3N9XG4gICAgICAgIC8+XG4gICAgICAgIHt0aGlzLnByb3BzLm1vZGFsVmlzaWJpbGUgJiYgKFxuICAgICAgICAgIDxNb2RhbENvbnRhaW5lcj5cbiAgICAgICAgICAgIDxNb2RhbCAvPlxuICAgICAgICAgIDwvTW9kYWxDb250YWluZXI+XG4gICAgICAgICl9XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG5cbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IHN0YXRlID0+ICh7XG4gIG1vZGFsVmlzaWJpbGU6IHN0YXRlLnNob3dNb2RhbCxcbiAgYmFja2xvZ1Rhc2tzOiBzdGF0ZS5iYWNrbG9nLFxuICBpblByb2dyZXNzVGFza3M6IHN0YXRlLmluUHJvZ3Jlc3MsXG4gIGNvbXBsZXRlZFRhc2tzOiBzdGF0ZS5jb21wbGV0ZWQsXG59KTtcblxuY29uc3QgbWFwRGlzcGF0Y2hUb1Byb3BzID0gZGlzcGF0Y2ggPT4gKHtcbiAgc2hvd01vZGFsKHBheWxvYWQpIHtcbiAgICBkaXNwYXRjaChzaG93TW9kYWwocGF5bG9hZCkpO1xuICB9LFxufSk7XG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QoXG4gIG1hcFN0YXRlVG9Qcm9wcyxcbiAgbWFwRGlzcGF0Y2hUb1Byb3BzLFxuKShBcHApO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IENvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5pbXBvcnQgVGFzayBmcm9tICcuLi90YXNrJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ29sdW1uIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgaGFuZGxlQ3JlYXRlVGFza0NsaWNrID0gKCkgPT4ge1xuICAgIHRoaXMucHJvcHMuaGFuZGxlQ3JlYXRlVGFza0NsaWNrKHRoaXMucHJvcHMubmFtZSk7XG4gIH07XG5cbiAgcmVuZGVyKCkge1xuICAgIC8vIGRvIHRoaXMgaW4gYSBtYXBcbiAgICBjb25zdCBidXR0b25Db2xvciA9IHRoaXMucHJvcHMubmFtZSA9PT0gJ0JhY2tsb2cnID8gJ2JsdWUnIDogJ3B1cnBsZSc7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sdW1uXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sdW1uX190aXRsZVwiPnt0aGlzLnByb3BzLm5hbWV9PC9kaXY+XG4gICAgICAgIHt0aGlzLnByb3BzLnRhc2tzLmZvckVhY2godGFzayA9PiAoXG4gICAgICAgICAgPFRhc2sgLz5cbiAgICAgICAgKSl9XG4gICAgICAgIHt0aGlzLnByb3BzLnNob3dDcmVhdGVCdXR0b24gJiYgKFxuICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgIGNsYXNzTmFtZT17YGNyZWF0ZS1idXR0b24gY3JlYXRlLWJ1dHRvbl9fJHtidXR0b25Db2xvcn1gfVxuICAgICAgICAgICAgb25DbGljaz17dGhpcy5oYW5kbGVDcmVhdGVUYXNrQ2xpY2t9XG4gICAgICAgICAgPlxuICAgICAgICAgICAgQ3JlYXRlIFRhc2tcbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKX1cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRhc2sgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICByZW5kZXIoKSB7XG4gICAgPGRpdj5cbiAgICAgIHt0aGlzLnByb3BzLnRpdGxlfVxuICAgICAge3RoaXMucHJvcHMuZGVzY3JpcHRpb259XG4gICAgICB7dGhpcy5wcm9wcy5kdWVEYXRlfVxuICAgIDwvZGl2PjtcbiAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==