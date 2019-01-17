webpackHotUpdate(0,{

/***/ 42:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_column__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(43);
/* harmony import */ var _components_modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(45);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(13);
/* harmony import */ var _reducers_actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(46);
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
        tasks: this.props.inProgressTasks
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

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvanMvYXBwLmpzIl0sIm5hbWVzIjpbIkFwcCIsInByb3BzIiwic2hvd01vZGFsIiwiYmFja2xvZ1Rhc2tzIiwiaW5Qcm9ncmVzc1Rhc2tzIiwiY29tcGxldGVkVGFza3MiLCJtb2RhbFZpc2liaWxlIiwiUmVhY3QiLCJDb21wb25lbnQiLCJtYXBTdGF0ZVRvUHJvcHMiLCJzdGF0ZSIsImJhY2tsb2ciLCJpblByb2dyZXNzIiwiY29tcGxldGVkIiwibWFwRGlzcGF0Y2hUb1Byb3BzIiwiZGlzcGF0Y2giLCJwYXlsb2FkIiwiY29ubmVjdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0lBRU1BLEc7Ozs7Ozs7Ozs7Ozs7NkJBQ0s7QUFDUCxhQUNFO0FBQUssaUJBQVMsRUFBQztBQUFmLFNBQ0UsMkRBQUMsMERBQUQ7QUFDRSxZQUFJLEVBQUMsU0FEUDtBQUVFLDZCQUFxQixFQUFFLEtBQUtDLEtBQUwsQ0FBV0MsU0FGcEM7QUFHRSx3QkFBZ0IsTUFIbEI7QUFJRSxhQUFLLEVBQUUsS0FBS0QsS0FBTCxDQUFXRTtBQUpwQixRQURGLEVBT0UsMkRBQUMsMERBQUQ7QUFDRSxZQUFJLEVBQUMsYUFEUDtBQUVFLDZCQUFxQixFQUFFLEtBQUtGLEtBQUwsQ0FBV0MsU0FGcEM7QUFHRSx3QkFBZ0IsTUFIbEI7QUFJRSxhQUFLLEVBQUUsS0FBS0QsS0FBTCxDQUFXRztBQUpwQixRQVBGLEVBYUUsMkRBQUMsMERBQUQ7QUFDRSxZQUFJLEVBQUMsV0FEUDtBQUVFLDZCQUFxQixFQUFFLEtBQUtILEtBQUwsQ0FBV0MsU0FGcEM7QUFHRSxhQUFLLEVBQUUsS0FBS0QsS0FBTCxDQUFXSTtBQUhwQixRQWJGLEVBa0JHLEtBQUtKLEtBQUwsQ0FBV0ssYUFBWCxJQUNDLDJEQUFDLGdFQUFELFFBQ0UsMkRBQUMsdURBQUQsT0FERixDQW5CSixDQURGO0FBMEJEOzs7O0VBNUJlQyw0Q0FBSyxDQUFDQyxTOztBQStCeEIsSUFBTUMsZUFBZSxHQUFHLFNBQWxCQSxlQUFrQixDQUFBQyxLQUFLO0FBQUEsU0FBSztBQUNoQ0osaUJBQWEsRUFBRUksS0FBSyxDQUFDUixTQURXO0FBRWhDQyxnQkFBWSxFQUFFTyxLQUFLLENBQUNDLE9BRlk7QUFHaENQLG1CQUFlLEVBQUVNLEtBQUssQ0FBQ0UsVUFIUztBQUloQ1Asa0JBQWMsRUFBRUssS0FBSyxDQUFDRztBQUpVLEdBQUw7QUFBQSxDQUE3Qjs7QUFPQSxJQUFNQyxrQkFBa0IsR0FBRyxTQUFyQkEsa0JBQXFCLENBQUFDLFFBQVE7QUFBQSxTQUFLO0FBQ3RDYixhQURzQyxxQkFDNUJjLE9BRDRCLEVBQ25CO0FBQ2pCRCxjQUFRLENBQUNiLG1FQUFTLENBQUNjLE9BQUQsQ0FBVixDQUFSO0FBQ0Q7QUFIcUMsR0FBTDtBQUFBLENBQW5DOztBQU1lQywwSEFBTyxDQUNwQlIsZUFEb0IsRUFFcEJLLGtCQUZvQixDQUFQLENBR2JkLEdBSGEsQ0FBZixFIiwiZmlsZSI6IjAuOGY2MWMwODVjODgxNDExNDAzZWQuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgQ29sdW1uIGZyb20gJy4vY29tcG9uZW50cy9jb2x1bW4nO1xuaW1wb3J0IHsgTW9kYWxDb250YWluZXIsIE1vZGFsIH0gZnJvbSAnLi9jb21wb25lbnRzL21vZGFsJztcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5pbXBvcnQgeyBzaG93TW9kYWwgfSBmcm9tICcuL3JlZHVjZXJzL2FjdGlvbnMnO1xuXG5jbGFzcyBBcHAgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYXBwLWNvbnRhaW5lclwiPlxuICAgICAgICA8Q29sdW1uXG4gICAgICAgICAgbmFtZT1cIkJhY2tsb2dcIlxuICAgICAgICAgIGhhbmRsZUNyZWF0ZVRhc2tDbGljaz17dGhpcy5wcm9wcy5zaG93TW9kYWx9XG4gICAgICAgICAgc2hvd0NyZWF0ZUJ1dHRvblxuICAgICAgICAgIHRhc2tzPXt0aGlzLnByb3BzLmJhY2tsb2dUYXNrc31cbiAgICAgICAgLz5cbiAgICAgICAgPENvbHVtblxuICAgICAgICAgIG5hbWU9XCJJbiBQcm9ncmVzc1wiXG4gICAgICAgICAgaGFuZGxlQ3JlYXRlVGFza0NsaWNrPXt0aGlzLnByb3BzLnNob3dNb2RhbH1cbiAgICAgICAgICBzaG93Q3JlYXRlQnV0dG9uXG4gICAgICAgICAgdGFza3M9e3RoaXMucHJvcHMuaW5Qcm9ncmVzc1Rhc2tzfVxuICAgICAgICAvPlxuICAgICAgICA8Q29sdW1uXG4gICAgICAgICAgbmFtZT1cIkNvbXBsZXRlZFwiXG4gICAgICAgICAgaGFuZGxlQ3JlYXRlVGFza0NsaWNrPXt0aGlzLnByb3BzLnNob3dNb2RhbH1cbiAgICAgICAgICB0YXNrcz17dGhpcy5wcm9wcy5jb21wbGV0ZWRUYXNrc31cbiAgICAgICAgLz5cbiAgICAgICAge3RoaXMucHJvcHMubW9kYWxWaXNpYmlsZSAmJiAoXG4gICAgICAgICAgPE1vZGFsQ29udGFpbmVyPlxuICAgICAgICAgICAgPE1vZGFsIC8+XG4gICAgICAgICAgPC9Nb2RhbENvbnRhaW5lcj5cbiAgICAgICAgKX1cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cblxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gc3RhdGUgPT4gKHtcbiAgbW9kYWxWaXNpYmlsZTogc3RhdGUuc2hvd01vZGFsLFxuICBiYWNrbG9nVGFza3M6IHN0YXRlLmJhY2tsb2csXG4gIGluUHJvZ3Jlc3NUYXNrczogc3RhdGUuaW5Qcm9ncmVzcyxcbiAgY29tcGxldGVkVGFza3M6IHN0YXRlLmNvbXBsZXRlZCxcbn0pO1xuXG5jb25zdCBtYXBEaXNwYXRjaFRvUHJvcHMgPSBkaXNwYXRjaCA9PiAoe1xuICBzaG93TW9kYWwocGF5bG9hZCkge1xuICAgIGRpc3BhdGNoKHNob3dNb2RhbChwYXlsb2FkKSk7XG4gIH0sXG59KTtcblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChcbiAgbWFwU3RhdGVUb1Byb3BzLFxuICBtYXBEaXNwYXRjaFRvUHJvcHMsXG4pKEFwcCk7XG4iXSwic291cmNlUm9vdCI6IiJ9