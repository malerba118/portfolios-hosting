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
      const media = about.images.items[0];
      return (
        <Box h="100%" overflow="auto">
          <Image
            src={media?.processedUrl || media?.rawUrl}
            w="100%"
            h="75%"
            objectFit="cover"
          />
          <Stack p={4}>
            <Heading size="xl">
              {about.firstName} {about.lastName}
            </Heading>
            {about.title && <Heading size="md">{about.title}</Heading>}
            {/* <Heading size="md">{about.summary}</Heading> */}
            <RichtextViewer value={about.description} />
          </Stack>
        </Box>
      );
    },
  },
  project: {
    name: "Project",
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
          <Carousel defaultItems={project.images.items} height="70%" />
          {/* <Image
            key={media.id}
            src={media.processedUrl || media.rawUrl}
            h="75%"
            w="100%"
            objectFit="cover"
          /> */}
          <Stack p={4}>
            <Heading size="xl">{project.name}</Heading>
            {project.summary && <Heading size="md">{project.summary}</Heading>}
            {/* <Heading size="md">{about.summary}</Heading> */}
            <RichtextViewer value={project.description} />
          </Stack>
        </Box>
      );
    },
  },
};

export default apps;
