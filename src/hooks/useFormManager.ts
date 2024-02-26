import { useState, useCallback, useEffect, useRef } from "react";
import usePrevious from "./usePrevious";
import {RecordWithAnyType} from "../types"

interface useFormManagerProps {
  initialValues: RecordWithAnyType;
}

const useFormManager = <T>({ initialValues }: useFormManagerProps) => {
  const [state, setState] = useState<typeof initialValues | T | any>(initialValues);

  const hasAnyFieldChangedRef = useRef(false);
  const preValues = usePrevious(initialValues);

  const areInitialValuesChanged = useCallback(
    () => !Object.is(JSON.stringify(preValues), JSON.stringify(initialValues)),
    [initialValues, preValues]
  );

  useEffect(() => {
    if (areInitialValuesChanged()) {
      setState({ ...initialValues });
    }
  }, [areInitialValuesChanged, initialValues]);

  const resetForm = useCallback(() => {
    hasAnyFieldChangedRef.current = false;
    setState(() => initialValues);
  }, [initialValues]);

  useEffect(
    () => {
      return resetForm;
    },
    // eslint-disable-next-line
    []
  );

  const onChange = useCallback(
    (eventData: any) => {
      const { name, value } = eventData;
      const computedValue = typeof value === "number" ? +value.toFixed(2) : value;
      setState({ ...state, [name]: computedValue });
    },
    [state]
  );

  const handleMultiInput = useCallback((e:any)=>{
    setState({
      ...state,
      ...e
    })
  },[state])

  const handleSelectWithLabelChange = useCallback(
    (eventData: any) => {
      setState({
        ...state,
        [eventData.name]: eventData.value,
        [eventData.selectLabelName]: eventData.label,
      });
    },
    [state]
  );

  return {
    state,
    onChange,
    resetForm,
    handleRootState: setState,
    handleSelectWithLabelChange,
    handleMultiInput
  };
};

export default useFormManager;