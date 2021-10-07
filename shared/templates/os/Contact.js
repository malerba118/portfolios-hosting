import React, { useRef, useState } from "react";
import useFonts from "shared/hooks/useFonts";
import {
  BrowserRouter as Router,
  useHistory,
  Route,
  Switch,
  useLocation,
  useRouteMatch,
} from "react-router-dom";
import Advertisement from "shared/components/Advertisement";
import { usePortfolio } from "shared/components/PortfolioProvider";
import {
  Box,
  Heading,
  Center,
  Stack,
  HStack,
  Button,
  Flex,
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

export const ContactSection = ({ ...otherProps }) => {
  // type Mode = null | 'form' | 'info'
  const [mode, setMode] = useState(null);
  const portfolio = usePortfolio();
  const contact = portfolio.data.content.contact;
  const hasInfo = !!contact?.email || !!contact?.phone;

  // If no info, jsut show form
  if (!hasInfo) {
    return (
      <Center pos="relative" flexDirection="column" p={8} {...otherProps}>
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
    <Center pos="relative" flexDirection="column" p={8} {...otherProps}>
      {mode === null && (
        <Stack spacing={6}>
          <Heading
            size="xl"
            color="primary.700"
            textAlign="center"
            // textTransform="uppercase"
          >
            <Link
              onClick={(e) => {
                e.preventDefault();
                setMode("info");
              }}
              color="primary.700"
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
          <Heading
            size="xl"
            color="primary.700"
            textAlign="center"
            // textTransform="uppercase"
          >
            <Link
              onClick={(e) => {
                e.preventDefault();
                setMode("form");
              }}
              color="primary.700"
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
          top={4}
          left={4}
          icon={<IoMdReturnLeft />}
          colorScheme="primary"
        />
      )}
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

const ContactForm = () => {
  const portfolio = usePortfolio();
  const draftMode = useDraftMode();
  const contactForm = useContactForm();

  const requests = { contact: useAsync(api.portfolio.contact) };

  return (
    <Stack
      as="form"
      fontSize="xl"
      my={6}
      spacing={{ base: 4, md: 4 }}
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
      <Heading color="primary.700" textAlign="start" size="xl">
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

// export const ContactForm = () => {
//   const portfolio = usePortfolio();
//   const draftMode = useDraftMode();
//   const [form, setForm] = useState({
//     name: "",
//     email: "",
//     message: "",
//   });

//   const resetForm = () => {
//     setForm({
//       name: "",
//       email: "",
//       message: "",
//     });
//   };

//   const [errors, setErrors] = useState({
//     name: null,
//     email: null,
//     message: null,
//   });
//   const requests = { contact: useAsync(api.portfolio.contact) };

//   const setField = (key, val) => {
//     setForm((prev) => ({
//       ...prev,
//       [key]: val,
//     }));
//     setError(key, null);
//   };

//   const setError = (key, val) => {
//     setErrors((prev) => ({
//       ...prev,
//       [key]: val,
//     }));
//   };

//   return (
//     <Stack
//       as="form"
//       fontSize="xl"
//       my={6}
//       spacing={{ base: 4, md: 4 }}
//       w="100%"
//       maxW="420px"
//       onSubmit={(e) => {
//         e.preventDefault();
//         const errors = validate(form);
//         setErrors(errors);
//         const isSubmitable = Object.values(errors).every((err) => !err);
//         if (isSubmitable) {
//           requests.contact
//             .execute(portfolio.id, form, { useDraft: draftMode })
//             .then(() => {
//               resetForm();
//             })
//             .finally(() => {
//               setTimeout(() => {
//                 requests.contact.reset();
//               }, 3000);
//             });
//         }
//       }}
//     >
//       <Heading textAlign="start" size="xl">
//         Leave a Message
//       </Heading>
//       <FormControl isInvalid={!!errors.name} id="name">
//         <FormLabel as={Text}>Your Name</FormLabel>
//         <Input
//           value={form.name}
//           onChange={(e) => {
//             setField("name", e.target.value);
//           }}
//           variant="filled"
//           placeholder="Name"
//           size="sm"
//         />
//         <FormErrorMessage>{errors.name}</FormErrorMessage>
//       </FormControl>
//       <FormControl id="email" isInvalid={!!errors.email}>
//         <FormLabel as={Text}>Your Email</FormLabel>
//         <Input
//           value={form.email}
//           onChange={(e) => {
//             setField("email", e.target.value);
//           }}
//           variant="filled"
//           placeholder="Email"
//           size="sm"
//         />
//         <FormErrorMessage>{errors.email}</FormErrorMessage>
//       </FormControl>
//       <FormControl id="message" isInvalid={!!errors.message}>
//         <FormLabel as={Text}>Your Message for Me</FormLabel>
//         <Textarea
//           value={form.message}
//           onChange={(e) => {
//             setField("message", e.target.value);
//           }}
//           variant="filled"
//           placeholder="Message"
//           size="sm"
//         />
//         <FormErrorMessage>{errors.message}</FormErrorMessage>
//       </FormControl>
//       <Box py={2}>
//         <Button
//           isLoading={requests.contact.state.pending}
//           w="100%"
//           type="submit"
//           colorScheme="primary"
//         >
//           {requests.contact.state.fulfilled && "Message Sent!"}
//           {requests.contact.state.rejected && "Failed to send"}
//           {!requests.contact.state.fulfilled &&
//             !requests.contact.state.rejected &&
//             "Submit"}
//         </Button>
//         {requests.contact.state.rejected && (
//           <FormErrorMessage>
//             {JSON.stringify(requests.contact.state.result)}
//           </FormErrorMessage>
//         )}
//       </Box>
//     </Stack>
//   );
// };

export const ContactInfo = () => {
  const portfolio = usePortfolio();
  const contact = portfolio.data.content.contact;
  return (
    <Stack>
      <Heading color="primary.700" textAlign="start" size="xl">
        Get in Touch
      </Heading>
      {contact.email && <Heading size="md">Email: {contact.email}</Heading>}
      {contact.phone && <Heading size="md">Phone: {contact.phone}</Heading>}
    </Stack>
  );
};
