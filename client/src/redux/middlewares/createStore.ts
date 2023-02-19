import { configureStore, Reducer } from "@reduxjs/toolkit";
import createReducerManager from "./reducerManager";

const createStore = (
  staticReducers: Parameters<typeof createReducerManager>[0]
) => {
  const reducerManager = createReducerManager(staticReducers);

  const _store = configureStore({
    reducer: reducerManager.reduce as Reducer,
    devTools: true,
  });

  return Object.assign(_store, { reducerManager });
};

export default createStore;
