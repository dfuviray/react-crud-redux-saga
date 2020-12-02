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

// POST

async function postApi(locations) {
  try {
    const result = await axios.post(endpoint, locations);
    return result.data;
  } catch (error) {
    throw error;
  }
}

function* addLocation(action) {
  try {
    const locations = yield call(postApi, action.data);
    console.log("a");
    yield put({ type: "POST_LOCATIONS_SUCCESS", payload: locations });
  } catch (e) {
    console.log(e);
    yield put({ type: "POST_LOCATIONS_FAILED", message: e.message });
  }
}

function* addLocationSaga() {
  yield takeEvery("POST_LOCATIONS_REQUEST", addLocation);
}

export { locationSaga, addLocationSaga };
