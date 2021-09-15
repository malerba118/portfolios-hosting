import { useMemo } from "react";
import { Box, Text, HStack } from "@chakra-ui/react";

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
    <Box display="inline-block">
      {d1 && (
        <Box display="inline">
          {months[d1.getMonth()]}, {d1.getFullYear()}
        </Box>
      )}
      {d1 && d2 && <Box display="inline"> - </Box>}
      {d2 && (
        <Box display="inline">
          {months[d2.getMonth()]}, {d2.getFullYear()}
        </Box>
      )}
    </Box>
  );
};

export default DateViewer;
