import React, { useState } from "react";
import Page from "./Page";
import { Box, Text, Heading, HStack, Flex, Stack } from "@chakra-ui/react";
import { Grid, GridItem } from "./Grid";
import Media from "./Media";
import { AnimatePresence, AnimateSharedLayout, motion } from "framer-motion";
import MotionImage from "./components/MotionImage";
import ScrollReveal from "./components/ScrollReveal";
import Entrance from "./components/Entrance";

const Label = ({ side, title, subtitle }) => {
  if (side === "left") {
    return (
      <ScrollReveal>
        <Flex w={300} flexDirection="column" align="flex-start">
          <Entrance
            key={0}
            delay={0.4}
            initialY={20}
            initialOpacity={0}
            initialRotation={"-10deg"}
          >
            <Heading fontSize="lg" m={0}>
              {title}
            </Heading>
          </Entrance>
          <Entrance key={1} width={300} initialX={300}>
            <Box w={300} h="1px" bg="black" />
          </Entrance>
          <Entrance
            key={2}
            delay={0.4}
            initialY={-20}
            initialOpacity={0}
            initialRotation={"10deg"}
          >
            <Text fontSize="sm" color="gray.700">
              {subtitle}
            </Text>
          </Entrance>
        </Flex>
      </ScrollReveal>
    );
  } else {
    return (
      <ScrollReveal>
        <Flex w={300} flexDirection="column" align="flex-end">
          <Entrance
            key={0}
            delay={0.4}
            initialY={20}
            initialOpacity={0}
            initialRotation={"10deg"}
          >
            <Heading fontSize="lg" m={0}>
              {title}
            </Heading>
          </Entrance>
          <Entrance key={1} width={300} initialX={-300}>
            <Box w={300} h="1px" bg="black" />
          </Entrance>
          <Entrance
            key={2}
            delay={0.4}
            initialY={-20}
            initialOpacity={0}
            initialRotation={"-10deg"}
          >
            <Text fontSize="sm" color="gray.700">
              {subtitle}
            </Text>
          </Entrance>
        </Flex>
      </ScrollReveal>
    );
  }
};

const ProjectCard = ({ project, isSelected, onSelect, labelSide }) => {
  const media = project.images.items[0];
  return (
    <HStack
      spacing={4}
      onClick={() => onSelect(project.id)}
      bg="white"
      h="100vh"
      w="100%"
      justifyContent={labelSide === "left" ? "flex-end" : "flex-start"}
    >
      {labelSide === "left" && (
        <>
          <Box pos="relative" w={300}>
            <Label
              side="left"
              title={project.name}
              subtitle={project.summary}
            />
          </Box>
          <ScrollReveal h="100%" minWidth={300} w="50%">
            <MotionImage
              width="100%"
              height="100%"
              initialScale={0.8}
              src={media.processedUrl || media.rawUrl}
            />
          </ScrollReveal>
        </>
      )}
      {labelSide === "right" && (
        <>
          <ScrollReveal h="100%" minWidth={300} w="50%">
            <MotionImage
              width="100%"
              height="100%"
              initialScale={0.8}
              src={media.processedUrl || media.rawUrl}
            />
          </ScrollReveal>
          <Box pos="relative" w={300}>
            <Label
              side="right"
              title={project.name}
              subtitle={project.summary}
            />
          </Box>
        </>
      )}
    </HStack>
  );
};

const ProjectsPage = ({ projects }) => {
  const [selected, setSelected] = useState(null);

  const selectedProject = projects.find((p) => p.id === selected);

  return (
    <AnimateSharedLayout type="switch">
      <Page id="projects" title="Projects">
        <Stack spacing={8} p={8}>
          {projects.map((project, i) => (
            <ProjectCard
              labelSide={i % 2 === 0 ? "left" : "right"}
              isSelected={selected === project.id}
              onSelect={setSelected}
              project={project}
            />
          ))}
        </Stack>
      </Page>
    </AnimateSharedLayout>
  );
};

export default ProjectsPage;
