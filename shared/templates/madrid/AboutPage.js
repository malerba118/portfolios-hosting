import React, { useState, useEffect } from "react";
import { Box, Heading, Flex } from "@chakra-ui/react";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import { MotionBox } from "shared/components/animation";
import MotionImage from "shared/components/MotionImage";
import RichtextViewer from "shared/components/RichtextViewer";
import Toolbar from "./Toolbar";

const AboutPage = ({ portfolio }) => {
  const { about } = portfolio.content;

  const media = about.images.items[0];
  return (
    <Parallax
      pages={2}
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
          // backgroundImage:
          //   'url("https://www.transparenttextures.com/patterns/food.png")',
          // backgroundBlendMode: "multiply",
          // backgroundSize: "25%",
          backgroundImage: 'url("/templates/madrid/topography.svg")',
          backgroundBlendMode: "soft-light",
          backgroundSize: "30%",
          backgroundRepeat: "repeat",
        }}
      />
      <ParallaxLayer offset={0} speed={0.4}>
        <Flex flexDirection="column" pos="absolute" inset={0} bg="primary.50">
          <Toolbar portfolio={portfolio} />
          <Flex flex={1}>
            <MotionImage
              width={{ base: "100%" }}
              height={{ base: "100%" }}
              src={media?.processedUrl || media?.rawUrl}
            />
          </Flex>
        </Flex>
      </ParallaxLayer>
      <ParallaxLayer speed={-0.1}>
        <MotionBox
          initial="hidden"
          pos="absolute"
          top="70%"
          w="100%"
          textAlign="center"
        >
          <Heading
            size="xl"
            textTransform="uppercase"
            color="white"
            textShadow="2px 4px 0px var(--chakra-colors-primary-200), 4px 8px 0px var(--chakra-colors-primary-300)"
          >
            Hi, I'm
          </Heading>
          <Heading
            size="4xl"
            textTransform="uppercase"
            color="white"
            textShadow="2px 4px 0px var(--chakra-colors-primary-200), 4px 8px 0px var(--chakra-colors-primary-300)"
            textAlign="center"
          >
            {about.firstName}
          </Heading>
        </MotionBox>
      </ParallaxLayer>
      <ParallaxLayer offset={1} speed={0.15}>
        <Box maxWidth="900" margin="0 auto">
          <RichtextViewer value={about.description} />
        </Box>
      </ParallaxLayer>
    </Parallax>
  );
};

export default AboutPage;
