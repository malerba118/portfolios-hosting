import React, { useState, useEffect } from "react";
import {
  Box,
  Heading,
  Flex,
  Text,
  HStack,
  SimpleGrid,
  Stack,
  calc,
  Center,
} from "@chakra-ui/react";
import { AnimatePresence } from "framer-motion";
import ImageReveal from "./ImageReveal";
import {
  MotionBox,
  MotionStack,
  MotionFlex,
  transitions,
  useAnimation,
} from "shared/components/animation";
import Logo from "shared/components/Logo";
import DateViewer from "shared/components/DateViewer";
import useFonts from "../../../hooks/useFonts";
import Entrance from "shared/components/Entrance";
import MotionImage from "shared/components/MotionImage";
import RichtextViewer from "shared/components/RichtextViewer";
import { ScrollProvider } from "shared/components/animation/ScrollProvider";
// import Parallax from "shared/components/animation/Parallax";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useRouteMatch,
} from "react-router-dom";
import TransitionPage from "shared/components/TransitionPage";
import Link from "shared/components/Link";
import LandingPage from "./LandingPage";
import AboutPage from "./AboutPage";

const App = (props) => {
  const matches = {
    about: useRouteMatch("/about"),
    contact: useRouteMatch("/contact"),
    projectDetail: useRouteMatch("/projects/:id"),
    home: useRouteMatch("/"),
  };

  const fonts = useFonts([
    props.portfolio.theme.headingFont,
    props.portfolio.theme.paragraphFont,
  ]);

  if (fonts.isLoading) {
    return null;
  }

  return (
    <AnimatePresence initial={false} exitBeforeEnter>
      {matches.about && (
        <TransitionPage key="about">
          <AboutPage portfolio={props.portfolio} />
        </TransitionPage>
      )}
      {matches.contact && (
        <TransitionPage key="contact">contact</TransitionPage>
      )}
      {matches.projectDetail && (
        <TransitionPage key="project-detail">proj</TransitionPage>
      )}
      {!matches.about && !matches.contact && !matches.projectDetail && (
        <TransitionPage key="landing">
          <LandingPage portfolio={props.portfolio} />
        </TransitionPage>
      )}
    </AnimatePresence>
  );
};

const RouterApp = (props) => (
  <Router>
    <App {...props} />
  </Router>
);

export default RouterApp;
