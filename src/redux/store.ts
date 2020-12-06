import { configureStore } from "@reduxjs/toolkit";
import appReducer from "./reducers";

export default configureStore({
  reducer: appReducer,
});
