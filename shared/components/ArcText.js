// import React, { Component, PureComponent } from "react";
// import PropTypes from "prop-types";

// import ArcText from "arc-text";

// export default class ReactArcText extends PureComponent {
//   static propTypes = {
//     text: PropTypes.string,
//     class: PropTypes.string,
//     direction: PropTypes.number,
//     arc: PropTypes.number,
//   };

//   checkProps = () => {
//     this.text = this.props.text || "";
//     this.direction = this.props.direction || 1;
//     this.arc = this.props.arc || 150;
//     this.class = this.props.class || "";
//   };

//   arcLetters = () => {
//     this.checkProps();
//     if (this.container) {
//       if (this.textCyrcle) {
//         this.textCyrcle.destroy();
//       }

//       this.container.innerHTML = this.text;
//       this.textCyrcle = new ArcText(this.container);
//       this.textCyrcle.arc(this.arc);
//       this.textCyrcle.direction(this.direction);
//     }
//   };

//   componentDidMount() {
//     this.arcLetters();
//   }

//   render() {
//     this.arcLetters();
//     return (
//       <div
//         className={"react-arc-text " + this.class}
//         ref={(el) => {
//           this.container = el;
//         }}
//       />
//     );
//   }
// }

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
