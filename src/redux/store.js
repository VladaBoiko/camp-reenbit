import { configureStore } from "@reduxjs/toolkit";
import {
  charactersReducer,
  filterReducer,
  characterByIdReducer,
  pageReducer,
} from "./charactersSlice";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import {
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";

const persistConfig = {
  key: "filter, page",
  storage,
  whitelist: ["filter", "page"],
};
const persistPageConfig = {
  key: "page",
  storage,
  whitelist: ["page"],
};
const persistedFilter = persistReducer(persistConfig, filterReducer);
const persistedPage = persistReducer(persistPageConfig, pageReducer);
export const store = configureStore({
  reducer: {
    characters: charactersReducer,
    filter: persistedFilter,
    page: persistedPage,
    characterById: characterByIdReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
