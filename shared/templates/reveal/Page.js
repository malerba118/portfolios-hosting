import React, { useRef, useEffect } from "react";
import {
  Alert,
  Box,
  CloseButton,
  Flex,
  Heading,
  HStack,
  Icon,
} from "@chakra-ui/react";
import { MotionBox } from "shared/components/animation";
import { transitions } from "shared/components/animation/chakra";
import { IoIosArrowRoundBack } from "react-icons/io";

const Page = ({ id, title, onClose, children }) => {
  return (
    <MotionBox
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: transitions.two(0.4) }}
      exit={{ opacity: 0, transition: transitions.two(0.4) }}
      h="var(--app-height)"
      position="relative"
      bg="primary.50"
      overflowY="auto"
      display="flex"
      flexDirection="column"
    >
      {title && (
        <HStack p={{ base: 4, md: 6 }} align="center">
          <Flex
            align="center"
            tabIndex={0}
            onClick={() => onClose?.()}
            cursor="pointer"
          >
            <Icon color="primary.600" fontSize="3xl" as={IoIosArrowRoundBack} />
            <Heading fontSize="lg">{title}</Heading>
          </Flex>
        </HStack>
      )}
      <Box pos="relative" flex={1}>
        {children}
      </Box>
    </MotionBox>
  );
};

export default Page;
