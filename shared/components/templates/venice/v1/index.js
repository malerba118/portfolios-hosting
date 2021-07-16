import React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import dynamic from "next/dynamic";
const App = dynamic(() => import("./App"), { ssr: false });

const Template = ({ portfolio }) => {
  return (
    <ChakraProvider>
      <App portfolio={portfolio} />
    </ChakraProvider>
  );
};

export default Template;
