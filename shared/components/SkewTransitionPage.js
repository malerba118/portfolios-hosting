import React from "react";
import { MotionBox } from "./animation/chakra";

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
        transition: { duration },
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
        transition: { duration },
      }}
    >
      {children}
    </MotionBox>
  );
};

const SkewTransitionPage = ({
  transitionDuration = 0.8,
  transitionChildren,
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
      <Enter duration={duration} children={transitionChildren} />
      <Exit duration={duration} children={transitionChildren} />
    </>
  );
};

export default SkewTransitionPage;
