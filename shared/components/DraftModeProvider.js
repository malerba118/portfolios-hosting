import React, { createContext, useContext } from "react";

const DraftModeContext = createContext(null);

export const DraftModeProvider = ({ children, draftMode }) => {
  return (
    <DraftModeContext.Provider value={draftMode}>
      {children}
    </DraftModeContext.Provider>
  );
};

export const useDraftMode = () => {
  return useContext(DraftModeContext);
};

export default DraftModeProvider;
