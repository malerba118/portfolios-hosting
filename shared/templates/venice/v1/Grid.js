import React, { createContext, useContext } from "react";
import { Box, SimpleGrid } from "@chakra-ui/react";
import { AnimatePresence, AnimateSharedLayout, motion } from "framer-motion";

const MotionBox = motion(Box);

const GridContext = createContext(null);

export const Grid = ({ selected, onSelect, children }) => {
  return (
    <GridContext.Provider value={{ selected, setSelected: onSelect }}>
      <AnimateSharedLayout>
        <SimpleGrid margin={8} spacing={8} columns={2} pos="relative">
          {children}
        </SimpleGrid>
      </AnimateSharedLayout>
    </GridContext.Provider>
  );
};

const useGrid = () => useContext(GridContext);

export const GridItem = ({ itemId, children, ...otherProps }) => {
  const grid = useGrid();

  const isSelected = grid.selected === itemId;

  return (
    <>
      <MotionBox
        onClick={() => grid.setSelected(itemId)}
        {...otherProps}
        layout
        layoutId={`grid-item-${itemId}`}
      >
        {children}
      </MotionBox>
      <AnimatePresence>
        {isSelected && (
          <MotionBox
            layout
            pos="fixed"
            zIndex={10}
            inset={0}
            p={16}
            display="flex"
            alignItems="center"
            justifyContent="center"
            initial={{ background: "rgba(0, 0, 0, 0)" }}
            animate={{
              background: "rgba(0,0,0,.5)",
              transition: { duration: 0.3 },
            }}
            exit={{ background: "rgba(0, 0, 0, 0)" }}
            onClick={() => grid.setSelected(null)}
          >
            <MotionBox
              layout
              overflow="auto"
              h="100%"
              w="100%"
              layoutId={`grid-item-${itemId}`}
              onClick={(e) => e.stopPropagation()}
            >
              {children}
            </MotionBox>
          </MotionBox>
        )}
      </AnimatePresence>
    </>
  );
};
