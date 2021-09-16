import React, { useState } from "react";
import { ChakraProvider } from "@chakra-ui/react";
import dynamic from "next/dynamic";
import { makeTheme } from "./theme";
import { AnimationProvider } from "shared/components/animation";
import PortfolioProvider from "shared/components/PortfolioProvider";
import "focus-visible/dist/focus-visible";
import DraftModeProvider from "shared/components/DraftModeProvider";

const App = dynamic(() => import("./App"), { ssr: false });

const Template = ({ portfolio, draftMode }) => {
  const [theme] = useState(() => makeTheme(portfolio.data.templateSettings));

  return (
    <ChakraProvider theme={theme}>
      <AnimationProvider>
        <DraftModeProvider draftMode={draftMode}>
          <PortfolioProvider portfolio={portfolio}>
            <App />
          </PortfolioProvider>
        </DraftModeProvider>
      </AnimationProvider>
    </ChakraProvider>
  );
};

export default Template;
