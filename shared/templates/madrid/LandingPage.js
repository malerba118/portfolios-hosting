import React, { useState, useEffect, useRef } from "react";
import {
  Box,
  Heading,
  Flex,
  Text,
  Center,
  useBreakpoint,
} from "@chakra-ui/react";
import { AnimatePresence } from "framer-motion";
// import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import ImageReveal from "./ImageReveal";
import {
  MotionBox,
  MotionHeading,
  MotionFlex,
  transitions,
  useAnimation,
} from "shared/components/animation";
import Media from "shared/components/Media";
import Toolbar from "./Toolbar";
import Link from "shared/components/Link";
import { useLocation } from "react-router-dom";
import DateViewer from "shared/components/DateViewer";
import { usePortfolio } from "shared/components/PortfolioProvider";
import Parallax from "shared/components/animation/Parallax";
import ScrollRoute from "./ScrollRoute";

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
    [Math.min(page.y, 1)]: {
      y: 0,
    },
    [Math.min(page.y + page.height, 1.01)]: {
      y: -220,
    },
  }),
  projectImage: ({ page, container }) => ({
    [page.y - container.height]: {
      y: 100,
    },
    [Math.min(page.y, 1)]: {
      y: 0,
    },
    [Math.min(page.y + page.height, 1.01)]: {
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
  const introPageRef = useRef(null);
  const firstProjectRef = useRef(null);
  const breakpoint = useBreakpoint("base");

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
      <ScrollRoute
        key="home-route"
        path="/"
        exact
        onMatch={(match) => {
          if (match) {
            introPageRef.current?.scrollIntoView();
          }
        }}
      />
      <ScrollRoute
        key="projects-route"
        path="/work"
        exact
        onMatch={(match) => {
          if (match) {
            firstProjectRef.current?.scrollIntoView();
          }
        }}
      />
      <Parallax
        key="parallax-container"
        style={{
          height: "var(--app-height)",
          backgroundColor: "var(--chakra-colors-primary-100)",
          backgroundImage: 'url("/templates/madrid/topography.svg")',
          backgroundBlendMode: "soft-light",
          backgroundSize: "30%",
          backgroundRepeat: "repeat",
        }}
      >
        <Parallax.Page
          ref={introPageRef}
          h="var(--app-height)"
          pageId="intro"
          pos="relative"
        >
          <Parallax.Box keyframes={keyframes.intro} h="100%" bg="primary.50">
            <Toolbar
              initial={location.state?.disableAnimations ? "visible" : "hidden"}
              variants={variants.nav}
              animate={animations.content}
            />
            <Flex position="absolute" inset={0} py="128px" justify="center">
              <ImageReveal
                mx={{ base: 0, md: 16 }}
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
                <Text size="xl" mb="3">
                  {about.title}
                </Text>
                {/* <Text size="2xl">{about.summary}</Text> */}
              </MotionBox>
            </Flex>
          </Parallax.Box>
        </Parallax.Page>

        {projects.map((project, i) => {
          const media = project.images.items[0];
          return (
            <Parallax.Page
              ref={i === 0 ? firstProjectRef : undefined}
              key={project.id}
              pageId={"project-" + project.id}
              h={
                breakpoint === "base"
                  ? "calc(var(--app-height) * .5)"
                  : "calc(var(--app-height) * .8)"
              }
              pos="relative"
              overflow="hidden"
            >
              <Parallax.Box
                pos="absolute"
                inset={0}
                keyframes={keyframes.projectImage}
              >
                <Center h="100%" w="100%">
                  <Media
                    cursor="pointer"
                    onClick={() => {
                      history.push(`/work/${project.id}`);
                    }}
                    maxHeight="90%"
                    width={{ base: "100%", md: "55%" }}
                    left={i % 2 === 0 ? 0 : undefined}
                    right={i % 2 !== 0 ? 0 : undefined}
                    m={{ base: 0, md: 12 }}
                    bg="primary.50"
                    position="absolute"
                    media={media}
                    boxShadow="2px 2px 0px 0px var(--chakra-colors-primary-100), 4px 4px 0px 0px var(--chakra-colors-primary-200)"
                    // borderRadius="4px"
                  />
                </Center>
              </Parallax.Box>
              <Parallax.Box
                key={project.id}
                pos="absolute"
                inset={0}
                keyframes={keyframes.projectTitle}
              >
                <Center h="100%" w="100%">
                  <Link to={`/work/${project.id}`}>
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
                    {(project.startDate || project.endDate) && (
                      <Heading
                        size="lg"
                        textTransform="uppercase"
                        color="white"
                        textShadow="1px 3px 0px var(--chakra-colors-primary-200), 2px 6px 0px var(--chakra-colors-primary-300)"
                        textAlign="center"
                      >
                        <DateViewer
                          startDate={project.startDate}
                          endDate={project.endDate}
                        />
                      </Heading>
                    )}
                  </Link>
                </Center>
              </Parallax.Box>
            </Parallax.Page>
          );
        })}
      </Parallax>
    </AnimatePresence>
  );
};

export default LandingPage;
