import React, { useRef, useEffect } from "react";
import { Image } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { variants } from "./styles";

const MotionImage = motion(Image);

const Media = ({ media, ...otherProps }) => {
  return (
    <MotionImage
      src={media.processedUrl || media.rawUrl}
      alt={media.name}
      variants={{
        image: variants.image,
      }}
      {...otherProps}
    />
  );
};

export default Media;
