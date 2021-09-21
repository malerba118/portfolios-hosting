import React, { useState } from "react";
import { Box, Image as CImage } from "@chakra-ui/react";
import { motion } from "framer-motion";
import {
  transitions,
  MotionImage as CMotionImage,
  MotionBox,
} from "./animation";

const MotionImage = ({
  src = "/image-unavailable.jpg",
  height,
  width,
  initialScale = 1,
  initialOpacity = 0,
  hoverScale = 1.05,
  onClick,
  cursor,
  bg = "primary.100",
  ...otherProps
}) => {
  const [status, setStatus] = useState("loading");

  return (
    <MotionBox
      cursor={cursor}
      onClick={onClick}
      overflow="hidden"
      height={height}
      width={width}
      initial={{ scale: initialScale, opacity: initialOpacity }}
      animate={{
        scale: status !== "loading" ? 1 : initialScale,
        opacity: status !== "loading" ? 1 : initialOpacity,
        transition: transitions.two(0.9),
      }}
      {...otherProps}
    >
      <CMotionImage
        h="100%"
        w="100%"
        objectFit="cover"
        initial={{ scale: (1 / initialScale) * 1.25 }}
        animate={{
          scale: status !== "loading" ? 1 : (1 / initialScale) * 1.25,
          transition: transitions.two(0.9),
        }}
        whileHover={{
          scale: hoverScale,
          transition: transitions.two(0.5),
        }}
        src={src}
        onLoad={() => setStatus("loaded")}
        onError={() => setStatus("errored")}
        bg={bg}
      />
    </MotionBox>
  );
};

export default MotionImage;
