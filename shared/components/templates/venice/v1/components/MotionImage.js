import React, { useState } from "react";
import { Box, Image as CImage } from "@chakra-ui/react";
import { motion } from "framer-motion";
import {
  transitions,
  MotionImage as CMotionImage,
  MotionBox
} from "./animation";

const MotionImage = ({ src, height, width, initialScale = 1 }) => {
  const [status, setStatus] = useState("loading");

  return (
    <MotionBox
      overflow="hidden"
      height={height}
      width={width}
      initial={{ scale: initialScale, opacity: 0 }}
      animate={{
        scale: status !== "loading" ? 1 : initialScale,
        opacity: 1,
        transition: transitions.two(0.9)
      }}
    >
      <CMotionImage
        h="100%"
        w="100%"
        objectFit="cover"
        initial={{ scale: (1 / initialScale) * 1.4 }}
        animate={{
          scale: status !== "loading" ? 1 : (1 / initialScale) * 1.4,
          transition: transitions.two(0.9)
        }}
        whileHover={{
          scale: 1.06,
          transition: transitions.two(0.5)
        }}
        src={src}
        onLoad={() => setStatus("loaded")}
        onError={() => setStatus("errored")}
      />
    </MotionBox>
  );
};

export default MotionImage;
