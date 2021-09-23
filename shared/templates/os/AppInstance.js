import { Box, Flex, HStack, Center, Text } from "@chakra-ui/react";
import React, { useEffect } from "react";
import { observer } from "mobx-react";
import { Rnd } from "react-rnd";
import { os } from "./utils";
import useWindowSize from "@rooks/use-window-size";
import { MotionBox } from "shared/components/animation/chakra";

const AppInstance = observer(({ instance }) => {
  const dims = useWindowSize();

  let rndProps;
  if (instance.mode === "maximized") {
    rndProps = {
      disableDragging: true,
      enableResizing: false,
      position: {
        x: 0,
        y: -28,
      },
      size: {
        width: dims.innerWidth,
        height: dims.innerHeight,
      },
    };
  } else {
    rndProps = {
      disableDragging: false,
      enableResizing: true,
      position: { x: instance.rect.x, y: instance.rect.y },
      size: { width: instance.rect.width, height: instance.rect.height },
    };
  }

  return (
    <Rnd
      minHeight={200}
      minWidth={200}
      {...rndProps}
      onDragStop={(e, d) => {
        instance.setRect({ ...instance.rect, x: d.x, y: d.y });
      }}
      onResizeStop={(e, direction, ref, delta, position) => {
        instance.setRect({
          width: ref.style.width,
          height: ref.style.height,
          ...position,
        });
      }}
      bounds="parent"
      // onMouseDownCapture={(e) => {
      //   os.bringToFront(instance.key);
      // }}
      onPointerDownCapture={() => {
        os.bringToFront(instance.key);
      }}
      cancel=".app-container"
    >
      <MotionBox
        h="100%"
        w="100%"
        bg="primary.900"
        rounded="lg"
        boxShadow="lg"
        overflow="hidden"
        border="1px solid var(--chakra-colors-primary-700)"
        backdropFilter="blur(6px)"
        initial={{ scale: 0, opacity: 0.5 }}
        animate={{
          scale: 1,
          opacity: 1,
          transition: { type: "spring", mass: 0.1, damping: 6, stiffness: 100 },
        }}
        exit={{ scale: 0, opacity: -1 }}
      >
        <Flex h="28px">
          <HStack
            p={2}
            onPointerDown={(e) => {
              e.stopPropagation();
              e.preventDefault();
            }}
            cursor="auto"
          >
            <Box
              onPointerDown={() => os.close(instance.key)}
              h="11px"
              w="11px"
              rounded="13px"
              bg="red.400"
              _hover={{
                bg: "red.500",
              }}
              cursor="pointer"
            />
            <Box
              onPointerDown={() => instance.setMode("minimized")}
              h="11px"
              w="11px"
              rounded="13px"
              bg="orange.300"
              _hover={{
                bg: "orange.400",
              }}
              cursor="pointer"
            />
            <Box
              onPointerDown={() => {
                if (instance.mode === "maximized") {
                  os.normalize(instance);
                } else {
                  os.maximize(instance);
                }
              }}
              h="11px"
              w="11px"
              rounded="13px"
              bg="green.400"
              _hover={{
                bg: "green.500",
              }}
              cursor="pointer"
            />
          </HStack>
          <Center>
            <Text color="primary.50" size="xs">
              {instance.node.label}
            </Text>
          </Center>
        </Flex>
        <Box
          h="calc(100% - 24px)"
          bg="primary.50"
          className="app-container"
          pos="relative"
          cursor="auto"
          overflow="auto"
        >
          <instance.app.App node={instance.node} />
        </Box>
      </MotionBox>
    </Rnd>
  );
});

export default AppInstance;
