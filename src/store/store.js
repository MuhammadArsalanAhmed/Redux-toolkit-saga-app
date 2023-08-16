import createSagaMiddleware from "redux-saga";
import { configureStore } from "@reduxjs/toolkit";
import catsReducer from "../store/slices/catState";
import catSaga from "./sagas/catSaga";

const saga = createSagaMiddleware();
export const store = configureStore({
  reducer: {
    cats: catsReducer,
  },
  middleware: [saga],
});
saga.run(catSaga);
