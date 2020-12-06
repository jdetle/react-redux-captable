import { CapTable } from "../types";
import { AppActions, SET_CAPTABLE } from "./actions";

const initialState = {
  capTables: [] as CapTable[],
};

type State = {
  capTables: CapTable[];
};

export function appReducer(
  state: State = initialState,
  action: { type: AppActions; payload?: unknown }
): State {
  switch (action.type) {
    case SET_CAPTABLE:
      return state;
    default:
      return state;
  }
}

export default appReducer;
