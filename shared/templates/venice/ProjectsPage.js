import React, { useState } from "react";
import Page from "./Page";
import {
  Box,
  Text,
  Heading,
  HStack,
  Flex,
  Stack,
  useBreakpoint,
  useEventListener,
} from "@chakra-ui/react";
import { Grid, GridItem } from "./Grid";
import Media from "./Media";
import { AnimatePresence, AnimateSharedLayout, motion } from "framer-motion";
import MotionImage from "shared/components/MotionImage";
import ScrollReveal from "shared/components/ScrollReveal";
import Entrance from "shared/components/Entrance";
import { MotionBox, transitions } from "shared/components/animation";
import DateViewer from "shared/components/DateViewer";
import RichtextViewer from "shared/components/RichtextViewer";

const Label = ({ side, title, subtitle }) => {
  if (side === "left") {
    return (
      <ScrollReveal persist>
        <Flex w={270} flexDirection="column" align="flex-start">
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
          <Entrance key={1} width={270} initialX={270}>
            <Box w={270} h="1px" bg="black" />
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
      <ScrollReveal persist>
        <Flex w={270} flexDirection="column" align="flex-end">
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
          <Entrance key={1} width={270} initialX={-270}>
            <Box w={270} h="1px" bg="black" />
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

const ProjectPage = ({ project }) => {
  const media = project.images.items[0];
  return (
    <MotionBox
      initial={{ opacity: 0, y: 0 }}
      animate={{ opacity: 1, y: 0, transition: transitions.two(0.6) }}
      exit={{ opacity: 0 }}
      position="absolute"
      inset={0}
      h="100%"
      bg="white"
    >
      <MotionImage
        src={media?.processedUrl || media?.rawUrl || "/image-unavailable.svg"}
        width="100%"
        height="380"
        initialScale={1.03}
        initialOpacity={1}
      />
      <Stack p={8}>
        <Entrance initialY={40} initialOpacity={0}>
          <Heading fontSize="3xl">{project.name}</Heading>
        </Entrance>
        <Entrance initialY={30} initialOpacity={0} delay={0.1}>
          <Heading color="gray.700" fontSize="lg">
            {project.summary}
          </Heading>
        </Entrance>
        <Entrance initialY={12} initialOpacity={0} delay={0.45}>
          <RichtextViewer value={project.description} />
        </Entrance>
      </Stack>
    </MotionBox>
  );
};

const ProjectCard = ({ project, onSelect, labelSide }) => {
  const media = project.images.items[0];
  return (
    <HStack
      spacing={[0, 0, 4]}
      bg="white"
      h="calc(100vh - 64px)"
      w="100%"
      flexWrap="wrap"
      justifyContent={labelSide === "left" ? "flex-end" : "flex-start"}
      overflow="hidden"
    >
      {labelSide === "left" && (
        <>
          <Box pos="relative" w={270} h="50px">
            <Label
              side="left"
              title={project.name}
              subtitle={
                <DateViewer
                  startDate={project.startDate}
                  endDate={project.endDate}
                />
              }
            />
          </Box>
          <ScrollReveal
            persist
            h={["calc(100% - 50px)", "calc(100% - 50px)", "90%"]}
            minW={["100%", "100%", 0]}
            maxW={["100%", "100%", 800]}
            flex={1}
          >
            <MotionImage
              onClick={() => onSelect(project.id)}
              cursor="pointer"
              width="100%"
              height="100%"
              initialScale={0.9}
              src={
                media?.processedUrl || media?.rawUrl || "/image-unavailable.svg"
              }
            />
          </ScrollReveal>
        </>
      )}
      {labelSide === "right" && (
        <>
          <ScrollReveal
            persist
            h={["calc(100% - 50px)", "calc(100% - 50px)", "90%"]}
            minW={["100%", "100%", 0]}
            maxW={["100%", "100%", 800]}
            flex={1}
          >
            <MotionImage
              onClick={() => onSelect(project.id)}
              cursor="pointer"
              width="100%"
              height="100%"
              initialScale={0.9}
              src={
                media?.processedUrl || media?.rawUrl || "/image-unavailable.svg"
              }
            />
          </ScrollReveal>
          <Box pos="relative" w={270} h="50px">
            <Label
              side="right"
              title={project.name}
              subtitle={
                <DateViewer
                  startDate={project.startDate}
                  endDate={project.endDate}
                />
              }
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

  useEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      setSelected(null);
    }
  });

  return (
    <AnimateSharedLayout type="switch">
      <Page id="projects" title="Projects">
        <AnimatePresence>
          {!selected && (
            <Stack spacing={12} p={12}>
              {projects.map((project, i) => (
                <ProjectCard
                  key={project.id}
                  labelSide={i % 2 === 0 ? "left" : "right"}
                  isSelected={selected === project.id}
                  onSelect={setSelected}
                  project={project}
                />
              ))}
            </Stack>
          )}
          {selected && <ProjectPage project={selectedProject} />}
        </AnimatePresence>
      </Page>
    </AnimateSharedLayout>
  );
};

export default ProjectsPage;
