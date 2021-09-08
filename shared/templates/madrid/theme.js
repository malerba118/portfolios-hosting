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
            fontSize: "xl",
            opacity: 0.7,
          },
          sm: {
            color: "primary.700",
            fontSize: "2xl",
            opacity: 0.7,
          },
          md: {
            color: "primary.700",
            fontSize: "3xl",
            opacity: 0.7,
          },
          lg: {
            color: "primary.700",
            fontSize: "4xl",
          },
          xl: {
            color: "primary.700",
            fontSize: "5xl",
          },
          "2xl": {
            color: "primary.700",
            fontSize: "6xl",
          },
          "3xl": {
            color: "primary.700",
            fontSize: "7xl",
          },
          "4xl": {
            color: "primary.700",
            fontSize: "8xl",
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
            opacity: 0.7,
          },
          sm: {
            color: "primary.700",
            fontSize: "sm",
            opacity: 0.7,
          },
          md: {
            color: "primary.700",
            fontSize: "md",
            opacity: 0.7,
          },
          lg: {
            color: "primary.700",
            fontSize: "lg",
          },
          xl: {
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
            opacity: 0.7,
          },
          sm: {
            fontSize: "sm",
            opacity: 0.7,
          },
          md: {
            fontSize: "md",
            opacity: 0.7,
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
