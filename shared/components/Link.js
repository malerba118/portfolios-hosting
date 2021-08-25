import { Link as ReactRouterLink, useLocation } from "react-router-dom";
import { Link as ChakraLink } from "@chakra-ui/react";

const Link = ({ children, to, preserveQuery, ...props }) => {
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
    <ChakraLink as={ReactRouterLink} to={locationDescriptor} {...props}>
      {children}
    </ChakraLink>
  );
};

export default Link;
