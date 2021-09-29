import { Button, Box } from "@chakra-ui/react";
import { useSpring } from "framer-motion";
import { useState, useEffect, useRef, useContext, createContext } from "react";
import { useMouse } from "./MouseProvider";
import { MotionBox } from "./chakra";

const CursorContext = createContext(null);

const useCursor = () => {
  return useContext(CursorContext);
};

export const CursorProvider = ({ children }) => {
  const [over, setOver] = useState(null);
  return (
    <CursorContext.Provider value={{ over, setOver }}>
      {children}
    </CursorContext.Provider>
  );
};

export const Cursor = ({ children }) => {
  const cursor = useCursor();
  const mouse = useMouse();
  const springs = {
    x: useSpring(mouse.position.x, { mass: 0.01 }),
    y: useSpring(mouse.position.y, { mass: 0.01 }),
  };

  return (
    <MotionBox
      pos="fixed"
      display="inline-block"
      style={springs}
      zIndex={10}
      pointerEvents="none"
      initial="idle"
      animate={cursor.over ? "over" : "idle"}
    >
      <Box
        position="relative"
        display="inline-block"
        transform="translateX(-50%) translateY(-50%)"
      >
        {typeof children === "function" ? children(cursor) : children}
      </Box>
    </MotionBox>
  );
};

export const CursorButton = ({ children, ...otherProps }) => {
  const ref = useRef(null);
  const cursor = useCursor();

  useEffect(() => {
    return () => cursor.setOver(null);
  }, []);

  return (
    <Button
      ref={ref}
      onMouseOver={() => cursor.setOver(ref.current)}
      onMouseOut={() => cursor.setOver(null)}
      {...otherProps}
    >
      {children}
    </Button>
  );
};

Cursor.Button = CursorButton;
