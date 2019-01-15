import { handleActions, createAction } from "redux-actions";

export const backlogCreate = createAction("BACKLOG_TASK_CREATE");
export const backlogDelete = createAction("BACKLOG_TASK_DELETE");
export const inProgressCreate = createAction("INPROGRESS_TASK_CREATE");
export const inProgressDelete = createAction("INPROGRESS_TASK_DELETE");
export const completedCreate = createAction("COMPLETED_CREATE");
export const compltedDelete = createAction("COMPLETED_DELETE");

export default handleActions({
  BACKLOG_TASK_CREATE: state => (
  ),
  BACKLOG_TASK_DELETE: state => (
  ),
});
