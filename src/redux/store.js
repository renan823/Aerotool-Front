import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storageSession from 'redux-persist/lib/storage/session'
import thunk from "redux-thunk";
import reducers from "./reducers";

const config = {
    key: 'root',
    whitelist: ["auth"],
    storage: storageSession
};

const reducer = persistReducer(config, reducers);

export const store = configureStore({ reducer, middleware: [thunk] });
export const persistor = persistStore(store);

store.subscribe(() => {
    console.log(store.getState());
})


