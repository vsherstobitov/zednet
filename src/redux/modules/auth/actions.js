import { createAction } from 'redux-actions';

export const signIn = createAction('SIGN_IN');

export const attachSession = createAction('ATTACH_SESSION');

export const detachSession = createAction('DETACH_SESSION');

export const signOut = createAction('SIGN_OUT');