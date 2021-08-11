import React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import dynamic from "next/dynamic";
import theme from "./theme";

const App = dynamic(() => import("./App"), { ssr: false });

const Template = ({ portfolio }) => {
  return (
    <ChakraProvider theme={theme}>
      <App portfolio={portfolio} />
    </ChakraProvider>
  );
};

export default Template;
