import {
  Heading,
  Box,
  Center,
  SimpleGrid,
  CloseButton,
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
    [page.y < 1 ? page.y : 1]: {
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

const AboutPage = ({ about }) => {
  const lightbox = useLightbox();
  const history = useHistory();

  useEffect(() => {
    const medias = about.images.items;
    if (medias) {
      lightbox.setItems(medias);
    }
  }, []);

  const media = about.images.items[0];
  return (
    <Box
      // initial={{ opacity: 0, scale: 1.1 }}
      // animate={{ opacity: 1, scale: 1, transition: transitions.two(0.5) }}
      // exit={{ opacity: 0, scale: 0.85, transition: transitions.two(0.5) }}
      h="100vh"
      bg="primary.50"
    >
      <Parallax h="100%">
        <Parallax.Page
          h="100vh"
          pageId="about-intro"
          keyframes={keyframes.intro}
        >
          <Center h="100%" pos="relative">
            <CircularCard
              text={about.firstName + " " + about.lastName}
              src={media?.processedUrl || media?.rawUrl}
              radius={window.innerHeight / 2 - 50}
              onClick={() => {
                lightbox.open({ id: media.id });
              }}
              imageKeyframes={keyframes.circleImage}
            />
            {/* <Media
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
            /> */}
          </Center>
          {/* <Center flexDirection="column" pos="absolute" inset={0}>
            <Parallax.Box keyframes={keyframes.introBanner} boxShadow="xl">
              <Box p={4} backgroundColor="secondary.400">
                <Heading
                  size="4xl"
                  color="primary.50"
                  textTransform="uppercase"
                  textAlign="center"
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
          </Center> */}
        </Parallax.Page>
        <Parallax.Page
          pageId="about-description"
          p={{ base: 8, md: 24 }}
          keyframes={keyframes.description}
        >
          <Box m="0 auto" w="100%" maxW="50em">
            {about.summary && (
              <Heading size="lg" mb={3}>
                {about.summary}
              </Heading>
            )}
            <RichtextViewer value={about.description} />
          </Box>
        </Parallax.Page>
        {/* <Parallax.Page
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
        </Parallax.Page> */}
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

export default withRouter(AboutPage);
