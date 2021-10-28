import React, { useState, useEffect } from "react";
import {
  Box,
  Heading,
  Flex,
  Center,
  Stack,
  Collapse,
  Button,
} from "@chakra-ui/react";
import Gallery from "react-photo-gallery";
import { MotionBox } from "shared/components/animation";
import MotionImage from "shared/components/MotionImage";
import RichtextViewer, { isEmpty } from "shared/components/RichtextViewer";
import Toolbar from "./Toolbar";
import { Redirect } from "react-router-dom";
import Parallax from "shared/components/animation/Parallax";
import { useLightbox } from "shared/components/Lightbox";
import Media from "shared/components/Media";
import { variants } from "./styles";
import DateViewer from "shared/components/DateViewer";

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
      y: 100,
    },
  }),
  about: ({ page, container }) => ({
    [page.y]: {
      y: 0,
    },
    [page.y + page.height]: {
      y: 50,
    },
  }),
  media: ({ page, container }) => ({
    [page.y - container.height]: {
      y: 100,
    },
    [page.y]: {
      y: 0,
    },
    [page.y + page.height]: {
      y: -20,
    },
  }),
};

const Photo = ({
  index,
  onClick,
  photo,
  margin,
  direction,
  top,
  left,
  key,
}) => {
  const imgStyle = {
    margin: margin,
    display: "block",
    objectFit: "cover",
    cursor: "pointer",
  };
  if (direction === "column") {
    imgStyle.position = "absolute";
    imgStyle.left = left;
    imgStyle.top = top;
  }
  const lightbox = useLightbox();

  const handleClick = (event) => {
    lightbox.open({ id: photo.id });
  };

  return (
    <MotionImage
      key={key}
      style={imgStyle}
      {...photo}
      onClick={handleClick}
      loading="lazy"
    />
  );
};

const ProjectPage = ({ project }) => {
  const lightbox = useLightbox();

  useEffect(() => {
    const medias = project?.images?.items;
    if (medias) {
      lightbox.setItems(medias);
    }
  }, []);

  if (!project) {
    return <Redirect to="/" />;
  }

  const media = project.images.items[0];
  const isDescription = !isEmpty(project.description);
  return (
    <Box h="100vh" overflow="auto">
      <Box pos="relative">
        <Toolbar />
        <Stack
          px={{ base: 4, md: 16 }}
          pt={{ base: 0, md: 8 }}
          spacing={3}
          maxW="1000px"
          margin="0 auto"
        >
          <Heading size="3xl">{project.name}</Heading>
          {(project.startDate || project.endDate) && (
            <Heading color="primary.600" size="lg">
              <DateViewer
                startDate={project.startDate}
                endDate={project.endDate}
              />
            </Heading>
          )}
          <Box>
            {isDescription && <RichtextViewer value={project.description} />}
          </Box>
        </Stack>
      </Box>
      <Box
        p={{ base: 4, md: 16 }}
        pt={{ base: 6, md: 6 }}
        maxW="1000px"
        margin="0 auto"
      >
        <Gallery
          photos={project.images.items.map((media, i) => ({
            id: media.id,
            src: media.processedUrl || media.rawUrl,
            width: media.width,
            height: media.height,
          }))}
          renderImage={Photo}
        />
      </Box>
    </Box>
  );
};

export default ProjectPage;
