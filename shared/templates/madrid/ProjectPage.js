import React, { useState, useEffect } from "react";
import { Box, Heading, Flex, Center } from "@chakra-ui/react";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import { MotionBox } from "shared/components/animation";
import MotionImage from "shared/components/MotionImage";
import RichtextViewer, { isEmpty } from "shared/components/RichtextViewer";
import Toolbar from "./Toolbar";
import { Redirect } from "react-router-dom";

const ProjectPage = ({ project }) => {
  if (!project) {
    return <Redirect to="/" />;
  }

  const media = project.images.items[0];
  const isDescription = !isEmpty(project.description);
  const pageSizes = {
    intro: 1,
    description: isDescription ? 1 : 0,
    images: project.images.items.length,
  };
  return (
    <Parallax
      pages={pageSizes.intro + pageSizes.description + pageSizes.images}
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
          backgroundImage: 'url("/templates/madrid/topography.svg")',
          backgroundBlendMode: "soft-light",
          backgroundSize: "30%",
          backgroundRepeat: "repeat",
        }}
      />
      <ParallaxLayer offset={0} speed={0.4}>
        <Flex flexDirection="column" pos="absolute" inset={0} bg="primary.50">
          <Toolbar />
          <MotionImage
            width={"100%"}
            hoverScale={1}
            flex={1}
            src={media?.processedUrl || media?.rawUrl}
          />
        </Flex>
      </ParallaxLayer>
      <ParallaxLayer speed={0} style={{ zIndex: 1, pointerEvents: "none" }}>
        <MotionBox
          initial="hidden"
          pos="absolute"
          top="70%"
          w="100%"
          textAlign="center"
        >
          <Heading
            size="4xl"
            textTransform="uppercase"
            color="white"
            textShadow="2px 4px 0px var(--chakra-colors-primary-200), 4px 8px 0px var(--chakra-colors-primary-300)"
            textAlign="center"
          >
            {project.name}
          </Heading>
        </MotionBox>
      </ParallaxLayer>
      <ParallaxLayer
        factor={pageSizes.description}
        offset={1}
        speed={0.2}
        style={{ overflow: "auto" }}
      >
        {isDescription && (
          <Box p={16} maxWidth="900" margin="0 auto">
            <RichtextViewer value={project.description} />
          </Box>
        )}
      </ParallaxLayer>
      {project.images.items.map((media, i) => {
        return (
          <ParallaxLayer
            key={project.id}
            offset={pageSizes.intro + pageSizes.description + i}
            speed={0.25}
          >
            <Center h="100%" w="100%">
              <MotionImage
                initialScale={1}
                src={
                  media?.processedUrl ||
                  media?.rawUrl ||
                  "/image-unavailable.jpg"
                }
                maxHeight="90%"
                width={{ base: "100%", md: "60%" }}
                left={i % 2 === 0 ? 0 : undefined}
                right={i % 2 !== 0 ? 0 : undefined}
                m={{ base: 0, md: 12 }}
                bg="primary.50"
                position="absolute"
                // boxShadow="lg"
              />
            </Center>
          </ParallaxLayer>
        );
      })}
    </Parallax>
  );
};

export default ProjectPage;
