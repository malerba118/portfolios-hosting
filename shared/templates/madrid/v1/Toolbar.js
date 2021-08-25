import React from "react";
import { Box, HStack } from "@chakra-ui/react";
import { MotionFlex } from "shared/components/animation";
import Logo from "shared/components/Logo";
import Link from "shared/components/Link";

const Toolbar = ({ animate, variants, portfolio }) => {
  return (
    <MotionFlex
      position="relative"
      zIndex={1}
      initial="hidden"
      animate={animate}
      variants={variants}
      justify="space-between"
      h="128px"
      px={16}
      align="center"
      color="gray.600"
    >
      <Box>
        <Logo
          charOne={portfolio.content.about.firstName[0]}
          charTwo={portfolio.content.about.lastName[0]}
          color="primary.800"
        />
      </Box>
      <HStack
        spacing={4}
        fontSize="xs"
        textTransform="uppercase"
        fontWeight="bold"
      >
        <Link to="/about" preserveQuery>
          About
        </Link>
        <Link to="/projects" preserveQuery>
          Projects
        </Link>
        <Link to="/contact" preserveQuery>
          Contact
        </Link>
      </HStack>
    </MotionFlex>
  );
};

export default Toolbar;
