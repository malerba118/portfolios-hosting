import React from "react";
import { Box, Divider, Flex, Heading, Stack, Text } from "@chakra-ui/react";
import { useQuery } from "react-query";
import { useAuth } from "client/useAuth";
import * as api from "client/api";

const Template = ({ portfolio }) => {
  const { about, projects } = portfolio.content;
  return (
    <Box p={6}>
      <Stack align="center">
        <Heading size="2xl">
          {about.firstName} {about.lastName}
        </Heading>
        <Heading size="md">{about.title}</Heading>
      </Stack>
      <Divider my={4} />
      <Heading size="lg" mb={4}>
        Projects
      </Heading>
      <Stack spacing={3}>
        {projects.map((project) => (
          <Box>
            <Heading size="sm">{project.name}</Heading>
            <Heading color="gray.700" fontSize="xs">
              {project.summary}
            </Heading>
            <Text fontSize="xs">{project.description}</Text>
          </Box>
        ))}
      </Stack>
    </Box>
  );
};

export default Template;
