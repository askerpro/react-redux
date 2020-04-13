import { createAction } from 'typesafe-actions';
import { NavSection } from './models';

export const add = createAction('nav-section/ADD', (title: string) => ({ title, isActive: false }))<
  NavSection
>();

export const clear = createAction('nav-section/CLEAR')();

export const setActive = createAction('nav-section/SWITCH_STATE', (title: string) => ({
  title,
}))();
