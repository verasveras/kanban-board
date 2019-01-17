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
      var _this$state;

      var task = (_this$state = _this.state, tile = _this$state.tile, description = _this$state.description, dueDate = _this$state.dueDate, _this$state);
      var payload = {
        task: task,
        taskType: _this.props.createType
      };

      _this.props.createTask(payload);
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
      debugger;
      dispatch(action(task));
    }
  };
};

var Modal = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["connect"])(mapStateToProps, mapDispatchToProps)(ModalComponent);

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvanMvYXBwLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9jb21wb25lbnRzL21vZGFsL2luZGV4LmpzIl0sIm5hbWVzIjpbIkFwcCIsInByb3BzIiwic2hvd01vZGFsIiwiYmFja2xvZ1Rhc2tzIiwiaW5Qcm9ncmVzcyIsImNvbXBsZXRlZFRhc2tzIiwibW9kYWxWaXNpYmlsZSIsIlJlYWN0IiwiQ29tcG9uZW50IiwibWFwU3RhdGVUb1Byb3BzIiwic3RhdGUiLCJiYWNrbG9nIiwiaW5Qcm9ncmVzc1Rhc2tzIiwiY29tcGxldGVkIiwibWFwRGlzcGF0Y2hUb1Byb3BzIiwiZGlzcGF0Y2giLCJwYXlsb2FkIiwiY29ubmVjdCIsIk1vZGFsQ29udGFpbmVyIiwiZG9tRWxlbWVudCIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJSZWFjdERPTSIsImNyZWF0ZVBvcnRhbCIsImNoaWxkcmVuIiwiTW9kYWxDb21wb25lbnQiLCJldmVudCIsImlucHV0TmFtZSIsImN1cnJlbnRUYXJnZXQiLCJpZCIsInNwbGl0IiwicG9wIiwic2V0U3RhdGUiLCJ2YWx1ZSIsInRhc2siLCJ0aWxlIiwiZGVzY3JpcHRpb24iLCJkdWVEYXRlIiwidGFza1R5cGUiLCJjcmVhdGVUeXBlIiwiY3JlYXRlVGFzayIsInRpdGxlIiwiaGFuZGxlSW5wdXRDaGFuZ2UiLCJoaWRlTW9kYWwiLCJoYW5kbGVDcmVhdGVDYXJkIiwidGFza1R5cGVUb0FjdGlvbk1hcCIsIkJhY2tsb2ciLCJjcmVhdGVCYWNrbG9nSXRlbSIsImNyZWF0ZUluUHJvZ3Jlc3NJdGVtIiwiYWN0aW9uIiwiTW9kYWwiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztJQUVNQSxHOzs7Ozs7Ozs7Ozs7OzZCQUNLO0FBQ1AsYUFDRTtBQUFLLGlCQUFTLEVBQUM7QUFBZixTQUNFLDJEQUFDLDBEQUFEO0FBQ0UsWUFB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QSxlQUFrQixDQUFBQyxLQUFLO0FBQUEsU0FBSztBQUNoQzZCLGNBQVUsRUFBRTdCLEtBQUssQ0FBQzZCO0FBRGMsR0FBTDtBQUFBLENBQTdCOztBQUlBLElBQU16QixrQkFBa0IsR0FBRyxTQUFyQkEsa0JBQXFCLENBQUFDLFFBQVE7QUFBQSxTQUFLO0FBQ3RDNEIsYUFEc0MsdUJBQzFCO0FBQ1Y1QixjQUFRLENBQUM0QixtRUFBUyxFQUFWLENBQVI7QUFDRCxLQUhxQztBQUl0Q0gsY0FKc0MsNEJBSVA7QUFBQSxVQUFsQk4sSUFBa0IsUUFBbEJBLElBQWtCO0FBQUEsVUFBWkksUUFBWSxRQUFaQSxRQUFZO0FBQzdCLFVBQU1XLE1BQU0sR0FBR0osbUJBQW1CLENBQUNQLFFBQUQsQ0FBbEM7QUFDQTtBQUNBdkIsY0FBUSxDQUFDa0MsTUFBTSxDQUFDZixJQUFELENBQVAsQ0FBUjtBQUNEO0FBUnFDLEdBQUw7QUFBQSxDQUFuQzs7QUFXTyxJQUFNZ0IsS0FBSyxHQUFHakMsMkRBQU8sQ0FDMUJSLGVBRDBCLEVBRTFCSyxrQkFGMEIsQ0FBUCxDQUduQlcsY0FIbUIsQ0FBZCxDIiwiZmlsZSI6IjAuMDJmM2Y0YjAwZmRiYTAyODBjMDIuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgQ29sdW1uIGZyb20gJy4vY29tcG9uZW50cy9jb2x1bW4nO1xuaW1wb3J0IHsgTW9kYWxDb250YWluZXIsIE1vZGFsIH0gZnJvbSAnLi9jb21wb25lbnRzL21vZGFsJztcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5pbXBvcnQgeyBzaG93TW9kYWwgfSBmcm9tICcuL3JlZHVjZXJzL2FjdGlvbnMnO1xuXG5jbGFzcyBBcHAgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYXBwLWNvbnRhaW5lclwiPlxuICAgICAgICA8Q29sdW1uXG4gICAgICAgICAgbmFtZT1cIkJhY2tsb2dcIlxuICAgICAgICAgIGhhbmRsZUNyZWF0ZVRhc2tDbGljaz17dGhpcy5wcm9wcy5zaG93TW9kYWx9XG4gICAgICAgICAgc2hvd0NyZWF0ZUJ1dHRvblxuICAgICAgICAgIHRhc2tzPXt0aGlzLnByb3BzLmJhY2tsb2dUYXNrc31cbiAgICAgICAgLz5cbiAgICAgICAgPENvbHVtblxuICAgICAgICAgIG5hbWU9XCJJbiBQcm9ncmVzc1wiXG4gICAgICAgICAgaGFuZGxlQ3JlYXRlVGFza0NsaWNrPXt0aGlzLnByb3BzLnNob3dNb2RhbH1cbiAgICAgICAgICBzaG93Q3JlYXRlQnV0dG9uXG4gICAgICAgICAgdGFza3M9e3RoaXMucHJvcHMuaW5Qcm9ncmVzc31cbiAgICAgICAgLz5cbiAgICAgICAgPENvbHVtblxuICAgICAgICAgIG5hbWU9XCJDb21wbGV0ZWRcIlxuICAgICAgICAgIGhhbmRsZUNyZWF0ZVRhc2tDbGljaz17dGhpcy5wcm9wcy5zaG93TW9kYWx9XG4gICAgICAgICAgdGFza3M9e3RoaXMucHJvcHMuY29tcGxldGVkVGFza3N9XG4gICAgICAgIC8+XG4gICAgICAgIHt0aGlzLnByb3BzLm1vZGFsVmlzaWJpbGUgJiYgKFxuICAgICAgICAgIDxNb2RhbENvbnRhaW5lcj5cbiAgICAgICAgICAgIDxNb2RhbCAvPlxuICAgICAgICAgIDwvTW9kYWxDb250YWluZXI+XG4gICAgICAgICl9XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG5cbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IHN0YXRlID0+ICh7XG4gIG1vZGFsVmlzaWJpbGU6IHN0YXRlLnNob3dNb2RhbCxcbiAgYmFja2xvZ1Rhc2tzOiBzdGF0ZS5iYWNrbG9nLFxuICBpblByb2dyZXNzVGFza3M6IHN0YXRlLmluUHJvZ3Jlc3MsXG4gIGNvbXBsZXRlZFRhc2tzOiBzdGF0ZS5jb21wbGV0ZWQsXG59KTtcblxuY29uc3QgbWFwRGlzcGF0Y2hUb1Byb3BzID0gZGlzcGF0Y2ggPT4gKHtcbiAgc2hvd01vZGFsKHBheWxvYWQpIHtcbiAgICBkaXNwYXRjaChzaG93TW9kYWwocGF5bG9hZCkpO1xuICB9LFxufSk7XG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QoXG4gIG1hcFN0YXRlVG9Qcm9wcyxcbiAgbWFwRGlzcGF0Y2hUb1Byb3BzLFxuKShBcHApO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBSZWFjdERPTSBmcm9tICdyZWFjdC1kb20nO1xuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcbmltcG9ydCB7XG4gIGNyZWF0ZUJhY2tsb2dJdGVtLFxuICBjcmVhdGVJblByb2dyZXNzSXRlbSxcbiAgaGlkZU1vZGFsLFxufSBmcm9tICcuLi8uLi9yZWR1Y2Vycy9hY3Rpb25zJztcblxuZXhwb3J0IGNsYXNzIE1vZGFsQ29udGFpbmVyIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IGRvbUVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncm9vdCcpO1xuICAgIHJldHVybiBSZWFjdERPTS5jcmVhdGVQb3J0YWwodGhpcy5wcm9wcy5jaGlsZHJlbiwgZG9tRWxlbWVudCk7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIE1vZGFsQ29tcG9uZW50IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIHRpdGxlOiAnJyxcbiAgICAgIGRlc2NyaXB0aW9uOiAnJyxcbiAgICAgIGR1ZURhdGU6ICcnLFxuICAgIH07XG4gIH1cblxuICBoYW5kbGVJbnB1dENoYW5nZSA9IGV2ZW50ID0+IHtcbiAgICBjb25zdCBpbnB1dE5hbWUgPSBldmVudC5jdXJyZW50VGFyZ2V0LmlkLnNwbGl0KCctJykucG9wKCk7XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBbaW5wdXROYW1lXTogZXZlbnQuY3VycmVudFRhcmdldC52YWx1ZSxcbiAgICB9KTtcbiAgfTtcblxuICBoYW5kbGVDcmVhdGVDYXJkID0gKCkgPT4ge1xuICAgIGNvbnN0IHRhc2sgPSAoeyB0aWxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSB9ID0gdGhpcy5zdGF0ZSk7XG4gICAgY29uc3QgcGF5bG9hZCA9IHtcbiAgICAgIHRhc2ssXG4gICAgICB0YXNrVHlwZTogdGhpcy5wcm9wcy5jcmVhdGVUeXBlLFxuICAgIH07XG4gICAgdGhpcy5wcm9wcy5jcmVhdGVUYXNrKHBheWxvYWQpO1xuICB9O1xuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb2RhbFwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vZGFsX190aXRsZVwiPkNyZWF0ZSBOZXcgVGFzazwvZGl2PlxuICAgICAgICA8Zm9ybT5cbiAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImlucHV0XCJcbiAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiVGl0bGVcIlxuICAgICAgICAgICAgaWQ9XCJ0aXRsZS1pbnB1dFwiXG4gICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5oYW5kbGVJbnB1dENoYW5nZX1cbiAgICAgICAgICAvPlxuICAgICAgICAgIDx0ZXh0YXJlYVxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiaW5wdXRcIlxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJEZXNjcmlwdGlvbiAob3B0aW9uYWwpXCJcbiAgICAgICAgICAgIGlkPVwiZGVzY3JpcHRpb24taW5wdXRcIlxuICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuaGFuZGxlSW5wdXRDaGFuZ2V9XG4gICAgICAgICAgLz5cbiAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImlucHV0XCJcbiAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRGF0ZVwiXG4gICAgICAgICAgICBpZD1cImR1ZURhdGUtaW5wdXRcIlxuICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuaGFuZGxlSW5wdXRDaGFuZ2V9XG4gICAgICAgICAgLz5cbiAgICAgICAgPC9mb3JtPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vZGFsX19mb290ZXJcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJ1dHRvbiBidXR0b25fX2NhbmNlbFwiIG9uQ2xpY2s9e3RoaXMucHJvcHMuaGlkZU1vZGFsfT5cbiAgICAgICAgICAgIHsnICd9XG4gICAgICAgICAgICBDYW5jZWx7JyAnfVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImJ1dHRvbiBidXR0b25fX2NvbmZpcm1cIlxuICAgICAgICAgICAgb25DbGljaz17dGhpcy5oYW5kbGVDcmVhdGVDYXJkfVxuICAgICAgICAgID5cbiAgICAgICAgICAgIENyZWF0ZVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cblxuY29uc3QgdGFza1R5cGVUb0FjdGlvbk1hcCA9IHtcbiAgQmFja2xvZzogY3JlYXRlQmFja2xvZ0l0ZW0sXG4gICdJbiBQcm9ncmVzcyc6IGNyZWF0ZUluUHJvZ3Jlc3NJdGVtLFxufTtcblxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gc3RhdGUgPT4gKHtcbiAgY3JlYXRlVHlwZTogc3RhdGUuY3JlYXRlVHlwZSxcbn0pO1xuXG5jb25zdCBtYXBEaXNwYXRjaFRvUHJvcHMgPSBkaXNwYXRjaCA9PiAoe1xuICBoaWRlTW9kYWwoKSB7XG4gICAgZGlzcGF0Y2goaGlkZU1vZGFsKCkpO1xuICB9LFxuICBjcmVhdGVUYXNrKHsgdGFzaywgdGFza1R5cGUgfSkge1xuICAgIGNvbnN0IGFjdGlvbiA9IHRhc2tUeXBlVG9BY3Rpb25NYXBbdGFza1R5cGVdO1xuICAgIGRlYnVnZ2VyO1xuICAgIGRpc3BhdGNoKGFjdGlvbih0YXNrKSk7XG4gIH0sXG59KTtcblxuZXhwb3J0IGNvbnN0IE1vZGFsID0gY29ubmVjdChcbiAgbWFwU3RhdGVUb1Byb3BzLFxuICBtYXBEaXNwYXRjaFRvUHJvcHMsXG4pKE1vZGFsQ29tcG9uZW50KTtcbiJdLCJzb3VyY2VSb290IjoiIn0=