/*
 *
 * FaqCategory reducer
 *
 */
import produce from 'immer';
import * as types from './constants';

export const initialState = {
  all: {
    data: [],
    page: 1,
    size: 10,
    totaldata: 0,
  },
  one: {
    title: '',
    is_active: false,
    key: '',
  },
  query: { find_title: '', size: 10 },
  loading: false,
  errors: { title: '' },
};

/* eslint-disable default-case, no-param-reassign */
const reducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case types.LOAD_ALL_REQUEST:
        draft.loading = true;
        break;
      case types.LOAD_ALL_SUCCESS:
        draft.loading = false;
        draft.all = action.payload;
        break;
      case types.LOAD_ONE_REQUEST:
        draft.loading = true;
        break;
      case types.LOAD_ONE_SUCCESS:
        draft.loading = false;
        draft.one = { ...initialState.one, ...action.payload.data };
        break;
      case types.LOAD_ONE_FAILURE:
        draft.loading = false;
        break;
      case types.DELETE_CAT_SUCCESS:
        draft.all = {
          ...draft.all,
          data: draft.all.data.filter(
            each => each._id != action.payload.data._id,
          ),
        };
      case types.SET_ONE_VALUE:
        draft.one[action.payload.key] = action.payload.value;
        draft.errors[action.payload.key] = ' ';
        break;
      case types.SET_QUERY_VALUE:
        draft.query[action.payload.key] = action.payload.value;
        break;
      case types.CLEAR_ONE:
        draft.one = initialState.one;
        break;
      case types.CLEAR_QUERY:
        draft.query = initialState.query;
        break;
      case types.ADD_EDIT_FAILURE:
        draft.errors = action.payload.errors;
        break;
      case types.CLEAR_ERRORS:
        draft.errors = initialState.errors;
        break;
    }
  });

export default reducer;
