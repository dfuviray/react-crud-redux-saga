import { createStore, applyMiddleware, compose } from "redux";
import rootReducer from "./reducers/index.js";
import createSageMiddleware from "redux-saga";
import rootSaga from "./sagas/index";

const sagaMiddleware = createSageMiddleware();

const reduxDevTools =
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

// create a redux store with our reducer above and middleware
let store = createStore(
  rootReducer,
  compose(applyMiddleware(sagaMiddleware), reduxDevTools)
);

sagaMiddleware.run(rootSaga);

export default store;
