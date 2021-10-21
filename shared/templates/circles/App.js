import React, { useEffect } from "react";
import { AnimatePresence } from "framer-motion";
import useFonts from "shared/hooks/useFonts";
import { BrowserRouter as Router, useRouteMatch } from "react-router-dom";
import SkewTransitionPage from "shared/components/SkewTransitionPage";
import Advertisement from "shared/components/Advertisement";
import { usePortfolio } from "shared/components/PortfolioProvider";
import LandingPage from "./LandingPage";
import AboutPage from "./AboutPage";
import ProjectPage from "./ProjectPage";
import { Center, Heading } from "@chakra-ui/react";
import Logo from "shared/components/Logo";
import ContactPage from "./ContactPage";

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
        <SkewTransitionPage key="about">
          <AboutPage about={portfolio.data.content.about} />
        </SkewTransitionPage>
      )}
      {matches.contact && (
        <SkewTransitionPage key="contact">
          <ContactPage />
        </SkewTransitionPage>
      )}
      {matches.projectDetail && (
        <SkewTransitionPage key="project-detail">
          <ProjectPage
            project={portfolio.data.content.projects.find(
              (p) => p.id === matches.projectDetail.params.id
            )}
          />
        </SkewTransitionPage>
      )}
      {!matches.about && !matches.contact && !matches.projectDetail && (
        <SkewTransitionPage key="landing">
          <LandingPage />
        </SkewTransitionPage>
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
