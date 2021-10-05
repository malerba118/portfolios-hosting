import React, { useState } from "react";
import { ChakraProvider } from "@chakra-ui/react";
import dynamic from "next/dynamic";
import { makeTheme } from "./theme";
import { AnimationProvider } from "shared/components/animation";
import PortfolioProvider from "shared/components/PortfolioProvider";
import Lightbox from "shared/components/Lightbox";
import "focus-visible/dist/focus-visible";

const App = dynamic(() => import("./App"), { ssr: false });

const Template = ({ portfolio }) => {
  const [theme] = useState(() => makeTheme(portfolio.data.templateSettings));

  return (
    <ChakraProvider theme={theme}>
      <AnimationProvider>
        <PortfolioProvider portfolio={portfolio}>
          <Lightbox>
            <App />
          </Lightbox>
        </PortfolioProvider>
      </AnimationProvider>
    </ChakraProvider>
  );
};

export default Template;
