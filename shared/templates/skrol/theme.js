import { extendTheme, theme as CHAKRA_THEME } from "@chakra-ui/react";
import { palettes, invert } from "shared/utils/colors";
import * as ant from "@ant-design/colors";

const colorsToPalette = (colors) => ({
  50: colors[0],
  100: colors[1],
  200: colors[2],
  300: colors[3],
  400: colors[4],
  500: colors[5],
  600: colors[6],
  700: colors[7],
  800: colors[8],
  900: colors[9],
});

const generate = (color, { backgroundColor, theme = "light" } = {}) => {
  const colors = ant.generate(color, {
    theme,
    backgroundColor,
  });
  return colorsToPalette(colors);
};

export const makeTheme = ({ headingFont, paragraphFont, palette }) =>
  extendTheme({
    // colors: palettes[palette],
    colors: {
      primary: generate(CHAKRA_THEME.colors.red[50], {
        backgroundColor: "#090909",
        theme: "dark",
      }),
      secondary: CHAKRA_THEME.colors.red,
    },
    fonts: {
      heading: headingFont,
      body: paragraphFont,
    },
    styles: {
      global: {
        body: {
          bg: "primary.50",
        },
        ".js-focus-visible :focus:not([data-focus-visible-added])": {
          outline: "none",
          boxShadow: "none",
        },
      },
    },
    components: {
      Button: {
        baseStyle: {
          rounded: "none",
        },
        variants: {
          solid: {
            backgroundColor: "secondary.400",
            color: "primary.50",
          },
          outline: {
            color: "secondary.400",
            backgroundColor: "primary.50",
            borderColor: "secondary.400",
            _hover: {
              backgroundColor: "primary.100",
            },
          },
        },
      },
      Heading: {
        baseStyle: {
          color: "primary.900",
        },
        sizes: {
          "2xs": {
            lineHeight: "140%",
            fontSize: {
              base: "sm",
              md: "sm",
            },
            color: "primary.900",
          },
          xs: {
            lineHeight: "140%",
            fontSize: {
              base: "xs",
              md: "md",
            },
            color: "primary.900",
          },
          sm: {
            lineHeight: "140%",
            fontSize: {
              base: "sm",
              md: "lg",
            },
            color: "primary.900",
          },
          md: {
            lineHeight: "140%",
            fontSize: {
              base: "md",
              md: "xl",
            },
            color: "primary.900",
          },
          lg: {
            lineHeight: "140%",
            fontSize: {
              base: "xl",
              md: "2xl",
            },
            color: "primary.900",
          },
          xl: {
            WebkitTextStroke: "3px currentColor",
            lineHeight: "140%",
            letterSpacing: ".05em",
            fontSize: {
              base: "xl",
              md: "3xl",
            },
            color: "primary.900",
          },
          "2xl": {
            WebkitTextStroke: "3px currentColor",
            lineHeight: 1.2,
            letterSpacing: ".05em",

            fontSize: {
              base: "2xl",
              md: "4xl",
            },
            color: "primary.900",
          },
          "3xl": {
            WebkitTextStroke: "3px currentColor",
            lineHeight: "120%",
            letterSpacing: ".05em",
            fontSize: {
              base: "3xl",
              md: "5xl",
            },
            color: "primary.900",
          },
          "4xl": {
            WebkitTextStroke: "3px currentColor",
            lineHeight: "120%",
            letterSpacing: ".05em",
            fontSize: {
              base: "4xl",
              md: "6xl",
            },
            color: "primary.900",
          },
        },
        defaultProps: {
          size: "md",
        },
      },
      Text: {
        baseStyle: {
          color: "primary.700",
          fontSize: "sm",
        },
        sizes: {
          xs: {
            lineHeight: "140%",
            color: "primary.700",
            fontSize: "xs",
          },
          sm: {
            lineHeight: "140%",
            color: "primary.700",
            fontSize: "sm",
          },
          md: {
            lineHeight: "140%",
            color: "primary.700",
            fontSize: "md",
          },
          lg: {
            lineHeight: "140%",
            color: "primary.700",
            fontSize: "lg",
          },
          xl: {
            lineHeight: "140%",
            color: "primary.700",
            fontSize: "xl",
          },
        },
      },
      Link: {
        baseStyle: {
          color: "primary.700",
          fontSize: "sm",
        },
        sizes: {
          xs: {
            fontSize: "xs",
          },
          sm: {
            fontSize: "sm",
          },
          md: {
            fontSize: "md",
          },
          lg: {
            fontSize: "lg",
          },
          xl: {
            fontSize: "xl",
          },
        },
      },
      Input: {
        variants: {
          filled: {
            field: {
              background: "primary.100",
              _focus: {
                background: "primary.50",
              },
              _hover: {
                background: "primary.100",
              },
              _placeholder: {
                color: "primary.300",
              },
              rounded: "none",
            },
          },
        },
        defaultProps: {
          focusBorderColor: "primary.400",
        },
      },
      Textarea: {
        variants: {
          filled: {
            color: "primary.700",
            background: "primary.100",
            _focus: {
              background: "primary.50",
            },
            _hover: {
              background: "primary.100",
            },
            _placeholder: {
              color: "primary.300",
            },
            rounded: "none",
          },
        },
        defaultProps: {
          focusBorderColor: "primary.400",
        },
      },
    },
  });
