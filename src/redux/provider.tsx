import React from "react";
import { Provider } from "react-redux";
import Store from "./store";

const StoreProvider: React.FC = ({ children }) => {
  return <Provider store={Store}>{children}</Provider>;
};

export default StoreProvider;
