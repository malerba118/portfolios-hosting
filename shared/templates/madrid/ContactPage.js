import React, { useState, useEffect } from "react";
import {
  Text,
  Flex,
  Stack,
  Center,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  Button,
} from "@chakra-ui/react";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import Toolbar from "./Toolbar";

const ContactPage = ({ subdomain }) => {
  return (
    <Flex
      h="100vh"
      flexDirection="column"
      pos="absolute"
      inset={0}
      bg="primary.50"
    >
      <Toolbar />
      <Center flex={1}>
        <Stack as="form" fontSize="xl" spacing={4} p={1} w="400px">
          <FormControl id="name" isRequired>
            <FormLabel as={Text}>Name</FormLabel>
            <Input variant="filled" placeholder="Name" />
          </FormControl>
          <FormControl id="email" isRequired>
            <FormLabel as={Text}>Email</FormLabel>
            <Input variant="filled" placeholder="Email" />
          </FormControl>
          <FormControl id="message" isRequired>
            <FormLabel as={Text}>Message</FormLabel>
            <Textarea variant="filled" placeholder="Message" />
          </FormControl>
          <Button colorScheme="primary">Submit</Button>
        </Stack>
      </Center>
    </Flex>
  );
};

export default ContactPage;
