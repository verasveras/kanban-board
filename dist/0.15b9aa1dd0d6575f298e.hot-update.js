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
        inProgress: [].concat(_toConsumableArray(state.inProgress), [payload])
      });

    case _actionTypes__WEBPACK_IMPORTED_MODULE_0__["INPROGRESS_DELETE"]:
      return _objectSpread({}, state, {
        inProgress: _toConsumableArray(state.inProgress.filter(function (item) {
          action.payload.id !== item.id;
        }))
      });

    case _actionTypes__WEBPACK_IMPORTED_MODULE_0__["COMPLETED_CREATE"]:
      return _objectSpread({}, state, {
        completed: [].concat(_toConsumableArray(state.completed), [payload])
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvanMvcmVkdWNlcnMvaW5kZXguanMiXSwibmFtZXMiOlsic3RhdGUiLCJhY3Rpb24iLCJ0eXBlIiwiQkFDS0xPR19DUkVBVEUiLCJiYWNrbG9nIiwicGF5bG9hZCIsIkJBQ0tMT0dfREVMRVRFIiwiZmlsdGVyIiwiaXRlbSIsImlkIiwiSU5QUk9HUkVTU19DUkVBVEUiLCJpblByb2dyZXNzIiwiSU5QUk9HUkVTU19ERUxFVEUiLCJDT01QTEVURURfQ1JFQVRFIiwiY29tcGxldGVkIiwiQ09NUExFVEVEX0RFTEVURSIsIk1PREFMX1NIT1ciLCJzaG93TW9kYWwiLCJjcmVhdGVUeXBlIiwiTU9EQUxfSElERSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Q0FXQTs7QUFDZSx5RUFBQ0EsS0FBRCxFQUFRQyxNQUFSLEVBQW1CO0FBQ2hDLFVBQVFBLE1BQU0sQ0FBQ0MsSUFBZjtBQUNFLFNBQUtDLDJEQUFMO0FBQ0UsK0JBQ0tILEtBREw7QUFFRUksZUFBTywrQkFBTUosS0FBSyxDQUFDSSxPQUFaLElBQXFCSCxNQUFNLENBQUNJLE9BQTVCO0FBRlQ7O0FBSUYsU0FBS0MsMkRBQUw7QUFDRSwrQkFDS04sS0FETDtBQUVFSSxlQUFPLHFCQUNGSixLQUFLLENBQUNJLE9BQU4sQ0FBY0csTUFBZCxDQUFxQixVQUFBQyxJQUFJLEVBQUk7QUFDOUJQLGdCQUFNLENBQUNJLE9BQVAsQ0FBZUksRUFBZixLQUFzQkQsSUFBSSxDQUFDQyxFQUEzQjtBQUNELFNBRkUsQ0FERTtBQUZUOztBQVFGLFNBQUtDLDhEQUFMO0FBQ0UsK0JBQ0tWLEtBREw7QUFFRVcsa0JBQVUsK0JBQU1YLEtBQUssQ0FBQ1csVUFBWixJQUF3Qk4sT0FBeEI7QUFGWjs7QUFJRixTQUFLTyw4REFBTDtBQUNFLCtCQUNLWixLQURMO0FBRUVXLGtCQUFVLHFCQUNMWCxLQUFLLENBQUNXLFVBQU4sQ0FBaUJKLE1BQWpCLENBQXdCLFVBQUFDLElBQUksRUFBSTtBQUNqQ1AsZ0JBQU0sQ0FBQ0ksT0FBUCxDQUFlSSxFQUFmLEtBQXNCRCxJQUFJLENBQUNDLEVBQTNCO0FBQ0QsU0FGRSxDQURLO0FBRlo7O0FBUUYsU0FBS0ksNkRBQUw7QUFDRSwrQkFDS2IsS0FETDtBQUVFYyxpQkFBUywrQkFBTWQsS0FBSyxDQUFDYyxTQUFaLElBQXVCVCxPQUF2QjtBQUZYOztBQUlGLFNBQUtVLDZEQUFMO0FBQ0UsK0JBQ0tmLEtBREw7QUFFRWMsaUJBQVMscUJBQ0pkLEtBQUssQ0FBQ1csVUFBTixDQUFpQkosTUFBakIsQ0FBd0IsVUFBQUMsSUFBSSxFQUFJO0FBQ2pDUCxnQkFBTSxDQUFDSSxPQUFQLENBQWVJLEVBQWYsS0FBc0JELElBQUksQ0FBQ0MsRUFBM0I7QUFDRCxTQUZFLENBREk7QUFGWDs7QUFRRixTQUFLTyx1REFBTDtBQUNFLCtCQUNLaEIsS0FETDtBQUVFaUIsaUJBQVMsRUFBRSxJQUZiO0FBR0VDLGtCQUFVLEVBQUVqQixNQUFNLENBQUNJO0FBSHJCOztBQUtGLFNBQUtjLHVEQUFMO0FBQ0UsYUFBTztBQUNMRixpQkFBUyxFQUFFLEtBRE47QUFFTEMsa0JBQVUsRUFBRTtBQUZQLE9BQVA7O0FBSUY7QUFDRSxhQUFPbEIsS0FBUDtBQXZESjtBQXlERCxDQTFERCxFIiwiZmlsZSI6IjAuMTViOWFhMWRkMGQ2NTc1ZjI5OGUuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIEJBQ0tMT0dfQ1JFQVRFLFxuICBCQUNLTE9HX0RFTEVURSxcbiAgSU5QUk9HUkVTU19DUkVBVEUsXG4gIElOUFJPR1JFU1NfREVMRVRFLFxuICBDT01QTEVURURfQ1JFQVRFLFxuICBDT01QTEVURURfREVMRVRFLFxuICBNT0RBTF9TSE9XLFxuICBNT0RBTF9ISURFLFxufSBmcm9tICcuL2FjdGlvblR5cGVzJztcblxuLy8gcm9vdCByZWR1Y2VyXG5leHBvcnQgZGVmYXVsdCAoc3RhdGUsIGFjdGlvbikgPT4ge1xuICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG4gICAgY2FzZSBCQUNLTE9HX0NSRUFURTpcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICBiYWNrbG9nOiBbLi4uc3RhdGUuYmFja2xvZywgYWN0aW9uLnBheWxvYWRdLFxuICAgICAgfTtcbiAgICBjYXNlIEJBQ0tMT0dfREVMRVRFOlxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIGJhY2tsb2c6IFtcbiAgICAgICAgICAuLi5zdGF0ZS5iYWNrbG9nLmZpbHRlcihpdGVtID0+IHtcbiAgICAgICAgICAgIGFjdGlvbi5wYXlsb2FkLmlkICE9PSBpdGVtLmlkO1xuICAgICAgICAgIH0pLFxuICAgICAgICBdLFxuICAgICAgfTtcbiAgICBjYXNlIElOUFJPR1JFU1NfQ1JFQVRFOlxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIGluUHJvZ3Jlc3M6IFsuLi5zdGF0ZS5pblByb2dyZXNzLCBwYXlsb2FkXSxcbiAgICAgIH07XG4gICAgY2FzZSBJTlBST0dSRVNTX0RFTEVURTpcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICBpblByb2dyZXNzOiBbXG4gICAgICAgICAgLi4uc3RhdGUuaW5Qcm9ncmVzcy5maWx0ZXIoaXRlbSA9PiB7XG4gICAgICAgICAgICBhY3Rpb24ucGF5bG9hZC5pZCAhPT0gaXRlbS5pZDtcbiAgICAgICAgICB9KSxcbiAgICAgICAgXSxcbiAgICAgIH07XG4gICAgY2FzZSBDT01QTEVURURfQ1JFQVRFOlxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIGNvbXBsZXRlZDogWy4uLnN0YXRlLmNvbXBsZXRlZCwgcGF5bG9hZF0sXG4gICAgICB9O1xuICAgIGNhc2UgQ09NUExFVEVEX0RFTEVURTpcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICBjb21wbGV0ZWQ6IFtcbiAgICAgICAgICAuLi5zdGF0ZS5pblByb2dyZXNzLmZpbHRlcihpdGVtID0+IHtcbiAgICAgICAgICAgIGFjdGlvbi5wYXlsb2FkLmlkICE9PSBpdGVtLmlkO1xuICAgICAgICAgIH0pLFxuICAgICAgICBdLFxuICAgICAgfTtcbiAgICBjYXNlIE1PREFMX1NIT1c6XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgc2hvd01vZGFsOiB0cnVlLFxuICAgICAgICBjcmVhdGVUeXBlOiBhY3Rpb24ucGF5bG9hZCxcbiAgICAgIH07XG4gICAgY2FzZSBNT0RBTF9ISURFOlxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgc2hvd01vZGFsOiBmYWxzZSxcbiAgICAgICAgY3JlYXRlVHlwZTogbnVsbCxcbiAgICAgIH07XG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiBzdGF0ZTtcbiAgfVxufTtcbiJdLCJzb3VyY2VSb290IjoiIn0=