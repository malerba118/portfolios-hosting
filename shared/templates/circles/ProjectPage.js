import {
  Heading,
  Box,
  Center,
  SimpleGrid,
  Stack,
  IconButton,
  AspectRatio,
} from "@chakra-ui/react";
import { MotionBox, transitions } from "shared/components/animation";
import Parallax from "shared/components/animation/Parallax";
import DateViewer from "shared/components/DateViewer";
import Entrance from "shared/components/Entrance";
import { usePortfolio } from "shared/components/PortfolioProvider";
import RichtextViewer from "./RichtextViewer";
import { IoMdReturnLeft } from "react-icons/io";
import { useLightbox } from "shared/components/Lightbox";
import { useEffect } from "react";
import { variants } from "./styles";
import Media from "shared/components/Media";
import { withRouter } from "next/router";
import { useHistory } from "react-router-dom";
import CircularCard from "./CircularCard";

const keyframes = {
  intro: ({ page }) => ({
    [page.y]: {
      opacity: 1,
      y: 0,
      scale: 1,
    },
    [page.y + page.height]: {
      opacity: 0,
      y: 170,
      scale: 0.8,
    },
  }),
  circleImage: ({ page, container }) => ({
    [page.y - container.height * 1.25]: {
      rotate: "25deg",
      scale: 1,
    },
    [page.y]: {
      rotate: "0deg",
      scale: 1.6,
    },
    [page.y + container.height * 1.25]: {
      rotate: "-25deg",
      scale: 2.2,
    },
  }),
  description: ({ page, container }) => ({
    [page.y - container.height * 0.5]: {
      opacity: 0,
      skewY: "4deg",
      scale: 0.95,
      y: 175,
    },
    [page.y]: {
      opacity: 1,
      skewY: "0deg",
      scale: 1,
      y: 0,
    },
  }),
  gallery: ({ page, container }) => ({
    [page.y - container.height]: {
      opacity: 0,
      skewY: "4deg",
      scale: 0.8,
      y: 200,
    },
    [page.y < 1 ? page.y : 1]: {
      opacity: 1,
      skewY: "0deg",
      scale: 1,
      y: 0,
    },
  }),
};

const ProjectPage = ({ project }) => {
  const lightbox = useLightbox();
  const history = useHistory();

  useEffect(() => {
    const medias = project.images.items;
    if (medias) {
      lightbox.setItems(medias);
    }
  }, []);

  if (!project) {
    return null;
  }
  const media = project.images.items[0];
  return (
    <Box h="var(--app-height)" bg="primary.50">
      <Parallax h="100%">
        <Parallax.Page
          h="var(--app-height)"
          pageId="project-intro"
          keyframes={keyframes.intro}
        >
          <Center h="100%" pos="relative">
            <CircularCard
              text={project.name}
              src={media?.processedUrl || media?.rawUrl}
              radius={Math.min(window.innerHeight, window.innerWidth) / 2 - 24}
              onClick={() => {
                lightbox.open({ id: media.id });
              }}
              imageKeyframes={keyframes.circleImage}
            />
          </Center>
        </Parallax.Page>
        <Parallax.Page
          pageId="project-description"
          p={{ base: 8, md: 24 }}
          keyframes={keyframes.description}
        >
          <Box m="0 auto" w="100%" maxW="50em">
            <Stack mb={3} spacing={1}>
              {project.summary && (
                <Heading size="lg">{project.summary}</Heading>
              )}
              {(project.startDate || project.endDate) && (
                <Heading color="primary.600" size="md">
                  <DateViewer
                    startDate={project.startDate}
                    endDate={project.endDate}
                  />
                </Heading>
              )}
            </Stack>
            <RichtextViewer value={project.description} />
          </Box>
        </Parallax.Page>
        <Parallax.Page
          pageId="project-gallery"
          keyframes={keyframes.gallery}
          p={{ base: 6 }}
          m="0 auto"
          w="100%"
          maxW="50em"
        >
          <SimpleGrid
            columns={{ base: 1, md: 2 }}
            spacing={{ base: 6, md: 12 }}
          >
            {project.images.items.map((media) => (
              <AspectRatio
                key={media.id}
                width="100%"
                ratio={1 / 1}
                transform="translateZ(0)"
              >
                <Media
                  media={media}
                  width="100%"
                  height="100%"
                  cursor="pointer"
                  onClick={() => {
                    lightbox.open({ id: media.id });
                  }}
                  variants={{
                    image: variants.image,
                  }}
                  borderRadius="100%"
                />
              </AspectRatio>
            ))}
          </SimpleGrid>
        </Parallax.Page>
      </Parallax>
      <IconButton
        onClick={() => {
          history.push({ pathname: "/", state: { noScroll: true } });
        }}
        pos="absolute"
        top={4}
        left={4}
        // color="primary.900"
        icon={<IoMdReturnLeft />}
      />
    </Box>
  );
};

export default withRouter(ProjectPage);
