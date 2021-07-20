import React, { useRef, useEffect } from "react";
import { Image } from "@chakra-ui/react";
import { motion } from "framer-motion";

const MotionImage = motion(Image);

const Media = ({ media, ...otherProps }) => {
  return (
    <MotionImage
      src={media.processedUrl || media.rawUrl}
      alt={media.id}
      {...otherProps}
    />
  );
};

export default Media;
