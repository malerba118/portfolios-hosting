import React, { useState, useEffect } from "react";
import { Box, Heading, Flex, Text, Center } from "@chakra-ui/react";
import { AnimatePresence } from "framer-motion";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import ImageReveal from "./ImageReveal";
import {
  MotionBox,
  MotionHeading,
  MotionFlex,
  transitions,
  useAnimation,
} from "shared/components/animation";
import MotionImage from "shared/components/MotionImage";
import Toolbar from "./Toolbar";
import Link from "shared/components/Link";
import { useLocation } from "react-router-dom";
import { usePortfolio } from "shared/components/PortfolioProvider";

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

  const animations = {
    content: useAnimation("content"),
    heading: useAnimation("heading"),
  };

  useAnimation("about-image", {
    before: ({ variant }) => {
      if (variant === "loaded") animations.heading.start("visible");
    },
    after: ({ variant }) => {
      if (variant === "loaded") animations.content.start("visible");
    },
    mount: false,
  });

  const media = about.images.items[0];

  return (
    <AnimatePresence initial={"hidden"}>
      <Parallax
        pages={projects.length + 1}
        style={{
          height: "100vh",
        }}
      >
        <ParallaxLayer
          offset={0}
          factor={100}
          speed={0.1}
          style={{
            backgroundColor: "var(--chakra-colors-primary-100)",
            backgroundImage: 'url("/templates/madrid/topography.svg")',
            backgroundBlendMode: "soft-light",
            backgroundSize: "30%",
            backgroundRepeat: "repeat",
          }}
        />
        <ParallaxLayer offset={0} speed={0.4}>
          <Box h="100%" bg="primary.50">
            <Toolbar
              initial={location.state?.disableAnimations ? "visible" : "hidden"}
              variants={variants.nav}
              animate={animations.content}
            />
            <Flex position="absolute" inset={0} py="128px" justify="center">
              <ImageReveal
                mx={16}
                maxWidth="900"
                src={media?.processedUrl || media?.rawUrl}
                disableExpandAnimation={location.state?.disableAnimations}
              />
              <MotionBox
                initial={
                  location.state?.disableAnimations ? "visible" : "hidden"
                }
                variants={variants.fullName}
                pos="absolute"
                top="70%"
                w="100%"
                textAlign="center"
                animate={animations.heading}
              >
                <Heading size="2xl">
                  {about.firstName} {about.lastName}
                </Heading>
                <Text size="xl">{about.title}</Text>
              </MotionBox>
            </Flex>
          </Box>
        </ParallaxLayer>
        {projects.map((project, i) => {
          const media = project.images.items[0];

          return (
            <>
              <ParallaxLayer key={project.id} offset={i + 1} speed={0.25}>
                <Center h="100%" w="100%">
                  <MotionImage
                    initialScale={1}
                    src={
                      media?.processedUrl ||
                      media?.rawUrl ||
                      "/image-unavailable.svg"
                    }
                    maxHeight="90%"
                    width={{ base: "100%", md: "55%" }}
                    left={i % 2 === 0 ? 0 : undefined}
                    right={i % 2 !== 0 ? 0 : undefined}
                    m={{ base: 0, md: 12 }}
                    bg="primary.50"
                    position="absolute"
                    // boxShadow="lg"
                  />
                </Center>
              </ParallaxLayer>
              <ParallaxLayer key={project.id} offset={i + 1} speed={0.45}>
                <Center h="100%" w="100%">
                  <Link to={`/projects/${project.id}`}>
                    <MotionHeading
                      size="xl"
                      fontSize="6xl"
                      textTransform="uppercase"
                      color="white"
                      textShadow="2px 4px 0px var(--chakra-colors-primary-200), 4px 8px 0px var(--chakra-colors-primary-300)"
                      textAlign="center"
                    >
                      {project.name}
                    </MotionHeading>
                  </Link>
                </Center>
              </ParallaxLayer>
            </>
          );
        })}
      </Parallax>
    </AnimatePresence>
  );
};

export default LandingPage;
