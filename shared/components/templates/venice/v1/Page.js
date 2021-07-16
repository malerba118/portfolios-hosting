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

// const Page = ({ id, children }) => {
//   const ref = useRef();
//   const location = useLocation();

//   useEffect(() => {
//     if (location.pathname === `/${id}`) {
//       ref.current.scrollIntoView({
//         behavior: "smooth",
//         block: "start",
//         inline: "start",
//       });
//     }
//   }, [location.pathname]);

//   return (
//     <Box ref={ref} id={id} minH="100vh">
//       {children}
//     </Box>
//   );
// };

const Page = ({ id, title, onClose, children }) => {
  return (
    <Box h="100vh">
      <Flex p={4} justify="space-between">
        <Heading>{title}</Heading>
        <Link to="/">
          <CloseButton />
        </Link>
      </Flex>
      {children}
    </Box>
  );
};

export default Page;
