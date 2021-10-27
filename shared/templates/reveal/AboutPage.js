import React, { useState } from "react";
import Page from "./Page";
import { Box, Heading, Stack, Center } from "@chakra-ui/react";
import MotionImage from "shared/components/MotionImage";
import Entrance from "shared/components/Entrance";
import RichtextViewer from "shared/components/RichtextViewer";
import { variants } from "./styles";
import { useHistory } from "react-router-dom";
import { MotionBox, transitions } from "shared/components/animation";

const AboutPage = ({ about }) => {
  const media = about.images.items[0];
  const history = useHistory();

  return (
    <Page id="about" title="About" onClose={() => history.push("/")}>
      {media && (
        <MotionImage
          // mb={{ base: 0, md: 8 }}
          src={media.processedUrl || media.rawUrl}
          width="100%"
          height={{ base: 500, xl: 800 }}
          variants={{
            image: variants.image,
          }}
        />
      )}
      <Box
        p={{ base: 6, md: 16 }}
        margin="0 auto"
        maxWidth="900px"
        pos="relative"
      >
        <Entrance
          overflow="visible"
          initialY={12}
          initialOpacity={0}
          delay={0}
          duration={0.5}
        >
          <Heading size="xl">{about.summary}</Heading>
          <RichtextViewer value={about.description} />
          {/* <MotionBox
                pointerEvents="none"
                pos="absolute"
                inset={0}
                animate={{
                  background: [
                    "linear-gradient(rgba(253, 238, 231, 1), rgba(253, 238, 231, 1))",
                    "linear-gradient(rgba(253, 238, 231, 0), rgba(253, 238, 231, 1))",
                    "linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0))",
                  ],
                  transition: transitions.one(0.66),
                }}
              /> */}
        </Entrance>
      </Box>
    </Page>
  );
};

export default AboutPage;
