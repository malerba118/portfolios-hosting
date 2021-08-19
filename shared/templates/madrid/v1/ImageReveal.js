import React, { useEffect, useState } from "react";
import { Box, Image as CImage } from "@chakra-ui/react";
import { motion } from "framer-motion";
import {
  transitions,
  MotionImage as CMotionImage,
  MotionBox,
  useAnimation,
} from "shared/components/animation";

const variants = {
  container: {
    loading: {
      height: "100%",
    },
    loaded: {
      height: "75%",
      transition: {
        when: "afterChildren",
        ...transitions.one(0.8),
      },
    },
  },
  image: {
    loading: {
      scale: 1.5,
      opacity: -1,
    },
    loaded: {
      scale: 1,
      opacity: 1,
      transition: {
        ...transitions.one(2),
      },
    },
  },
};

const ImageReveal = ({
  src = "/image-unavailable.svg",
  height,
  width = "100%",
  onClick,
  cursor,
  ...otherProps
}) => {
  const [status, setStatus] = useState("loading");
  const controls = useAnimation("about-image");

  useEffect(() => {
    const animation = controls.start(status);
  }, [status]);

  return (
    <MotionBox
      position="relative"
      cursor={cursor}
      onClick={onClick}
      overflow="hidden"
      width={width}
      variants={variants.container}
      animate={controls}
      bg="primary.100"
      {...otherProps}
    >
      <CMotionImage
        h="100%"
        w="100%"
        objectFit="cover"
        variants={variants.image}
        src={src}
        onLoad={() => setStatus("loaded")}
        onError={() => setStatus("errored")}
      />
    </MotionBox>
  );
};

export default ImageReveal;
