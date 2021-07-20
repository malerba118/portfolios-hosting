import React, { useRef, useEffect } from "react";
import {
  Alert,
  Box,
  CloseButton,
  Flex,
  Heading,
  HStack,
} from "@chakra-ui/react";
import { Link, useLocation } from "react-router-dom";
import { MotionBox, transitions } from "./components/animation";
import { AnimatePresence } from "framer-motion";

const Page = ({ id, title, onClose, children }) => {
  return (
    <AnimatePresence>
      <MotionBox
        initial={{ y: -200, opacity: 0 }}
        animate={{ y: 0, opacity: 1, transition: transitions.two(1) }}
        h="100vh"
        position="relative"
      >
        <Flex p={8} pb={0} justify="space-between">
          <Heading fontSize="5xl">{title}</Heading>
          <Link to="/">
            <CloseButton />
          </Link>
        </Flex>
        {children}
      </MotionBox>
    </AnimatePresence>
  );
};

export default Page;
