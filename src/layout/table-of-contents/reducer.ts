import { createReducer } from 'typesafe-actions';
import * as actions from './actions';
import { NavState } from './models';

const initialState: NavState = {
  sections: [],
  active: '',
};

const reducer = createReducer(initialState)
  .handleAction(actions.add, (state, action) => {
    return { sections: [...state.sections, action.payload], active: state.active };
  })
  .handleAction(actions.setActive, (state, action) => {
    return { ...state, active: action.payload.title };
  })
  .handleAction(actions.clear, (state) => ({ ...state, sections: [] }));

export default reducer;
