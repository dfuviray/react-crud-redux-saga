import { all } from "redux-saga/effects";
import locationSaga from "./locationsSaga";

export default function* rootSaga() {
  yield all([locationSaga()]);
}
