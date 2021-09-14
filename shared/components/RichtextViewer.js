import React, { useCallback, useMemo, useState } from "react";
import {
  ListItem,
  OrderedList,
  UnorderedList,
  Text,
  Heading,
  Link,
} from "@chakra-ui/react";
import { Editable, withReact, Slate } from "slate-react";
import { createEditor } from "slate";

const DEFAULT_VALUE = JSON.stringify([
  { type: "paragraph", children: [{ text: "" }] },
]);

export const isEmpty = (value) => {
  try {
    const parsed = JSON.parse(value);
    if (
      parsed?.length === 1 &&
      parsed[0]?.children?.length === 1 &&
      parsed[0]?.children?.[0]?.text === ""
    ) {
      return true;
    }
    return false;
  } catch (err) {
    return true;
  }
};

const RichtextViewer = ({
  value,
  elementComponent: Element = DefaultElement,
  leafComponent: Leaf = DefaultLeaf,
}) => {
  const renderElement = useCallback((props) => <Element {...props} />, []);
  const renderLeaf = useCallback((props) => <Leaf {...props} />, []);
  const [editor] = useState(() => withReact(createEditor()), []);

  const parsed = useMemo(() => {
    try {
      return JSON.parse(value || DEFAULT_VALUE);
    } catch (err) {
      console.log(err);
      return JSON.parse(DEFAULT_VALUE);
    }
  }, [value]);

  if (!value || value === DEFAULT_VALUE) {
    return null;
  }

  return (
    <Slate editor={editor} value={parsed}>
      <Editable
        renderElement={renderElement}
        renderLeaf={renderLeaf}
        readOnly
      />
    </Slate>
  );
};

const DefaultElement = ({ attributes, children, element }) => {
  switch (element.type) {
    case "link":
      return (
        <Link
          color="primary.700"
          as={"a"}
          size="lg"
          {...attributes}
          href={element.url}
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
        <Text as="li" size="xl" {...attributes}>
          {children}
        </Text>
      );
    case "numbered-list":
      return <OrderedList {...attributes}>{children}</OrderedList>;
    default:
      return (
        <Text size="xl" {...attributes}>
          {children}
        </Text>
      );
  }
};

const DefaultLeaf = ({ attributes, children, leaf }) => {
  if (leaf.bold) {
    children = <strong>{children}</strong>;
  }

  if (leaf.code) {
    children = <code>{children}</code>;
  }

  if (leaf.italic) {
    children = <em>{children}</em>;
  }

  if (leaf.underline) {
    children = <u>{children}</u>;
  }

  return <span {...attributes}>{children}</span>;
};

export default RichtextViewer;
