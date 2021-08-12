import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  fonts: {
    heading: "Lato",
    body: "Source Sans Pro",
  },
  styles: {
    global: {
      body: {
        bg: "#f7f7f7",
      },
    },
  },
});

export default theme;
