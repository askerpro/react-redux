import { RootState } from 'store/root-reducer';

export const isPreloaderPlayed = (state: RootState) => state.preloader;

export default { isPreloaderPlayed };
