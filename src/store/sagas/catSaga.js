import { takeEvery, put, call } from "redux-saga/effects";
import { getCatsSuccess } from "../slices/catState";

function* workGetCatsFetch() {
  const cats = yield call(() => fetch("https://api.thecatapi.com/v1/breeds"));
  const formatCats = yield cats.json();
  yield put(getCatsSuccess(formatCats.slice(0, 10)));
}

function* catSaga() {
  yield takeEvery("cats/getCatsFetch", workGetCatsFetch);
}

export default catSaga;
