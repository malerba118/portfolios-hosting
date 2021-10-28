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
import { AnimatePresence, AnimateSharedLayout, motion } from "framer-motion";
import MotionImage from "shared/components/MotionImage";
import ScrollReveal from "shared/components/ScrollReveal";
import Entrance from "shared/components/Entrance";
import { MotionBox, transitions } from "shared/components/animation";
import DateViewer from "shared/components/DateViewer";
import RichtextViewer from "shared/components/RichtextViewer";
import { variants } from "./styles";
import { useHistory } from "react-router-dom";

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
            <Box w={270} h="1px" bg="primary.700" opacity={0.5} />
          </Entrance>
          <Entrance
            key={2}
            delay={0.4}
            initialY={-20}
            initialOpacity={0}
            initialRotation={"10deg"}
          >
            <Text size="sm">{subtitle}</Text>
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
            <Box w={270} h="1px" bg="primary.700" opacity={0.5} />
          </Entrance>
          <Entrance
            key={2}
            delay={0.4}
            initialY={-20}
            initialOpacity={0}
            initialRotation={"-10deg"}
          >
            <Text size="sm">{subtitle}</Text>
          </Entrance>
        </Flex>
      </ScrollReveal>
    );
  }
};

const ProjectCard = ({ project, onSelect, labelSide }) => {
  const media = project.images.items[0];
  return (
    <HStack
      spacing={[0, 0, 4]}
      h="calc(var(--app-height) - 64px)"
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
              // initialScale={0.9}
              variants={{
                image: variants.image,
              }}
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
              variants={{
                image: variants.image,
              }}
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
  const history = useHistory();

  useEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      setSelected(null);
    }
  });

  return (
    <AnimateSharedLayout type="switch">
      <Page id="projects" title="Work" onClose={() => history.push("/")}>
        <AnimatePresence>
          <Stack
            spacing={{ base: 6, md: 16 }}
            p={{ base: 6, md: 16 }}
            paddingTop="0 !important"
          >
            {projects.map((project, i) => (
              <ProjectCard
                key={project.id}
                labelSide={i % 2 === 0 ? "left" : "right"}
                isSelected={selected === project.id}
                onSelect={() => history.push(`/work/${project.id}`)}
                project={project}
              />
            ))}
          </Stack>
        </AnimatePresence>
      </Page>
    </AnimateSharedLayout>
  );
};

export default ProjectsPage;
