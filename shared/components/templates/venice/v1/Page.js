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
      <MotionBox h="100vh" position="relative" bg="white">
        <Flex p={8} pb={0} justify="space-between" align="center">
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
