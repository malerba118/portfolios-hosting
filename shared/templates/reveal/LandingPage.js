import React, { useState, useEffect, useRef } from "react";
import {
  Box,
  Heading,
  Flex,
  Text,
  Center,
  useBreakpoint,
  HStack,
  Stack,
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
import Page from "./Page";
import { variants } from "./styles";
import MotionImage from "shared/components/MotionImage";

const LandingPage = () => {
  const portfolio = usePortfolio();
  let { about, projects } = portfolio.data.content;
  const profileMedia = about.images.items[0];
  const firstProjectMedia = projects?.[0]?.images?.items?.[0];
  const [activeImage, setActiveImage] = useState({
    src: profileMedia?.processedUrl || profileMedia?.rawUrl,
    alt: profileMedia?.name,
  });

  return (
    <Page>
      <Center pos="absolute" inset={0}>
        <HStack spacing={24}>
          <Stack py={12} spacing={8} flex={1}>
            <Link
              to="/about"
              width="fit-content"
              showUnderline
              underlineWidth="4px"
              onMouseEnter={() => {
                setActiveImage({
                  src: profileMedia?.processedUrl || profileMedia?.rawUrl,
                  alt: profileMedia?.name,
                });
              }}
            >
              <Heading size="3xl" display="inline">
                About
              </Heading>
            </Link>
            <Link
              to="/work"
              width="fit-content"
              showUnderline
              underlineWidth="4px"
              onMouseEnter={() => {
                setActiveImage({
                  src:
                    firstProjectMedia?.processedUrl ||
                    firstProjectMedia?.rawUrl,
                  alt: firstProjectMedia?.name,
                });
              }}
            >
              <Heading size="3xl" w="min-content" display="inline">
                Work
              </Heading>
            </Link>
            <Link
              to="/contact"
              width="fit-content"
              showUnderline
              underlineWidth="4px"
              onMouseEnter={() => {
                setActiveImage({
                  src: "/templates/reveal/contact-photo.jpg",
                  alt: "Corded Phone",
                });
              }}
            >
              <Heading size="3xl" w="min-content" display="inline">
                Contact
              </Heading>
            </Link>
            <Link width="fit-content" showUnderline underlineWidth="4px">
              <Heading size="3xl" display="inline">
                Resume
              </Heading>
            </Link>
          </Stack>
          <Box
            display={{ base: "none", md: "block" }}
            pos="relative"
            alignSelf="stretch"
            w="380px"
            bg="primary.100"
          >
            <AnimatePresence>
              <MotionImage
                key={activeImage?.src}
                src={activeImage?.src}
                alt={activeImage?.alt}
                h="100%"
                w="100%"
                pos="absolute"
                overlay={null}
                exit={{ opacity: 0, transition: transitions.one(0.8) }}
                variants={{
                  image: variants.image,
                  container: variants.container,
                }}
              />
            </AnimatePresence>
          </Box>
        </HStack>
        <Heading
          pos="absolute"
          left={3}
          top={2}
          style={{
            // writingMode: "vertical-lr",
            // transform: "rotate(0deg)",
            textTransform: "uppercase",
          }}
          fontSize=".8rem"
          letterSpacing="1px"
        >
          Austin Malerba
        </Heading>
        <Heading
          pos="absolute"
          right={3}
          bottom={2}
          style={{
            // writingMode: "vertical-lr",
            // transform: "rotate(180deg)",
            textTransform: "uppercase",
          }}
          fontSize=".8rem"
          letterSpacing="1px"
        >
          Software Engineer
        </Heading>
      </Center>
    </Page>
  );
};

export default LandingPage;
