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

/***/ 44:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalContainer", function() { return ModalContainer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalComponent", function() { return ModalComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Modal", function() { return Modal; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(13);
/* harmony import */ var _reducers_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(45);
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }





var ModalContainer =
/*#__PURE__*/
function (_React$Component) {
  _inherits(ModalContainer, _React$Component);

  function ModalContainer() {
    _classCallCheck(this, ModalContainer);

    return _possibleConstructorReturn(this, _getPrototypeOf(ModalContainer).apply(this, arguments));
  }

  _createClass(ModalContainer, [{
    key: "render",
    value: function render() {
      var domElement = document.getElementById('root');
      return react_dom__WEBPACK_IMPORTED_MODULE_1___default.a.createPortal(this.props.children, domElement);
    }
  }]);

  return ModalContainer;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);
var ModalComponent =
/*#__PURE__*/
function (_React$Component2) {
  _inherits(ModalComponent, _React$Component2);

  function ModalComponent(props) {
    var _this;

    _classCallCheck(this, ModalComponent);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(ModalComponent).call(this, props));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleInputChange", function (event) {
      var inputName = event.currentTarget.id.split('-').pop();

      _this.setState(_defineProperty({}, inputName, event.currentTarget.value));
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleCreateCard", function () {
      var payload = {
        task: _objectSpread({}, _this.state),
        taskType: _this.props.createType
      };

      _this.props.createTask(_objectSpread({}, _this.state), _this.props.createType);
    });

    _this.state = {
      title: '',
      description: '',
      dueDate: ''
    };
    return _this;
  }

  _createClass(ModalComponent, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "modal"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "modal__title"
      }, "Create New Task"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("form", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
        className: "input",
        type: "text",
        placeholder: "Title",
        id: "title-input",
        onChange: this.handleInputChange
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("textarea", {
        className: "input",
        placeholder: "Description (optional)",
        id: "description-input",
        onChange: this.handleInputChange
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
        className: "input",
        type: "text",
        placeholder: "Date",
        id: "dueDate-input",
        onChange: this.handleInputChange
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "modal__footer"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "button button__cancel",
        onClick: this.props.hideModal
      }, ' ', "Cancel", ' '), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "button button__confirm",
        onClick: this.handleCreateCard
      }, "Create")));
    }
  }]);

  return ModalComponent;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);
var taskTypeToActionMap = {
  Backlog: _reducers_actions__WEBPACK_IMPORTED_MODULE_3__["createBacklogItem"],
  'In Progress': _reducers_actions__WEBPACK_IMPORTED_MODULE_3__["createInProgressItem"]
};

var mapStateToProps = function mapStateToProps(state) {
  return {
    createType: state.createType
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    hideModal: function hideModal() {
      dispatch(Object(_reducers_actions__WEBPACK_IMPORTED_MODULE_3__["hideModal"])());
    },
    createTask: function createTask(_ref) {
      var task = _ref.task,
          taskType = _ref.taskType;
      var action = taskTypeToActionMap[taskType];
      dispatch(action(task));
    }
  };
};

var Modal = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["connect"])(mapStateToProps, mapDispatchToProps)(ModalComponent);

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvanMvYXBwLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9jb21wb25lbnRzL21vZGFsL2luZGV4LmpzIl0sIm5hbWVzIjpbIkFwcCIsInByb3BzIiwic2hvd01vZGFsIiwiYmFja2xvZ1Rhc2tzIiwiaW5Qcm9ncmVzcyIsImNvbXBsZXRlZFRhc2tzIiwibW9kYWxWaXNpYmlsZSIsIlJlYWN0IiwiQ29tcG9uZW50IiwibWFwU3RhdGVUb1Byb3BzIiwic3RhdGUiLCJiYWNrbG9nIiwiaW5Qcm9ncmVzc1Rhc2tzIiwiY29tcGxldGVkIiwibWFwRGlzcGF0Y2hUb1Byb3BzIiwiZGlzcGF0Y2giLCJwYXlsb2FkIiwiY29ubmVjdCIsIk1vZGFsQ29udGFpbmVyIiwiZG9tRWxlbWVudCIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJSZWFjdERPTSIsImNyZWF0ZVBvcnRhbCIsImNoaWxkcmVuIiwiTW9kYWxDb21wb25lbnQiLCJldmVudCIsImlucHV0TmFtZSIsImN1cnJlbnRUYXJnZXQiLCJpZCIsInNwbGl0IiwicG9wIiwic2V0U3RhdGUiLCJ2YWx1ZSIsInRhc2siLCJ0YXNrVHlwZSIsImNyZWF0ZVR5cGUiLCJjcmVhdGVUYXNrIiwidGl0bGUiLCJkZXNjcmlwdGlvbiIsImR1ZURhdGUiLCJoYW5kbGVJbnB1dENoYW5nZSIsImhpZGVNb2RhbCIsImhhbmRsZUNyZWF0ZUNhcmQiLCJ0YXNrVHlwZVRvQWN0aW9uTWFwIiwiQmFja2xvZyIsImNyZWF0ZUJhY2tsb2dJdGVtIiwiY3JlYXRlSW5Qcm9ncmVzc0l0ZW0iLCJhY3Rpb24iLCJNb2RhbCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0lBRU1BLEc7Ozs7Ozs7Ozs7Ozs7NkJBQ0s7QUFDUCxhQUNFO0FBQUssaUJBQVMsRUFBQztBQUFmLFNBQ0UsMkRBQUMsMERBQUQ7QUFDRSxZQUFJLEVBQUMs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QUEsQ0FBN0I7O0FBSUEsSUFBTXRCLGtCQUFrQixHQUFHLFNBQXJCQSxrQkFBcUIsQ0FBQUMsUUFBUTtBQUFBLFNBQUs7QUFDdEMyQixhQURzQyx1QkFDMUI7QUFDVjNCLGNBQVEsQ0FBQzJCLG1FQUFTLEVBQVYsQ0FBUjtBQUNELEtBSHFDO0FBSXRDTCxjQUpzQyw0QkFJUDtBQUFBLFVBQWxCSCxJQUFrQixRQUFsQkEsSUFBa0I7QUFBQSxVQUFaQyxRQUFZLFFBQVpBLFFBQVk7QUFDN0IsVUFBTWEsTUFBTSxHQUFHSixtQkFBbUIsQ0FBQ1QsUUFBRCxDQUFsQztBQUNBcEIsY0FBUSxDQUFDaUMsTUFBTSxDQUFDZCxJQUFELENBQVAsQ0FBUjtBQUNEO0FBUHFDLEdBQUw7QUFBQSxDQUFuQzs7QUFVTyxJQUFNZSxLQUFLLEdBQUdoQywyREFBTyxDQUMxQlIsZUFEMEIsRUFFMUJLLGtCQUYwQixDQUFQLENBR25CVyxjQUhtQixDQUFkLEMiLCJmaWxlIjoiMC5mYzc1ZWE2ODE0NjU0ZGM3MzI4Mi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBDb2x1bW4gZnJvbSAnLi9jb21wb25lbnRzL2NvbHVtbic7XG5pbXBvcnQgeyBNb2RhbENvbnRhaW5lciwgTW9kYWwgfSBmcm9tICcuL2NvbXBvbmVudHMvbW9kYWwnO1xuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcbmltcG9ydCB7IHNob3dNb2RhbCB9IGZyb20gJy4vcmVkdWNlcnMvYWN0aW9ucyc7XG5cbmNsYXNzIEFwcCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJhcHAtY29udGFpbmVyXCI+XG4gICAgICAgIDxDb2x1bW5cbiAgICAgICAgICBuYW1lPVwiQmFja2xvZ1wiXG4gICAgICAgICAgaGFuZGxlQ3JlYXRlVGFza0NsaWNrPXt0aGlzLnByb3BzLnNob3dNb2RhbH1cbiAgICAgICAgICBzaG93Q3JlYXRlQnV0dG9uXG4gICAgICAgICAgdGFza3M9e3RoaXMucHJvcHMuYmFja2xvZ1Rhc2tzfVxuICAgICAgICAvPlxuICAgICAgICA8Q29sdW1uXG4gICAgICAgICAgbmFtZT1cIkluIFByb2dyZXNzXCJcbiAgICAgICAgICBoYW5kbGVDcmVhdGVUYXNrQ2xpY2s9e3RoaXMucHJvcHMuc2hvd01vZGFsfVxuICAgICAgICAgIHNob3dDcmVhdGVCdXR0b25cbiAgICAgICAgICB0YXNrcz17dGhpcy5wcm9wcy5pblByb2dyZXNzfVxuICAgICAgICAvPlxuICAgICAgICA8Q29sdW1uXG4gICAgICAgICAgbmFtZT1cIkNvbXBsZXRlZFwiXG4gICAgICAgICAgaGFuZGxlQ3JlYXRlVGFza0NsaWNrPXt0aGlzLnByb3BzLnNob3dNb2RhbH1cbiAgICAgICAgICB0YXNrcz17dGhpcy5wcm9wcy5jb21wbGV0ZWRUYXNrc31cbiAgICAgICAgLz5cbiAgICAgICAge3RoaXMucHJvcHMubW9kYWxWaXNpYmlsZSAmJiAoXG4gICAgICAgICAgPE1vZGFsQ29udGFpbmVyPlxuICAgICAgICAgICAgPE1vZGFsIC8+XG4gICAgICAgICAgPC9Nb2RhbENvbnRhaW5lcj5cbiAgICAgICAgKX1cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cblxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gc3RhdGUgPT4gKHtcbiAgbW9kYWxWaXNpYmlsZTogc3RhdGUuc2hvd01vZGFsLFxuICBiYWNrbG9nVGFza3M6IHN0YXRlLmJhY2tsb2csXG4gIGluUHJvZ3Jlc3NUYXNrczogc3RhdGUuaW5Qcm9ncmVzcyxcbiAgY29tcGxldGVkVGFza3M6IHN0YXRlLmNvbXBsZXRlZCxcbn0pO1xuXG5jb25zdCBtYXBEaXNwYXRjaFRvUHJvcHMgPSBkaXNwYXRjaCA9PiAoe1xuICBzaG93TW9kYWwocGF5bG9hZCkge1xuICAgIGRpc3BhdGNoKHNob3dNb2RhbChwYXlsb2FkKSk7XG4gIH0sXG59KTtcblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChcbiAgbWFwU3RhdGVUb1Byb3BzLFxuICBtYXBEaXNwYXRjaFRvUHJvcHMsXG4pKEFwcCk7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFJlYWN0RE9NIGZyb20gJ3JlYWN0LWRvbSc7XG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuaW1wb3J0IHtcbiAgY3JlYXRlQmFja2xvZ0l0ZW0sXG4gIGNyZWF0ZUluUHJvZ3Jlc3NJdGVtLFxuICBoaWRlTW9kYWwsXG59IGZyb20gJy4uLy4uL3JlZHVjZXJzL2FjdGlvbnMnO1xuXG5leHBvcnQgY2xhc3MgTW9kYWxDb250YWluZXIgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICByZW5kZXIoKSB7XG4gICAgY29uc3QgZG9tRWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyb290Jyk7XG4gICAgcmV0dXJuIFJlYWN0RE9NLmNyZWF0ZVBvcnRhbCh0aGlzLnByb3BzLmNoaWxkcmVuLCBkb21FbGVtZW50KTtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgTW9kYWxDb21wb25lbnQgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgdGl0bGU6ICcnLFxuICAgICAgZGVzY3JpcHRpb246ICcnLFxuICAgICAgZHVlRGF0ZTogJycsXG4gICAgfTtcbiAgfVxuXG4gIGhhbmRsZUlucHV0Q2hhbmdlID0gZXZlbnQgPT4ge1xuICAgIGNvbnN0IGlucHV0TmFtZSA9IGV2ZW50LmN1cnJlbnRUYXJnZXQuaWQuc3BsaXQoJy0nKS5wb3AoKTtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIFtpbnB1dE5hbWVdOiBldmVudC5jdXJyZW50VGFyZ2V0LnZhbHVlLFxuICAgIH0pO1xuICB9O1xuXG4gIGhhbmRsZUNyZWF0ZUNhcmQgPSAoKSA9PiB7XG4gICAgY29uc3QgcGF5bG9hZCA9IHtcbiAgICAgIHRhc2s6IHsgLi4udGhpcy5zdGF0ZSB9LFxuICAgICAgdGFza1R5cGU6IHRoaXMucHJvcHMuY3JlYXRlVHlwZSxcbiAgICB9O1xuICAgIHRoaXMucHJvcHMuY3JlYXRlVGFzayh7IC4uLnRoaXMuc3RhdGUgfSwgdGhpcy5wcm9wcy5jcmVhdGVUeXBlKTtcbiAgfTtcblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW9kYWxcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb2RhbF9fdGl0bGVcIj5DcmVhdGUgTmV3IFRhc2s8L2Rpdj5cbiAgICAgICAgPGZvcm0+XG4gICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICBjbGFzc05hbWU9XCJpbnB1dFwiXG4gICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlRpdGxlXCJcbiAgICAgICAgICAgIGlkPVwidGl0bGUtaW5wdXRcIlxuICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuaGFuZGxlSW5wdXRDaGFuZ2V9XG4gICAgICAgICAgLz5cbiAgICAgICAgICA8dGV4dGFyZWFcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImlucHV0XCJcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRGVzY3JpcHRpb24gKG9wdGlvbmFsKVwiXG4gICAgICAgICAgICBpZD1cImRlc2NyaXB0aW9uLWlucHV0XCJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUlucHV0Q2hhbmdlfVxuICAgICAgICAgIC8+XG4gICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICBjbGFzc05hbWU9XCJpbnB1dFwiXG4gICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkRhdGVcIlxuICAgICAgICAgICAgaWQ9XCJkdWVEYXRlLWlucHV0XCJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUlucHV0Q2hhbmdlfVxuICAgICAgICAgIC8+XG4gICAgICAgIDwvZm9ybT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb2RhbF9fZm9vdGVyXCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJidXR0b24gYnV0dG9uX19jYW5jZWxcIiBvbkNsaWNrPXt0aGlzLnByb3BzLmhpZGVNb2RhbH0+XG4gICAgICAgICAgICB7JyAnfVxuICAgICAgICAgICAgQ2FuY2VseycgJ31cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICBjbGFzc05hbWU9XCJidXR0b24gYnV0dG9uX19jb25maXJtXCJcbiAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMuaGFuZGxlQ3JlYXRlQ2FyZH1cbiAgICAgICAgICA+XG4gICAgICAgICAgICBDcmVhdGVcbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG5cbmNvbnN0IHRhc2tUeXBlVG9BY3Rpb25NYXAgPSB7XG4gIEJhY2tsb2c6IGNyZWF0ZUJhY2tsb2dJdGVtLFxuICAnSW4gUHJvZ3Jlc3MnOiBjcmVhdGVJblByb2dyZXNzSXRlbSxcbn07XG5cbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IHN0YXRlID0+ICh7XG4gIGNyZWF0ZVR5cGU6IHN0YXRlLmNyZWF0ZVR5cGUsXG59KTtcblxuY29uc3QgbWFwRGlzcGF0Y2hUb1Byb3BzID0gZGlzcGF0Y2ggPT4gKHtcbiAgaGlkZU1vZGFsKCkge1xuICAgIGRpc3BhdGNoKGhpZGVNb2RhbCgpKTtcbiAgfSxcbiAgY3JlYXRlVGFzayh7IHRhc2ssIHRhc2tUeXBlIH0pIHtcbiAgICBjb25zdCBhY3Rpb24gPSB0YXNrVHlwZVRvQWN0aW9uTWFwW3Rhc2tUeXBlXTtcbiAgICBkaXNwYXRjaChhY3Rpb24odGFzaykpO1xuICB9LFxufSk7XG5cbmV4cG9ydCBjb25zdCBNb2RhbCA9IGNvbm5lY3QoXG4gIG1hcFN0YXRlVG9Qcm9wcyxcbiAgbWFwRGlzcGF0Y2hUb1Byb3BzLFxuKShNb2RhbENvbXBvbmVudCk7XG4iXSwic291cmNlUm9vdCI6IiJ9