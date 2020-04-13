import { createReducer } from 'typesafe-actions';
import * as actions from './actions';

export type State = boolean;

const initialState: State = false;

const openActionHandler = () => true;

const reducer = createReducer(initialState as State).handleAction(
  actions.setPlayed,
  openActionHandler,
);

export default reducer;
