import React, { useState } from "react";
import { Box } from "@chakra-ui/react";
import { Waypoint } from "react-waypoint";

const ScrollReveal = ({ children, ...otherProps }) => {
  const [visible, setVisible] = useState(false);

  return (
    <Waypoint
      onEnter={(args) => {
        setVisible(true);
      }}
      onLeave={() => {
        setVisible(false);
      }}
    >
      <Box
        key={String(visible)}
        visibility={visible ? "visible" : "hidden"}
        {...otherProps}
      >
        {children}
      </Box>
    </Waypoint>
  );
};

export default ScrollReveal;
