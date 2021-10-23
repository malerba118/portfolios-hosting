import React, { useEffect } from "react";
import { AnimatePresence } from "framer-motion";
import useFonts from "shared/hooks/useFonts";
import { BrowserRouter as Router, useRouteMatch } from "react-router-dom";
import TransitionPage from "shared/components/TransitionPage";
import Advertisement from "shared/components/Advertisement";
import { usePortfolio } from "shared/components/PortfolioProvider";
import LandingPage from "./LandingPage";
import AboutPage from "./AboutPage";
import ProjectPage from "./ProjectPage";
import ContactPage from "./ContactPage";
import { initGoodies } from "shared/utils";

initGoodies();

const App = () => {
  const portfolio = usePortfolio();

  const matches = {
    about: useRouteMatch("/about"),
    contact: useRouteMatch("/contact"),
    projectDetail: useRouteMatch("/work/:id"),
    home: useRouteMatch("/"),
  };

  const fonts = useFonts([
    portfolio.data.templateSettings.headingFont,
    portfolio.data.templateSettings.paragraphFont,
  ]);

  if (fonts.isLoading) {
    return null;
  }

  return (
    <AnimatePresence initial={false} exitBeforeEnter>
      {matches.about && (
        <TransitionPage key="about">
          <AboutPage about={portfolio.data.content.about} />
        </TransitionPage>
      )}
      {matches.contact && (
        <TransitionPage key="contact">
          <ContactPage />
        </TransitionPage>
      )}
      {matches.projectDetail && (
        <TransitionPage key="project-detail">
          <ProjectPage
            project={portfolio.data.content.projects.find(
              (p) => p.id === matches.projectDetail.params.id
            )}
          />
        </TransitionPage>
      )}
      {!matches.about && !matches.contact && !matches.projectDetail && (
        <TransitionPage key="landing">
          <LandingPage />
        </TransitionPage>
      )}
    </AnimatePresence>
  );
};

const RouterApp = (props) => (
  <Router>
    <App {...props} />
    <Advertisement />
  </Router>
);

export default RouterApp;
