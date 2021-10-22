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
      <Parallax h="var(--app-height)">
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
            </Box>
          </Box>
        </Parallax.Page>
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
      </Parallax>
    </>
  );
}

export default LandingPage;
