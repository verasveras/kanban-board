import { createStore } from 'redux';
import rootReducer from './reducers';

const initialState = {
  backlog: [],
  inProgress: [],
  completed: [],
  showModal: false,
};

export default createStore(rootReducer, initialState);
