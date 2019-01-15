import {
  BACKLOG_CREATE,
  BACKLOG_DELETE,
  INPROGRESS_CREATE,
  INPROGRESS_DELETE,
  COMPLETED_CREATE,
  COMPLETED_DELETE,
} from './actions';

// root reducer
export default (state, action) => {
  switch (action.type) {
    case BACKLOG_CREATE:
      return {
        ...state,
        backlog: [...state.backlog, action.payload],
      };
    case BACKLOG_DELETE:
      return {
        ...state,
        backlog: [
          ...state.backlog.filter(item => {
            action.payload.id !== item.id;
          }),
        ],
      };
    case INPROGRESS_CREATE:
      return {
        ...state,
        inProgress: [...state.inProgress, payload],
      };
    case INPROGRESS_DELETE:
      return {
        ...state,
        inProgress: [
          ...state.inProgress.filter(item => {
            action.payload.id !== item.id;
          }),
        ],
      };
    case COMPLETED_CREATE:
      return {
        ...state,
        completed: [...state.completed, payload],
      };
    case COMPLETED_DELETE:
        ...state,
        completed: [
          ...state.inProgress.filter(item => {
            action.payload.id !== item.id;
          }),
        ],
      };
    default:
      return state;
  }
};
