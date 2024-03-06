import useAppConfig from "./useSelectAppProvider";

const useUserLanguage = () => {
  const {
    state: { p_language },
  } = useAppConfig();

  return p_language;
};

export default useUserLanguage;
