import { createAction } from 'typesafe-actions';

export const open = createAction('drawer/OPEN')();

export const close = createAction('drawer/CLOSE')();
