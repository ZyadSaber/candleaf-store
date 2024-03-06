import { useContext } from "react";
import { Store } from "../context/store";

const useSelectAppProvider = () => useContext(Store);

export default useSelectAppProvider;
