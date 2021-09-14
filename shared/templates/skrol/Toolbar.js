import React from "react";
import { Box, HStack } from "@chakra-ui/react";
import { MotionFlex } from "shared/components/animation";
import Logo from "shared/components/Logo";
import Link from "shared/components/Link";
import { usePortfolio } from "shared/components/PortfolioProvider";

const Toolbar = ({}) => {
  const portfolio = usePortfolio();
  return (
    <MotionFlex
      position="relative"
      zIndex={1}
      justify="space-between"
      h="128px"
      minH="128px"
      px={16}
      align="center"
      color="gray.600"
    >
      <Box>
        <Link to="/">
          <Logo
            charOne={portfolio.data.content.about.firstName[0]}
            charTwo={portfolio.data.content.about.lastName[0]}
            color="primary.700"
          />
        </Link>
      </Box>
      <HStack
        spacing={4}
        fontSize="xs"
        textTransform="uppercase"
        fontWeight="bold"
      >
        <Link to="/about" preserveQuery showUnderline>
          About
        </Link>
        <Link to="/projects" preserveQuery showUnderline>
          Projects
        </Link>
        <Link to="/contact" preserveQuery showUnderline>
          Contact
        </Link>
      </HStack>
    </MotionFlex>
  );
};

export default Toolbar;
