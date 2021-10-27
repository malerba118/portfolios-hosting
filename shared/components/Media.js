import { Box } from "@chakra-ui/react";
import MotionImage from "./MotionImage";

const Media = ({ media, alt, ...otherProps }) => {
  return (
    <MotionImage
      // key={media?.processedUrl || media?.rawUrl}
      src={media?.processedUrl || media?.rawUrl}
      alt={alt || media?.name}
      {...otherProps}
    />
  );
};

export default Media;
