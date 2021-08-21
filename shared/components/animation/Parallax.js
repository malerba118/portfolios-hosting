import React from "react";
import { useSpring, useTransform } from "framer-motion";
import { MotionBox } from "./chakra";
import { useScroll } from "./ScrollProvider";

// Parallax Box
const Parallax = ({ minY, maxY, offset = 0, children, ...otherProps }) => {
  const scroll = useScroll();
  const y = useTransform(scroll.progress.position.y, [offset, 1], [minY, maxY]);
  // const springY = useSpring(y, { mass: 0.1, damping: 5, stiffness: 80 });

  return (
    <MotionBox position="relative" {...otherProps} style={{ y }}>
      {children}
    </MotionBox>
  );
};

export default Parallax;
