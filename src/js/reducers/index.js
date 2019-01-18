import {
  BACKLOG_CREATE,
  BACKLOG_DELETE,
  INPROGRESS_CREATE,
  INPROGRESS_DELETE,
  COMPLETED_CREATE,
  COMPLETED_DELETE,
  MODAL_SHOW,
  MODAL_HIDE,
} from '../actions/actionTypes';
import { generateUniqueId } from '../utils';

// root reducer
export default (state, action) => {
  switch (action.type) {
    case BACKLOG_CREATE:
      return {
        ...state,
        backlog: [
          ...state.backlog,
          { ...action.payload, id: generateUniqueId() },
        ],
      };
    case BACKLOG_DELETE:
      return {
        ...state,
        backlog: [
          ...state.backlog.filter(item => action.payload.id !== item.id),
        ],
      };
    case INPROGRESS_CREATE:
      return {
        ...state,
        inProgress: [
          ...state.inProgress,
          { ...action.payload, id: generateUniqueId() },
        ],
      };
    case INPROGRESS_DELETE:
      return {
        ...state,
        inProgress: [
          ...state.inProgress.filter(item => action.payload.id !== item.id),
        ],
      };
    case COMPLETED_CREATE:
      return {
        ...state,
        completed: [
          ...state.completed,
          { ...action.payload, id: generateUniqueId() },
        ],
      };
    case COMPLETED_DELETE:
      return {
        ...state,
        completed: [
          ...state.completed.filter(item => action.payload.id !== item.id),
        ],
      };
    case MODAL_SHOW:
      return {
        ...state,
        showModal: true,
        createType: action.payload,
      };
    case MODAL_HIDE:
      return {
        ...state,
        showModal: false,
        createType: null,
      };
    default:
      return state;
  }
};
