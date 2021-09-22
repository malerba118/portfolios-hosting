import React, { createContext, useContext } from "react";

const FsContext = createContext(null);

export const FsProvider = ({ fs, children }) => {
  return <FsContext.Provider value={fs}>{children}</FsContext.Provider>;
};

export const useFs = () => {
  return useContext(FsContext);
};

export default FsProvider;
