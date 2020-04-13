import { connect } from 'react-redux';
import { RootState } from 'store/root-reducer';
import routes from 'nav-routes';
import Drawer from './drawer';
import { State } from './reducer';
import * as actions from './actions';

export default connect(
  (state: RootState) => {
    return {
      isDrawerOpen: state.drawer === State.OPENED,
      routes,
    };
  },
  {
    close: actions.close,
    open: actions.open,
  },
)(Drawer);
