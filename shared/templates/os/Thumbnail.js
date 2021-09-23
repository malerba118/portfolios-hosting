import {
  Center,
  Stack,
  Box,
  Text,
  Heading,
  Tooltip,
  Icon,
} from "@chakra-ui/react";
import React from "react";
import { IoMdPerson, IoMdMail, IoMdFolder } from "react-icons/io";
import { BsImageFill } from "react-icons/bs";
import { MotionStack } from "shared/components/animation";

// const defaults = {
//   renderer: ({ name }) => (
//     <Center bg="white" rounded="xl" h="100%" w="100%">
//       <Heading fontWeight="900" color="gray.700" fontSize="36px">
//         {name[0]}
//       </Heading>
//     </Center>
//   )
// };

export const renderers = {
  about: () => (
    <Center boxShadow="sm" bg="pink.400" rounded="xl" h="100%" w="100%">
      <Icon fontSize="32px" color="whiteAlpha.700" as={IoMdPerson} />
    </Center>
  ),
  folder: () => (
    <Center boxShadow="sm" bg="blue.400" rounded="xl" h="100%" w="100%">
      <Icon fontSize="32px" color="whiteAlpha.700" as={IoMdFolder} />
    </Center>
  ),
  contact: () => (
    <Center boxShadow="sm" bg="red.400" rounded="xl" h="100%" w="100%">
      <Icon fontSize="32px" color="whiteAlpha.700" as={IoMdMail} />
    </Center>
  ),
  project: ({ node }) => (
    <Center boxShadow="sm" bg="orange.300" rounded="xl" h="100%" w="100%">
      <Icon fontSize="32px" color="whiteAlpha.700" as={BsImageFill} />
    </Center>
  ),
};

const Thumbnail = ({
  size = "54px",
  node,
  hideName,
  tooltip,
  initialScale = 1,
  color = "primary.100",
  ...otherProps
}) => {
  const content = (
    <MotionStack
      userSelect="none"
      initial={{ scale: initialScale }}
      animate={{ scale: 1, opacity: 1 }}
      align="center"
      flex={0}
      spacing={2}
      cursor="pointer"
      maxW="70px"
      {...otherProps}
    >
      <Box h={size} w={size} pos="relative">
        {renderers[node.type]({ node })}
      </Box>
      {!hideName && (
        <Text
          fontWeight="600"
          fontSize="xs"
          w="100%"
          textAlign="center"
          color={color}
          noOfLines={2}
          title={node.name}
        >
          {node.name}
        </Text>
      )}
    </MotionStack>
  );
  if (tooltip) {
    return (
      <Tooltip fontSize="xs" bg="primary.700" rounded="md" label={tooltip}>
        {content}
      </Tooltip>
    );
  }
  return content;
};

export default Thumbnail;
