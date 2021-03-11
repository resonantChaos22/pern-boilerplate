import rootReducer from "../reducers";
import { createStore, compose, applyMiddleware } from "redux";
import thunk from "redux-thunk";

// enable redux devtools... can this be done with Webpack instead?
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const middleWares = [thunk];

export const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(...middleWares))
);
