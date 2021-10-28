import React, { useEffect } from "react";
import Page from "./Page";
import { Heading, Stack } from "@chakra-ui/react";
import MotionImage from "shared/components/MotionImage";
import Entrance from "shared/components/Entrance";
import { MotionBox, transitions } from "shared/components/animation";
import RichtextViewer from "shared/components/RichtextViewer";
import { variants } from "./styles";
import { Redirect, useHistory } from "react-router-dom";
import { useLightbox } from "shared/components/Lightbox";
import Gallery from "react-photo-gallery";

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
      variants={{ image: variants.image }}
      key={key}
      style={imgStyle}
      {...photo}
      onClick={handleClick}
      loading="lazy"
    />
  );
};

const ProjectPage = ({ project }) => {
  const history = useHistory();
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

  return (
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
          onClick={(event) => {
            lightbox.open({ id: media.id });
          }}
          cursor="pointer"
        />
      )}
      <Stack
        p={{ base: 6, md: 16 }}
        margin="0 auto"
        maxWidth="900px"
        pos="relative"
        spacing={12}
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
        <Entrance>
          <Gallery
            photos={project.images.items.map((media, i) => ({
              id: media.id,
              src: media.processedUrl || media.rawUrl,
              width: media.width,
              height: media.height,
            }))}
            renderImage={Photo}
          />
        </Entrance>
      </Stack>
    </Page>
  );
};

export default ProjectPage;
