import { all } from "redux-saga/effects";
import { locationSaga, addLocationSaga } from "./locationsSaga";

export default function* rootSaga() {
  yield all([locationSaga(), addLocationSaga()]);
}
