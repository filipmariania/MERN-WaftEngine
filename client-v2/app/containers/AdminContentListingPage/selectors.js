import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the contentsListingPage state domain
 */

export const selectContentsListingPageDomain = state =>
  state.contentsListingPage || initialState;

/**
 * Other specific selectors
 */

export const makeSelectAll = () =>
  createSelector(
    selectContentsListingPageDomain,
    substate => substate.all,
  );

export const makeSelectOne = () =>
  createSelector(
    selectContentsListingPageDomain,
    substate => substate.one,
  );

export const makeSelectQuery = () =>
  createSelector(
    selectContentsListingPageDomain,
    substate => substate.query,
  );

/**
 * Default selector used by ContentsListingPage
 */

const makeSelectContentsListingPage = () =>
  createSelector(
    selectContentsListingPageDomain,
    substate => substate,
  );

export default makeSelectContentsListingPage;
