import { useEffect, useState } from "react";
import WebFont from "webfontloader";

const useFonts = (families) => {
  const [status, setStatus] = useState("loading");

  useEffect(() => {
    WebFont.load({
      google: {
        families,
      },
      active: () => {
        setStatus("loaded");
      },
      inactive: () => {
        setStatus("errored");
      },
    });
  }, []);

  return {
    isLoading: status === "loading",
    isReady: status === "loaded",
    isError: status === "errored",
  };
};

export default useFonts;
