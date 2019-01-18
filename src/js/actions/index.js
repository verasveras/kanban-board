import { dispatch } from 'redux';
import {
  BACKLOG_CREATE,
  BACKLOG_DELETE,
  INPROGRESS_CREATE,
  INPROGRESS_DELETE,
  COMPLETED_CREATE,
  COMPLETED_DELETE,
  MODAL_CREATE_SHOW,
  MODAL_EDIT_SHOW,
  MODAL_HIDE,
  CREATE_TYPE_SET,
  CREATE_TYPE_CLEAR,
} from './actionTypes';

export const createBacklogItem = payload => ({
  type: BACKLOG_CREATE,
  payload,
});

export const deleteBacklogItem = payload => ({
  type: BACKLOG_DELETE,
  payload,
});

export const createInProgressItem = payload => ({
  type: INPROGRESS_CREATE,
  payload,
});

export const deleteInProgressItem = payload => ({
  type: INPROGRESS_DELETE,
  payload,
});

export const createCompletedItem = payload => ({
  type: COMPLETED_CREATE,
  payload,
});

export const deleteCompletedItem = payload => ({
  type: COMPLETED_DELETE,
  payload,
});

export const showModalCreateMode = payload => ({
  type: MODAL_CREATE_SHOW,
  payload,
});

export const showModalEditMode = payload => ({
  type: MODAL_EDIT_SHOW,
  payload,
});

export const hideModal = () => ({
  type: MODAL_HIDE,
});
