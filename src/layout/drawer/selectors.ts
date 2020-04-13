import { RootState } from 'store/root-reducer';
import { State } from './reducer';

export const getDrawerState = (state: RootState) => state.drawer === State.OPENED;

export default { getDrawerState };
