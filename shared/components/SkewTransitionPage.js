import React from "react";
import { MotionBox, transitions } from "./animation/chakra";

const Enter = ({ children, duration }) => {
  return (
    <MotionBox
      position="fixed"
      bg="secondary.300"
      inset={0}
      initial={{ y: 0, scale: 1 }}
      animate={{
        y: "110vh",
        scale: 1,
        transition: transitions.one(duration),
      }}
    >
      {children}
    </MotionBox>
  );
};

const Exit = ({ children, duration }) => {
  return (
    <MotionBox
      position="fixed"
      bg="secondary.300"
      inset={0}
      initial={false}
      animate={{ y: "-110vh", scale: 1 }}
      exit={{
        y: 0,
        scale: 1,
        transition: transitions.one(duration),
      }}
    >
      {children}
    </MotionBox>
  );
};

const SkewTransitionPage = ({
  transitionDuration = 0.85,
  transitionChildren,
  ...otherProps
}) => {
  const duration = transitionDuration / 2;
  return (
    <>
      <MotionBox position="relative" {...otherProps} />
      <Enter duration={duration} children={transitionChildren} />
      <Exit duration={duration} children={transitionChildren} />
    </>
  );
};

export default SkewTransitionPage;
