import { createReducer } from 'typesafe-actions';
import * as actions from './actions';

export enum State {
  OPENED,
  CLOSED,
}

const initialState: State = State.CLOSED;

const openActionHandler = () => State.OPENED;

const closeActionHandler = () => State.CLOSED;

const reducer = createReducer(initialState as State)
  .handleAction(actions.open, openActionHandler)
  .handleAction(actions.close, closeActionHandler);

export default reducer;
