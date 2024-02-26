import { memo } from "react";

const DrawerHeader = memo(() => {
  return (
    <>
      <button>Cancel</button>
      <button>OK</button>
    </>
  );
});

export default DrawerHeader
