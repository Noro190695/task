import {applyMiddleware, createStore} from 'redux';
import {rootReducer} from "./rootReducer";
import { composeWithDevTools} from 'redux-devtools-extension';
import thunk from "redux-thunk";
import {logger} from 'redux-logger';
const middleware = [thunk,logger];

export const store = createStore(rootReducer,composeWithDevTools(applyMiddleware(...middleware)));