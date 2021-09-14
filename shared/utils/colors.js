import DEFAULT_THEME from "@chakra-ui/theme";

export const palettes = {
  desert: {
    primary: {
      50: "#fdefe7",
      100: "#f5e0d6",
      200: "#dcb7a2",
      300: "#cf957d",
      400: "#c16f59",
      500: "#a84f3f",
      600: "#833831",
      700: "#5e2423",
      800: "#391416",
      900: "#170103",
    },
  },
  ocean: {
    primary: DEFAULT_THEME.colors.twitter,
  },
  pink: {
    primary: DEFAULT_THEME.colors.pink,
  },
};

export const invert = (palette) => ({
  50: palette[900],
  100: palette[800],
  200: palette[700],
  300: palette[600],
  400: palette[500],
  500: palette[400],
  600: palette[300],
  700: palette[200],
  800: palette[100],
  900: palette[50],
});
