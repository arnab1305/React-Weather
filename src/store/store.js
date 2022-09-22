import { createStore, applyMiddleware, compose } from "redux";
import createSagaMiddleware from "redux-saga";
import rootReducer from "./root-reducer";
import logger from "redux-logger";
import MySaga from "./sagas/saga";

const sagaMiddleware = createSagaMiddleware();
const middleware = [logger, sagaMiddleware];
const composedEnh = compose(applyMiddleware(...middleware));

export const store = createStore(rootReducer, undefined, composedEnh);

sagaMiddleware.run(MySaga);
