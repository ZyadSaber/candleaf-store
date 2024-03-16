import { useState } from "react";
import { Store } from "./context/store";
import { initialContextValues } from "./constants";
import { AppConfigProviderProps } from "./interface";

const AppConfigProvider = ({ children }: AppConfigProviderProps) => {
  const [state, setContext] =
    useState<typeof initialContextValues>(initialContextValues);

  return (
    <Store.Provider
      value={{
        state,
        //@ts-expect-error
        setAuthValues: setContext,
      }}
    >
      {children}
    </Store.Provider>
  );
};

export default AppConfigProvider;
