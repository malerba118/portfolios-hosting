import React, { useState } from "react";
import Page from "./Page";
import { Box, Heading, Stack, Center } from "@chakra-ui/react";
import MotionImage from "shared/components/MotionImage";
import Entrance from "shared/components/Entrance";
import RichtextViewer from "shared/components/RichtextViewer";
import { variants } from "./styles";

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
                variants={{
                  image: variants.image,
                }}
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
