import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import {
  Button,
  Center,
  ChakraProvider,
  Flex,
  Heading,
} from "@chakra-ui/react";
import { createTheme } from "shared/utils/theme";
import { BsWindow } from "react-icons/bs";

const NotFound = (props) => {
  return (
    <ChakraProvider theme={createTheme()}>
      <Flex
        direction="column"
        minH="100vh"
        w="100%"
        align="center"
        justify="center"
        style={{
          height: "100vh",
          backgroundColor: "var(--chakra-colors-primary-50)",
          backgroundImage:
            'url("https://www.transparenttextures.com/patterns/asfalt-dark.png")',
          backgroundBlendMode: "multiply",
          backgroundSize: "12%",
        }}
      >
        <Heading color="secondary.500" textAlign="center" size="3xl">
          Page Not Found
        </Heading>
        <Button
          onClick={() => {
            window.open("https://vernos.app", "_blank");
          }}
          colorScheme="secondary"
          size="sm"
          my={4}
        >
          Go to Editor
        </Button>
      </Flex>
    </ChakraProvider>
  );
};

export default NotFound;
