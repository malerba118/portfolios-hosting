import React, { useState, useEffect } from "react";
import { Box, Center, Flex, Text, HStack } from "@chakra-ui/react";
import { Router } from "react-router-dom";
import { createBrowserHistory } from "history";
import ImageReveal from "./ImageReveal";
import {
  MotionBox,
  MotionStack,
  MotionFlex,
  transitions,
  useAnimation,
} from "shared/components/animation";
import useFonts from "../../../hooks/useFonts";

const history = createBrowserHistory();

export default function App(props) {
  const { about, projects, contact } = props.portfolio.content;
  const [visible, setVisible] = useState(false);

  const fonts = useFonts(["Archivo", "Karla"]);

  useAnimation("about-image", {
    after: ({ variant }) => {
      if (variant === "loaded") setVisible(true);
    },
  });

  if (fonts.isLoading) {
    return null;
  }

  const media = about.images.items[0];

  return (
    <Router history={history}>
      <Toolbar animate={visible ? "visible" : "hidden"} />
      <Center h="calc(100vh - 64px)" w="100%" p="16">
        <ImageReveal src={media?.processedUrl} />
      </Center>
    </Router>
  );
}

const variants = {
  nav: {
    visible: {
      opacity: 1,
      transition: {
        ...transitions.one(0.9),
      },
    },
    hidden: {
      opacity: 0,
    },
  },
};

MotionStack;

const Toolbar = ({ animate }) => {
  return (
    <MotionFlex
      initial="hidden"
      animate={animate}
      variants={variants.nav}
      justify="space-between"
      h="80px"
      align="center"
      color="blackAlpha.700"
    >
      <Box></Box>
      <HStack
        px={16}
        spacing={4}
        fontSize="xs"
        textTransform="uppercase"
        fontWeight="bold"
      >
        <Text>About</Text>
        <Text>Projects</Text>
        <Text>Contact</Text>
      </HStack>
    </MotionFlex>
  );
};
