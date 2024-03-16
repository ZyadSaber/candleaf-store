import { useCallback } from "react";
import useAppConfigStore from "./useSelectAppProvider";
import { useLocalStorage } from "../../../hooks";
import { RecordWithAnyType } from "../../../types";

const useSetAuthConfigData = () => {
  const { setAuthValues, state } = useAppConfigStore();

  const { setLocalStorageData } = useLocalStorage();

  return useCallback(
    (values: RecordWithAnyType) => {
      //@ts-expect-error
      setAuthValues(() => ({
        ...state,
        ...values,
      }));
      setLocalStorageData({
        ...state,
        ...values,
      });
    },
    [setAuthValues, setLocalStorageData, state]
  );
};

export default useSetAuthConfigData;
