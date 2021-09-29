import React from "react";
import { Box, HStack } from "@chakra-ui/react";
import { MotionFlex } from "shared/components/animation";
import Logo from "shared/components/Logo";
import Link from "shared/components/Link";
import { usePortfolio } from "shared/components/PortfolioProvider";
import MediaLogo from "shared/components/MediaLogo";

const Toolbar = ({ animate, variants, initial = "hidden" }) => {
  const portfolio = usePortfolio();
  return (
    <MotionFlex
      position="relative"
      zIndex={1}
      initial={initial}
      animate={animate}
      variants={variants}
      justify="space-between"
      h="128px"
      minH="128px"
      px={16}
      align="center"
      color="gray.600"
    >
      <Box>
        <Link to={{ pathname: "/", state: { disableAnimations: true } }}>
          {portfolio.data.content.about.logo.items.length ? (
            <MediaLogo media={portfolio.data.content.about.logo.items[0]} />
          ) : (
            <Logo
              charOne={portfolio.data.content.about.firstName[0]}
              charTwo={portfolio.data.content.about.lastName[0]}
              color="primary.700"
            />
          )}
        </Link>
      </Box>
      <HStack
        spacing={4}
        fontSize="xs"
        textTransform="uppercase"
        fontWeight="bold"
      >
        <Link
          to={{ pathname: "/about", state: { disableAnimations: true } }}
          preserveQuery
          showUnderline
        >
          About
        </Link>
        <Link
          to={{ pathname: "/projects", state: { disableAnimations: true } }}
          preserveQuery
          showUnderline
        >
          Projects
        </Link>
        <Link
          to={{ pathname: "/contact", state: { disableAnimations: true } }}
          preserveQuery
          showUnderline
        >
          Contact
        </Link>
      </HStack>
    </MotionFlex>
  );
};

export default Toolbar;
