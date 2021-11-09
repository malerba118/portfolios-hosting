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
  const d1 = useMemo(
    () =>
      startDate && startDate !== "present" ? new Date(startDate) : startDate,
    [startDate]
  );
  const d2 = useMemo(
    () => (endDate && endDate !== "present" ? new Date(endDate) : endDate),
    [endDate]
  );

  return (
    <Box display="inline-block">
      {d1 && (
        <Box display="inline">
          {d1 instanceof Date && (
            <>
              {months[d1.getMonth()]}, {d1.getFullYear()}
            </>
          )}
          {d1 === "present" && "Present"}
        </Box>
      )}
      {d1 && d2 && <Box display="inline"> - </Box>}
      {d2 && (
        <Box display="inline">
          {d2 instanceof Date && (
            <>
              {months[d2.getMonth()]}, {d2.getFullYear()}
            </>
          )}
          {d2 === "present" && "Present"}
        </Box>
      )}
    </Box>
  );
};

export default DateViewer;
