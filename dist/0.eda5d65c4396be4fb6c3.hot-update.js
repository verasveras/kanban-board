webpackHotUpdate(0,{

/***/ 49:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _actionTypes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(46);
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

 // root reducer

/* harmony default export */ __webpack_exports__["default"] = (function (state, action) {
  switch (action.type) {
    case _actionTypes__WEBPACK_IMPORTED_MODULE_0__["BACKLOG_CREATE"]:
      return _objectSpread({}, state, {
        backlog: [].concat(_toConsumableArray(state.backlog), [action.payload])
      });

    case _actionTypes__WEBPACK_IMPORTED_MODULE_0__["BACKLOG_DELETE"]:
      return _objectSpread({}, state, {
        backlog: _toConsumableArray(state.backlog.filter(function (item) {
          action.payload.id !== item.id;
        }))
      });

    case _actionTypes__WEBPACK_IMPORTED_MODULE_0__["INPROGRESS_CREATE"]:
      return _objectSpread({}, state, {
        inProgress: [].concat(_toConsumableArray(state.inProgress), [action.payload])
      });

    case _actionTypes__WEBPACK_IMPORTED_MODULE_0__["INPROGRESS_DELETE"]:
      return _objectSpread({}, state, {
        inProgress: _toConsumableArray(state.inProgress.filter(function (item) {
          action.payload.id !== item.id;
        }))
      });

    case _actionTypes__WEBPACK_IMPORTED_MODULE_0__["COMPLETED_CREATE"]:
      return _objectSpread({}, state, {
        completed: [].concat(_toConsumableArray(state.completed), [action.payload])
      });

    case _actionTypes__WEBPACK_IMPORTED_MODULE_0__["COMPLETED_DELETE"]:
      return _objectSpread({}, state, {
        completed: _toConsumableArray(state.inProgress.filter(function (item) {
          action.payload.id !== item.id;
        }))
      });

    case _actionTypes__WEBPACK_IMPORTED_MODULE_0__["MODAL_SHOW"]:
      return _objectSpread({}, state, {
        showModal: true,
        createType: action.payload
      });

    case _actionTypes__WEBPACK_IMPORTED_MODULE_0__["MODAL_HIDE"]:
      return {
        showModal: false,
        createType: null
      };

    default:
      return state;
  }
});

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvanMvcmVkdWNlcnMvaW5kZXguanMiXSwibmFtZXMiOlsic3RhdGUiLCJhY3Rpb24iLCJ0eXBlIiwiQkFDS0xPR19DUkVBVEUiLCJiYWNrbG9nIiwicGF5bG9hZCIsIkJBQ0tMT0dfREVMRVRFIiwiZmlsdGVyIiwiaXRlbSIsImlkIiwiSU5QUk9HUkVTU19DUkVBVEUiLCJpblByb2dyZXNzIiwiSU5QUk9HUkVTU19ERUxFVEUiLCJDT01QTEVURURfQ1JFQVRFIiwiY29tcGxldGVkIiwiQ09NUExFVEVEX0RFTEVURSIsIk1PREFMX1NIT1ciLCJzaG93TW9kYWwiLCJjcmVhdGVUeXBlIiwiTU9EQUxfSElERSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Q0FXQTs7QUFDZSx5RUFBQ0EsS0FBRCxFQUFRQyxNQUFSLEVBQW1CO0FBQ2hDLFVBQVFBLE1BQU0sQ0FBQ0MsSUFBZjtBQUNFLFNBQUtDLDJEQUFMO0FBQ0UsK0JBQ0tILEtBREw7QUFFRUksZUFBTywrQkFBTUosS0FBSyxDQUFDSSxPQUFaLElBQXFCSCxNQUFNLENBQUNJLE9BQTVCO0FBRlQ7O0FBSUYsU0FBS0MsMkRBQUw7QUFDRSwrQkFDS04sS0FETDtBQUVFSSxlQUFPLHFCQUNGSixLQUFLLENBQUNJLE9BQU4sQ0FBY0csTUFBZCxDQUFxQixVQUFBQyxJQUFJLEVBQUk7QUFDOUJQLGdCQUFNLENBQUNJLE9BQVAsQ0FBZUksRUFBZixLQUFzQkQsSUFBSSxDQUFDQyxFQUEzQjtBQUNELFNBRkUsQ0FERTtBQUZUOztBQVFGLFNBQUtDLDhEQUFMO0FBQ0UsK0JBQ0tWLEtBREw7QUFFRVcsa0JBQVUsK0JBQU1YLEtBQUssQ0FBQ1csVUFBWixJQUF3QlYsTUFBTSxDQUFDSSxPQUEvQjtBQUZaOztBQUlGLFNBQUtPLDhEQUFMO0FBQ0UsK0JBQ0taLEtBREw7QUFFRVcsa0JBQVUscUJBQ0xYLEtBQUssQ0FBQ1csVUFBTixDQUFpQkosTUFBakIsQ0FBd0IsVUFBQUMsSUFBSSxFQUFJO0FBQ2pDUCxnQkFBTSxDQUFDSSxPQUFQLENBQWVJLEVBQWYsS0FBc0JELElBQUksQ0FBQ0MsRUFBM0I7QUFDRCxTQUZFLENBREs7QUFGWjs7QUFRRixTQUFLSSw2REFBTDtBQUNFLCtCQUNLYixLQURMO0FBRUVjLGlCQUFTLCtCQUFNZCxLQUFLLENBQUNjLFNBQVosSUFBdUJiLE1BQU0sQ0FBQ0ksT0FBOUI7QUFGWDs7QUFJRixTQUFLVSw2REFBTDtBQUNFLCtCQUNLZixLQURMO0FBRUVjLGlCQUFTLHFCQUNKZCxLQUFLLENBQUNXLFVBQU4sQ0FBaUJKLE1BQWpCLENBQXdCLFVBQUFDLElBQUksRUFBSTtBQUNqQ1AsZ0JBQU0sQ0FBQ0ksT0FBUCxDQUFlSSxFQUFmLEtBQXNCRCxJQUFJLENBQUNDLEVBQTNCO0FBQ0QsU0FGRSxDQURJO0FBRlg7O0FBUUYsU0FBS08sdURBQUw7QUFDRSwrQkFDS2hCLEtBREw7QUFFRWlCLGlCQUFTLEVBQUUsSUFGYjtBQUdFQyxrQkFBVSxFQUFFakIsTUFBTSxDQUFDSTtBQUhyQjs7QUFLRixTQUFLYyx1REFBTDtBQUNFLGFBQU87QUFDTEYsaUJBQVMsRUFBRSxLQUROO0FBRUxDLGtCQUFVLEVBQUU7QUFGUCxPQUFQOztBQUlGO0FBQ0UsYUFBT2xCLEtBQVA7QUF2REo7QUF5REQsQ0ExREQsRSIsImZpbGUiOiIwLmVkYTVkNjVjNDM5NmJlNGZiNmMzLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBCQUNLTE9HX0NSRUFURSxcbiAgQkFDS0xPR19ERUxFVEUsXG4gIElOUFJPR1JFU1NfQ1JFQVRFLFxuICBJTlBST0dSRVNTX0RFTEVURSxcbiAgQ09NUExFVEVEX0NSRUFURSxcbiAgQ09NUExFVEVEX0RFTEVURSxcbiAgTU9EQUxfU0hPVyxcbiAgTU9EQUxfSElERSxcbn0gZnJvbSAnLi9hY3Rpb25UeXBlcyc7XG5cbi8vIHJvb3QgcmVkdWNlclxuZXhwb3J0IGRlZmF1bHQgKHN0YXRlLCBhY3Rpb24pID0+IHtcbiAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xuICAgIGNhc2UgQkFDS0xPR19DUkVBVEU6XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgYmFja2xvZzogWy4uLnN0YXRlLmJhY2tsb2csIGFjdGlvbi5wYXlsb2FkXSxcbiAgICAgIH07XG4gICAgY2FzZSBCQUNLTE9HX0RFTEVURTpcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICBiYWNrbG9nOiBbXG4gICAgICAgICAgLi4uc3RhdGUuYmFja2xvZy5maWx0ZXIoaXRlbSA9PiB7XG4gICAgICAgICAgICBhY3Rpb24ucGF5bG9hZC5pZCAhPT0gaXRlbS5pZDtcbiAgICAgICAgICB9KSxcbiAgICAgICAgXSxcbiAgICAgIH07XG4gICAgY2FzZSBJTlBST0dSRVNTX0NSRUFURTpcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICBpblByb2dyZXNzOiBbLi4uc3RhdGUuaW5Qcm9ncmVzcywgYWN0aW9uLnBheWxvYWRdLFxuICAgICAgfTtcbiAgICBjYXNlIElOUFJPR1JFU1NfREVMRVRFOlxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIGluUHJvZ3Jlc3M6IFtcbiAgICAgICAgICAuLi5zdGF0ZS5pblByb2dyZXNzLmZpbHRlcihpdGVtID0+IHtcbiAgICAgICAgICAgIGFjdGlvbi5wYXlsb2FkLmlkICE9PSBpdGVtLmlkO1xuICAgICAgICAgIH0pLFxuICAgICAgICBdLFxuICAgICAgfTtcbiAgICBjYXNlIENPTVBMRVRFRF9DUkVBVEU6XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgY29tcGxldGVkOiBbLi4uc3RhdGUuY29tcGxldGVkLCBhY3Rpb24ucGF5bG9hZF0sXG4gICAgICB9O1xuICAgIGNhc2UgQ09NUExFVEVEX0RFTEVURTpcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICBjb21wbGV0ZWQ6IFtcbiAgICAgICAgICAuLi5zdGF0ZS5pblByb2dyZXNzLmZpbHRlcihpdGVtID0+IHtcbiAgICAgICAgICAgIGFjdGlvbi5wYXlsb2FkLmlkICE9PSBpdGVtLmlkO1xuICAgICAgICAgIH0pLFxuICAgICAgICBdLFxuICAgICAgfTtcbiAgICBjYXNlIE1PREFMX1NIT1c6XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgc2hvd01vZGFsOiB0cnVlLFxuICAgICAgICBjcmVhdGVUeXBlOiBhY3Rpb24ucGF5bG9hZCxcbiAgICAgIH07XG4gICAgY2FzZSBNT0RBTF9ISURFOlxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgc2hvd01vZGFsOiBmYWxzZSxcbiAgICAgICAgY3JlYXRlVHlwZTogbnVsbCxcbiAgICAgIH07XG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiBzdGF0ZTtcbiAgfVxufTtcbiJdLCJzb3VyY2VSb290IjoiIn0=