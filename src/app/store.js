import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import signupSlice from "../slices/signupSlice";
import alertSlice from "../slices/alertSlice";
import profileSlice from "../slices/profileSlice";
import paymentSlice from "../slices/paymentSlice";

const rootReducer = combineReducers({
  alert: alertSlice,
  signup: signupSlice,
  profile: profileSlice,
  payment: paymentSlice,
});

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["payment"],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export const persistor = persistStore(store);
