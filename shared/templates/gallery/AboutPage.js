import React, { useState, useEffect } from "react";
import { Box, Heading, Flex, Stack, Grid, HStack } from "@chakra-ui/react";
import { MotionBox } from "shared/components/animation";
import MotionImage from "shared/components/MotionImage";
import RichtextViewer, { isEmpty } from "shared/components/RichtextViewer";
import Toolbar from "./Toolbar";
import Media from "shared/components/Media";

const AboutPage = ({ about }) => {
  const media = about.images.items[0];
  const isDescription = !isEmpty(about.description);
  return (
    <Box h="100vh" overflow="auto">
      <Toolbar />
      <Grid
        templateColumns={{ base: "1fr", md: "1fr 1fr" }}
        templateRows={{ base: "auto 1fr", md: "1fr" }}
        px={{ base: 8, md: 16 }}
        pb={{ base: 8, md: 16 }}
        pt={{ base: 0, md: 8 }}
        gap={6}
        maxW="1000px"
        margin="0 auto"
      >
        <Box gridRow={{ base: 1, md: 1 }} gridColumn={{ base: 1, md: 2 }}>
          <Media minH="400px" maxH="600px" h="100%" media={media} />
        </Box>
        <Box gridRow={{ base: 2, md: 1 }} gridColumn={{ base: 1, md: 1 }}>
          <Stack flex={1} spacing={3}>
            <Heading size="3xl">
              {about.firstName} {about.lastName}
            </Heading>
            <Heading color="primary.600" size="xs">
              {about.title}
            </Heading>
            <Box>
              {isDescription && <RichtextViewer value={about.description} />}
            </Box>
          </Stack>
        </Box>
      </Grid>
      {/* <Box p={{ base: 8, md: 16 }} pt={{ base: 6, md: 6 }}>
        <Gallery
          photos={about.images.items.map((media, i) => ({
            id: media.id,
            src: media.processedUrl || media.rawUrl,
            width: media.width,
            height: media.height,
          }))}
          renderImage={Photo}
        />
      </Box> */}
    </Box>
  );
};

export default AboutPage;
