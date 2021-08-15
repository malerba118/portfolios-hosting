import React, { useState, useEffect } from "react";
import {
  Box,
  Heading,
  Flex,
  Text,
  HStack,
  SimpleGrid,
  Stack,
} from "@chakra-ui/react";
import { Router } from "react-router-dom";
import { createBrowserHistory } from "history";
import ImageReveal from "./ImageReveal";
import {
  MotionBox,
  MotionStack,
  MotionFlex,
  MotionHeading,
  transitions,
  useAnimation,
} from "shared/components/animation";
import Logo from "shared/components/Logo";
import DateViewer from "shared/components/DateViewer";
import useFonts from "../../../hooks/useFonts";
import Entrance from "shared/components/Entrance";
import MotionImage from "shared/components/MotionImage";
import RichtextViewer from "shared/components/RichtextViewer";
import Divider from "shared/components/Divider";

const variants = {
  nav: {
    visible: {
      opacity: 1,
      transition: {
        ...transitions.one(1.5),
      },
    },
    hidden: {
      opacity: 0,
    },
  },
  fullName: {
    visible: {
      y: 0,
      opacity: 1,
      scale: 1,
      transition: {
        ...transitions.one(0.8),
        delay: 2,
      },
    },
    hidden: {
      opacity: 0,
      y: 80,
      scale: 0.9,
    },
  },
  main: {
    visible: {
      display: "block",
    },
    hidden: {
      display: "none",
    },
  },
};

const history = createBrowserHistory();

export default function App(props) {
  const { about, projects, contact } = props.portfolio.content;
  const animations = {
    content: useAnimation("content"),
    heading: useAnimation("heading"),
  };

  const fonts = useFonts(["Lato", "Source Sans Pro"]);

  useAnimation("about-image", {
    before: ({ variant }) => {
      if (variant === "loaded") animations.heading.start("visible");
    },
    after: ({ variant }) => {
      if (variant === "loaded") animations.content.start("visible");
    },
  });

  if (fonts.isLoading) {
    return null;
  }

  const media = about.images.items[0];

  return (
    <Router history={history}>
      <Box position="relative" h="100vh">
        <Toolbar animate={animations.content} />
        <Flex position="absolute" inset={0} py="128px" justify="center">
          <ImageReveal mx={16} maxWidth="900" src={media?.processedUrl} />
          <MotionBox
            initial="hidden"
            variants={variants.fullName}
            pos="absolute"
            top="70%"
            w="100%"
            textAlign="center"
            animate={animations.heading}
          >
            <Heading fontWeight="900" color="gray.800" fontSize="6xl">
              Austin Malerba
            </Heading>
            <Heading color="gray.600" fontSize="xl">
              Software Engineer
            </Heading>
          </MotionBox>
        </Flex>
      </Box>
      <MotionStack
        initial="hidden"
        variants={variants.main}
        animate={animations.content}
        py={24}
        position="relative"
      >
        <Flex w="100%" justify="center" position="absolute" top={"0"}>
          <Divider color="black" />
        </Flex>
        <Box className="about">
          <About about={about} />
        </Box>
        <Box className="projects">
          <Stack margin="0 auto" maxWidth="900" spacing={4}>
            <Heading fontSize="xl">
              Here's a few projects I've worked on
            </Heading>
            <SimpleGrid flex={1} columns={2} spacing={10}>
              {projects.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </SimpleGrid>
          </Stack>
        </Box>
      </MotionStack>
    </Router>
  );
}

const Toolbar = ({ animate }) => {
  return (
    <MotionFlex
      position="relative"
      zIndex={1}
      initial="hidden"
      animate={animate}
      variants={variants.nav}
      justify="space-between"
      h="128px"
      px={16}
      align="center"
      color="gray.600"
    >
      <Box>
        <Logo charOne="K" charTwo="S" color="gray.600" />
      </Box>
      <HStack
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

const About = ({ about }) => {
  return (
    <Stack maxWidth="900" margin="0 auto">
      <Heading fontSize="xl">{about.summary}</Heading>
      <Box color="gray.600">
        <RichtextViewer value={about.description} />
      </Box>
    </Stack>
  );
};

const ProjectCard = ({ project }) => {
  const media = project.images.items[0];

  return (
    <Box>
      <MotionImage
        initialScale={1}
        src={media?.processedUrl || media?.rawUrl || "/image-unavailable.svg"}
        width="100%"
        height={300}
      />
      <Text fontSize="md">{project.name}</Text>
      <Text fontSize="xs" color="gray.600">
        <DateViewer startDate={project.startDate} endDate={project.endDate} />
      </Text>
    </Box>
  );
};
