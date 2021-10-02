import { Avatar } from "@chakra-ui/react";
import MotionImage from "./MotionImage";

const MediaAvatar = ({ media, ...otherProps }) => {
  return <Avatar src={media?.processedUrl || media?.rawUrl} {...otherProps} />;
};

export default MediaAvatar;
