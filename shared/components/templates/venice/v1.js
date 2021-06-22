import React from "react";
import { Box } from "@chakra-ui/react";
import { useQuery } from "react-query";
import { useAuth } from "client/useAuth";
import * as api from "client/api";

const Template = ({ portfolio }) => {
  return (
    <h1>{JSON.stringify(portfolio.content.projects.map((p) => p.name))}</h1>
  );
};

export default Template;
