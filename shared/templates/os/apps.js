import {
  Box,
  HStack,
  Flex,
  Wrap,
  Image,
  Heading,
  Stack,
  Text,
  Button,
  Center,
} from "@chakra-ui/react";
import Thumbnail, { renderers } from "./Thumbnail";
import { useFs } from "./FsProvider";
import { os } from "./utils";
import { observer } from "mobx-react";
import RichtextViewer from "./RichtextViewer";
import Carousel from "shared/components/Carousel";
import { ContactForm, ContactSection } from "./Contact";
import { useLightbox } from "shared/components/Lightbox";
import { useEffect } from "react";
import { autorun } from "mobx";
import DateViewer from "shared/components/DateViewer";

const apps = {
  finder: {
    name: "Finder",
    getInstanceKey: ({ node }) => "finder",
    App: observer(({ node }) => {
      const fs = useFs();
      const path = [];
      let n = node;
      while (n) {
        path.unshift(n);
        n = n.parent;
      }
      return (
        <Flex direction="column" h="100%">
          <HStack
            borderTop="1px solid var(--chakra-colors-primary-700)"
            bg="primary.900"
            h="28px"
            px={2}
          >
            {path.map((ancestor, i) => (
              <HStack key={ancestor?.id}>
                <Button
                  color="primary.100"
                  variant="link"
                  onClick={() => os.open(ancestor)}
                  _focus={{ boxShadow: "none" }}
                  fontSize="xs"
                >
                  {ancestor.name}
                </Button>
                {i < path.length - 1 && (
                  <Text fontSize="xs" color="primary.100">
                    {">"}
                  </Text>
                )}
              </HStack>
            ))}
          </HStack>
          <Box flex={1} overflow="auto">
            <Wrap p={5} spacing={5} align="flex-start">
              {fs.children(node).map((node) => (
                <Thumbnail
                  key={node.id}
                  node={node}
                  size="64px"
                  color="primary.800"
                  onClick={() => os.open(node)}
                />
              ))}
            </Wrap>
          </Box>
        </Flex>
      );
    }),
  },
  contact: {
    name: "Contact",
    getInstanceKey: ({ node }) => "contact",
    App: ({ node }) => {
      return <ContactSection minH="100%" />;
    },
  },
  about: {
    name: "About",
    getInstanceKey: ({ node }) => "about",
    App: ({ node }) => {
      const about = node.data;
      const lightbox = useLightbox();

      useEffect(() => {
        return autorun(() => {
          if (os.selected?.node?.id === node?.id) {
            lightbox.setItems(node.data.images.items);
          }
        });
      }, []);

      return (
        <Box h="100%" overflow="auto">
          <Carousel defaultItems={about.images.items} height="75%" />
          <Stack p="5%" maxW="760px" m="0 auto">
            <Flex justify="space-between" align="center" flexWrap="wrap">
              <Heading size="xl">
                {about.firstName} {about.lastName}
              </Heading>
              {about?.resume?.url && (
                <Button
                  onClick={() => {
                    window.open(about?.resume?.url, "_blank");
                  }}
                  colorScheme="secondary"
                  variant="outline"
                  size="sm"
                >
                  <Text numOfLines={1} w="100%" isTruncated title="View Resume">
                    View Resume
                  </Text>
                </Button>
              )}
            </Flex>
            {about.title && <Heading size="md">{about.title}</Heading>}
            {/* <Heading size="md">{about.summary}</Heading> */}
            <RichtextViewer value={about.description} />
          </Stack>
        </Box>
      );
    },
  },
  project: {
    name: "Work",
    getInstanceKey: ({ node }) => "project-" + node?.data?.id,
    App: ({ node }) => {
      const lightbox = useLightbox();
      const project = node.data;
      const media = project.images.items[0];
      useEffect(() => {
        return autorun(() => {
          if (os.selected?.node?.id === node?.id) {
            lightbox.setItems(node.data.images.items);
          }
        });
      }, []);
      return (
        <Box h="100%" overflow="auto">
          <Carousel defaultItems={project.images.items} height="75%" />
          <Stack p="5%">
            <Heading size="xl">{project.name} </Heading>
            {/* <HStack flexWrap="wrap"> */}
            <Heading size="md">
              <DateViewer
                startDate={project.startDate}
                endDate={project.endDate}
              />
            </Heading>
            {/* <Text fontSize="xl">•</Text> */}
            {/* {project.summary && <Heading size="md">{project.summary}</Heading>} */}
            {/* </HStack> */}

            {/* <Heading size="md">{about.summary}</Heading> */}
            <RichtextViewer value={project.description} />
          </Stack>
        </Box>
      );
    },
  },
};

export default apps;
