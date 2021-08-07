import React, { useState } from "react";
import Page from "./Page";
import {
  Box,
  Text,
  Heading,
  HStack,
  Flex,
  Stack,
  useBreakpoint,
  useEventListener,
  Center,
} from "@chakra-ui/react";
import { Grid, GridItem } from "./Grid";
import Media from "./Media";
import { AnimatePresence, AnimateSharedLayout, motion } from "framer-motion";
import MotionImage from "./components/MotionImage";
import ScrollReveal from "./components/ScrollReveal";
import Entrance from "./components/Entrance";
import { MotionBox, transitions } from "./components/animation";
import DateViewer from "./components/DateViewer";
import RichtextViewer from "shared/components/RichtextViewer";

const AboutPage = ({ about }) => {
  const media = about.images.items[0];

  return (
    <Page id="about" title="About">
      <Center>
        <Box maxWidth="800px" p={8}>
          <Stack flex={1} spacing={4}>
            {media && (
              <MotionImage
                src={media.processedUrl || media.rawUrl}
                width="100%"
                height="400"
                marginBottom={4}
              />
            )}
            <Entrance initialY={30} initialOpacity={0} delay={0.1}>
              <Heading color="gray.700" fontSize="xl">
                {about.summary}
              </Heading>
            </Entrance>
            <Entrance initialY={12} initialOpacity={0} delay={0.45}>
              <RichtextViewer value={about.description} />
            </Entrance>
          </Stack>
        </Box>
      </Center>
    </Page>
  );
};

export default AboutPage;
