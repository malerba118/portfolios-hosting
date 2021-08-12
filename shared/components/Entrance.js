import React from "react";
import { Box } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { transitions, MotionBox } from "./animation";

const Entrance = ({
  initialX = 0,
  initialY = 0,
  initialRotation = 0,
  initialOpacity = 1,
  overflow = "hidden",
  transition,
  delay = 0,
  children,
  ...otherProps
}) => (
  <Box overflow={overflow} {...otherProps}>
    <MotionBox
      layout
      initial={{
        x: initialX,
        y: initialY,
        opacity: initialOpacity,
        rotate: initialRotation,
      }}
      animate={{
        x: 0,
        y: 0,
        opacity: 1,
        rotate: 0,
        transition: { duration: 0.6, delay },
      }}
    >
      {children}
    </MotionBox>
  </Box>
);

export default Entrance;
