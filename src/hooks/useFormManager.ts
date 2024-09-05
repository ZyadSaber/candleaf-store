import { useState, useCallback, useEffect, useRef } from "react";
import { RecordWithAnyData } from "@/types";
import usePrevious from "./usePrevious";

interface useFormManagerProps {
  initialValues: RecordWithAnyData;
  submitFN?: (data: RecordWithAnyData) => void;
  validate?: (data: RecordWithAnyData) => RecordWithAnyData;
}

const useFormManager = ({
  initialValues,
  submitFN,
  validate,
}: useFormManagerProps) => {
  const [state, setState] = useState<typeof initialValues>(initialValues);
  const [errors, setErrors] = useState<RecordWithAnyData>({});

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

  const onChange = useCallback(
    (eventData: { name: string; value: string | number }) => {
      const { name, value } = eventData;
      setState((prevState) => ({ ...prevState, [name]: value }));
    },
    []
  );

  const handleMultiInput = useCallback((data: RecordWithAnyData) => {
    setState((prevData) => ({ ...prevData, ...data }));
  }, []);

  const __submit = useCallback(() => {
    const __errors = validate?.(state) || {};

    const hasErrors = Object.keys(__errors).length !== 0;

    if (hasErrors) {
      setErrors(__errors);
      return;
    } else {
      submitFN?.(state);
    }
  }, [state, submitFN, validate]);

  return {
    values: state,
    onChange,
    resetForm,
    setState,
    handleMultiInput,
    submit: __submit,
    errors,
  };
};

export default useFormManager;
