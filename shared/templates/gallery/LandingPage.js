import React, { useState, useEffect, useRef } from "react";
import { Box, Heading, Flex, Text, Center, SimpleGrid } from "@chakra-ui/react";
import { AnimatePresence } from "framer-motion";
// import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import { transitions } from "shared/components/animation";
import Toolbar from "./Toolbar";
import Link from "shared/components/Link";
import { useHistory, useLocation } from "react-router-dom";
import { usePortfolio } from "shared/components/PortfolioProvider";
import Parallax from "shared/components/animation/Parallax";
import ScrollRoute from "./ScrollRoute";
import Media from "shared/components/Media";

const keyframes = {
  intro: ({ page }) => ({
    [page.y]: {
      y: 0,
    },
    [page.y + page.height]: {
      y: -180,
    },
  }),
  projectTitle: ({ page, container }) => ({
    [page.y - container.height]: {
      y: 220,
    },
    [page.y]: {
      y: 0,
    },
    [page.y + page.height]: {
      y: -220,
    },
  }),
  projectImage: ({ page, container }) => ({
    [page.y - container.height]: {
      y: 100,
    },
    [page.y]: {
      y: 0,
    },
    [page.y + page.height]: {
      y: -50,
    },
  }),
};

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

const LandingPage = () => {
  const portfolio = usePortfolio();
  let { about, projects } = portfolio.data.content;
  const location = useLocation();
  const history = useHistory();
  const introPageRef = useRef(null);
  const projectsRef = useRef(null);

  const media = about.images.items[0];

  return (
    <Box h="100vh" overflow="auto">
      <ScrollRoute
        path="/"
        exact
        onMatch={(match) => {
          if (match) {
            introPageRef.current?.scrollIntoView({ behavior: "smooth" });
          }
        }}
      />
      <ScrollRoute
        path="/work"
        exact
        onMatch={(match) => {
          if (match) {
            projectsRef.current?.scrollIntoView({ behavior: "smooth" });
          }
        }}
      />
      <Box ref={introPageRef} pos="relative" h="100vh" bg="primary.100">
        <Toolbar />
        <Center flexDirection="column" pos="absolute" inset={0}>
          <Heading textAlign="center" size="3xl" my={4}>
            Hi, I'm {about.firstName}
          </Heading>
          <Heading color="primary.600" textAlign="center" size="xl">
            {about.summary}
          </Heading>
        </Center>
      </Box>
      <Box ref={projectsRef} pos="relative">
        <SimpleGrid
          bg="primary.50"
          p={{ base: 4, md: 16 }}
          spacing={{ base: 4, md: 12 }}
          columns={{ base: 1, md: 2 }}
          maxW="1000px"
          margin="0 auto"
        >
          {projects.map((project) => {
            return (
              <Box key={project.id}>
                {/* <Link w="100%" to={`/work/${project.id}`}> */}
                <Media
                  w="100%"
                  height="300px"
                  media={project.images.items[0]}
                  onClick={() => {
                    history.push(`/work/${project.id}`);
                  }}
                  cursor="pointer"
                />
                {/* </Link> */}
                <Box mt={2}>
                  <Heading fontSize="md">
                    <Link
                      fontSize="inherit"
                      w="100%"
                      to={`/work/${project.id}`}
                      showUnderline
                    >
                      {project.name}
                    </Link>
                  </Heading>
                  <Text fontSize="md">{project.summary}</Text>
                </Box>
              </Box>
            );
          })}
        </SimpleGrid>
      </Box>
    </Box>
  );
};

export default LandingPage;
