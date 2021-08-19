import { Box } from "@chakra-ui/react";
import "@fontsource/major-mono-display";

const Logo = ({
  charOne,
  charTwo,
  color = "primary.800",
  size = 64,
  padding = 16,
}) => {
  const innerBoxSize = size - padding * 2;
  const hypotenuse = Math.sqrt(innerBoxSize ** 2 + innerBoxSize ** 2);
  return (
    <Box
      width={`${size}px`}
      height={`${size}px`}
      border="1px solid"
      borderColor={color}
      color={color}
      position="relative"
      fontFamily="Major Mono Display"
    >
      <Box
        height={`${hypotenuse}px`}
        width="1px"
        transform="rotate(45deg)"
        transformOrigin="0 0"
        top={`${padding - 0.5}px`}
        right={`${padding - 0.5}px`}
        position="absolute"
        bg={color}
      />
      <Box
        pos="absolute"
        top={`${padding - 4}px`}
        left={`${padding - 5}px`}
        fontSize={`${innerBoxSize / 1.5}px`}
        lineHeight={`${innerBoxSize / 1.5}px`}
      >
        {charOne}
      </Box>
      <Box
        pos="absolute"
        bottom={`${padding - 4.5}px`}
        right={`${padding - 4.5}px`}
        fontSize={`${innerBoxSize / 1.5}px`}
        lineHeight={`${innerBoxSize / 1.5}px`}
      >
        {charTwo}
      </Box>
    </Box>
  );
};

export default Logo;
