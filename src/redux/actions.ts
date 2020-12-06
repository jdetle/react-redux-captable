import { CapTable } from "../types";

export const SET_CAPTABLE = "SET_CAPTABLE";

export const createSetCapTableAction = (payload: CapTable) => ({
  type: SET_CAPTABLE,
  payload,
});

export type AppActions = typeof SET_CAPTABLE;
