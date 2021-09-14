import React, { useRef } from "react";
import useFonts from "shared/hooks/useFonts";
import {
  BrowserRouter as Router,
  useHistory,
  useRouteMatch,
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
  FormControl,
  FormLabel,
  Input,
  Textarea,
  Text,
} from "@chakra-ui/react";
import Parallax from "shared/components/animation/Parallax";
import Logo from "shared/components/Logo";
import MotionImage from "shared/components/MotionImage";
import RichtextViewer from "./RichtextViewer";
import Link from "shared/components/Link";
import ScrollRoute from "./ScrollRoute";

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
  const introPageRef = useRef(null);
  const aboutPageRef = useRef(null);
  const firstProjectRef = useRef(null);
  const contactPageRef = useRef(null);
  const history = useHistory();
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
        onMatch={(match) => {
          if (match) {
            aboutPageRef.current.scrollIntoView();
          }
        }}
      />
      <ScrollRoute
        path="/projects"
        onMatch={(match) => {
          if (match) {
            firstProjectRef.current.scrollIntoView();
          }
        }}
      />
      <ScrollRoute
        path="/contact"
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
              px={{ base: 12, md: 24 }}
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
                px={{ base: 12, md: 24 }}
                spacing={{ base: 3, md: 3 }}
              >
                <Heading maxW="800px" size="3xl" textTransform="uppercase">
                  {about.summary}
                </Heading>
                <Heading maxW="600px" size="sm" pb={2}>
                  {about.firstName + " " + about.lastName} • {about.title}
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
              px={{ base: 12, md: 24 }}
              py={{ base: 6, md: 12 }}
              pos="relative"
            >
              <Box w="100%" maxW="50em">
                <Flex justify="space-between" align="center" my={2}>
                  <Heading size="xl">About</Heading>
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
                <RichtextViewer value={about.description} />
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
        <Parallax.Page ref={contactPageRef} pageId={`contact-page`}>
          <Parallax.Box keyframes={keyframes.contact}>
            <Center minH="100vh" p={8}>
              <Stack
                as="form"
                fontSize="xl"
                spacing={{ base: 4, md: 6 }}
                p={1}
                w="100%"
                maxW="420px"
              >
                <Heading textAlign="start" size="2xl">
                  Drop a Note
                </Heading>
                <FormControl id="name">
                  <FormLabel as={Text}>Your Name</FormLabel>
                  <Input variant="filled" placeholder="Name" />
                </FormControl>
                <FormControl id="email">
                  <FormLabel as={Text}>Your Email</FormLabel>
                  <Input variant="filled" placeholder="Email" />
                </FormControl>
                <FormControl id="message">
                  <FormLabel as={Text}>Your Message for Me</FormLabel>
                  <Textarea variant="filled" placeholder="Message" />
                </FormControl>
                <Button colorScheme="secondary">Submit</Button>
              </Stack>
            </Center>
          </Parallax.Box>
        </Parallax.Page>
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
