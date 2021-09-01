import React, { useState } from "react";
import Page from "./Page";
import {
  Box,
  Heading,
  Stack,
  Center,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  Button,
} from "@chakra-ui/react";
import Entrance from "shared/components/Entrance";

const ContactPage = ({}) => {
  return (
    <Page id="contact" title="Contact">
      <Center h="calc(100vh - 100px)">
        <Box minW="400px" p={8}>
          <Stack flex={1} spacing={4}>
            <Entrance initialY={30} initialOpacity={0} delay={0.1}>
              <Heading fontSize="xl">Drop me a note!</Heading>
            </Entrance>
            <Entrance initialY={12} initialOpacity={0} delay={0.45}>
              <Stack as="form" fontSize="xl" spacing={4} p={1}>
                <FormControl id="name" isRequired>
                  <FormLabel>Name</FormLabel>
                  <Input placeholder="Name" />
                </FormControl>
                <FormControl id="email" isRequired>
                  <FormLabel>Email</FormLabel>
                  <Input placeholder="Email" />
                </FormControl>
                <FormControl id="message" isRequired>
                  <FormLabel>Message</FormLabel>
                  <Textarea placeholder="Message" />
                </FormControl>
                <Button>Submit</Button>
              </Stack>
            </Entrance>
          </Stack>
        </Box>
      </Center>
    </Page>
  );
};

export default ContactPage;
