import React, { useRef } from "react";
import { Box, Center } from "@chakra-ui/react";
import ArcText from "shared/components/ArcText";
import Parallax from "shared/components/animation/Parallax";
import MotionImage from "shared/components/MotionImage";

const keyframes = {
  circleText: ({ page, container }) => ({
    [page.y - container.height * 1.25]: {
      rotate: "-45deg",
    },
    [page.y]: {
      rotate: "0deg",
    },
    [page.y + container.height * 1.25]: {
      rotate: "45deg",
    },
  }),
  circleImage: ({ page, container }) => ({
    [page.y - container.height * 1.25]: {
      rotate: "-13deg",
      scale: 1,
    },
    [page.y]: {
      rotate: "0deg",
      scale: 1.6,
    },
    [page.y + container.height * 1.25]: {
      rotate: "-13deg",
      scale: 2.2,
    },
  }),
};

const CircularCard = ({
  text,
  src,
  radius = 100,
  degreePerChar,
  onClick,
  textKeyframes = keyframes.circleText,
  imageKeyframes = keyframes.circleImage,
}) => {
  return (
    <Center
      pos="relative"
      width={radius * 2}
      height={radius * 2}
      borderRadius="100%"
      onClick={onClick}
      overflow="hidden"
    >
      <Parallax.Box keyframes={textKeyframes} pos="absolute" inset={0}>
        <ArcText
          text={text}
          fontSize="2rem"
          radius={radius}
          degreePerChar={degreePerChar}
        />
      </Parallax.Box>
      <Box
        width={`calc(${radius * 2}px - 6rem)`}
        height={`calc(${radius * 2}px - 6rem)`}
        borderRadius="100%"
        overflow="hidden"
        transform="translateZ(0)"
      >
        <Parallax.Box width={"100%"} height={"100%"} keyframes={imageKeyframes}>
          <MotionImage
            display="inline-block"
            src={src}
            width={"100%"}
            height={"100%"}
          />
        </Parallax.Box>
      </Box>
    </Center>
  );
};

export default CircularCard;
