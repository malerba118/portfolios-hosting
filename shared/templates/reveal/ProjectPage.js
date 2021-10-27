import React, { useState } from "react";
import Page from "./Page";
import { Heading, Box } from "@chakra-ui/react";
import MotionImage from "shared/components/MotionImage";
import Entrance from "shared/components/Entrance";
import { MotionBox, transitions } from "shared/components/animation";
import RichtextViewer from "shared/components/RichtextViewer";
import { variants } from "./styles";
import { useHistory } from "react-router-dom";

const ProjectPage = ({ project }) => {
  const history = useHistory();
  const media = project.images.items[0];
  return (
    // <Page
    //   title={project.name}
    //   onClose={() => {
    //     history.push("/work");
    //   }}
    // >
    //   <MotionBox
    //     initial={{ opacity: 0, y: 0 }}
    //     animate={{ opacity: 1, y: 0, transition: transitions.two(0.6) }}
    //     exit={{ opacity: 0 }}
    //   >
    //     <MotionImage
    //       src={media?.processedUrl || media?.rawUrl || "/image-unavailable.svg"}
    //       width="100%"
    //       height="380"
    //       variants={{
    //         image: variants.image,
    //       }}
    //     />
    //     <Stack p={8}>
    //       <Entrance initialY={40} initialOpacity={0}>
    //         <Heading fontSize="3xl">{project.name}</Heading>
    //       </Entrance>
    //       <Entrance initialY={30} initialOpacity={0} delay={0.1}>
    //         <Heading color="gray.700" fontSize="lg">
    //           {project.summary}
    //         </Heading>
    //       </Entrance>
    //       <Entrance initialY={12} initialOpacity={0} delay={0.45}>
    //         <RichtextViewer value={project.description} />
    //       </Entrance>
    //     </Stack>
    //   </MotionBox>
    // </Page>

    <Page
      title={project.name}
      onClose={() => {
        history.push("/work");
      }}
    >
      {media && (
        <MotionImage
          // mb={{ base: 0, md: 8 }}
          src={media?.processedUrl || media?.rawUrl}
          alt={media?.name}
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
          <Heading size="xl">{project.name}</Heading>
          <Heading size="md">{project.summary}</Heading>
          <RichtextViewer value={project.description} />
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

export default ProjectPage;
