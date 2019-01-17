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
      var inputName = event.currentTarget.id.split('-').pop();

      _this.setState(_defineProperty({}, inputName, event.currentTarget.value));
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleCreateCard", function () {
      var _this$state = _this.state,
          tile = _this$state.tile,
          description = _this$state.description,
          dueDate = _this$state.dueDate;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvanMvY29tcG9uZW50cy9tb2RhbC9pbmRleC5qcyJdLCJuYW1lcyI6WyJNb2RhbENvbnRhaW5lciIsImRvbUVsZW1lbnQiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwiUmVhY3RET00iLCJjcmVhdGVQb3J0YWwiLCJwcm9wcyIsImNoaWxkcmVuIiwiUmVhY3QiLCJDb21wb25lbnQiLCJNb2RhbENvbXBvbmVudCIsImV2ZW50IiwiaW5wdXROYW1lIiwiY3VycmVudFRhcmdldCIsImlkIiwic3BsaXQiLCJwb3AiLCJzZXRTdGF0ZSIsInZhbHVlIiwic3RhdGUiLCJ0aWxlIiwiZGVzY3JpcHRpb24iLCJkdWVEYXRlIiwicGF5bG9hZCIsInRhc2siLCJ0YXNrVHlwZSIsImNyZWF0ZVR5cGUiLCJjcmVhdGVUYXNrIiwidGl0bGUiLCJoYW5kbGVJbnB1dENoYW5nZSIsImhpZGVNb2RhbCIsImhhbmRsZUNyZWF0ZUNhcmQiLCJ0YXNrVHlwZVRvQWN0aW9uTWFwIiwiQmFja2xvZyIsImNyZWF0ZUJhY2tsb2dJdGVtIiwiY3JlYXRlSW5Qcm9ncmVzc0l0ZW0iLCJtYXBTdGF0ZVRvUHJvcHMiLCJtYXBEaXNwYXRjaFRvUHJvcHMiLCJkaXNwYXRjaCIsImFjdGlvbiIsIk1vZGFsIiwiY29ubmVjdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFNTyxJQUFNQSxjQUFiO0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUE7O0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUEsNkJBQ1c7QUFDUCxVQUFNQyxVQUFVLEdBQUdDLFFBQVEsQ0FBQ0MsY0FBVCxDQUF3QixNQUF4QixDQUFuQjtBQUNBLGFBQU9DLGdEQUFRLENBQUNDLFlBQVQsQ0FBc0IsS0FBS0MsS0FBTCxDQUFXQyxRQUFqQyxFQUEyQ04sVUFBM0MsQ0FBUDtBQUNEO0FBSkg7O0FBQUE7QUFBQSxFQUFv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UUFBWSxRQUFaQSxRQUFZO0FBQzdCLFVBQU1jLE1BQU0sR0FBR1AsbUJBQW1CLENBQUNQLFFBQUQsQ0FBbEM7QUFDQTtBQUNBYSxjQUFRLENBQUNDLE1BQU0sQ0FBQ2YsSUFBRCxDQUFQLENBQVI7QUFDRDtBQVJxQyxHQUFMO0FBQUEsQ0FBbkM7O0FBV08sSUFBTWdCLEtBQUssR0FBR0MsMkRBQU8sQ0FDMUJMLGVBRDBCLEVBRTFCQyxrQkFGMEIsQ0FBUCxDQUduQjNCLGNBSG1CLENBQWQsQyIsImZpbGUiOiIwLjJkYTQ4NmNkNTlmNmQ3ZGRjZWY2LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFJlYWN0RE9NIGZyb20gJ3JlYWN0LWRvbSc7XG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuaW1wb3J0IHtcbiAgY3JlYXRlQmFja2xvZ0l0ZW0sXG4gIGNyZWF0ZUluUHJvZ3Jlc3NJdGVtLFxuICBoaWRlTW9kYWwsXG59IGZyb20gJy4uLy4uL3JlZHVjZXJzL2FjdGlvbnMnO1xuXG5leHBvcnQgY2xhc3MgTW9kYWxDb250YWluZXIgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICByZW5kZXIoKSB7XG4gICAgY29uc3QgZG9tRWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyb290Jyk7XG4gICAgcmV0dXJuIFJlYWN0RE9NLmNyZWF0ZVBvcnRhbCh0aGlzLnByb3BzLmNoaWxkcmVuLCBkb21FbGVtZW50KTtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgTW9kYWxDb21wb25lbnQgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgdGl0bGU6ICcnLFxuICAgICAgZGVzY3JpcHRpb246ICcnLFxuICAgICAgZHVlRGF0ZTogJycsXG4gICAgfTtcbiAgfVxuXG4gIGhhbmRsZUlucHV0Q2hhbmdlID0gZXZlbnQgPT4ge1xuICAgIGNvbnN0IGlucHV0TmFtZSA9IGV2ZW50LmN1cnJlbnRUYXJnZXQuaWQuc3BsaXQoJy0nKS5wb3AoKTtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIFtpbnB1dE5hbWVdOiBldmVudC5jdXJyZW50VGFyZ2V0LnZhbHVlLFxuICAgIH0pO1xuICB9O1xuXG4gIGhhbmRsZUNyZWF0ZUNhcmQgPSAoKSA9PiB7XG4gICAgY29uc3QgeyB0aWxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSB9ID0gdGhpcy5zdGF0ZTtcbiAgICBjb25zdCBwYXlsb2FkID0ge1xuICAgICAgdGFzazogeyB0aWxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSB9LFxuICAgICAgdGFza1R5cGU6IHRoaXMucHJvcHMuY3JlYXRlVHlwZSxcbiAgICB9O1xuICAgIHRoaXMucHJvcHMuY3JlYXRlVGFzayhwYXlsb2FkKTtcbiAgfTtcblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW9kYWxcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb2RhbF9fdGl0bGVcIj5DcmVhdGUgTmV3IFRhc2s8L2Rpdj5cbiAgICAgICAgPGZvcm0+XG4gICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICBjbGFzc05hbWU9XCJpbnB1dFwiXG4gICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlRpdGxlXCJcbiAgICAgICAgICAgIGlkPVwidGl0bGUtaW5wdXRcIlxuICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuaGFuZGxlSW5wdXRDaGFuZ2V9XG4gICAgICAgICAgLz5cbiAgICAgICAgICA8dGV4dGFyZWFcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImlucHV0XCJcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRGVzY3JpcHRpb24gKG9wdGlvbmFsKVwiXG4gICAgICAgICAgICBpZD1cImRlc2NyaXB0aW9uLWlucHV0XCJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUlucHV0Q2hhbmdlfVxuICAgICAgICAgIC8+XG4gICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICBjbGFzc05hbWU9XCJpbnB1dFwiXG4gICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkRhdGVcIlxuICAgICAgICAgICAgaWQ9XCJkdWVEYXRlLWlucHV0XCJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUlucHV0Q2hhbmdlfVxuICAgICAgICAgIC8+XG4gICAgICAgIDwvZm9ybT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb2RhbF9fZm9vdGVyXCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJidXR0b24gYnV0dG9uX19jYW5jZWxcIiBvbkNsaWNrPXt0aGlzLnByb3BzLmhpZGVNb2RhbH0+XG4gICAgICAgICAgICB7JyAnfVxuICAgICAgICAgICAgQ2FuY2VseycgJ31cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICBjbGFzc05hbWU9XCJidXR0b24gYnV0dG9uX19jb25maXJtXCJcbiAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMuaGFuZGxlQ3JlYXRlQ2FyZH1cbiAgICAgICAgICA+XG4gICAgICAgICAgICBDcmVhdGVcbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG5cbmNvbnN0IHRhc2tUeXBlVG9BY3Rpb25NYXAgPSB7XG4gIEJhY2tsb2c6IGNyZWF0ZUJhY2tsb2dJdGVtLFxuICAnSW4gUHJvZ3Jlc3MnOiBjcmVhdGVJblByb2dyZXNzSXRlbSxcbn07XG5cbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IHN0YXRlID0+ICh7XG4gIGNyZWF0ZVR5cGU6IHN0YXRlLmNyZWF0ZVR5cGUsXG59KTtcblxuY29uc3QgbWFwRGlzcGF0Y2hUb1Byb3BzID0gZGlzcGF0Y2ggPT4gKHtcbiAgaGlkZU1vZGFsKCkge1xuICAgIGRpc3BhdGNoKGhpZGVNb2RhbCgpKTtcbiAgfSxcbiAgY3JlYXRlVGFzayh7IHRhc2ssIHRhc2tUeXBlIH0pIHtcbiAgICBjb25zdCBhY3Rpb24gPSB0YXNrVHlwZVRvQWN0aW9uTWFwW3Rhc2tUeXBlXTtcbiAgICBkZWJ1Z2dlcjtcbiAgICBkaXNwYXRjaChhY3Rpb24odGFzaykpO1xuICB9LFxufSk7XG5cbmV4cG9ydCBjb25zdCBNb2RhbCA9IGNvbm5lY3QoXG4gIG1hcFN0YXRlVG9Qcm9wcyxcbiAgbWFwRGlzcGF0Y2hUb1Byb3BzLFxuKShNb2RhbENvbXBvbmVudCk7XG4iXSwic291cmNlUm9vdCI6IiJ9