import { Flex, HStack, Icon, Divider, Box } from "@chakra-ui/react";
import React from "react";
import Thumbnail, { renderers } from "./Thumbnail";
import { useFs } from "./FsProvider";
import { os } from "./utils";
import { AnimatePresence, AnimateSharedLayout } from "framer-motion";
import { MotionStack } from "shared/components/animation";

const Dock = () => {
  const fs = useFs();

  return (
    <MotionStack
      isInline
      pos="fixed"
      bottom={"4px"}
      left={"50%"}
      rounded="xl"
      backdropFilter="blur(4px)"
      p={3}
      bg="whiteAlpha.300"
      border="1px solid var(--chakra-colors-whiteAlpha-400)"
      spacing={3}
      initial={{
        x: "-50%",
      }}
      animate={{
        y: os.maximizedInstance ? 100 : 0,
        transition: { type: "spring", mass: 0.1, damping: 10, stiffness: 100 },
      }}
    >
      {fs.children(fs.root()).map((node) => (
        <Thumbnail
          size="54px"
          key={node.id}
          node={node}
          tooltip={node.name}
          onClick={() => os.open(node)}
          hideName
        />
      ))}
      {os.minimizedInstances.length && (
        <Box h="54px" w="1px" bg="whiteAlpha.400" />
      )}
      <AnimatePresence>
        {os.minimizedInstances.map((instance) => (
          <Thumbnail
            size="54px"
            key={instance.node.id}
            node={instance.node}
            tooltip={instance.node.name}
            initialScale={0.25}
            onClick={() => os.open(instance.node)}
            hideName
          />
        ))}
      </AnimatePresence>
    </MotionStack>
  );
};

export default Dock;
