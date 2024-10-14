import { useState, useCallback } from "react";

const useVisibleState = () => {
  const [visible, setVisible] = useState(false);

  const handleOpen = useCallback(() => setVisible(true), []);

  const handleClose = useCallback(() => setVisible(false), []);

  const handleVisibility = useCallback(() => setVisible(!visible), [visible]);

  return {
    visible,
    handleOpen,
    handleClose,
    handleVisibility,
  };
};

export default useVisibleState;
