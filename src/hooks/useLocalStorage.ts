import { useCallback } from "react";
import { RecordWithAnyType } from "../types";

const useLocalStorage = () => {
  const getDataFromAppLocalStorage = useCallback(
    (toString?: boolean, dataName?: string) => {
      const dataBaseToGet = dataName ? dataName : "app_local_data";
      const localStorage = window.localStorage.getItem(dataBaseToGet);
      if (localStorage) {
        const computedData = toString ? localStorage : JSON.parse(localStorage);
        return computedData;
      }
      return undefined;
    },
    []
  );

  const clearAllLocalStorage = useCallback(() => {
    window.localStorage.clear();
  }, []);

  const setLocalStorageData = useCallback(
    (data: RecordWithAnyType, dataName?: string) => {
      const dataBaseToSet = dataName ? dataName : "app_local_data";

      const stringifiedData = JSON.stringify(data);

      window.localStorage.setItem(dataBaseToSet, stringifiedData);
    },
    []
  );

  return {
    getDataFromAppLocalStorage,
    clearAllLocalStorage,
    setLocalStorageData,
  };
};

export default useLocalStorage;
