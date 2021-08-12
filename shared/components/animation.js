import React, { createContext, useContext, useEffect, useState } from "react";
import { motion, animationControls as animationControls_ } from "framer-motion";
import {
  Box,
  Image,
  Stack,
  Flex,
  Heading,
  useLatestRef,
} from "@chakra-ui/react";

export const MotionBox = motion(Box);
export const MotionImage = motion(Image);
export const MotionStack = motion(Stack);
export const MotionFlex = motion(Flex);
export const MotionHeading = motion(Heading);

export const transitions = {
  one: (duration = 0.6) => ({
    duration,
    ease: [0.6, 0.01, -0.05, 0.9],
  }),
  two: (duration = 0.6) => ({
    duration,
    ease: [0.43, 0.13, 0.23, 0.96],
  }),
};

// Orchestration
const createSubscriptionManager = () => {
  let subscribers = [];
  const notify = async (...args) => {
    await Promise.all(
      subscribers.map(async (subscriber) => {
        try {
          await subscriber(...args);
        } catch (err) {}
      })
    );
  };

  const addSubscriber = (subscriber) => {
    subscribers.push(subscriber);
  };

  const removeSubscriber = (subscriber) => {
    subscribers = subscribers.filter((s) => s !== subscriber);
  };

  return {
    notify,
    addSubscriber,
    removeSubscriber,
  };
};

// Augmented animationControls
const animationControls = () => {
  const controls = animationControls_();
  const managers = {
    before: createSubscriptionManager(),
    after: createSubscriptionManager(),
  };

  return {
    ...controls,
    start: async (defintion, options) => {
      await managers.before.notify({ variant: defintion });
      await controls.start(defintion, options);
      managers.after.notify({ variant: defintion });
    },
    before: (subscriber) => {
      managers.before.addSubscriber(subscriber);
      return () => {
        managers.before.removeSubscriber(subscriber);
      };
    },
    after: (subscriber) => {
      managers.after.addSubscriber(subscriber);
      return () => {
        managers.after.removeSubscriber(subscriber);
      };
    },
  };
};

const AnimationContext = createContext({});

class AnimationStore {
  animations = {};
  getAnimation(id) {
    if (!this.animations[id]) {
      this.animations[id] = animationControls();
    }
    return this.animations[id];
  }
}

// Global store for animations to allow animations to be accessed across the app by id
export const AnimationProvider = ({ children }) => {
  const [store] = useState(() => new AnimationStore());

  return (
    <AnimationContext.Provider value={{ store }}>
      {children}
    </AnimationContext.Provider>
  );
};

// Augmented useAnimation
export const useAnimation = (id, { before, after, mount = true } = {}) => {
  const { store } = useContext(AnimationContext);
  let controls;
  if (id && store) {
    controls = store.getAnimation(id);
  } else {
    // Fallback to local AnimationControls if there's no Provider
    controls = animationControls();
  }

  const beforeRef = useLatestRef(before);
  const afterRef = useLatestRef(after);

  useEffect(() => {
    return controls.before(({ variant }) => {
      return beforeRef.current?.({ variant });
    });
  }, []);

  useEffect(() => {
    return controls.after(({ variant }) => {
      return afterRef.current?.({ variant });
    });
  }, []);

  useEffect(() => {
    if (mount) {
      return controls.mount();
    }
  }, []);

  return controls;
};
