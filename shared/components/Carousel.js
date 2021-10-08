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
import MotionImage from "./MotionImage";
import Lightbox, { useLightbox } from "./Lightbox";
import Hammer from "react-hammerjs";
import Media from "./Media";

// interface Item extends {
//   id: string | number;
// }

const imgVariants = {
  image: {
    hover: {
      scale: 1.04,
      transition: transitions.two(0.4),
    },
  },
};

const DefaultComponent = ({ item: media }) => {
  const downX = useRef(null);
  const handleMouseDown = (e) => {
    downX.current = e.screenX;
  };

  const handleClick = (e) => {
    const delta = Math.abs(e.screenX - downX.current);

    if (delta > 10) {
      // If mouse moved more than threshold, ignore the click event
      return;
    }

    if (media) {
      lightbox.open({ id: media.id });
    }
  };
  const lightbox = useLightbox();
  return (
    <Media
      media={media}
      w="100%"
      h="100%"
      objectFit="cover"
      initialScale={1}
      hoverScale={1.04}
      scaleFactor={1}
      onMouseDown={handleMouseDown}
      onClick={handleClick}
      draggable="false"
      variants={imgVariants}
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
    zIndex: 0,
    x: "-100%",
    opacity: 0.5,
    scale: 0.75,
  },
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1,
    scale: 1,
  },
  right: {
    zIndex: 0,
    x: "100%",
    opacity: 0.5,
    scale: 0.75,
  },
};

const transition = {
  x: transitions.two(0.32),
  opacity: { duration: 0.32 },
};

const Carousel = ({
  defaultItems,
  component: ItemComponent = DefaultComponent,
  ...otherProps
}) => {
  const ref = useRef(null);
  const carousel = useCarouselState({ defaultItems });

  // whoops, steals focus from
  // useEffect(() => {
  //   ref.current?.focus();
  // }, []);

  useEventListener("keydown", (e) => {
    if (!ref.current?.contains(document.activeElement)) {
      return;
    }
    if (e.key === "ArrowLeft") {
      carousel.goToPrev();
    } else if (e.key === "ArrowRight") {
      carousel.goToNext();
    }
  });

  return (
    <Hammer
      onSwipe={(e) => {
        if (e.velocityX > 0) {
          carousel.goToPrev();
        } else if (e.velocityX < 0) {
          carousel.goToNext();
        }
      }}
    >
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
          style={{
            opacity: carousel.prev ? 1 : 0,
          }}
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
          style={{
            opacity: carousel.next ? 1 : 0,
          }}
        />
      </Flex>
    </Hammer>
  );
};

export default Carousel;
