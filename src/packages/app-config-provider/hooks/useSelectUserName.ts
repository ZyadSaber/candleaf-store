import useAppConfig from "./useSelectAppProvider";

const useSelectUserName = () => {
  const {
    state: { user_name },
  } = useAppConfig();

  return user_name;
};

export default useSelectUserName;
