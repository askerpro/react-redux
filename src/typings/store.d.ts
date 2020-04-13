import { StateType, ActionType } from 'typesafe-actions';
import rootAction from 'store/root-action';
import rootReducer from 'store/root-reducer';
import store from 'store';

declare module 'typesafe-actions' {
  export type Store = StateType<typeof store>;

  export type RootState = StateType<typeof rootReducer>;

  export type RootAction = ActionType<typeof rootAction>;
  export interface Types {
    RootAction: RootAction;
  }
}
