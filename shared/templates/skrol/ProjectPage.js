import {
  Heading,
  Box,
  Center,
  SimpleGrid,
  CloseButton,
  IconButton,
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

const keyframes = {
  intro: ({ page }) => ({
    [page.y]: {
      skewY: "0deg",
      opacity: 1,
      y: 0,
      scale: 1,
    },
    [page.y + page.height]: {
      skewY: "13deg",
      opacity: 0,
      y: 150,
      scale: 0.7,
    },
  }),
  introBanner: ({ page }) => ({
    [page.y]: {
      y: "0vh",
      x: "0vw",
      scale: 0.8,
    },
    [page.y + page.height]: {
      y: "15vh",
      x: "-4vw",
      scale: 0.8,
    },
  }),
  description: ({ page, container }) => ({
    [page.y - container.height * 0.66]: {
      opacity: 0,
      y: 200,
    },
    [page.y]: {
      opacity: 1,
      y: 0,
    },
    [page.y + page.height]: {
      opacity: 1,
      y: -30,
    },
  }),
  gallery: ({ page, container }) => ({
    [page.y - container.height]: {
      opacity: 0,
      y: 150,
    },
    [page.y]: {
      opacity: 1,
      y: 0,
    },
  }),
};

const ProjectPage = ({ history, match }) => {
  const portfolio = usePortfolio();
  const lightbox = useLightbox();
  const project = portfolio.data.content.projects.find(
    (p) => p.id === match.params.id
  );

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
    <MotionBox
      initial={{ opacity: 0, scale: 1.1 }}
      animate={{ opacity: 1, scale: 1, transition: transitions.two(0.5) }}
      exit={{ opacity: 0, scale: 0.85, transition: transitions.two(0.5) }}
      pos="fixed"
      inset={0}
      bg="primary.50"
    >
      <Parallax h="100%">
        <Parallax.Page
          h="100vh"
          pageId="project-intro"
          keyframes={keyframes.intro}
        >
          <Center h="100%" pos="relative">
            <Media
              media={media}
              h="100%"
              w="100%"
              initialScale={1.1}
              objectFit="cover"
              cursor="pointer"
              onClick={() => {
                lightbox.open({ id: media.id });
              }}
              variants={{
                image: variants.image,
              }}
            />
          </Center>
          <Center flexDirection="column" pos="absolute" inset={0}>
            <Parallax.Box keyframes={keyframes.introBanner} boxShadow="xl">
              <Box p={4} backgroundColor="secondary.400">
                <Heading
                  size="4xl"
                  // color="primary.50"
                  textTransform="uppercase"
                  textAlign="center"
                  color="transparent"
                  style={{
                    WebkitTextStroke: "1px var(--chakra-colors-primary-100)",
                  }}
                >
                  {project.name}
                </Heading>
              </Box>
              {(project.startDate || project.endDate) && (
                <Box w="100%" p={4} backgroundColor="primary.50">
                  <Heading
                    size="xl"
                    color="secondary.400"
                    textTransform="uppercase"
                    textAlign="center"
                  >
                    <DateViewer
                      startDate={project.startDate}
                      endDate={project.endDate}
                    />
                  </Heading>
                </Box>
              )}
            </Parallax.Box>
          </Center>
        </Parallax.Page>
        <Parallax.Page
          pageId="project-description"
          p={{ base: 6, md: 24 }}
          keyframes={keyframes.description}
        >
          <Box m="0 auto" w="100%" maxW="50em">
            {project.summary && (
              <Heading size="lg" my={2}>
                {project.summary}
              </Heading>
            )}
            <RichtextViewer value={project.description} />
          </Box>
        </Parallax.Page>
        <Parallax.Page
          pageId="project-gallery"
          keyframes={keyframes.gallery}
          p={{ base: 0, md: 24 }}
        >
          <SimpleGrid
            columns={{ base: 1, md: 2 }}
            spacing={{ base: 6, md: 12 }}
          >
            {project.images.items.map((media) => (
              <Box key={media.id} height="400px">
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
                />
              </Box>
            ))}
          </SimpleGrid>
        </Parallax.Page>
      </Parallax>
      <IconButton
        onClick={() => {
          history.push({ pathname: "/work", state: { noScroll: true } });
        }}
        pos="absolute"
        top={4}
        left={4}
        // color="primary.900"
        icon={<IoMdReturnLeft />}
      />
    </MotionBox>
  );
};

export default ProjectPage;
