import { createStore, applyMiddleware } from "redux";
import { rootReducer } from "./reducer/rootReducer";

const store = createStore(rootReducer, applyMiddleware());

export default store;
