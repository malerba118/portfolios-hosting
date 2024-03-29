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
} from "@chakra-ui/react";
import Link from "shared/components/Link";
import * as api from "client/api";
import useAsync from "shared/hooks/useAsync";
import { useDraftMode } from "shared/components/DraftModeProvider";
import { IoMdReturnLeft } from "react-icons/io";
import useContactForm, { validate, isEmpty } from "shared/hooks/useContactForm";
import SocialLinks from "shared/components/SocialLinks";
import { useHistory } from "react-router-dom";

export const ContactSection = () => {
  // type Mode = null | 'form' | 'info'
  const [mode, setMode] = useState(null);
  const portfolio = usePortfolio();
  const contact = portfolio.data.content.contact;
  const hasInfo = !!contact?.email || !!contact?.phone;

  // If no info, jsut show form
  if (!hasInfo) {
    return (
      <Center
        pos="relative"
        flexDirection="column"
        minH="var(--app-height)"
        p={8}
      >
        <ContactForm />
        <SocialLinks
          isInline
          tooltipPlacement="top"
          pos="absolute"
          bottom={4}
          right={4}
        />
      </Center>
    );
  }

  // Otherwise give option to choose mode
  return (
    <Center
      pos="relative"
      flexDirection="column"
      minH="var(--app-height)"
      p={8}
    >
      {mode === null && (
        <Stack spacing={6}>
          <Heading size="3xl" color="secondary.400" textAlign="center">
            <Link
              onClick={(e) => {
                e.preventDefault();
                setMode("info");
              }}
              color="secondary.400"
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
            color="primary.500"
          >
            Or
          </Heading>
          <Heading size="3xl" color="secondary.400" textAlign="center">
            <Link
              onClick={(e) => {
                e.preventDefault();
                setMode("form");
              }}
              color="secondary.400"
              alignSelf="center"
              showUnderline
              fontSize="inherit"
            >
              Leave a Message
            </Link>
          </Heading>
        </Stack>
      )}
      {mode === "form" && (
        <ContactForm
          showBackButton
          onBack={() => {
            setMode(null);
          }}
        />
      )}
      {mode === "info" && (
        <ContactInfo
          showBackButton
          onBack={() => {
            setMode(null);
          }}
        />
      )}
      {/* {mode !== null && (
        <IconButton
          onClick={() => setMode(null)}
          pos="absolute"
          top={4}
          left={4}
          icon={<IoMdReturnLeft />}
        />
      )} */}
      <SocialLinks
        isInline
        tooltipPlacement="top"
        pos="absolute"
        bottom={4}
        right={4}
      />
    </Center>
  );
};

const ContactForm = ({ onBack, showBackButton }) => {
  const portfolio = usePortfolio();
  const draftMode = useDraftMode();
  const contactForm = useContactForm();

  const requests = { contact: useAsync(api.portfolio.contact) };

  return (
    <Stack
      position="relative"
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
      {showBackButton && (
        <IconButton
          onClick={() => onBack()}
          pos="absolute"
          top={"-2px"}
          left={"-44px"}
          size="sm"
          icon={<IoMdReturnLeft />}
        />
      )}
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
          colorScheme="secondary"
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

const ContactInfo = ({ onBack, showBackButton = false }) => {
  const portfolio = usePortfolio();
  const contact = portfolio.data.content.contact;
  return (
    <Stack pos="relative">
      <Heading textAlign="start" size="xl">
        Get in Touch
      </Heading>
      {showBackButton && (
        <IconButton
          onClick={() => onBack()}
          pos="absolute"
          top={"1px"}
          left={"-48px"}
          size="sm"
          icon={<IoMdReturnLeft />}
        />
      )}
      {contact.email && <Heading size="md">Email: {contact.email}</Heading>}
      {contact.phone && <Heading size="md">Phone: {contact.phone}</Heading>}
    </Stack>
  );
};

const ContactPage = () => {
  const history = useHistory();
  return (
    <Box minH="var(--app-height)">
      <ContactSection />
      <IconButton
        onClick={() => {
          history.push({ pathname: "/work", state: { noScroll: true } });
        }}
        pos="absolute"
        top={4}
        left={4}
        // color="primary.900"
        icon={<IoMdReturnLeft />}
      />
    </Box>
  );
};

export default ContactPage;
