import { call, takeEvery, takeLatest, select, put } from 'redux-saga/effects';
import Api from 'utils/Api';
import * as types from './constants';
import * as actions from './actions';
import { makeSelectToken } from './selectors';

function* loadContent(action) {
  yield call(
    Api.get(
      `contents/key/${action.payload}`,
      actions.loadContentSuccess,
      actions.loadContentFailure,
    ),
  );
}
function* loadMedia(action) {
  yield call(
    Api.get(
      `media/${action.payload}`,
      actions.loadMediaSuccess,
      actions.loadMediaFailure,
    ),
  );
}
function* loadSlide(action) {
  yield call(
    Api.get(
      `slider/key/${action.payload}`,
      actions.loadSlideSuccess,
      actions.loadSlideFailure,
    ),
  );
}
function* logOut() {
  const token = yield select(makeSelectToken());
  yield call(
    Api.get(`user/logout`, actions.logoutSuccess, actions.logoutFailure, token),
  );
}

function* sessionExpired() {
  // token expired case, logout user and show alert that relogin is required
  yield put(actions.logoutSuccess());

  const snackbarData = {
    message: 'User Session expired. please login again',
    options: {
      variant: 'warning',
    },
  };
  yield put(actions.enqueueSnackbar(snackbarData));
  // alert('User Session expired. please login again');
}

function* networkError() {
  // token expired case, logout user and show alert that relogin is required

  const snackbarData = {
    message: 'Something went wrong. Please check your network!',
    options: {
      variant: 'warning',
    },
  };
  yield put(actions.enqueueSnackbar(snackbarData));
  // alert('User Session expired. please login again');
}

export default function* defaultSaga() {
  yield takeEvery(types.LOAD_CONTENT_REQUEST, loadContent);
  yield takeEvery(types.LOAD_MEDIA_REQUEST, loadMedia);
  yield takeEvery(types.LOAD_SLIDE_REQUEST, loadSlide);
  yield takeLatest(types.LOGOUT_REQUEST, logOut);
  yield takeLatest(types.SESSION_EXPIRED, sessionExpired);
  yield takeLatest(types.NETWORK_ERROR, networkError);
}
