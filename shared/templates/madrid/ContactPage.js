import React, { useState } from "react";
import { usePortfolio } from "shared/components/PortfolioProvider";
import {
  Box,
  Heading,
  Center,
  Stack,
  Button,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  Text,
  FormErrorMessage,
  IconButton,
  Flex,
} from "@chakra-ui/react";
import Link from "shared/components/Link";
import * as api from "client/api";
import useAsync from "shared/hooks/useAsync";
import { useDraftMode } from "shared/components/DraftModeProvider";
import { IoMdReturnLeft } from "react-icons/io";
import useContactForm, { validate, isEmpty } from "shared/hooks/useContactForm";
import Toolbar from "./Toolbar";
import SocialLinks from "shared/components/SocialLinks";

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
      <Box pos="relative" flex={1}>
        <ContactSection />
        <SocialLinks
          isInline
          tooltipPlacement="top"
          pos="absolute"
          bottom={4}
          right={4}
        />
      </Box>
    </Flex>
  );
};

const ContactSection = () => {
  // type Mode = null | 'form' | 'info'
  const [mode, setMode] = useState(null);
  const portfolio = usePortfolio();
  const contact = portfolio.data.content.contact;
  const hasInfo = !!contact?.email || !!contact?.phone;

  // If no info, jsut show form
  if (!hasInfo) {
    return (
      <Center pos="relative" flexDirection="column" p={8}>
        <ContactForm />
      </Center>
    );
  }

  // Otherwise give option to choose mode
  return (
    <Center pos="relative" flexDirection="column" p={8}>
      {mode === null && (
        <Stack spacing={6}>
          <Heading size="2xl" textAlign="center">
            <Link
              onClick={(e) => {
                e.preventDefault();
                setMode("info");
              }}
              alignSelf="center"
              showUnderline
              fontSize="inherit"
            >
              Get in Touch
            </Link>
          </Heading>
          <Heading
            textTransform="uppercase"
            textAlign="center"
            color="primary.400"
            size="md"
          >
            Or
          </Heading>
          <Heading size="2xl" textAlign="center">
            <Link
              onClick={(e) => {
                e.preventDefault();
                setMode("form");
              }}
              alignSelf="center"
              showUnderline
              fontSize="inherit"
            >
              Leave a Message
            </Link>
          </Heading>
        </Stack>
      )}
      {mode === "form" && <ContactForm />}
      {mode === "info" && <ContactInfo />}
      {mode !== null && (
        <IconButton
          onClick={() => setMode(null)}
          pos="absolute"
          top={0}
          left={{ base: 4, md: 16 }}
          icon={<IoMdReturnLeft />}
          colorScheme="primary"
        />
      )}
    </Center>
  );
};

const ContactForm = () => {
  const portfolio = usePortfolio();
  const draftMode = useDraftMode();
  const contactForm = useContactForm();

  const requests = { contact: useAsync(api.portfolio.contact) };

  return (
    <Stack
      as="form"
      fontSize="xl"
      spacing={{ base: 4, md: 4 }}
      p={1}
      w="100%"
      maxW="420px"
      onSubmit={(e) => {
        e.preventDefault();
        const errors = validate(contactForm.form);
        contactForm.setErrors(errors);
        const isSubmitable = isEmpty(errors);
        if (isSubmitable) {
          requests.contact
            .execute(portfolio.id, contactForm.form, { useDraft: draftMode })
            .then(() => {
              contactForm.reset();
            })
            .finally(() => {
              setTimeout(() => {
                requests.contact.reset();
              }, 3000);
            });
        }
      }}
    >
      <Heading textAlign="start" size="xl">
        Leave a Message
      </Heading>
      <FormControl isInvalid={!!contactForm.errors.name} id="name">
        <FormLabel as={Text}>Your Name</FormLabel>
        <Input
          value={contactForm.form.name}
          onChange={(e) => {
            contactForm.setField("name", e.target.value);
          }}
          variant="filled"
          placeholder="Name"
        />
        <FormErrorMessage>{contactForm.errors.name}</FormErrorMessage>
      </FormControl>
      <FormControl id="email" isInvalid={!!contactForm.errors.email}>
        <FormLabel as={Text}>Your Email</FormLabel>
        <Input
          value={contactForm.form.email}
          onChange={(e) => {
            contactForm.setField("email", e.target.value);
          }}
          variant="filled"
          placeholder="Email"
        />
        <FormErrorMessage>{contactForm.errors.email}</FormErrorMessage>
      </FormControl>
      <FormControl id="message" isInvalid={!!contactForm.errors.message}>
        <FormLabel as={Text}>Your Message for Me</FormLabel>
        <Textarea
          value={contactForm.form.message}
          onChange={(e) => {
            contactForm.setField("message", e.target.value);
          }}
          variant="filled"
          placeholder="Message"
        />
        <FormErrorMessage>{contactForm.errors.message}</FormErrorMessage>
      </FormControl>
      <Box py={2}>
        <Button
          isLoading={requests.contact.state.pending}
          w="100%"
          type="submit"
          colorScheme="primary"
        >
          {requests.contact.state.fulfilled && "Message Sent!"}
          {requests.contact.state.rejected && "Failed to send"}
          {!requests.contact.state.fulfilled &&
            !requests.contact.state.rejected &&
            "Submit"}
        </Button>
      </Box>
    </Stack>
  );
};

const ContactInfo = () => {
  const portfolio = usePortfolio();
  const contact = portfolio.data.content.contact;
  return (
    <Stack>
      <Heading textAlign="start" size="xl">
        Get in Touch
      </Heading>
      {contact.email && <Heading size="md">Email: {contact.email}</Heading>}
      {contact.phone && <Heading size="md">Phone: {contact.phone}</Heading>}
    </Stack>
  );
};

export default ContactPage;
