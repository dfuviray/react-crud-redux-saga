import { all } from "redux-saga/effects";
import {
  locationSaga,
  addLocationSaga,
  deleteLocationSaga,
  updateLocationSaga,
} from "./locationsSaga";

export default function* rootSaga() {
  yield all([
    locationSaga(),
    addLocationSaga(),
    deleteLocationSaga(),
    updateLocationSaga(),
  ]);
}
