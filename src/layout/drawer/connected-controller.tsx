import { connect } from 'react-redux';
import { RootState } from 'store/root-reducer';
import Controller from './controller';
import { State } from './reducer';
import * as actions from './actions';

export default connect(
  (state: RootState) => {
    return {
      isDrawerOpen: state.drawer === State.OPENED,
    };
  },
  {
    close: actions.close,
    open: actions.open,
  },
)(Controller);
