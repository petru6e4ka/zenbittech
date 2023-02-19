import createStore from "./middlewares/createStore";
import { store as feedback } from "./feedback";

export * as feedback from "./feedback";

const staticReducers = {
  [feedback.name]: feedback.reducer,
};

const store: ReturnType<typeof createStore> = createStore(staticReducers);

export default store;
