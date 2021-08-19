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
          color: "primary.800",
          fontSize: "3xl",
        },
        sizes: {
          xs: {
            color: "primary.800",
            fontSize: "xl",
            opacity: 0.825,
          },
          sm: {
            color: "primary.800",
            fontSize: "2xl",
            opacity: 0.825,
          },
          md: {
            color: "primary.800",
            fontSize: "3xl",
            opacity: 0.825,
          },
          lg: {
            color: "primary.800",
            fontSize: "4xl",
          },
          xl: {
            color: "primary.800",
            fontSize: "5xl",
          },
        },
      },
      Text: {
        baseStyle: {
          color: "primary.800",
          fontSize: "sm",
        },
        sizes: {
          xs: {
            color: "primary.800",
            fontSize: "xs",
            opacity: 0.825,
          },
          sm: {
            color: "primary.800",
            fontSize: "sm",
            opacity: 0.825,
          },
          md: {
            color: "primary.800",
            fontSize: "md",
            opacity: 0.825,
          },
          lg: {
            color: "primary.800",
            fontSize: "lg",
          },
          xl: {
            color: "primary.800",
            fontSize: "xl",
          },
        },
      },
    },
  });
