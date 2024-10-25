import { useCallback, useState } from "react";
import axios from "axios";

const usePost = ({ url }: any) => {
  const [loading, setLoading] = useState(false);

  const mutate = useCallback(
    async ({ data, fn }: any) => {
      setLoading(true);
      await axios({
        method: "post",
        url: `/api/${url}`,
        data,
        xsrfHeaderName: "set-cookie",
      })
        .then(function (response) {
          const { data, status, headers } = response;
          setLoading(false);
          fn?.({
            data,
            error:
              (status !== 200 || data?.status !== "success") && data?.message,
          });
        })
        .catch((error) => {
          setLoading(false);
          // Handle errors
          console.error("Error:", error);
        });
    },
    [url]
  );

  return {
    loading,
    mutate,
  };
};

export default usePost;
