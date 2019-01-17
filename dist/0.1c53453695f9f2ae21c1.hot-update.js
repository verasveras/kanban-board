webpackHotUpdate(0,{

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
      var inputName = event.currentTarget.id.split('-')[0];

      _this.setState(_defineProperty({}, inputName, event.currentTarget.value));
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleCreateCard", function () {
      var _this$state = _this.state,
          tile = _this$state.tile,
          description = _this$state.description,
          dueDate = _this$state.dueDate;
      debugger;
      var payload = {
        task: {
          tile: tile,
          description: description,
          dueDate: dueDate
        },
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvanMvY29tcG9uZW50cy9tb2RhbC9pbmRleC5qcyJdLCJuYW1lcyI6WyJNb2RhbENvbnRhaW5lciIsImRvbUVsZW1lbnQiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwiUmVhY3RET00iLCJjcmVhdGVQb3J0YWwiLCJwcm9wcyIsImNoaWxkcmVuIiwiUmVhY3QiLCJDb21wb25lbnQiLCJNb2RhbENvbXBvbmVudCIsImV2ZW50IiwiaW5wdXROYW1lIiwiY3VycmVudFRhcmdldCIsImlkIiwic3BsaXQiLCJzZXRTdGF0ZSIsInZhbHVlIiwic3RhdGUiLCJ0aWxlIiwiZGVzY3JpcHRpb24iLCJkdWVEYXRlIiwicGF5bG9hZCIsInRhc2siLCJ0YXNrVHlwZSIsImNyZWF0ZVR5cGUiLCJjcmVhdGVUYXNrIiwidGl0bGUiLCJoYW5kbGVJbnB1dENoYW5nZSIsImhpZGVNb2RhbCIsImhhbmRsZUNyZWF0ZUNhcmQiLCJ0YXNrVHlwZVRvQWN0aW9uTWFwIiwiQmFja2xvZyIsImNyZWF0ZUJhY2tsb2dJdGVtIiwiY3JlYXRlSW5Qcm9ncmVzc0l0ZW0iLCJtYXBTdGF0ZVRvUHJvcHMiLCJtYXBEaXNwYXRjaFRvUHJvcHMiLCJkaXNwYXRjaCIsImFjdGlvbiIsIk1vZGFsIiwiY29ubmVjdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFNTyxJQUFNQSxjQUFiO0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUE7O0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUEsNkJBQ1c7QUFDUCxVQUFNQyxVQUFVLEdBQUdDLFFBQVEsQ0FBQ0MsY0FBVCxDQUF3QixNQUF4QixDQUFuQjtBQUNBLGFBQU9DLGdEQUFRLENBQUNDLFlBQVQsQ0FBc0IsS0FBS0MsS0FBTCxDQUFXQyxRQUFqQyxFQUEyQ04sVUFBM0MsQ0FBUDtBQUNEO0FBSkg7O0FBQUE7QUFBQSxFQUFvQ08sNENB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QVksUUFBWkEsUUFBWTtBQUM3QixVQUFNYyxNQUFNLEdBQUdQLG1CQUFtQixDQUFDUCxRQUFELENBQWxDO0FBQ0E7QUFDQWEsY0FBUSxDQUFDQyxNQUFNLENBQUNmLElBQUQsQ0FBUCxDQUFSO0FBQ0Q7QUFScUMsR0FBTDtBQUFBLENBQW5DOztBQVdPLElBQU1nQixLQUFLLEdBQUdDLDJEQUFPLENBQzFCTCxlQUQwQixFQUUxQkMsa0JBRjBCLENBQVAsQ0FHbkIxQixjQUhtQixDQUFkLEMiLCJmaWxlIjoiMC4xYzUzNDUzNjk1ZjlmMmFlMjFjMS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBSZWFjdERPTSBmcm9tICdyZWFjdC1kb20nO1xuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcbmltcG9ydCB7XG4gIGNyZWF0ZUJhY2tsb2dJdGVtLFxuICBjcmVhdGVJblByb2dyZXNzSXRlbSxcbiAgaGlkZU1vZGFsLFxufSBmcm9tICcuLi8uLi9yZWR1Y2Vycy9hY3Rpb25zJztcblxuZXhwb3J0IGNsYXNzIE1vZGFsQ29udGFpbmVyIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IGRvbUVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncm9vdCcpO1xuICAgIHJldHVybiBSZWFjdERPTS5jcmVhdGVQb3J0YWwodGhpcy5wcm9wcy5jaGlsZHJlbiwgZG9tRWxlbWVudCk7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIE1vZGFsQ29tcG9uZW50IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIHRpdGxlOiAnJyxcbiAgICAgIGRlc2NyaXB0aW9uOiAnJyxcbiAgICAgIGR1ZURhdGU6ICcnLFxuICAgIH07XG4gIH1cblxuICBoYW5kbGVJbnB1dENoYW5nZSA9IGV2ZW50ID0+IHtcbiAgICBjb25zdCBpbnB1dE5hbWUgPSBldmVudC5jdXJyZW50VGFyZ2V0LmlkLnNwbGl0KCctJylbMF07XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBbaW5wdXROYW1lXTogZXZlbnQuY3VycmVudFRhcmdldC52YWx1ZSxcbiAgICB9KTtcbiAgfTtcblxuICBoYW5kbGVDcmVhdGVDYXJkID0gKCkgPT4ge1xuICAgIGNvbnN0IHsgdGlsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUgfSA9IHRoaXMuc3RhdGU7XG4gICAgZGVidWdnZXI7XG4gICAgY29uc3QgcGF5bG9hZCA9IHtcbiAgICAgIHRhc2s6IHsgdGlsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUgfSxcbiAgICAgIHRhc2tUeXBlOiB0aGlzLnByb3BzLmNyZWF0ZVR5cGUsXG4gICAgfTtcbiAgICB0aGlzLnByb3BzLmNyZWF0ZVRhc2socGF5bG9hZCk7XG4gIH07XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vZGFsXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW9kYWxfX3RpdGxlXCI+Q3JlYXRlIE5ldyBUYXNrPC9kaXY+XG4gICAgICAgIDxmb3JtPlxuICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiaW5wdXRcIlxuICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJUaXRsZVwiXG4gICAgICAgICAgICBpZD1cInRpdGxlLWlucHV0XCJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUlucHV0Q2hhbmdlfVxuICAgICAgICAgIC8+XG4gICAgICAgICAgPHRleHRhcmVhXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJpbnB1dFwiXG4gICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkRlc2NyaXB0aW9uIChvcHRpb25hbClcIlxuICAgICAgICAgICAgaWQ9XCJkZXNjcmlwdGlvbi1pbnB1dFwiXG4gICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5oYW5kbGVJbnB1dENoYW5nZX1cbiAgICAgICAgICAvPlxuICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiaW5wdXRcIlxuICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJEYXRlXCJcbiAgICAgICAgICAgIGlkPVwiZHVlRGF0ZS1pbnB1dFwiXG4gICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5oYW5kbGVJbnB1dENoYW5nZX1cbiAgICAgICAgICAvPlxuICAgICAgICA8L2Zvcm0+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW9kYWxfX2Zvb3RlclwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYnV0dG9uIGJ1dHRvbl9fY2FuY2VsXCIgb25DbGljaz17dGhpcy5wcm9wcy5oaWRlTW9kYWx9PlxuICAgICAgICAgICAgeycgJ31cbiAgICAgICAgICAgIENhbmNlbHsnICd9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdlxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnV0dG9uIGJ1dHRvbl9fY29uZmlybVwiXG4gICAgICAgICAgICBvbkNsaWNrPXt0aGlzLmhhbmRsZUNyZWF0ZUNhcmR9XG4gICAgICAgICAgPlxuICAgICAgICAgICAgQ3JlYXRlXG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuXG5jb25zdCB0YXNrVHlwZVRvQWN0aW9uTWFwID0ge1xuICBCYWNrbG9nOiBjcmVhdGVCYWNrbG9nSXRlbSxcbiAgJ0luIFByb2dyZXNzJzogY3JlYXRlSW5Qcm9ncmVzc0l0ZW0sXG59O1xuXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSBzdGF0ZSA9PiAoe1xuICBjcmVhdGVUeXBlOiBzdGF0ZS5jcmVhdGVUeXBlLFxufSk7XG5cbmNvbnN0IG1hcERpc3BhdGNoVG9Qcm9wcyA9IGRpc3BhdGNoID0+ICh7XG4gIGhpZGVNb2RhbCgpIHtcbiAgICBkaXNwYXRjaChoaWRlTW9kYWwoKSk7XG4gIH0sXG4gIGNyZWF0ZVRhc2soeyB0YXNrLCB0YXNrVHlwZSB9KSB7XG4gICAgY29uc3QgYWN0aW9uID0gdGFza1R5cGVUb0FjdGlvbk1hcFt0YXNrVHlwZV07XG4gICAgZGVidWdnZXI7XG4gICAgZGlzcGF0Y2goYWN0aW9uKHRhc2spKTtcbiAgfSxcbn0pO1xuXG5leHBvcnQgY29uc3QgTW9kYWwgPSBjb25uZWN0KFxuICBtYXBTdGF0ZVRvUHJvcHMsXG4gIG1hcERpc3BhdGNoVG9Qcm9wcyxcbikoTW9kYWxDb21wb25lbnQpO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==