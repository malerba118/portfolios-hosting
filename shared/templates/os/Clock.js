import React, { useState } from "react";
import { useInterval } from "@chakra-ui/react";
import dateFormat from "dateformat";

const Clock = React.memo(() => {
  const [date, setDate] = useState(new Date());
  useInterval(() => {
    setDate(new Date());
  }, 10000);
  return <span>{dateFormat(date, "ddd mmm dS h:MM TT")}</span>;
});

export default Clock;
