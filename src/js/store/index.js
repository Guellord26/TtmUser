import { createStore, applyMiddleware, compose } from "redux";
import createSagaMiddleware from "redux-saga";
import apiSaga from "../sagas/api-saga";

import thunk from "redux-thunk"
import rootReducer from "../reducers/rootReducer";
import { setCurrentUser, setCurrentStatut } from "../actions/authAction";

const storeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  rootReducer,
  storeEnhancers(
    applyMiddleware(thunk)
  )
);
if (localStorage.user) {
  const user = JSON.parse(localStorage.user)
  const statut = localStorage.getItem("statut")
  store.dispatch(setCurrentUser(user));
  store.dispatch(setCurrentStatut(statut));
}


export default store;