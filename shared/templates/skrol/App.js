import React, { useRef } from "react";
import useFonts from "shared/hooks/useFonts";
import {
  BrowserRouter as Router,
  useHistory,
  Route,
  Switch,
  useLocation,
} from "react-router-dom";
import Advertisement from "shared/components/Advertisement";
import { usePortfolio } from "shared/components/PortfolioProvider";
import {
  Box,
  Heading,
  Center,
  Stack,
  HStack,
  Button,
  Flex,
} from "@chakra-ui/react";
import Parallax from "shared/components/animation/Parallax";
import Logo from "shared/components/Logo";
import RichtextViewer from "./RichtextViewer";
import Link from "shared/components/Link";
import ScrollRoute from "./ScrollRoute";
import ProjectPage from "./ProjectPage";
import { AnimatePresence } from "framer-motion";
import { createDefaultNode } from "shared/components/RichtextViewer";
import Media from "shared/components/Media";
import { ContactSection } from "./Contact";

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
      scale: 0.75,
    },
  }),
  about: ({ page }) => ({
    [0]: {
      opacity: -0.15,
      y: 150,
    },
    [page.y]: {
      opacity: 1,
      y: 0,
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
  projectTitle: ({ page, container }) => ({
    [page.y - container.height]: {
      y: -120,
      scale: 0.8,
    },
    [page.y]: {
      y: 0,
      scale: 1,
    },
    [page.y + container.height]: {
      y: 100,
      scale: 1,
    },
  }),
  image: ({ page }) => ({
    [page.y - page.height]: {
      scale: 1,
    },
    [page.y + page.height]: {
      scale: 1.35,
    },
  }),
};

function App() {
  const introPageRef = useRef(null);
  const aboutPageRef = useRef(null);
  const firstProjectRef = useRef(null);
  const contactPageRef = useRef(null);
  const history = useHistory();
  const location = useLocation();
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
      <ScrollRoute
        path="/"
        exact
        onMatch={(match) => {
          if (match) {
            introPageRef.current.scrollIntoView();
          }
        }}
      />
      <ScrollRoute
        path="/about"
        exact
        onMatch={(match) => {
          if (match) {
            aboutPageRef.current.scrollIntoView();
          }
        }}
      />
      <ScrollRoute
        path="/projects"
        exact
        onMatch={(match) => {
          if (match) {
            firstProjectRef.current.scrollIntoView();
          }
        }}
      />
      <ScrollRoute
        path="/contact"
        exact
        onMatch={(match) => {
          if (match) {
            contactPageRef.current.scrollIntoView();
          }
        }}
      />
      <Parallax h="100vh">
        <Parallax.Page ref={introPageRef} pageId="intro-page" h="100vh">
          <Parallax.Box keyframes={keyframes.intro} h="100%">
            <Flex
              pos="relative"
              zIndex={1}
              h="150px"
              px={{ base: 8, md: 24 }}
              justify="space-between"
              align="center"
            >
              <Link to="/">
                <Logo
                  color="secondary.400"
                  charOne={about.firstName[0]}
                  charTwo={about.lastName[0]}
                />
              </Link>
              <HStack spacing={{ base: 4, md: 6 }} color="secondary.400">
                <Link to="/about" showUnderline color="secondary.400">
                  <Heading color="secondary.400" size="xs">
                    About
                  </Heading>
                </Link>
                <Link to="/projects" showUnderline color="secondary.400">
                  <Heading color="secondary.400" size="xs">
                    Projects
                  </Heading>
                </Link>
                <Link to="/contact" showUnderline color="secondary.400">
                  <Heading color="secondary.400" size="xs">
                    Contact
                  </Heading>
                </Link>
              </HStack>
            </Flex>
            <Center pos="absolute" top="50px" left={0} right={0} bottom={0}>
              <Stack
                w="100%"
                px={{ base: 8, md: 24 }}
                spacing={{ base: 3, md: 3 }}
              >
                <Heading maxW="800px" size="3xl" textTransform="uppercase">
                  {about.summary}
                </Heading>
                <Heading maxW="600px" size="sm" pb={2}>
                  {about.firstName + " " + about.lastName} {"  "}•{"  "}
                  {about.title}
                </Heading>
                <HStack alignSelf="start" spacing={4}>
                  <Button
                    onClick={() => {
                      history.push("/about");
                    }}
                    colorScheme="secondary"
                  >
                    About Me
                  </Button>

                  <Button
                    onClick={() => {
                      history.push("/projects");
                    }}
                    colorScheme="secondary"
                    variant="outline"
                  >
                    See Projects
                  </Button>
                </HStack>
              </Stack>
            </Center>
          </Parallax.Box>
        </Parallax.Page>
        <Parallax.Page ref={aboutPageRef} pageId={`about-page`}>
          <Parallax.Box keyframes={keyframes.about}>
            <Center
              flexDirection="column"
              h="100%"
              px={{ base: 8, md: 24 }}
              py={{ base: 6, md: 12 }}
              pos="relative"
            >
              <Box w="100%" maxW="50em">
                <Flex justify="space-between" align="center" my={2}>
                  <Heading size="lg">About</Heading>
                  {about?.resume?.url && (
                    <Button
                      onClick={() => {
                        window.open(about?.resume?.url, "_blank");
                      }}
                      colorScheme="secondary"
                      variant="outline"
                      size="md"
                    >
                      View Resume
                    </Button>
                  )}
                </Flex>
                <RichtextViewer
                  value={about.description}
                  defaultValue={createDefaultNode("Tell us all about you")}
                />
              </Box>
            </Center>
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
                <Center h="100%" p={{ base: 0, md: 24 }} pos="relative">
                  <Box w="100%" h="100%" overflow="hidden">
                    <Parallax.Box keyframes={keyframes.image} h="100%" w="100%">
                      <Media
                        media={media}
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
                    tabIndex={0}
                    onClick={() => {
                      history.push(`/projects/${project.id}`);
                    }}
                    keyframes={keyframes.projectTitle}
                  >
                    <Heading
                      p={4}
                      backgroundColor="secondary.400"
                      size="3xl"
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
        <Parallax.Page ref={contactPageRef} pageId={`contact-page`}>
          <Parallax.Box keyframes={keyframes.contact}>
            <ContactSection />
          </Parallax.Box>
        </Parallax.Page>
      </Parallax>
      <AnimatePresence exitBeforeEnter initial={false}>
        <Switch location={location} key={location.pathname}>
          <Route path="/projects/:id" component={ProjectPage} />
        </Switch>
      </AnimatePresence>
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
