import { useState, useEffect } from "react";

const useData = () => {
  const [state, setState] = useState();

  useEffect(() => {
    const listener = (event) => {
      if (event.data?.sender === "vernos-app") {
        setState(event.data.payload);
      }
    };
    window.addEventListener("message", listener);
    return () => {
      window.removeEventListener("message", listener);
    };
  }, []);

  return state;
};

export default useData;
