import {
  Flex,
  Box,
  Icon,
  Center,
  HStack,
  Text,
  Heading,
  Avatar,
  Stack,
} from "@chakra-ui/react";
import { observer } from "mobx-react";
import React from "react";
import { GiOrange } from "react-icons/gi";
import AppInstance from "./AppInstance";
import Dock from "./Dock";
import { useFs } from "./FsProvider";
import Thumbnail, { renderers } from "./Thumbnail";
import Clock from "./Clock";
import { os } from "./utils";
import { AnimatePresence } from "framer-motion";
import { usePortfolio } from "shared/components/PortfolioProvider";
import Media from "shared/components/Media";
import MediaAvatar from "shared/components/MediaAvatar";

const Navbar = () => {
  const portfolio = usePortfolio();
  const about = portfolio.data.content.about;
  return (
    <Flex
      backdropFilter="blur(5px)"
      align="center"
      px={4}
      h="28px"
      w="100%"
      bg="primary.900"
      justify="space-between"
      zIndex={10}
    >
      <Text fontWeight="600" fontSize="sm" color="primary.100">
        {about.firstName} {about.lastName}
      </Text>
      <Text fontWeight="600" fontSize="xs" color="primary.100">
        <Clock />
      </Text>
    </Flex>
  );
};

const Desktop = observer(() => {
  const fs = useFs();
  const portfolio = usePortfolio();
  const about = portfolio.data.content.about;
  return (
    <Flex
      direction="column"
      pos="fixed"
      inset={0}
      bgImage="url(/templates/os/wallpaper-light.jpg)"
      bgSize="cover"
      overflow="hidden"
    >
      <Navbar />
      <Box flex={1} pos="relative">
        {/* <Center pos="absolute" top="10%" left={0} right={0}>
          <Flex direction="column" align="center">
            <Avatar size="xl" />

            <Heading size="xl" color="primary.900">
              Hi, I'm {about.firstName}
            </Heading>
          </Flex>
        </Center> */}
        <Center pos="absolute" inset={0} bottom="128px">
          <Stack direction="column" align="center" spacing={1}>
            <Media
              w="128px"
              h="128px"
              borderRadius="100%"
              size="2xl"
              media={about.images.items[0]}
            />
            <Heading
              size="2xl"
              color="primary.900"
              textShadow="2px 2px 0px var(--chakra-colors-primary-100)"
              textAlign="center"
            >
              Hi, I'm {about.firstName}
            </Heading>
            <HStack spacing={5} py={5}>
              {fs.children(fs.root()).map((node) => (
                <Thumbnail
                  key={node.id}
                  node={node}
                  size="64px"
                  onClick={() => os.open(node)}
                  color="primary.700"
                />
              ))}
            </HStack>
          </Stack>
        </Center>
        <AnimatePresence>
          {os.activeInstances.map((instance) => (
            <AppInstance key={instance.key} instance={instance} />
          ))}
          {os.maximizedInstance && (
            <AppInstance
              key={os.maximizedInstance.key}
              instance={os.maximizedInstance}
            />
          )}
        </AnimatePresence>
      </Box>
      <Dock />
    </Flex>
  );
});

export default Desktop;
