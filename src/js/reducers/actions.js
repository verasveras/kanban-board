import { dispatch } from 'redux';
import {
  BACKLOG_CREATE,
  BACKLOG_DELETE,
  INPROGRESS_CREATE,
  INPROGRESS_DELETE,
  COMPLETED_CREATE,
  COMPLETED_DELETE,
} from './actionTypes';

export const createBacklogItem = payload => ({
  type: BACKLOG_CREATE,
  payload,
});

export const deleteItemDelete = payload => ({
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
