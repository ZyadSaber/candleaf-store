import { createContext } from "react";
import { initialContextValues } from "../constants";
import { initialValuesType } from "../interface";

export const Store = createContext({
  state: initialContextValues,
  setAuthValues: (state: initialValuesType) => state,
});
