import { createStore } from 'redux';
import rootReducer from './reducers';

const initialState = {
  backlog: [],
  inProgress: [],
  completed: [],
};

export default createStore(rootReducer, initialState);
