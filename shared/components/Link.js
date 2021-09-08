import { Link as ReactRouterLink, useLocation } from "react-router-dom";
import { Box } from "@chakra-ui/react";
import { MotionLink, MotionBox } from "./animation";

const variants = {
  link: {
    initial: {},
    hovered: {},
  },
  underline: {
    initial: {
      width: 0,
    },
    hovered: {
      width: "100%",
    },
  },
};

const Link = ({
  children,
  to,
  preserveQuery,
  showUnderline,
  color = "primary.600",
  ...otherProps
}) => {
  const { search } = useLocation();

  let locationDescriptor = {};

  if (typeof to === "string") {
    locationDescriptor.pathname = to;
  } else {
    locationDescriptor = to;
  }

  if (preserveQuery) {
    locationDescriptor.search = search;
  }

  return (
    <MotionLink
      pos="relative"
      variants={variants.link}
      whileHover={"hovered"}
      _hover={{
        textDecoration: "none",
      }}
      color={color}
      as={ReactRouterLink}
      to={locationDescriptor}
      {...otherProps}
    >
      <Box display="inline-block">
        {children}
        {showUnderline && (
          <MotionBox
            variants={variants.underline}
            layout
            pos="absolute"
            bottom={"-1px"}
            background={color}
            height="2px"
            transition={{
              type: "spring",
              mass: 0.1,
              stiffness: 110,
              damping: 10,
            }}
          />
        )}
      </Box>
    </MotionLink>
  );
};

export default Link;
