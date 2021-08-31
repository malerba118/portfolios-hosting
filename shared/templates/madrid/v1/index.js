import React, { useState } from "react";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import dynamic from "next/dynamic";
import { makeTheme } from "./theme";
import { AnimationProvider } from "shared/components/animation";
import { palettes } from "shared/utils/colors";

const App = dynamic(() => import("./App"), { ssr: false });

const Template = ({ portfolio }) => {
  const [theme] = useState(() => makeTheme(portfolio.templateSettings));

  return (
    <ChakraProvider theme={theme}>
      <AnimationProvider>
        <App portfolio={portfolio} />
      </AnimationProvider>
    </ChakraProvider>
  );
};

export default Template;
