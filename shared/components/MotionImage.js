import React, { useEffect, useLayoutEffect, useState } from "react";
import { Box, Image as CImage, Center, Icon } from "@chakra-ui/react";
import { AnimatePresence, motion } from "framer-motion";
import {
  transitions,
  MotionImage as CMotionImage,
  MotionBox,
} from "./animation/chakra";
import { BsImage } from "react-icons/bs";

const DefaultOverlay = ({ status }) => {
  return (
    <>
      <Box pos="absolute" inset={0}>
        <MotionBox
          initial={{ opacity: 1 }}
          animate={{
            opacity: status === "loading" ? 1 : 0,
            transition: {
              duration: 0.4,
            },
          }}
          bg="primary.100"
          height="100%"
          width="100%"
        />
      </Box>
      <Box pos="absolute" inset={0}>
        {status === "error" && (
          <Center bg="primary.100" h="100%" w="100%">
            <Icon color="primary.800" as={BsImage} />
          </Center>
        )}
      </Box>
    </>
  );
};

const MotionImage = ({
  src = "/image-unavailable.jpg",
  height,
  width,
  h,
  w,
  variants = {},
  overlay = DefaultOverlay,
  overlayPointerEvents = "none",
  objectFit = "cover",
  objectPosition = "center",
  draggable,
  alt = "No Image Available",
  loading,
  ...otherProps
}) => {
  const [status, setStatus] = useState("loading");
  const Overlay = overlay;
  // useEffect(() => {
  //   setStatus("loading");
  // }, [src]);

  return (
    <MotionBox
      pos="relative"
      overflow="hidden"
      height={height}
      width={width}
      h={h}
      w={w}
      variants={variants.container}
      initial="loading"
      animate={status}
      whileHover="hover"
      whileTap="tap"
      transform="translateZ(0)"
      {...otherProps}
    >
      <CMotionImage
        key={src}
        variants={variants.image}
        height="100%"
        width="100%"
        objectFit={objectFit}
        objectPosition={objectPosition}
        src={src}
        onLoad={() => setStatus("loaded")}
        onError={() => setStatus("error")}
        draggable={draggable}
        alt={alt}
        loading={loading}
      />
      <Box
        zIndex={1}
        pos="absolute"
        inset={0}
        pointerEvents={overlayPointerEvents}
      >
        {Overlay && <Overlay status={status} />}
      </Box>
    </MotionBox>
  );
};

export default MotionImage;
