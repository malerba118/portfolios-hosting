import React, { createContext, useContext } from "react";

const PortfolioContext = createContext(null);

export const PortfolioProvider = ({ children, portfolio }) => {
  return (
    <PortfolioContext.Provider value={portfolio}>
      {children}
    </PortfolioContext.Provider>
  );
};

export const usePortfolio = () => {
  return useContext(PortfolioContext);
};

export default PortfolioProvider;
