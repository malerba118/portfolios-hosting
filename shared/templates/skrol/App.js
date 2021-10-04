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
import Parallax from "shared/components/animation/Parallax";
import Logo from "shared/components/Logo";
import RichtextViewer from "./RichtextViewer";
import Link from "shared/components/Link";
import ScrollRoute from "./ScrollRoute";
import ProjectPage from "./ProjectPage";
import { AnimatePresence } from "framer-motion";
import * as api from "client/api";
import useAsync from "shared/hooks/useAsync";
import { useDraftMode } from "shared/components/DraftModeProvider";
import { IoMdReturnLeft } from "react-icons/io";
import { createDefaultNode } from "shared/components/RichtextViewer";
import Media from "shared/components/Media";

const keyframes = {
  intro: ({ page }) => ({
    [page.y]: {
      skewY: "0deg",
      opacity: 1,
      y: 0,
      scale: 1,
    },
    [page.y + page.height]: {
      skewY: "15deg",
      opacity: 0,
      y: 150,
      scale: 0.75,
    },
  }),
  about: ({ page }) => ({
    [0]: {
      opacity: -0.15,
      y: 150,
    },
    [page.y]: {
      opacity: 1,
      y: 0,
    },
  }),
  project: ({ page }) => ({
    [page.y - page.height]: {
      y: 125,
    },
    [page.y]: {
      y: 0,
    },
  }),
  projectTitle: ({ page, container }) => ({
    [page.y - container.height]: {
      y: -120,
      scale: 0.8,
    },
    [page.y]: {
      y: 0,
      scale: 1,
    },
    [page.y + container.height]: {
      y: 100,
      scale: 1,
    },
  }),
  image: ({ page }) => ({
    [page.y - page.height]: {
      scale: 1,
    },
    [page.y + page.height]: {
      scale: 1.35,
    },
  }),
};

function App() {
  const introPageRef = useRef(null);
  const aboutPageRef = useRef(null);
  const firstProjectRef = useRef(null);
  const contactPageRef = useRef(null);
  const history = useHistory();
  const location = useLocation();
  const portfolio = usePortfolio();

  const fonts = useFonts([
    portfolio.data.templateSettings.headingFont,
    portfolio.data.templateSettings.paragraphFont,
  ]);

  if (fonts.isLoading) {
    return null;
  }

  const { about, projects, contact } = portfolio.data.content;

  return (
    <>
      <ScrollRoute
        path="/"
        exact
        onMatch={(match) => {
          if (match) {
            introPageRef.current.scrollIntoView();
          }
        }}
      />
      <ScrollRoute
        path="/about"
        exact
        onMatch={(match) => {
          if (match) {
            aboutPageRef.current.scrollIntoView();
          }
        }}
      />
      <ScrollRoute
        path="/projects"
        exact
        onMatch={(match) => {
          if (match) {
            firstProjectRef.current.scrollIntoView();
          }
        }}
      />
      <ScrollRoute
        path="/contact"
        exact
        onMatch={(match) => {
          if (match) {
            contactPageRef.current.scrollIntoView();
          }
        }}
      />
      <Parallax h="100vh">
        <Parallax.Page ref={introPageRef} pageId="intro-page" h="100vh">
          <Parallax.Box keyframes={keyframes.intro} h="100%">
            <Flex
              pos="relative"
              zIndex={1}
              h="150px"
              px={{ base: 8, md: 24 }}
              justify="space-between"
              align="center"
            >
              <Link to="/">
                <Logo
                  color="secondary.400"
                  charOne={about.firstName[0]}
                  charTwo={about.lastName[0]}
                />
              </Link>
              <HStack spacing={{ base: 4, md: 6 }} color="secondary.400">
                <Link to="/about" showUnderline color="secondary.400">
                  <Heading color="secondary.400" size="xs">
                    About
                  </Heading>
                </Link>
                <Link to="/projects" showUnderline color="secondary.400">
                  <Heading color="secondary.400" size="xs">
                    Projects
                  </Heading>
                </Link>
                <Link to="/contact" showUnderline color="secondary.400">
                  <Heading color="secondary.400" size="xs">
                    Contact
                  </Heading>
                </Link>
              </HStack>
            </Flex>
            <Center pos="absolute" top="50px" left={0} right={0} bottom={0}>
              <Stack
                w="100%"
                px={{ base: 8, md: 24 }}
                spacing={{ base: 3, md: 3 }}
              >
                <Heading maxW="800px" size="3xl" textTransform="uppercase">
                  {about.summary}
                </Heading>
                <Heading maxW="600px" size="sm" pb={2}>
                  {about.firstName + " " + about.lastName} {"  "}•{"  "}
                  {about.title}
                </Heading>
                <HStack alignSelf="start" spacing={4}>
                  <Button
                    onClick={() => {
                      history.push("/about");
                    }}
                    colorScheme="secondary"
                  >
                    About Me
                  </Button>

                  <Button
                    onClick={() => {
                      history.push("/projects");
                    }}
                    colorScheme="secondary"
                    variant="outline"
                  >
                    See Projects
                  </Button>
                </HStack>
              </Stack>
            </Center>
          </Parallax.Box>
        </Parallax.Page>
        <Parallax.Page ref={aboutPageRef} pageId={`about-page`}>
          <Parallax.Box keyframes={keyframes.about}>
            <Center
              flexDirection="column"
              h="100%"
              px={{ base: 8, md: 24 }}
              py={{ base: 6, md: 12 }}
              pos="relative"
            >
              <Box w="100%" maxW="50em">
                <Flex justify="space-between" align="center" my={2}>
                  <Heading size="xl">About</Heading>
                  {about?.resume?.url && (
                    <Button
                      onClick={() => {
                        window.open(about?.resume?.url, "_blank");
                      }}
                      colorScheme="secondary"
                      variant="outline"
                      size="md"
                    >
                      View Resume
                    </Button>
                  )}
                </Flex>
                <RichtextViewer
                  value={about.description}
                  defaultValue={createDefaultNode("Tell us all about you")}
                />
              </Box>
            </Center>
          </Parallax.Box>
        </Parallax.Page>
        {portfolio.data.content.projects.map((project, i) => {
          const media = project.images.items[0];
          return (
            <Parallax.Page
              key={i}
              ref={i === 0 ? firstProjectRef : null}
              pageId={`project-${i}`}
              height="100vh"
              overflow="hidden"
            >
              <Parallax.Box
                keyframes={keyframes.project}
                pos="absolute"
                inset={0}
              >
                <Center h="100%" p={{ base: 0, md: 24 }} pos="relative">
                  <Box w="100%" h="100%" overflow="hidden">
                    <Parallax.Box keyframes={keyframes.image} h="100%" w="100%">
                      <Media
                        media={media}
                        h="100%"
                        w="100%"
                        objectFit="cover"
                      />
                    </Parallax.Box>
                  </Box>
                </Center>
                <Center pos="absolute" inset={0}>
                  <Parallax.Box
                    cursor="pointer"
                    tabIndex={0}
                    onClick={() => {
                      history.push(`/projects/${project.id}`);
                    }}
                    keyframes={keyframes.projectTitle}
                  >
                    <Heading
                      p={4}
                      backgroundColor="secondary.400"
                      size="3xl"
                      color="primary.50"
                      textTransform="uppercase"
                      textAlign="center"
                    >
                      {project.name}
                    </Heading>
                  </Parallax.Box>
                </Center>
              </Parallax.Box>
            </Parallax.Page>
          );
        })}
        <Parallax.Page ref={contactPageRef} pageId={`contact-page`}>
          <Parallax.Box keyframes={keyframes.contact}>
            <ContactSection />
          </Parallax.Box>
        </Parallax.Page>
      </Parallax>
      <AnimatePresence exitBeforeEnter initial={false}>
        <Switch location={location} key={location.pathname}>
          <Route path="/projects/:id" component={ProjectPage} />
        </Switch>
      </AnimatePresence>
    </>
  );
}

const validate = (form) => {
  let errors = {};
  Object.keys(form).forEach((key) => {
    if (!form[key]) {
      errors[key] = "Field is required";
    } else {
      errors[key] = null;
    }
  });
  return errors;
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
      <Center pos="relative" flexDirection="column" minH="100vh" p={8}>
        <ContactForm />
      </Center>
    );
  }

  // Otherwise give option to choose mode
  return (
    <Center pos="relative" flexDirection="column" minH="100vh" p={8}>
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
      {mode === "form" && <ContactForm />}
      {mode === "info" && <ContactInfo />}
      {mode !== null && (
        <IconButton
          onClick={() => setMode(null)}
          pos="absolute"
          top={4}
          left={4}
          icon={<IoMdReturnLeft />}
        />
      )}
    </Center>
  );
};

const useContactForm = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const reset = () => {
    setForm({
      name: "",
      email: "",
      message: "",
    });
  };

  const [errors, setErrors] = useState({
    name: null,
    email: null,
    message: null,
  });

  const setField = (key, val) => {
    setForm((prev) => ({
      ...prev,
      [key]: val,
    }));
    setError(key, null);
  };

  const setError = (key, val) => {
    setErrors((prev) => ({
      ...prev,
      [key]: val,
    }));
  };

  return {
    form,
    errors,
    reset,
    setField,
    setError,
    setErrors,
  };
};

const isEmpty = (errors) => {
  return Object.values(errors).every((err) => !err);
};

const ContactForm = () => {
  const portfolio = usePortfolio();
  const draftMode = useDraftMode();
  const contactForm = useContactForm();
  // const [form, setForm] = useState({
  //   name: "",
  //   email: "",
  //   message: "",
  // });

  // const resetForm = () => {
  //   setForm({
  //     name: "",
  //     email: "",
  //     message: "",
  //   });
  // };

  // const [errors, setErrors] = useState({
  //   name: null,
  //   email: null,
  //   message: null,
  // });
  const requests = { contact: useAsync(api.portfolio.contact) };

  // const setField = (key, val) => {
  //   setForm((prev) => ({
  //     ...prev,
  //     [key]: val,
  //   }));
  //   setError(key, null);
  // };

  // const setError = (key, val) => {
  //   setErrors((prev) => ({
  //     ...prev,
  //     [key]: val,
  //   }));
  // };

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

const RouterApp = (props) => (
  <Router>
    <App {...props} />
    <Advertisement />
  </Router>
);

export default RouterApp;
