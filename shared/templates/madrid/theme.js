import { extendTheme } from "@chakra-ui/react";
import { palettes } from "shared/utils/colors";

export const makeTheme = ({ headingFont, paragraphFont, palette }) =>
  extendTheme({
    colors: palettes[palette],
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
      },
      Heading: {
        baseStyle: {
          color: "primary.700",
          fontSize: "3xl",
        },
        sizes: {
          xs: {
            color: "primary.700",
            fontSize: {
              base: "md",
              md: "xl",
            },
          },
          sm: {
            color: "primary.700",
            fontSize: {
              base: "lg",
              md: "2xl",
            },
          },
          md: {
            color: "primary.700",
            fontSize: {
              base: "xl",
              md: "3xl",
            },
          },
          lg: {
            color: "primary.700",
            fontSize: {
              base: "2xl",
              md: "4xl",
            },
          },
          xl: {
            color: "primary.700",
            fontSize: {
              base: "3xl",
              md: "5xl",
            },
          },
          "2xl": {
            color: "primary.700",
            fontSize: {
              base: "4xl",
              md: "6xl",
            },
          },
          "3xl": {
            color: "primary.700",
            fontSize: {
              base: "5xl",
              md: "7xl",
            },
          },
          "4xl": {
            color: "primary.700",
            fontSize: {
              base: "6xl",
              md: "8xl",
            },
          },
        },
      },
      Text: {
        baseStyle: {
          color: "primary.700",
          fontSize: "sm",
        },
        sizes: {
          xs: {
            color: "primary.700",
            fontSize: "xs",
          },
          sm: {
            color: "primary.700",
            fontSize: "sm",
          },
          md: {
            color: "primary.700",
            fontSize: "md",
          },
          lg: {
            color: "primary.700",
            fontSize: "lg",
          },
          xl: {
            color: "primary.700",
            fontSize: "xl",
          },
          "2xl": {
            color: "primary.700",
            fontSize: "2xl",
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
