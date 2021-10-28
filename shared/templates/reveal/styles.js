import { transitions } from "shared/components/animation";

export const variants = {
  image: {
    hover: {
      scale: 1.05,
      transition: {
        duration: 0.33,
      },
    },
    loading: {
      opacity: 0,
      scale: 1.1,
    },
    loaded: {
      opacity: 1,
      scale: 1,
      transition: transitions.one(0.9),
    },
  },
  container: {
    loading: {
      opacity: 1,
    },
    loaded: {
      opacity: 1,
      transition: transitions.one(0.9),
    },
  },
};
