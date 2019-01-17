webpackHotUpdate(0,{

/***/ 42:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_column__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(43);
/* harmony import */ var _components_modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(44);
/* harmony import */ var _components_modal__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_components_modal__WEBPACK_IMPORTED_MODULE_2__);
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
/***/ (function(module, exports) {

throw new Error("Module build failed (from ./node_modules/babel-loader/lib/index.js):\nSyntaxError: /Users/lisa/Desktop/code-challenge/kanban-board/src/js/components/modal/index.js: Unexpected token (35:27)\n\n\u001b[0m \u001b[90m 33 | \u001b[39m\u001b[0m\n\u001b[0m \u001b[90m 34 | \u001b[39m  handleCreateCard \u001b[33m=\u001b[39m () \u001b[33m=>\u001b[39m {\u001b[0m\n\u001b[0m\u001b[31m\u001b[1m>\u001b[22m\u001b[39m\u001b[90m 35 | \u001b[39m    \u001b[36mthis\u001b[39m\u001b[33m.\u001b[39mprops\u001b[33m.\u001b[39mcreateTask({{ \u001b[33m...\u001b[39m\u001b[36mthis\u001b[39m\u001b[33m.\u001b[39mstate }\u001b[33m,\u001b[39m \u001b[36mthis\u001b[39m\u001b[33m.\u001b[39mprops\u001b[33m.\u001b[39mcreateType})\u001b[33m;\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m    | \u001b[39m                           \u001b[31m\u001b[1m^\u001b[22m\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m 36 | \u001b[39m  }\u001b[33m;\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m 37 | \u001b[39m\u001b[0m\n\u001b[0m \u001b[90m 38 | \u001b[39m  render() {\u001b[0m\n    at _class.raise (/Users/lisa/Desktop/code-challenge/kanban-board/node_modules/@babel/parser/lib/index.js:4051:15)\n    at _class.unexpected (/Users/lisa/Desktop/code-challenge/kanban-board/node_modules/@babel/parser/lib/index.js:5382:16)\n    at _class.parseIdentifierName (/Users/lisa/Desktop/code-challenge/kanban-board/node_modules/@babel/parser/lib/index.js:7260:18)\n    at _class.parseIdentifier (/Users/lisa/Desktop/code-challenge/kanban-board/node_modules/@babel/parser/lib/index.js:7234:21)\n    at _class.parseMaybePrivateName (/Users/lisa/Desktop/code-challenge/kanban-board/node_modules/@babel/parser/lib/index.js:6572:19)\n    at _class.parsePropertyName (/Users/lisa/Desktop/code-challenge/kanban-board/node_modules/@babel/parser/lib/index.js:7046:98)\n    at _class.parseObj (/Users/lisa/Desktop/code-challenge/kanban-board/node_modules/@babel/parser/lib/index.js:6941:14)\n    at _class.parseExprAtom (/Users/lisa/Desktop/code-challenge/kanban-board/node_modules/@babel/parser/lib/index.js:6487:21)\n    at _class.parseExprAtom (/Users/lisa/Desktop/code-challenge/kanban-board/node_modules/@babel/parser/lib/index.js:3747:52)\n    at _class.parseExprSubscripts (/Users/lisa/Desktop/code-challenge/kanban-board/node_modules/@babel/parser/lib/index.js:6104:21)\n    at _class.parseMaybeUnary (/Users/lisa/Desktop/code-challenge/kanban-board/node_modules/@babel/parser/lib/index.js:6083:21)\n    at _class.parseExprOps (/Users/lisa/Desktop/code-challenge/kanban-board/node_modules/@babel/parser/lib/index.js:5968:21)\n    at _class.parseMaybeConditional (/Users/lisa/Desktop/code-challenge/kanban-board/node_modules/@babel/parser/lib/index.js:5940:21)\n    at _class.parseMaybeAssign (/Users/lisa/Desktop/code-challenge/kanban-board/node_modules/@babel/parser/lib/index.js:5887:21)\n    at _class.parseExprListItem (/Users/lisa/Desktop/code-challenge/kanban-board/node_modules/@babel/parser/lib/index.js:7226:18)\n    at _class.parseCallExpressionArguments (/Users/lisa/Desktop/code-challenge/kanban-board/node_modules/@babel/parser/lib/index.js:6312:22)\n    at _class.parseSubscript (/Users/lisa/Desktop/code-challenge/kanban-board/node_modules/@babel/parser/lib/index.js:6214:32)\n    at _class.parseSubscripts (/Users/lisa/Desktop/code-challenge/kanban-board/node_modules/@babel/parser/lib/index.js:6124:19)\n    at _class.parseExprSubscripts (/Users/lisa/Desktop/code-challenge/kanban-board/node_modules/@babel/parser/lib/index.js:6114:17)\n    at _class.parseMaybeUnary (/Users/lisa/Desktop/code-challenge/kanban-board/node_modules/@babel/parser/lib/index.js:6083:21)\n    at _class.parseExprOps (/Users/lisa/Desktop/code-challenge/kanban-board/node_modules/@babel/parser/lib/index.js:5968:21)\n    at _class.parseMaybeConditional (/Users/lisa/Desktop/code-challenge/kanban-board/node_modules/@babel/parser/lib/index.js:5940:21)\n    at _class.parseMaybeAssign (/Users/lisa/Desktop/code-challenge/kanban-board/node_modules/@babel/parser/lib/index.js:5887:21)\n    at _class.parseExpression (/Users/lisa/Desktop/code-challenge/kanban-board/node_modules/@babel/parser/lib/index.js:5840:21)\n    at _class.parseStatementContent (/Users/lisa/Desktop/code-challenge/kanban-board/node_modules/@babel/parser/lib/index.js:7619:21)\n    at _class.parseStatement (/Users/lisa/Desktop/code-challenge/kanban-board/node_modules/@babel/parser/lib/index.js:7505:17)\n    at _class.parseBlockOrModuleBlockBody (/Users/lisa/Desktop/code-challenge/kanban-board/node_modules/@babel/parser/lib/index.js:8073:23)\n    at _class.parseBlockBody (/Users/lisa/Desktop/code-challenge/kanban-board/node_modules/@babel/parser/lib/index.js:8060:10)\n    at _class.parseBlock (/Users/lisa/Desktop/code-challenge/kanban-board/node_modules/@babel/parser/lib/index.js:8049:10)\n    at _class.parseFunctionBody (/Users/lisa/Desktop/code-challenge/kanban-board/node_modules/@babel/parser/lib/index.js:7157:24)");

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvanMvYXBwLmpzIl0sIm5hbWVzIjpbIkFwcCIsInByb3BzIiwic2hvd01vZGFsIiwiYmFja2xvZ1Rhc2tzIiwiaW5Qcm9ncmVzcyIsImNvbXBsZXRlZFRhc2tzIiwibW9kYWxWaXNpYmlsZSIsIlJlYWN0IiwiQ29tcG9uZW50IiwibWFwU3RhdGVUb1Byb3BzIiwic3RhdGUiLCJiYWNrbG9nIiwiaW5Qcm9ncmVzc1Rhc2tzIiwiY29tcGxldGVkIiwibWFwRGlzcGF0Y2hUb1Byb3BzIiwiZGlzcGF0Y2giLCJwYXlsb2FkIiwiY29ubmVjdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztJQUVNQSxHOzs7Ozs7Ozs7Ozs7OzZCQUNLO0FBQ1AsYUFDRTtBQUFLLGlCQUFTLEVBQUM7QUFBZixTQUNFLDJEQUFDLDBEQUFEO0FBQ0UsWUFBSSxFQUFDLFNBRFA7QUFFRSw2QkFBcUIsRUFBRSxLQUFLQyxLQUFMLENBQVdDLFNBRnBDO0FBR0Usd0JBQWdCLE1BSGxCO0FBSUUsYUFBSyxFQUFFLEtBQUtELEtBQUwsQ0FBV0U7QUFKcEIsUUFERixFQU9FLDJEQUFDLDBEQUFEO0FBQ0UsWUFBSSxFQUFDLGFBRFA7QUFFRSw2QkFBcUIsRUFBRSxLQUFLRixLQUFMLENBQVdDLFNBRnBDO0FBR0Usd0JBQWdCLE1BSGxCO0FBSUUsYUFBSyxFQUFFLEtBQUtELEtBQUwsQ0FBV0c7QUFKcEIsUUFQRixFQWFFLDJEQUFDLDBEQUFEO0FBQ0UsWUFBSSxFQUFDLFdBRFA7QUFFRSw2QkFBcUIsRUFBRSxLQUFLSCxLQUFMLENBQVdDLFNBRnBDO0FBR0UsYUFBSyxFQUFFLEtBQUtELEtBQUwsQ0FBV0k7QUFIcEIsUUFiRixFQWtCRyxLQUFLSixLQUFMLENBQVdLLGFBQVgsSUFDQywyREFBQyxnRUFBRCxRQUNFLDJEQUFDLHVEQUFELE9BREYsQ0FuQkosQ0FERjtBQTBCRDs7OztFQTVCZUMsNENBQUssQ0FBQ0MsUzs7QUErQnhCLElBQU1DLGVBQWUsR0FBRyxTQUFsQkEsZUFBa0IsQ0FBQUMsS0FBSztBQUFBLFNBQUs7QUFDaENKLGlCQUFhLEVBQUVJLEtBQUssQ0FBQ1IsU0FEVztBQUVoQ0MsZ0JBQVksRUFBRU8sS0FBSyxDQUFDQyxPQUZZO0FBR2hDQyxtQkFBZSxFQUFFRixLQUFLLENBQUNOLFVBSFM7QUFJaENDLGtCQUFjLEVBQUVLLEtBQUssQ0FBQ0c7QUFKVSxHQUFMO0FBQUEsQ0FBN0I7O0FBT0EsSUFBTUMsa0JBQWtCLEdBQUcsU0FBckJBLGtCQUFxQixDQUFBQyxRQUFRO0FBQUEsU0FBSztBQUN0Q2IsYUFEc0MscUJBQzVCYyxPQUQ0QixFQUNuQjtBQUNqQkQsY0FBUSxDQUFDYixtRUFBUyxDQUFDYyxPQUFELENBQVYsQ0FBUjtBQUNEO0FBSHFDLEdBQUw7QUFBQSxDQUFuQzs7QUFNZUMsMEhBQU8sQ0FDcEJSLGVBRG9CLEVBRXBCSyxrQkFGb0IsQ0FBUCxDQUdiZCxHQUhhLENBQWYsRSIsImZpbGUiOiIwLmQ5NTYxMjhhOTA3NTMzZDI5MzRjLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IENvbHVtbiBmcm9tICcuL2NvbXBvbmVudHMvY29sdW1uJztcbmltcG9ydCB7IE1vZGFsQ29udGFpbmVyLCBNb2RhbCB9IGZyb20gJy4vY29tcG9uZW50cy9tb2RhbCc7XG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuaW1wb3J0IHsgc2hvd01vZGFsIH0gZnJvbSAnLi9yZWR1Y2Vycy9hY3Rpb25zJztcblxuY2xhc3MgQXBwIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImFwcC1jb250YWluZXJcIj5cbiAgICAgICAgPENvbHVtblxuICAgICAgICAgIG5hbWU9XCJCYWNrbG9nXCJcbiAgICAgICAgICBoYW5kbGVDcmVhdGVUYXNrQ2xpY2s9e3RoaXMucHJvcHMuc2hvd01vZGFsfVxuICAgICAgICAgIHNob3dDcmVhdGVCdXR0b25cbiAgICAgICAgICB0YXNrcz17dGhpcy5wcm9wcy5iYWNrbG9nVGFza3N9XG4gICAgICAgIC8+XG4gICAgICAgIDxDb2x1bW5cbiAgICAgICAgICBuYW1lPVwiSW4gUHJvZ3Jlc3NcIlxuICAgICAgICAgIGhhbmRsZUNyZWF0ZVRhc2tDbGljaz17dGhpcy5wcm9wcy5zaG93TW9kYWx9XG4gICAgICAgICAgc2hvd0NyZWF0ZUJ1dHRvblxuICAgICAgICAgIHRhc2tzPXt0aGlzLnByb3BzLmluUHJvZ3Jlc3N9XG4gICAgICAgIC8+XG4gICAgICAgIDxDb2x1bW5cbiAgICAgICAgICBuYW1lPVwiQ29tcGxldGVkXCJcbiAgICAgICAgICBoYW5kbGVDcmVhdGVUYXNrQ2xpY2s9e3RoaXMucHJvcHMuc2hvd01vZGFsfVxuICAgICAgICAgIHRhc2tzPXt0aGlzLnByb3BzLmNvbXBsZXRlZFRhc2tzfVxuICAgICAgICAvPlxuICAgICAgICB7dGhpcy5wcm9wcy5tb2RhbFZpc2liaWxlICYmIChcbiAgICAgICAgICA8TW9kYWxDb250YWluZXI+XG4gICAgICAgICAgICA8TW9kYWwgLz5cbiAgICAgICAgICA8L01vZGFsQ29udGFpbmVyPlxuICAgICAgICApfVxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSBzdGF0ZSA9PiAoe1xuICBtb2RhbFZpc2liaWxlOiBzdGF0ZS5zaG93TW9kYWwsXG4gIGJhY2tsb2dUYXNrczogc3RhdGUuYmFja2xvZyxcbiAgaW5Qcm9ncmVzc1Rhc2tzOiBzdGF0ZS5pblByb2dyZXNzLFxuICBjb21wbGV0ZWRUYXNrczogc3RhdGUuY29tcGxldGVkLFxufSk7XG5cbmNvbnN0IG1hcERpc3BhdGNoVG9Qcm9wcyA9IGRpc3BhdGNoID0+ICh7XG4gIHNob3dNb2RhbChwYXlsb2FkKSB7XG4gICAgZGlzcGF0Y2goc2hvd01vZGFsKHBheWxvYWQpKTtcbiAgfSxcbn0pO1xuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KFxuICBtYXBTdGF0ZVRvUHJvcHMsXG4gIG1hcERpc3BhdGNoVG9Qcm9wcyxcbikoQXBwKTtcbiJdLCJzb3VyY2VSb290IjoiIn0=