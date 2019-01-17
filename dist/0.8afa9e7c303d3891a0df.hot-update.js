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
      dispatch(action(task));
    }
  };
};

var Modal = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["connect"])(mapStateToProps, mapDispatchToProps)(ModalComponent);

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvanMvY29tcG9uZW50cy9tb2RhbC9pbmRleC5qcyJdLCJuYW1lcyI6WyJNb2RhbENvbnRhaW5lciIsImRvbUVsZW1lbnQiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwiUmVhY3RET00iLCJjcmVhdGVQb3J0YWwiLCJwcm9wcyIsImNoaWxkcmVuIiwiUmVhY3QiLCJDb21wb25lbnQiLCJNb2RhbENvbXBvbmVudCIsImV2ZW50IiwiaW5wdXROYW1lIiwiY3VycmVudFRhcmdldCIsImlkIiwic3BsaXQiLCJwb3AiLCJzZXRTdGF0ZSIsInZhbHVlIiwicGF5bG9hZCIsInRhc2siLCJzdGF0ZSIsInRhc2tUeXBlIiwiY3JlYXRlVHlwZSIsImNyZWF0ZVRhc2siLCJ0aXRsZSIsImRlc2NyaXB0aW9uIiwiZHVlRGF0ZSIsImhhbmRsZUlucHV0Q2hhbmdlIiwiaGlkZU1vZGFsIiwiaGFuZGxlQ3JlYXRlQ2FyZCIsInRhc2tUeXBlVG9BY3Rpb25NYXAiLCJCYWNrbG9nIiwiY3JlYXRlQmFja2xvZ0l0ZW0iLCJjcmVhdGVJblByb2dyZXNzSXRlbSIsIm1hcFN0YXRlVG9Qcm9wcyIsIm1hcERpc3BhdGNoVG9Qcm9wcyIsImRpc3BhdGNoIiwiYWN0aW9uIiwiTW9kYWwiLCJjb25uZWN0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBTU8sSUFBTUEsY0FBYjtBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBOztBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBLDZCQUNXO0FBQ1AsVUFBTUMsVUFBVSxHQUFHQyxRQUFRLENBQUNDLGNBQVQsQ0FBd0IsTUFBeEIsQ0FBbkI7QUFDQSxhQUFPQyxnREFBUSxDQUFDQyxZQUFULENBQXNCLEtBQUtDLEtBQUwsQ0FBV0MsUUFBakMsRUFBMkNOLFVBQTNDLENBQVA7QUFDRDtBQUpIOztBQUFBO0FBQUEsRUFBb0NPLDRD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QkwsZUFEMEIsRUFFMUJDLGtCQUYwQixDQUFQLENBR25CMUIsY0FIbUIsQ0FBZCxDIiwiZmlsZSI6IjAuOGFmYTllN2MzMDNkMzg5MWEwZGYuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUmVhY3RET00gZnJvbSAncmVhY3QtZG9tJztcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5pbXBvcnQge1xuICBjcmVhdGVCYWNrbG9nSXRlbSxcbiAgY3JlYXRlSW5Qcm9ncmVzc0l0ZW0sXG4gIGhpZGVNb2RhbCxcbn0gZnJvbSAnLi4vLi4vcmVkdWNlcnMvYWN0aW9ucyc7XG5cbmV4cG9ydCBjbGFzcyBNb2RhbENvbnRhaW5lciBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCBkb21FbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Jvb3QnKTtcbiAgICByZXR1cm4gUmVhY3RET00uY3JlYXRlUG9ydGFsKHRoaXMucHJvcHMuY2hpbGRyZW4sIGRvbUVsZW1lbnQpO1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBNb2RhbENvbXBvbmVudCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICB0aXRsZTogJycsXG4gICAgICBkZXNjcmlwdGlvbjogJycsXG4gICAgICBkdWVEYXRlOiAnJyxcbiAgICB9O1xuICB9XG5cbiAgaGFuZGxlSW5wdXRDaGFuZ2UgPSBldmVudCA9PiB7XG4gICAgY29uc3QgaW5wdXROYW1lID0gZXZlbnQuY3VycmVudFRhcmdldC5pZC5zcGxpdCgnLScpLnBvcCgpO1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgW2lucHV0TmFtZV06IGV2ZW50LmN1cnJlbnRUYXJnZXQudmFsdWUsXG4gICAgfSk7XG4gIH07XG5cbiAgaGFuZGxlQ3JlYXRlQ2FyZCA9ICgpID0+IHtcbiAgICBjb25zdCBwYXlsb2FkID0ge1xuICAgICAgdGFzazogeyAuLi50aGlzLnN0YXRlIH0sXG4gICAgICB0YXNrVHlwZTogdGhpcy5wcm9wcy5jcmVhdGVUeXBlLFxuICAgIH07XG4gICAgdGhpcy5wcm9wcy5jcmVhdGVUYXNrKHBheWxvYWQpO1xuICB9O1xuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb2RhbFwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vZGFsX190aXRsZVwiPkNyZWF0ZSBOZXcgVGFzazwvZGl2PlxuICAgICAgICA8Zm9ybT5cbiAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImlucHV0XCJcbiAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiVGl0bGVcIlxuICAgICAgICAgICAgaWQ9XCJ0aXRsZS1pbnB1dFwiXG4gICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5oYW5kbGVJbnB1dENoYW5nZX1cbiAgICAgICAgICAvPlxuICAgICAgICAgIDx0ZXh0YXJlYVxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiaW5wdXRcIlxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJEZXNjcmlwdGlvbiAob3B0aW9uYWwpXCJcbiAgICAgICAgICAgIGlkPVwiZGVzY3JpcHRpb24taW5wdXRcIlxuICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuaGFuZGxlSW5wdXRDaGFuZ2V9XG4gICAgICAgICAgLz5cbiAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImlucHV0XCJcbiAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRGF0ZVwiXG4gICAgICAgICAgICBpZD1cImR1ZURhdGUtaW5wdXRcIlxuICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuaGFuZGxlSW5wdXRDaGFuZ2V9XG4gICAgICAgICAgLz5cbiAgICAgICAgPC9mb3JtPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vZGFsX19mb290ZXJcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJ1dHRvbiBidXR0b25fX2NhbmNlbFwiIG9uQ2xpY2s9e3RoaXMucHJvcHMuaGlkZU1vZGFsfT5cbiAgICAgICAgICAgIHsnICd9XG4gICAgICAgICAgICBDYW5jZWx7JyAnfVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImJ1dHRvbiBidXR0b25fX2NvbmZpcm1cIlxuICAgICAgICAgICAgb25DbGljaz17dGhpcy5oYW5kbGVDcmVhdGVDYXJkfVxuICAgICAgICAgID5cbiAgICAgICAgICAgIENyZWF0ZVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cblxuY29uc3QgdGFza1R5cGVUb0FjdGlvbk1hcCA9IHtcbiAgQmFja2xvZzogY3JlYXRlQmFja2xvZ0l0ZW0sXG4gICdJbiBQcm9ncmVzcyc6IGNyZWF0ZUluUHJvZ3Jlc3NJdGVtLFxufTtcblxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gc3RhdGUgPT4gKHtcbiAgY3JlYXRlVHlwZTogc3RhdGUuY3JlYXRlVHlwZSxcbn0pO1xuXG5jb25zdCBtYXBEaXNwYXRjaFRvUHJvcHMgPSBkaXNwYXRjaCA9PiAoe1xuICBoaWRlTW9kYWwoKSB7XG4gICAgZGlzcGF0Y2goaGlkZU1vZGFsKCkpO1xuICB9LFxuICBjcmVhdGVUYXNrKHsgdGFzaywgdGFza1R5cGUgfSkge1xuICAgIGNvbnN0IGFjdGlvbiA9IHRhc2tUeXBlVG9BY3Rpb25NYXBbdGFza1R5cGVdO1xuICAgIGRpc3BhdGNoKGFjdGlvbih0YXNrKSk7XG4gIH0sXG59KTtcblxuZXhwb3J0IGNvbnN0IE1vZGFsID0gY29ubmVjdChcbiAgbWFwU3RhdGVUb1Byb3BzLFxuICBtYXBEaXNwYXRjaFRvUHJvcHMsXG4pKE1vZGFsQ29tcG9uZW50KTtcbiJdLCJzb3VyY2VSb290IjoiIn0=