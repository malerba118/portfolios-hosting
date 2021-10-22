import { Box, Center, Text } from "@chakra-ui/react";
import React from "react";

function ArcText({ text, fontSize, radius, degreePerChar = 8 }) {
  const characters = text.split("");

  return (
    <Center w={`${radius * 2}px`} h={`${radius * 2}px`}>
      <Box pos="relative" w="0" h="0">
        {characters.map((char, i) => (
          <Text
            color="primary.700"
            key={`heading-span-${i}`}
            fontSize={fontSize}
            style={{
              position: "absolute",
              display: "inline-block",
              width: "auto",
              textAlign: "center",
              letterSpacing: 0,
              bottom: 0,
              height: `${radius}px`,
              transform: `rotate(${
                degreePerChar * (i - characters.length / 2)
              }deg)`,
              transformOrigin: `bottom left`,
            }}
          >
            {char}
          </Text>
        ))}
      </Box>
    </Center>
  );
}

export default ArcText;
