import React, { Suspense, useEffect, useRef } from "react";
import { Canvas } from "react-three-fiber";
import { Box, Heading, Avatar, Flex, HStack, Link } from "@chakra-ui/react";
import { Link as ReactRouterLink } from "react-router-dom";

export default function Landing(props) {
  const { about, projects } = props.portfolio.content;

  return (
    <Box
      position="absolute"
      inset={0}
      bg="white"
      // bgGradient="linear(to-r, #ffafbd, #ffc3a0)"
    >
      <Flex
        h="100%"
        p={8}
        py={0}
        direction="column"
        align="center"
        justify="center"
        pb={4}
      >
        <Avatar size="xl" src="https://picsum.photos/id/209/300/300" />
        <Heading
          fontWeight={600}
          color="gray.900"
          onClick={props.onExpand}
          fontSize="7xl"
          mt={1}
        >
          {about.firstName} {about.lastName}
        </Heading>
        <Heading color="gray.700" onClick={props.onExpand} fontSize="4xl">
          {about.title}
        </Heading>
        <HStack
          // textTransform="uppercase"
          spacing={6}
          p={6}
          fontSize="2xl"
          color="pink.500"
          fontWeight="600"
        >
          <Link as={ReactRouterLink} to="/about">
            About
          </Link>
          <Link as={ReactRouterLink} to="/projects">
            Projects
          </Link>
          <Link as={ReactRouterLink} to="/work">
            Work
          </Link>
          <Link as={ReactRouterLink} to="/education">
            Education
          </Link>
          <Link as={ReactRouterLink} to="/contact">
            Contact
          </Link>
        </HStack>
      </Flex>
    </Box>
  );
}
