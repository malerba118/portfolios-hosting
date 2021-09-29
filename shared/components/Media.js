import { Box } from "@chakra-ui/react";
import MotionImage from "./MotionImage";

const Media = ({ media, ...otherProps }) => {
  return (
    <MotionImage src={media?.processedUrl || media?.rawUrl} {...otherProps} />
  );
};

export default Media;
