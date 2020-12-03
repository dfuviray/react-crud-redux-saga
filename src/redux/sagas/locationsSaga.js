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
    yield put({ type: "POST_LOCATIONS_SUCCESS", payload: locations });
  } catch (e) {
    console.log(e);
    yield put({ type: "POST_LOCATIONS_FAILED", message: e.message });
  }
}

function* addLocationSaga() {
  yield takeEvery("POST_LOCATIONS_REQUEST", addLocation);
}

// DELETE

async function deleteApi(id) {
  try {
    const result = await axios.delete(`${endpoint}/${id}`);
    return result.data;
  } catch (error) {
    throw error;
  }
}

function* deleteLocation(action) {
  try {
    const deletedData = yield call(deleteApi, action.id);
    yield put({ type: "DELETE_LOCATIONS_SUCCESS", payload: deletedData });
  } catch (e) {
    yield put({ type: "DELETE_LOCATIONS_FAILED", message: e.message });
  }
}

function* deleteLocationSaga() {
  yield takeEvery("DELETE_LOCATIONS_REQUEST", deleteLocation);
}

// UPDATE

async function updateApi(data) {
  try {
    const result = await axios.put(`${endpoint}/${data.id}`, data);
    return result.data;
  } catch (error) {
    throw error;
  }
}

function* updateLocation(action) {
  try {
    const updatedData = yield call(updateApi, action.data);
    yield put({ type: "UPDATE_LOCATIONS_SUCCESS", payload: updatedData });
  } catch (e) {
    yield put({ type: "UPDATE_LOCATIONS_FAILED", message: e.message });
  }
}

function* updateLocationSaga() {
  yield takeEvery("UPDATE_LOCATIONS_REQUEST", updateLocation);
}

export {
  locationSaga,
  addLocationSaga,
  deleteLocationSaga,
  updateLocationSaga,
};
