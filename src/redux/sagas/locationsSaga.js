import axios from "axios";
import { call, put, takeEvery } from "redux-saga/effects";

const endpoint = "https://5f3430949124200016e18826.mockapi.io/api/locations";

async function getApi() {
  try {
    const result = await axios.get(endpoint);
    return result.data;
  } catch (error) {
    throw error;
  }
}

function* fetchLocations(action) {
  try {
    const locations = yield call(getApi);
    yield put({ type: "GET_LOCATIONS_SUCCESS", locations: locations });
  } catch (e) {
    yield put({ type: "GET_LOCATIONS_FAILED", message: e.message });
  }
}

function* locationSaga() {
  yield takeEvery("GET_LOCATIONS_REQUESTED", fetchLocations);
}

export default locationSaga;
