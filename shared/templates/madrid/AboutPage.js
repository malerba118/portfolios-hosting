import React, { useState, useEffect } from "react";
import { Box, Heading, Flex, Button, HStack } from "@chakra-ui/react";
import { MotionBox } from "shared/components/animation";
import MotionImage from "shared/components/MotionImage";
import RichtextViewer from "shared/components/RichtextViewer";
import Toolbar from "./Toolbar";
import Parallax from "shared/components/animation/Parallax";

const keyframes = {
  introImage: ({ page }) => ({
    [page.y]: {
      y: 0,
    },
    [page.y + page.height]: {
      y: -180,
    },
  }),
  introTitle: ({ page }) => ({
    [page.y]: {
      y: 0,
    },
    [page.y + page.height]: {
      y: 50,
    },
  }),
  description: ({ page, container }) => ({
    [page.y]: {
      y: 0,
    },
    [page.y + page.height]: {
      y: 0,
    },
  }),
};

const AboutPage = ({ about }) => {
  const media = about.images.items[0];
  return (
    <Parallax
      height="var(--app-height)"
      style={{
        backgroundColor: "var(--chakra-colors-primary-100)",
        backgroundImage: 'url("/templates/madrid/topography.svg")',
        backgroundBlendMode: "soft-light",
        backgroundSize: "30%",
        backgroundRepeat: "repeat",
      }}
    >
      <Parallax.Page pageId="intro" h="var(--app-height)">
        <Parallax.Box keyframes={keyframes.introImage} h="100%">
          <Flex flexDirection="column" pos="absolute" inset={0} bg="primary.50">
            <Toolbar />
            <MotionImage
              width={"100%"}
              flex={1}
              src={media?.processedUrl || media?.rawUrl}
            />
          </Flex>
        </Parallax.Box>
        <Parallax.Box
          keyframes={keyframes.introTitle}
          pos="absolute"
          top="70%"
          w="100%"
          textAlign="center"
          zIndex={1}
          pointerEvents="none"
        >
          <Heading
            size="xl"
            textTransform="uppercase"
            color="white"
            textShadow="2px 4px 0px var(--chakra-colors-primary-200), 4px 8px 0px var(--chakra-colors-primary-300)"
            mb="4px"
          >
            Hi, I'm
          </Heading>
          <Heading
            size="3xl"
            textTransform="uppercase"
            color="white"
            textShadow="2px 4px 0px var(--chakra-colors-primary-200), 4px 8px 0px var(--chakra-colors-primary-300)"
            textAlign="center"
          >
            {about.firstName}
          </Heading>
        </Parallax.Box>
      </Parallax.Page>
      <Parallax.Page pageId="description" keyframes={keyframes.description}>
        <Box p={{ base: 8, md: 16 }} maxWidth="900" margin="0 auto">
          <HStack spacing="12px" alignItems="start" mb="20px">
            <Heading flex="1" size="md">
              {about.summary}
            </Heading>
            {about.resume && (
              <Button
                onClick={() => {
                  window.open(about?.resume?.url, "_blank");
                }}
                colorScheme="primary"
                variant="outline"
                size="sm"
                top="5px"
                pos="relative"
              >
                Resume
              </Button>
            )}
          </HStack>
          <RichtextViewer value={about.description} />
        </Box>
      </Parallax.Page>
    </Parallax>
  );
};

export default AboutPage;
