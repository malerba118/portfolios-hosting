import { Box } from "@chakra-ui/react";
import MotionImage from "./MotionImage";

const Media = ({ media, alt, ...otherProps }) => {
  return (
    <MotionImage
      src={media?.processedUrl || media?.rawUrl}
      alt={alt || media?.name}
      {...otherProps}
    />
  );
};

export default Media;
