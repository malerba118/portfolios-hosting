import {
  Heading,
  Box,
  Center,
  SimpleGrid,
  CloseButton,
  IconButton,
  Button,
  HStack,
  Icon,
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
import { ExternalLinkIcon } from "@chakra-ui/icons";
import { CgExternal } from "react-icons/cg";

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
    [page.y + container.height * 1]: {
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
    [page.y < 1 ? page.y : 1.0001]: {
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
    <Box h="100vh" bg="primary.50">
      <Parallax h="100%">
        <Parallax.Page
          h="100vh"
          pageId="about-intro"
          keyframes={keyframes.intro}
        >
          <Center h="100%" pos="relative">
            <CircularCard
              text={
                about.firstName + " " + about.lastName + " • " + about.title
              }
              src={media?.processedUrl || media?.rawUrl}
              radius={window.innerHeight / 2 - 50}
              onClick={() => {
                lightbox.open({ id: media.id });
              }}
              imageKeyframes={keyframes.circleImage}
            />
          </Center>
        </Parallax.Page>
        <Parallax.Page
          pageId="about-description"
          p={{ base: 8, md: 24 }}
          keyframes={keyframes.description}
        >
          <Box m="0 auto" w="100%" maxW="50em">
            <Heading size="lg" mb={3}>
              {about.summary}
            </Heading>
            <RichtextViewer value={about.description} />
          </Box>
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
      {about?.resume?.url && (
        <Button
          onClick={() => {
            window.open(about?.resume?.url, "_blank");
          }}
          colorScheme="secondary"
          variant="solid"
          size="sm"
          pos="absolute"
          bottom={4}
          right={4}
        >
          Resume <Icon fontSize="xl" as={CgExternal} />
        </Button>
      )}
    </Box>
  );
};

export default withRouter(AboutPage);
