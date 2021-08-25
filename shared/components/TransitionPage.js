import React from "react";
import { MotionBox } from "./animation/chakra";

const Enter = ({ bg, duration }) => {
  return [0, 1, 2, 3, 4].map((i) => {
    const delay = (4 - i) * 0.12;
    return (
      <MotionBox
        key={i}
        position="fixed"
        bg={bg[i]}
        top={`${(100 / 5) * i}%`}
        h={`${100 / 5}%`}
        w="100%"
        initial={{ x: 0 }}
        animate={{
          x: "100vw",
          transition: { duration: duration - delay, delay },
        }}
      />
    );
  });
};

const Exit = ({ bg, duration }) => {
  return [0, 1, 2, 3, 4].map((i) => {
    const delay = i * 0.12;
    return (
      <MotionBox
        key={i}
        position="fixed"
        bg={bg[i]}
        top={`${(100 / 5) * i}%`}
        h={`${100 / 5}%`}
        w="100%"
        initial={false}
        animate={{ x: "-100vw" }}
        exit={{ x: 0, transition: { duration: duration - delay, delay } }}
      />
    );
  });
};

const TransitionPage = ({
  transitionDuration = 1.4,
  transitionColors = [
    "primary.100",
    "primary.200",
    "primary.300",
    "primary.400",
    "primary.500",
  ],
  ...otherProps
}) => {
  const duration = transitionDuration / 2;
  return (
    <>
      <MotionBox
        position="relative"
        initial={{ opacity: 0.999 }}
        animate={{ opacity: 1, transition: { duration } }}
        exit={{ opacity: 0.999, transition: { duration } }}
        {...otherProps}
      />
      <Enter duration={duration} bg={transitionColors} />
      <Exit duration={duration} bg={transitionColors} />
    </>
  );
};

export default TransitionPage;
