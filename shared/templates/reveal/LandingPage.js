import React, { useState } from "react";
import { Box, Heading, Center, HStack, Stack } from "@chakra-ui/react";
import { AnimatePresence } from "framer-motion";
import { transitions } from "shared/components/animation";
import Link from "shared/components/Link";
import { usePortfolio } from "shared/components/PortfolioProvider";
import Page from "./Page";
import { variants } from "./styles";
import MotionImage from "shared/components/MotionImage";
import MediaLogo from "shared/components/MediaLogo";
import Logo from "shared/components/Logo";
import { useHistory } from "react-router";

const LandingPage = () => {
  const portfolio = usePortfolio();
  const history = useHistory();
  let { about, projects } = portfolio.data.content;
  const profileMedia = about.images.items[0];
  const firstProjectMedia = projects?.[0]?.images?.items?.[0];
  const [hoveredLink, setHoveredLink] = useState("about");

  const images = {
    about: {
      src: profileMedia?.processedUrl || profileMedia?.rawUrl,
      alt: profileMedia?.name,
    },
    work: {
      src: firstProjectMedia?.processedUrl || firstProjectMedia?.rawUrl,
      alt: firstProjectMedia?.name,
    },
    contact: {
      src: "/templates/reveal/contact.png",
      alt: "Mobile Phone",
    },
    resume: {
      src: "/templates/reveal/resume.png",
      alt: "Resume",
    },
  };

  const routes = {
    about: "/about",
    work: "/work",
    contact: "/contact",
    resume: about?.resume?.url,
  };

  const activeImage = images[hoveredLink] || {
    src: profileMedia?.processedUrl || profileMedia?.rawUrl,
    alt: profileMedia?.name,
  };

  return (
    <Page>
      <Center pos="absolute" inset={0}>
        <HStack spacing={24} transform="scale(.9)">
          <Stack py={12} spacing={8} flex={1}>
            <Link
              to="/about"
              width="fit-content"
              showUnderline
              underlineWidth="4px"
              onMouseEnter={() => {
                setHoveredLink("about");
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
                setHoveredLink("work");
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
                setHoveredLink("contact");
              }}
            >
              <Heading size="3xl" w="min-content" display="inline">
                Contact
              </Heading>
            </Link>
            {about?.resume?.url && (
              <Link
                to={about?.resume?.url}
                isExternal
                width="fit-content"
                showUnderline
                underlineWidth="4px"
                onMouseEnter={() => {
                  setHoveredLink("resume");
                }}
              >
                <Heading size="3xl" display="inline">
                  Resume
                </Heading>
              </Link>
            )}
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
                onClick={() => {
                  if (hoveredLink === "resume") {
                    window.open(routes[hoveredLink], "_blank");
                  } else if (routes[hoveredLink]) {
                    history.push(routes[hoveredLink]);
                  }
                }}
                cursor="pointer"
              />
            </AnimatePresence>
          </Box>
        </HStack>
        <Box pos="absolute" top={4} left={4}>
          <Link to={{ pathname: "/", state: { disableAnimations: true } }}>
            {portfolio.data.content.about.logo.items.length ? (
              <MediaLogo media={portfolio.data.content.about.logo.items[0]} />
            ) : (
              <Logo
                charOne={portfolio.data.content.about.firstName[0]}
                charTwo={portfolio.data.content.about.lastName[0]}
                color="primary.700"
              />
            )}
          </Link>
        </Box>
        <Heading
          pos="absolute"
          left={3}
          bottom={2}
          style={{
            // writingMode: "vertical-lr",
            // transform: "rotate(0deg)",
            textTransform: "uppercase",
          }}
          fontSize=".8rem"
          letterSpacing="1px"
        >
          {about.firstName} {about.lastName}
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
          {about.title}
        </Heading>
      </Center>
    </Page>
  );
};

export default LandingPage;
