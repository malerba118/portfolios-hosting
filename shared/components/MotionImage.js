// import React, { useState } from "react";
// import { Box, Image as CImage } from "@chakra-ui/react";
// import { motion } from "framer-motion";
// import {
//   transitions,
//   MotionImage as CMotionImage,
//   MotionBox,
// } from "./animation";

// const MotionImage = ({
//   src = "/image-unavailable.jpg",
//   height,
//   width,
//   initialScale = 1,
//   initialOpacity = 0,
//   hoverScale = 1.05,
//   onClick,
//   cursor,
//   bg = "primary.100",
//   scaleFactor = 1.25,
//   ...otherProps
// }) => {
//   const [status, setStatus] = useState("loading");

//   return (
//     <MotionBox
//       cursor={cursor}
//       onClick={onClick}
//       overflow="hidden"
//       height={height}
//       width={width}
//       initial={{ scale: initialScale, opacity: initialOpacity }}
//       animate={{
//         scale: status !== "loading" ? 1 : initialScale,
//         opacity: status !== "loading" ? 1 : initialOpacity,
//         transition: transitions.two(0.66),
//       }}
//       bg={bg}
//       {...otherProps}
//     >
//       <CMotionImage
//         h="100%"
//         w="100%"
//         objectFit="cover"
//         objectPosition="center"
//         initial={{ scale: (1 / initialScale) * scaleFactor }}
//         animate={{
//           scale: status !== "loading" ? 1 : (1 / initialScale) * scaleFactor,
//           transition: transitions.two(0.66),
//         }}
//         whileHover={{
//           scale: hoverScale,
//           transition: transitions.two(0.5),
//         }}
//         src={src}
//         onLoad={() => setStatus("loaded")}
//         onError={() => setStatus("errored")}
//         bg={bg}
//         draggable="false"
//       />
//     </MotionBox>
//   );
// };

// export default MotionImage;

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
    <AnimatePresence>
      <Box pos="absolute" inset={0}>
        <MotionBox
          initial={{ opacity: 1 }}
          animate={{ opacity: status === "loading" ? 1 : 0 }}
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
    </AnimatePresence>
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
  alt,
  ...otherProps
}) => {
  const [status, setStatus] = useState("loading");

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
      />
      <Box pos="absolute" inset={0} pointerEvents={overlayPointerEvents}>
        <DefaultOverlay status={status} />
      </Box>
    </MotionBox>
  );
};

export default MotionImage;
