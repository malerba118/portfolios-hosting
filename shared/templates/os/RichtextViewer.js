import React from "react";
import {
  OrderedList,
  UnorderedList,
  Text,
  Heading,
  Link,
} from "@chakra-ui/react";
import RichtextViewerBase from "shared/components/RichtextViewer";

const Element = ({ attributes, children, element }) => {
  switch (element.type) {
    case "link":
      return (
        <Link
          color="primary.500"
          as={"a"}
          fontSize="inherit"
          {...attributes}
          href={element.url}
          target="_blank"
          isExternal
        >
          {children}
        </Link>
      );
    case "bulleted-list":
      return <UnorderedList {...attributes}>{children}</UnorderedList>;
    case "heading-one":
      return (
        <Heading size="lg" {...attributes}>
          {children}
        </Heading>
      );
    case "heading-two":
      return (
        <Heading size="md" {...attributes}>
          {children}
        </Heading>
      );
    case "list-item":
      return (
        <Text as="li" size="lg" {...attributes}>
          {children}
        </Text>
      );
    case "numbered-list":
      return <OrderedList {...attributes}>{children}</OrderedList>;
    default:
      return (
        <Text size="lg" {...attributes}>
          {children}
        </Text>
      );
  }
};

const RichtextViewer = ({ value }) => {
  return <RichtextViewerBase value={value} elementComponent={Element} />;
};

export default RichtextViewer;
