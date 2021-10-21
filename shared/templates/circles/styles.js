import { transitions } from "shared/components/animation";

export const variants = {
  image: {
    hover: {
      scale: 1.05,
      transition: transitions.two(0.41),
    },
    loading: {
      opacity: 0,
      scale: 1.2,
    },
    loaded: {
      opacity: 1,
      scale: 1,
      transition: transitions.two(0.9),
    },
  },
};
