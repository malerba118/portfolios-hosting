import React, { useState, useEffect } from "react";
import { Box, Heading, Flex, Center, useBreakpoint } from "@chakra-ui/react";
import { MotionBox } from "shared/components/animation";
import MotionImage from "shared/components/MotionImage";
import RichtextViewer, { isEmpty } from "shared/components/RichtextViewer";
import Toolbar from "./Toolbar";
import { Redirect } from "react-router-dom";
import Parallax from "shared/components/animation/Parallax";
import { useLightbox } from "shared/components/Lightbox";
import Media from "shared/components/Media";
import DateViewer from "shared/components/DateViewer";
import { variants } from "./styles";

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
    [Math.min(page.y, 1)]: {
      y: 0,
    },
    [Math.min(page.y + page.height, 1.5)]: {
      y: -20,
    },
  }),
};

const ProjectPage = ({ project }) => {
  const lightbox = useLightbox();
  const breakpoint = useBreakpoint("base");

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
    <Parallax
      h="var(--app-height)"
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
            size="3xl"
            textTransform="uppercase"
            color="white"
            textShadow="2px 4px 0px var(--chakra-colors-primary-200), 4px 8px 0px var(--chakra-colors-primary-300)"
            textAlign="center"
            pb="10px"
          >
            {project.name}
          </Heading>

          {(project.startDate || project.endDate) && (
            <Heading
              size="lg"
              textTransform="uppercase"
              color="white"
              textShadow="1px 3px 0px var(--chakra-colors-primary-200), 2px 6px 0px var(--chakra-colors-primary-300)"
              textAlign="center"
            >
              <DateViewer
                startDate={project.startDate}
                endDate={project.endDate}
              />
            </Heading>
          )}
        </Parallax.Box>
      </Parallax.Page>
      <Parallax.Page keyframes={keyframes.about} pageId="about">
        <Box p={{ base: 8, md: 16 }} maxWidth="900" margin="0 auto">
          {project.summary && (
            <Heading size="lg" my={6}>
              {project.summary}
            </Heading>
          )}
          {isDescription && <RichtextViewer value={project.description} />}
        </Box>
      </Parallax.Page>
      {project.images.items.map((media, i) => {
        return (
          <Parallax.Page
            keyframes={keyframes.media}
            h={
              breakpoint === "base"
                ? "calc(var(--app-height) * .5)"
                : "calc(var(--app-height) * .8)"
            }
            pageId={"media-" + media.id}
            key={media.id}
          >
            <Center h="100%" w="100%">
              <Media
                media={media}
                maxHeight="90%"
                width={{ base: "100%", md: "66%" }}
                left={i % 2 === 0 ? 0 : undefined}
                right={i % 2 !== 0 ? 0 : undefined}
                m={{ base: 0, md: 16 }}
                bg="primary.50"
                position="absolute"
                cursor="pointer"
                onClick={() => {
                  lightbox.open({ id: media.id });
                }}
                variants={{
                  image: variants.image,
                }}
                boxShadow="2px 2px 0px 0px var(--chakra-colors-primary-100), 4px 4px 0px 0px var(--chakra-colors-primary-200)"
                // borderRadius="4px"
              />
            </Center>
          </Parallax.Page>
        );
      })}
    </Parallax>
  );
};

export default ProjectPage;
