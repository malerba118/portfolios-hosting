import React, {
  createContext,
  useState,
  useContext,
  useMemo,
  useRef,
  useEffect,
} from "react";
import {
  Flex,
  Modal,
  ModalOverlay,
  ModalContent,
  IconButton,
  Icon,
  Image,
  useEventListener,
} from "@chakra-ui/react";
import {
  ChevronRightIcon as NextIcon,
  ChevronLeftIcon as PrevIcon,
  CloseIcon,
} from "@chakra-ui/icons";
import { AnimatePresence } from "framer-motion";
import { MotionBox, transitions } from "./animation/chakra";

// interface Item extends {
//   id: string | number;
// }

const DefaultComponent = ({ item: media }) => {
  return (
    <Image
      src={media?.processedUrl || media?.rawUrl}
      w="100%"
      h="100%"
      objectFit="cover"
    />
  );
};

const useCarouselState = ({ defaultItems = [] } = {}) => {
  const [state, setState] = useState({
    items: defaultItems,
    index: 0,
  });

  const setters = useMemo(
    () => ({
      setItems: (items) => {
        setState((prev) => ({
          ...prev,
          items,
          index: 0,
        }));
      },
      goToPrev: () => {
        setState((prev) => ({
          ...prev,
          index: Math.max(prev.index - 1, 0),
        }));
      },
      goToNext: () => {
        setState((prev) => ({
          ...prev,
          index: Math.min(prev.index + 1, prev.items.length - 1),
        }));
      },
      goTo: ({ index, id } = {}) => {
        if (id) {
          setState((prev) => ({
            ...prev,
            index: Math.max(
              prev.items.findIndex((item) => item.id === id),
              0
            ),
          }));
        } else {
          setState((prev) => ({
            ...prev,
            index,
          }));
        }
      },
    }),
    []
  );

  return {
    ...setters,
    ...state,
    prev: state.items[state.index - 1],
    current: state.items[state.index],
    next: state.items[state.index + 1],
  };
};

const variants = {
  left: {
    x: "-100vw",
    opacity: 0.5,
    scale: 1,
  },
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1,
    scale: 1,
  },
  right: {
    zIndex: 0,
    x: "100vw",
    opacity: 0.5,
    scale: 1,
  },
};

const transition = {
  x: transitions.two(0.32),
  opacity: { duration: 0.2 },
};

const Carousel = ({
  defaultItems,
  component: ItemComponent = DefaultComponent,
  ...otherProps
}) => {
  const ref = useRef(null);
  const carousel = useCarouselState({ defaultItems });

  useEffect(() => {
    ref.current?.focus();
  }, []);

  useEventListener("keydown", (e) => {
    if (!ref.current.contains(document.activeElement)) {
      return;
    }
    if (e.key === "ArrowLeft") {
      carousel.goToPrev();
    } else if (e.key === "ArrowRight") {
      carousel.goToNext();
    }
  });

  return (
    <Flex
      pos="relative"
      justify="center"
      align="center"
      {...otherProps}
      overflow="hidden"
      ref={ref}
      tabIndex={0}
      _focus={{
        outline: "none",
      }}
    >
      <AnimatePresence initial={false}>
        <MotionBox
          key={carousel.prev?.id || "left"}
          variants={variants}
          initial={false}
          animate="left"
          transition={transition}
          position="absolute"
          w="100%"
          h="100%"
          boxSizing="border-box"
        >
          <ItemComponent item={carousel.prev} />
        </MotionBox>
        <MotionBox
          key={carousel.current?.id || "center"}
          variants={variants}
          initial={false}
          animate="center"
          transition={transition}
          position="absolute"
          w="100%"
          h="100%"
          boxSizing="border-box"
        >
          <ItemComponent item={carousel.current} />
        </MotionBox>
        <MotionBox
          key={carousel.next?.id || "right"}
          variants={variants}
          initial={false}
          animate="right"
          transition={transition}
          position="absolute"
          w="100%"
          h="100%"
          boxSizing="border-box"
        >
          <ItemComponent item={carousel.next} />
        </MotionBox>
      </AnimatePresence>
      <IconButton
        isDisabled={!carousel.prev}
        size="xs"
        pos="absolute"
        left={"8px"}
        top="50%"
        transform="translateY(-50%)"
        onClick={() => carousel.goToPrev()}
        zIndex={1}
        icon={<Icon as={PrevIcon} fontSize={24} />}
        variant="solid"
        colorScheme="whiteAlpha"
        bg="whiteAlpha.600"
        color="blackAlpha.700"
      />
      <IconButton
        isDisabled={!carousel.next}
        size="xs"
        pos="absolute"
        right={"8px"}
        top="50%"
        transform="translateY(-50%)"
        onClick={() => carousel.goToNext()}
        zIndex={1}
        icon={<Icon as={NextIcon} fontSize={24} />}
        variant="solid"
        colorScheme="whiteAlpha"
        bg="whiteAlpha.600"
        color="blackAlpha.700"
      />
    </Flex>
  );
};

export default Carousel;
