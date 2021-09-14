import React, { useRef } from "react";
import useFonts from "shared/hooks/useFonts";
import { BrowserRouter as Router, useRouteMatch } from "react-router-dom";
import Advertisement from "shared/components/Advertisement";
import { usePortfolio } from "shared/components/PortfolioProvider";
import {
  Box,
  Heading,
  Center,
  Stack,
  HStack,
  Image,
  Button,
  Flex,
} from "@chakra-ui/react";
import Parallax from "shared/components/animation/Parallax";
import Logo from "shared/components/Logo";
import MotionImage from "shared/components/MotionImage";
import RichtextViewer from "shared/components/RichtextViewer";

const keyframes = {
  intro: ({ page }) => ({
    [page.y]: {
      skewY: "0deg",
      opacity: 1,
      y: 0,
      scale: 1,
    },
    [page.y + page.height]: {
      skewY: "15deg",
      opacity: 0,
      y: 150,
      scale: 0.9,
    },
  }),
  about: ({ page }) => ({
    [0]: {
      skewY: "0deg",
      opacity: 0,
      y: 150,
      scale: 1,
    },
    [page.y]: {
      skewY: "0deg",
      opacity: 1,
      y: 0,
      scale: 1,
    },
  }),
  project: ({ page }) => ({
    [page.y - page.height]: {
      y: 125,
    },
    [page.y]: {
      y: 0,
    },
  }),
  projectTitle: ({ page }) => ({
    [page.y - page.height * 0.45]: {
      x: "-100vw",
    },
    [page.y - page.height * 0.449]: {
      x: "0vw",
    },
    [page.y + page.height * 0.449]: {
      x: "0vw",
    },
    [page.y + page.height * 0.45]: {
      x: "100vw",
    },
  }),
  image: ({ page }) => ({
    [page.y - page.height]: {
      scale: 1,
    },
    [page.y + page.height]: {
      scale: 1.5,
    },
  }),
};

function App() {
  const firstProjectRef = useRef(null);
  const aboutPageRef = useRef(null);
  const portfolio = usePortfolio();

  const fonts = useFonts([
    portfolio.data.templateSettings.headingFont,
    portfolio.data.templateSettings.paragraphFont,
  ]);

  if (fonts.isLoading) {
    return null;
  }

  const { about, projects, contact } = portfolio.data.content;

  return (
    <>
      <Parallax h="100vh">
        <Parallax.Page
          keyframes={keyframes.intro}
          pageId="first-page"
          h="100vh"
        >
          <Flex
            pos="relative"
            zIndex={1}
            h="128px"
            px={{ base: 12, md: 24 }}
            justify="space-between"
            align="center"
          >
            <Logo
              color="secondary.400"
              charOne={about.firstName[0]}
              charTwo={about.lastName[0]}
            />
            <HStack spacing={4} color="secondary.400">
              <Heading color="secondary.400" size="xs">
                About
              </Heading>
              <Heading color="secondary.400" size="xs">
                Projects
              </Heading>
              <Heading color="secondary.400" size="xs">
                Contact
              </Heading>
            </HStack>
          </Flex>
          <Center pos="absolute" inset={0}>
            <Stack
              w="100%"
              px={{ base: 12, md: 24 }}
              spacing={{ base: 3, md: 3 }}
            >
              <Heading maxW="800px" size="3xl" textTransform="uppercase">
                {about.summary}
              </Heading>
              <Heading maxW="600px" size="sm" pb={2}>
                {about.firstName + " " + about.lastName} • {about.title}
              </Heading>
              <Button
                onClick={() => {
                  firstProjectRef.current?.scrollIntoView();
                }}
                alignSelf="start"
                colorScheme="secondary"
              >
                See Projects
              </Button>
            </Stack>
          </Center>
        </Parallax.Page>
        <Parallax.Page ref={aboutPageRef} pageId={`about-page`}>
          <Parallax.Box keyframes={keyframes.about}>
            <Box
              h="100%"
              px={{ base: 12, md: 24 }}
              py={{ base: 6, md: 12 }}
              pos="relative"
            >
              <RichtextViewer value={about.description} />
            </Box>
          </Parallax.Box>
        </Parallax.Page>
        {portfolio.data.content.projects.map((project, i) => {
          const media = project.images.items[0];
          return (
            <Parallax.Page
              key={i}
              ref={i === 0 ? firstProjectRef : null}
              pageId={`project-${i}`}
              height="100vh"
              overflow="hidden"
            >
              <Parallax.Box
                keyframes={keyframes.project}
                pos="absolute"
                inset={0}
              >
                <Center h="100%" p={{ base: 12, md: 24 }} pos="relative">
                  <Box w="100%" h="100%" overflow="hidden">
                    <Parallax.Box keyframes={keyframes.image} h="100%" w="100%">
                      <MotionImage
                        src={media?.processedUrl || media?.rawUrl}
                        h="100%"
                        w="100%"
                        objectFit="cover"
                      />
                    </Parallax.Box>
                  </Box>
                </Center>
                <Center pos="absolute" inset={0}>
                  <Parallax.Box
                    cursor="pointer"
                    keyframes={keyframes.projectTitle}
                  >
                    <Heading
                      p={2}
                      backgroundColor="secondary.400"
                      size="4xl"
                      color="primary.50"
                      textTransform="uppercase"
                      textAlign="center"
                    >
                      {project.name}
                    </Heading>
                  </Parallax.Box>
                </Center>
              </Parallax.Box>
            </Parallax.Page>
          );
        })}
      </Parallax>
    </>
  );
}

const RouterApp = (props) => (
  <Router>
    <App {...props} />
    <Advertisement />
  </Router>
);

export default RouterApp;
