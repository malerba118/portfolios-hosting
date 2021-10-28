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
        variants: {
          solid: {
            backgroundColor: "primary.400",
            color: "primary.50",
          },
          outline: {
            color: "primary.400",
            backgroundColor: "primary.50",
            borderColor: "primary.400",
            _hover: {
              backgroundColor: "primary.100",
            },
          },
        },
      },
      Heading: {
        baseStyle: {
          color: "primary.700",
        },
        sizes: {
          "2xs": {
            lineHeight: "170%",
            fontSize: {
              base: "sm",
              md: "sm",
            },
            color: "primary.700",
          },
          xs: {
            lineHeight: "170%",
            fontSize: {
              base: "xs",
              md: "md",
            },
            color: "primary.700",
          },
          sm: {
            lineHeight: "170%",
            fontSize: {
              base: "sm",
              md: "lg",
            },
            color: "primary.700",
          },
          md: {
            lineHeight: "170%",
            fontSize: {
              base: "md",
              md: "xl",
            },
            color: "primary.700",
          },
          lg: {
            lineHeight: "170%",
            fontSize: {
              base: "xl",
              md: "2xl",
            },
            color: "primary.700",
          },
          xl: {
            WebkitTextStroke: "2px currentColor",
            lineHeight: "140%",
            letterSpacing: ".05em",
            fontSize: {
              base: "xl",
              md: "3xl",
            },
            color: "primary.700",
          },
          "2xl": {
            WebkitTextStroke: "3px currentColor",
            lineHeight: "120%",
            letterSpacing: ".05em",
            fontSize: {
              base: "2xl",
              md: "4xl",
            },
            color: "primary.700",
          },
          "3xl": {
            WebkitTextStroke: "3px currentColor",
            lineHeight: "120%",
            letterSpacing: ".05em",
            fontSize: {
              base: "3xl",
              md: "5xl",
            },
            color: "primary.700",
          },
          "4xl": {
            WebkitTextStroke: "3px currentColor",
            lineHeight: "120%",
            letterSpacing: ".05em",
            fontSize: {
              base: "4xl",
              md: "6xl",
            },
            color: "primary.700",
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
            lineHeight: "170%",
            color: "primary.700",
            fontSize: "xs",
          },
          sm: {
            lineHeight: "170%",
            color: "primary.700",
            fontSize: "sm",
          },
          md: {
            lineHeight: "170%",
            color: "primary.700",
            fontSize: "md",
          },
          lg: {
            lineHeight: "170%",
            color: "primary.700",
            fontSize: "lg",
          },
          xl: {
            lineHeight: "170%",
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
              px: 2,
              background: "primary.100",
              color: "primary.700",
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
            px: 2,
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
