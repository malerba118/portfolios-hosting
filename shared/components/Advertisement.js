import {
  Box,
  CloseButton,
  IconButton,
  HStack,
  Text,
  useBreakpoint,
} from "@chakra-ui/react";
import { AnimatePresence } from "framer-motion";
import React, { useState } from "react";
import { MotionBox, MotionStack, transitions } from "./animation";
import Link from "./Link";
import VernosLogo from "./VernosLogo";
import { CgClose as CloseIcon } from "react-icons/cg";
import { usePortfolio } from "./PortfolioProvider";
import { observable } from "mobx";
import { observer } from "mobx-react";

const state = observable({
  hidden: false,
});

const Advertisement = observer(({ ...otherProps }) => {
  const portfolio = usePortfolio();
  const breakpoint = useBreakpoint();

  if (portfolio.advertisementsDisabled) {
    return null;
  }

  return (
    <AnimatePresence>
      {!state.hidden && (
        <MotionBox
          bg="primary.900"
          minHeight="64px"
          {...otherProps}
          p={"16px"}
          boxSizing="border-box"
          initial={false}
          animate={{
            left: breakpoint === "base" ? 0 : "50%",
            x: breakpoint === "base" ? "0%" : "-50%",
            width: breakpoint === "base" ? "100%" : "auto",
            transition: {
              type: "spring",
              damping: 8,
              stiffness: 100,
              mass: 0.01,
            },
          }}
          minWidth="fit-content"
          pos="fixed"
          bottom={0}
          exit={{ opacity: 0 }}
        >
          <HStack>
            <VernosLogo
              style={{ minWidth: 48 }}
              height="32px"
              color="var(--chakra-colors-primary-100)"
            />
            <Text pb="2px" size="md" color="primary.100">
              This website was made with{" "}
              <Link
                size="md"
                color="primary.400"
                isExternal
                to="https://vernos.app"
                showUnderline
              >
                Vernos
              </Link>
            </Text>
            <Box flex={1} />
            <IconButton
              colorScheme="primary"
              variant="ghost"
              size="sm"
              color="primary.100"
              _hover={{
                bg: "primary.800",
              }}
              _active={{
                bg: "primary.700",
              }}
              icon={<CloseIcon />}
              onClick={() => (state.hidden = true)}
            />
          </HStack>
        </MotionBox>
      )}
    </AnimatePresence>
  );
});

export default Advertisement;
