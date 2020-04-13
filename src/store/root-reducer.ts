import { combineReducers } from 'redux';
import drawerReducer from 'layout/drawer/reducer';
import contentNavReducer from 'layout/table-of-contents/reducer';
import preloaderReducer from 'layout/preloader/reducer';

const rootReducer = combineReducers({
  drawer: drawerReducer,
  contentNav: contentNavReducer,
  preloader: preloaderReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
