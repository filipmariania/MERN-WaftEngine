import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the signupPage state domain
 */

const selectSignupPageDomain = state => state.get('signupPage', initialState);

/**
 * Other specific selectors
 */
export const makeSelectUsername = () => createSelector(selectSignupPageDomain, state => state.get('username'));

export const makeSelectEmail = () => createSelector(selectSignupPageDomain, state => state.get('email'));

export const makeSelectPassword = () => createSelector(selectSignupPageDomain, state => state.get('password'));

export const makeSelectConfirmPassword = () => createSelector(selectSignupPageDomain, state => state.get('confirmPassword'));

export const makeSelectGender = () => createSelector(selectSignupPageDomain, state => state.get('gender'));
/**
 * Default selector used by SignupPage
 */

export const makeSelectSignupPage = () => createSelector(selectSignupPageDomain, substate => substate.toJS());

export default makeSelectSignupPage;
export { selectSignupPageDomain };