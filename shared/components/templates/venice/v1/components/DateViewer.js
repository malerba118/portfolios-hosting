import { useMemo } from "react";
import { Box, Flex, HStack } from "@chakra-ui/react";

const months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

export const DateViewer = ({ startDate, endDate }) => {
  const d1 = useMemo(() => startDate && new Date(startDate), [startDate]);
  const d2 = useMemo(() => endDate && new Date(endDate), [endDate]);

  return (
    <HStack spacing={1}>
      {d1 && (
        <Box>
          {months[d1.getMonth()]}, {d1.getFullYear()}
        </Box>
      )}
      {d1 && d2 && <Box>-</Box>}
      {d2 && (
        <Box>
          {months[d2.getMonth()]}, {d2.getFullYear()}
        </Box>
      )}
    </HStack>
  );
};

export default DateViewer;
