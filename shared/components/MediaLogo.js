import { Box } from "@chakra-ui/react";
import Media from "./Media";

const MediaLogo = ({ media, size = 64 }) => {
  return (
    <Box width={`${size}px`} height={`${size}px`}>
      <Media
        bg="transparent"
        media={media}
        height="100%"
        w="100%"
        hoverScale={1}
      />
    </Box>
  );
};

export default MediaLogo;
