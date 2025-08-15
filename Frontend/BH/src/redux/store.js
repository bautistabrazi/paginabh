/** @format */

import { applyMiddleware, createStore, compose } from "redux";

import { logger } from "redux-logger";

import { rootReducer as reducers } from "./reducers";

import { middleware as autorizacion } from "./autorizacion/middleware";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

let mdw = [...autorizacion, logger];

const initialData = {};

export const store = createStore(reducers, initialData, composeEnhancers(applyMiddleware(...mdw)));
