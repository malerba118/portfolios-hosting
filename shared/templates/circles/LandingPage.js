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
  useBreakpoint,
} from "@chakra-ui/react";
import ArcText from "shared/components/ArcText";
import Parallax from "shared/components/animation/Parallax";
import Logo from "shared/components/Logo";
import RichtextViewer from "./RichtextViewer";
import Link from "shared/components/Link";
import ScrollRoute from "./ScrollRoute";
import ProjectPage from "./ProjectPage";
import { AnimatePresence } from "framer-motion";
import { createDefaultNode } from "shared/components/RichtextViewer";
import Media from "shared/components/Media";
import MotionImage from "shared/components/MotionImage";
import CircularCard from "./CircularCard";

const keyframes = {
  circleText: ({ page, container }) => ({
    [page.y - container.height * 1.25]: {
      rotate: "-45deg",
    },
    [page.y]: {
      rotate: "0deg",
    },
    [page.y + container.height * 1.25]: {
      rotate: "45deg",
    },
  }),
  circleImage: ({ page, container }) => ({
    [page.y - container.height * 1.25]: {
      rotate: "-13deg",
      scale: 1,
    },
    [page.y]: {
      rotate: "0deg",
      scale: 1.6,
    },
    [page.y + container.height * 1.25]: {
      rotate: "-13deg",
      scale: 2.2,
    },
  }),
};

function LandingPage() {
  const introPageRef = useRef(null);
  const firstProjectRef = useRef(null);
  const history = useHistory();
  const location = useLocation();
  const portfolio = usePortfolio();
  const breakpoint = useBreakpoint("base");

  const fonts = useFonts([
    portfolio.data.templateSettings.headingFont,
    portfolio.data.templateSettings.paragraphFont,
  ]);

  if (fonts.isLoading) {
    return null;
  }

  const { about, projects, contact } = portfolio.data.content;

  const profileMedia = about.images.items[0];

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
        path="/work"
        exact
        onMatch={(match) => {
          if (match) {
            firstProjectRef.current.scrollIntoView();
          }
        }}
      />
      <Parallax h="100vh">
        <Parallax.Page ref={introPageRef} pageId="intro-page">
          <Box h="100%">
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
                <Link to="/work" showUnderline color="secondary.400">
                  <Heading color="secondary.400" size="xs">
                    Work
                  </Heading>
                </Link>
                <Link to="/contact" showUnderline color="secondary.400">
                  <Heading color="secondary.400" size="xs">
                    Contact
                  </Heading>
                </Link>
              </HStack>
            </Flex>
            <Box width="100%" maxW="900px" margin="0 auto">
              <CircularCard
                text={
                  about.firstName + " " + about.lastName + " • " + about.title
                }
                src={profileMedia?.processedUrl || profileMedia?.rawUrl}
                radius={breakpoint === "base" ? 180 : 280}
                degreePerChar={9}
                onClick={() => {
                  history.push(`/about`);
                }}
              />
              {/* <Stack
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
                      history.push("/work");
                    }}
                    colorScheme="secondary"
                    variant="outline"
                  >
                    See Work
                  </Button>
                </HStack>
              </Stack> */}
            </Box>
          </Box>
        </Parallax.Page>
        {/* <Parallax.Page ref={aboutPageRef} pageId={`about-page`}>
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
        </Parallax.Page> */}
        {portfolio.data.content.projects.map((project, i) => {
          const media = project.images.items[0];
          return (
            <Parallax.Page
              key={i}
              ref={i === 0 ? firstProjectRef : null}
              pageId={`project-${i}`}
            >
              <Flex
                width="100%"
                maxW="900px"
                margin="0 auto"
                justifyContent={i % 2 === 0 ? "flex-end" : "flex-start"}
              >
                <Parallax.Box
                  display="inline-block"
                  pos="relative"
                  keyframes={keyframes.circle}
                >
                  <CircularCard
                    text={project.name}
                    src={media?.processedUrl || media?.rawUrl}
                    radius={breakpoint === "base" ? 150 : 250}
                    degreePerChar={10}
                    onClick={() => {
                      history.push(`/work/${project.id}`);
                    }}
                  />
                </Parallax.Box>
              </Flex>
            </Parallax.Page>
          );
        })}
        {/* <Parallax.Page ref={contactPageRef} pageId={`contact-page`}>
          <Parallax.Box keyframes={keyframes.contact}>
            <ContactSection />
          </Parallax.Box>
        </Parallax.Page> */}
      </Parallax>
      {/* <AnimatePresence exitBeforeEnter initial={false}>
        <Switch location={location} key={location.pathname}>
          <Route path="/work/:id" component={ProjectPage} />
        </Switch>
      </AnimatePresence> */}
    </>
  );
}

export default LandingPage;
