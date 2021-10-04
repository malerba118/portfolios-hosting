import React, { createContext, useState, useContext, useMemo } from "react";
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
import Hammer from "react-hammerjs";
import MotionImage from "./MotionImage";
import Media from "./Media";

// interface Item extends {
//   id: string | number;
// }

const imgVariants = {
  container: {
    loading: {
      opacity: 0,
    },
    loaded: {
      opacity: 1,
    },
  },
};

const DefaultComponent = ({ item: media }) => {
  return (
    <Media
      media={media}
      w="100%"
      h="100%"
      objectFit="contain"
      draggable="false"
      variants={imgVariants}
    />
  );
};

const useLightboxState = () => {
  const [state, setState] = useState({
    items: [],
    isOpen: false,
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
      open: ({ index, id } = {}) => {
        if (id) {
          setState((prev) => ({
            ...prev,
            isOpen: true,
            index: Math.max(
              prev.items.findIndex((item) => item.id === id),
              0
            ),
          }));
        } else {
          setState((prev) => ({
            ...prev,
            isOpen: true,
            index: index !== undefined ? index : prev.index,
          }));
        }
      },
      close: () => {
        setState((prev) => ({
          ...prev,
          isOpen: false,
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
    opacity: 0,
    scale: 0.7,
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
    opacity: 0,
    scale: 0.7,
  },
};

const transition = {
  x: transitions.two(0.32),
  opacity: { duration: 0.2 },
};

const LightboxContext = createContext(null);

const Lightbox = ({
  children,
  component: ItemComponent = DefaultComponent,
}) => {
  const lightbox = useLightboxState();

  useEventListener("keydown", (e) => {
    if (e.key === "ArrowLeft") {
      lightbox.goToPrev();
    } else if (e.key === "ArrowRight") {
      lightbox.goToNext();
    }
  });

  return (
    <LightboxContext.Provider value={lightbox}>
      <Modal
        isCentered
        onClose={() => lightbox.close()}
        isOpen={lightbox.isOpen}
        closeOnOverlayClick={false}
        closeOnEsc={true}
      >
        <ModalOverlay backgroundColor="primary.50" />
        <ModalContent
          // pos="fixed"
          // inset={0}
          bg="none"
          overflow="hidden"
          rounded="none"
        >
          <Hammer
            onSwipe={(e) => {
              if (e.velocityX > 0) {
                lightbox.goToPrev();
              } else if (e.velocityX < 0) {
                lightbox.goToNext();
              }
            }}
          >
            <Flex pos="fixed" inset={0} justify="center" align="center">
              <AnimatePresence initial={false}>
                <MotionBox
                  key={lightbox.prev?.id}
                  variants={variants}
                  initial={false}
                  animate="left"
                  transition={transition}
                  position="absolute"
                  w="100%"
                  h="100%"
                  p={12}
                  boxSizing="border-box"
                >
                  <ItemComponent item={lightbox.prev} />
                </MotionBox>
                <MotionBox
                  key={lightbox.current?.id}
                  variants={variants}
                  initial={false}
                  animate="center"
                  transition={transition}
                  position="absolute"
                  w="100%"
                  h="100%"
                  p={12}
                  boxSizing="border-box"
                >
                  <ItemComponent item={lightbox.current} />
                </MotionBox>
                <MotionBox
                  key={lightbox.next?.id}
                  variants={variants}
                  initial={false}
                  animate="right"
                  transition={transition}
                  position="absolute"
                  w="100%"
                  h="100%"
                  p={12}
                  boxSizing="border-box"
                >
                  <ItemComponent item={lightbox.next} />
                </MotionBox>
              </AnimatePresence>
              <IconButton
                isDisabled={!lightbox.prev}
                size="sm"
                pos="absolute"
                left={"8px"}
                top="50%"
                transform="translateY(-50%)"
                onClick={() => lightbox.goToPrev()}
                zIndex={1}
                icon={<Icon as={PrevIcon} fontSize={24} />}
                variant="ghost"
                colorScheme="primary"
              />
              <IconButton
                isDisabled={!lightbox.next}
                size="sm"
                pos="absolute"
                right={"8px"}
                top="50%"
                transform="translateY(-50%)"
                onClick={() => lightbox.goToNext()}
                zIndex={1}
                icon={<Icon as={NextIcon} fontSize={24} />}
                variant="ghost"
                colorScheme="primary"
              />
              <IconButton
                size="sm"
                pos="absolute"
                right={"8px"}
                top={"8px"}
                onClick={() => lightbox.close()}
                zIndex={1}
                icon={<Icon as={CloseIcon} fontSize={12} />}
                variant="ghost"
                colorScheme="primary"
              />
            </Flex>
          </Hammer>
        </ModalContent>
      </Modal>
      {children}
    </LightboxContext.Provider>
  );
};

export const useLightbox = () => {
  const lightbox = useContext(LightboxContext);
  if (lightbox === null) {
    throw new Error("Can only call useLightbox from inside a Lightbox");
  }
  return lightbox;
};

export default React.memo(Lightbox);
