import { combineReducers, AnyAction, Reducer } from "@reduxjs/toolkit";

export default function createReducerManager(
  initialReducers: Record<string, Reducer>
) {
  // Create an object which maps keys to reducers
  const reducers = { ...initialReducers };

  // Create the initial combinedReducer
  let combinedReducer = combineReducers(reducers);

  // An array which is used to delete state keys when reducers are removed
  let keysToRemove: string[] = [];
  const unmountDelaySet = new Map<string, number>();

  return {
    getReducerMap: () => reducers,

    // The root reducer function exposed by this object
    // This will be passed to the store
    reduce: (state: any, action: AnyAction) => {
      if (unmountDelaySet.size > 0) {
        let isUnmountAny = false;
        unmountDelaySet.forEach((value, key) => {
          if (Date.now() > value) {
            keysToRemove.push(key);
            delete reducers[key];
            isUnmountAny = true;
          }
        });
        if (isUnmountAny) {
          combinedReducer = combineReducers(reducers);
        }
      }

      // If any reducers have been removed, clean up their state first
      if (keysToRemove.length > 0) {
        state = { ...state };
        for (const key of keysToRemove) {
          delete state[key];
        }
        keysToRemove = [];
      }

      // Delegate to the combined reducer
      return combinedReducer(state, action);
    },

    attach: (key: string, reducer: Reducer) => {
      if (unmountDelaySet.has(key)) {
        unmountDelaySet.delete(key);
      }

      if (!key || reducers[key]) {
        return;
      }

      // Add the reducer to the reducer mapping
      reducers[key] = reducer;

      // Generate a new combined reducer
      combinedReducer = combineReducers(reducers);
    },

    // Removes a reducer with the specified key
    detach: (key: string, unmountDelay?: number) => {
      if (!key || !reducers[key]) {
        return;
      }

      if (unmountDelay) {
        unmountDelaySet.set(key, Date.now() + unmountDelay);
      } else {
        // Remove it from the reducer mapping
        delete reducers[key];

        // Add the key to the list of keys to clean up
        keysToRemove.push(key);
      }

      // Generate a new combined reducer
      combinedReducer = combineReducers(reducers);
    },
  };
}
