import useAppConfig from "./useSelectAppProvider";

const useSelectAuthorization = () => {
  const {
    state: { authorization },
  } = useAppConfig();

  return authorization;
};

export default useSelectAuthorization;
