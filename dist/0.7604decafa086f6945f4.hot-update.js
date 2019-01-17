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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvanMvY29tcG9uZW50cy9tb2RhbC9pbmRleC5qcyJdLCJuYW1lcyI6WyJNb2RhbENvbnRhaW5lciIsImRvbUVsZW1lbnQiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwiUmVhY3RET00iLCJjcmVhdGVQb3J0YWwiLCJwcm9wcyIsImNoaWxkcmVuIiwiUmVhY3QiLCJDb21wb25lbnQiLCJNb2RhbENvbXBvbmVudCIsImV2ZW50IiwiaW5wdXROYW1lIiwiY3VycmVudFRhcmdldCIsImlkIiwic3BsaXQiLCJwb3AiLCJzZXRTdGF0ZSIsInZhbHVlIiwic3RhdGUiLCJ0aWxlIiwiZGVzY3JpcHRpb24iLCJkdWVEYXRlIiwicGF5bG9hZCIsInRhc2siLCJ0YXNrVHlwZSIsImNyZWF0ZVR5cGUiLCJjcmVhdGVUYXNrIiwidGl0bGUiLCJoYW5kbGVJbnB1dENoYW5nZSIsImhpZGVNb2RhbCIsImhhbmRsZUNyZWF0ZUNhcmQiLCJ0YXNrVHlwZVRvQWN0aW9uTWFwIiwiQmFja2xvZyIsImNyZWF0ZUJhY2tsb2dJdGVtIiwiY3JlYXRlSW5Qcm9ncmVzc0l0ZW0iLCJtYXBTdGF0ZVRvUHJvcHMiLCJtYXBEaXNwYXRjaFRvUHJvcHMiLCJkaXNwYXRjaCIsImFjdGlvbiIsIk1vZGFsIiwiY29ubmVjdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFNTyxJQUFNQSxjQUFiO0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUE7O0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUEsNkJBQ1c7QUFDUCxVQUFNQyxVQUFVLEdBQUdDLFFBQVEsQ0FBQ0MsY0FBVCxDQUF3QixNQUF4QixDQUFuQjtBQUNBLGFBQU9DLGdEQUFRLENBQUNDLFlBQVQsQ0FBc0IsS0FBS0MsS0FBTCxDQUFXQyxRQUFqQyxFQUEyQ04sVUFBM0MsQ0FBUDtBQUNEO0FBSkg7O0FBQUE7QUFBQSxFQUFv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QUFaQyxRQUFZLFFBQVpBLFFBQVk7QUFDN0IsVUFBTWMsTUFBTSxHQUFHUCxtQkFBbUIsQ0FBQ1AsUUFBRCxDQUFsQztBQUNBO0FBQ0FhLGNBQVEsQ0FBQ0MsTUFBTSxDQUFDZixJQUFELENBQVAsQ0FBUjtBQUNEO0FBUnFDLEdBQUw7QUFBQSxDQUFuQzs7QUFXTyxJQUFNZ0IsS0FBSyxHQUFHQywyREFBTyxDQUMxQkwsZUFEMEIsRUFFMUJDLGtCQUYwQixDQUFQLENBR25CM0IsY0FIbUIsQ0FBZCxDIiwiZmlsZSI6IjAuNzYwNGRlY2FmYTA4NmY2OTQ1ZjQuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUmVhY3RET00gZnJvbSAncmVhY3QtZG9tJztcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5pbXBvcnQge1xuICBjcmVhdGVCYWNrbG9nSXRlbSxcbiAgY3JlYXRlSW5Qcm9ncmVzc0l0ZW0sXG4gIGhpZGVNb2RhbCxcbn0gZnJvbSAnLi4vLi4vcmVkdWNlcnMvYWN0aW9ucyc7XG5cbmV4cG9ydCBjbGFzcyBNb2RhbENvbnRhaW5lciBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCBkb21FbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Jvb3QnKTtcbiAgICByZXR1cm4gUmVhY3RET00uY3JlYXRlUG9ydGFsKHRoaXMucHJvcHMuY2hpbGRyZW4sIGRvbUVsZW1lbnQpO1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBNb2RhbENvbXBvbmVudCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICB0aXRsZTogJycsXG4gICAgICBkZXNjcmlwdGlvbjogJycsXG4gICAgICBkdWVEYXRlOiAnJyxcbiAgICB9O1xuICB9XG5cbiAgaGFuZGxlSW5wdXRDaGFuZ2UgPSBldmVudCA9PiB7XG4gICAgY29uc3QgaW5wdXROYW1lID0gZXZlbnQuY3VycmVudFRhcmdldC5pZC5zcGxpdCgnLScpLnBvcCgpO1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgW2lucHV0TmFtZV06IGV2ZW50LmN1cnJlbnRUYXJnZXQudmFsdWUsXG4gICAgfSk7XG4gIH07XG5cbiAgaGFuZGxlQ3JlYXRlQ2FyZCA9ICgpID0+IHtcbiAgICBjb25zdCB7IHRpbGUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlIH0gPSB0aGlzLnN0YXRlO1xuICAgIGRlYnVnZ2VyO1xuICAgIGNvbnN0IHBheWxvYWQgPSB7XG4gICAgICB0YXNrOiB7IHRpbGUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlIH0sXG4gICAgICB0YXNrVHlwZTogdGhpcy5wcm9wcy5jcmVhdGVUeXBlLFxuICAgIH07XG4gICAgdGhpcy5wcm9wcy5jcmVhdGVUYXNrKHBheWxvYWQpO1xuICB9O1xuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb2RhbFwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vZGFsX190aXRsZVwiPkNyZWF0ZSBOZXcgVGFzazwvZGl2PlxuICAgICAgICA8Zm9ybT5cbiAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImlucHV0XCJcbiAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiVGl0bGVcIlxuICAgICAgICAgICAgaWQ9XCJ0aXRsZS1pbnB1dFwiXG4gICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5oYW5kbGVJbnB1dENoYW5nZX1cbiAgICAgICAgICAvPlxuICAgICAgICAgIDx0ZXh0YXJlYVxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiaW5wdXRcIlxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJEZXNjcmlwdGlvbiAob3B0aW9uYWwpXCJcbiAgICAgICAgICAgIGlkPVwiZGVzY3JpcHRpb24taW5wdXRcIlxuICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuaGFuZGxlSW5wdXRDaGFuZ2V9XG4gICAgICAgICAgLz5cbiAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImlucHV0XCJcbiAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRGF0ZVwiXG4gICAgICAgICAgICBpZD1cImR1ZURhdGUtaW5wdXRcIlxuICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuaGFuZGxlSW5wdXRDaGFuZ2V9XG4gICAgICAgICAgLz5cbiAgICAgICAgPC9mb3JtPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vZGFsX19mb290ZXJcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJ1dHRvbiBidXR0b25fX2NhbmNlbFwiIG9uQ2xpY2s9e3RoaXMucHJvcHMuaGlkZU1vZGFsfT5cbiAgICAgICAgICAgIHsnICd9XG4gICAgICAgICAgICBDYW5jZWx7JyAnfVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImJ1dHRvbiBidXR0b25fX2NvbmZpcm1cIlxuICAgICAgICAgICAgb25DbGljaz17dGhpcy5oYW5kbGVDcmVhdGVDYXJkfVxuICAgICAgICAgID5cbiAgICAgICAgICAgIENyZWF0ZVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cblxuY29uc3QgdGFza1R5cGVUb0FjdGlvbk1hcCA9IHtcbiAgQmFja2xvZzogY3JlYXRlQmFja2xvZ0l0ZW0sXG4gICdJbiBQcm9ncmVzcyc6IGNyZWF0ZUluUHJvZ3Jlc3NJdGVtLFxufTtcblxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gc3RhdGUgPT4gKHtcbiAgY3JlYXRlVHlwZTogc3RhdGUuY3JlYXRlVHlwZSxcbn0pO1xuXG5jb25zdCBtYXBEaXNwYXRjaFRvUHJvcHMgPSBkaXNwYXRjaCA9PiAoe1xuICBoaWRlTW9kYWwoKSB7XG4gICAgZGlzcGF0Y2goaGlkZU1vZGFsKCkpO1xuICB9LFxuICBjcmVhdGVUYXNrKHsgdGFzaywgdGFza1R5cGUgfSkge1xuICAgIGNvbnN0IGFjdGlvbiA9IHRhc2tUeXBlVG9BY3Rpb25NYXBbdGFza1R5cGVdO1xuICAgIGRlYnVnZ2VyO1xuICAgIGRpc3BhdGNoKGFjdGlvbih0YXNrKSk7XG4gIH0sXG59KTtcblxuZXhwb3J0IGNvbnN0IE1vZGFsID0gY29ubmVjdChcbiAgbWFwU3RhdGVUb1Byb3BzLFxuICBtYXBEaXNwYXRjaFRvUHJvcHMsXG4pKE1vZGFsQ29tcG9uZW50KTtcbiJdLCJzb3VyY2VSb290IjoiIn0=