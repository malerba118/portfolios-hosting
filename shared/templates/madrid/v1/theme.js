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
      },
    },
    components: {
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
    },
  });
