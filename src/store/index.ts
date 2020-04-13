import { createStore } from 'redux';

import rootReducer from './root-reducer';

// rehydrate state on app start
const initialState = {};

// create store
const store = createStore(rootReducer, initialState);

export type Dispatch = typeof store.dispatch;

export type Store = typeof store;

// export store singleton instance
export default () => store;
