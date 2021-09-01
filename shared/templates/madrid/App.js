import React from "react";
import { AnimatePresence } from "framer-motion";
import useFonts from "shared/hooks/useFonts";
import { BrowserRouter as Router, useRouteMatch } from "react-router-dom";
import TransitionPage from "shared/components/TransitionPage";
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
    props.portfolio.templateSettings.headingFont,
    props.portfolio.templateSettings.paragraphFont,
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
