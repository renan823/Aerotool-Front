import { combineReducers } from "redux";

import auth from './auth/authSlice';

const reducers = combineReducers({
    auth: auth
});

export default reducers;