import React, { useEffect } from "react";
import { AnimatePresence } from "framer-motion";
import useFonts from "shared/hooks/useFonts";
import { BrowserRouter as Router, useRouteMatch } from "react-router-dom";
import TransitionPage from "shared/components/TransitionPage";
import Advertisement from "shared/components/Advertisement";
import { usePortfolio } from "shared/components/PortfolioProvider";
import LandingPage from "./LandingPage";
import AboutPage from "./AboutPage";
import ProjectsPage from "./ProjectsPage";
import ProjectPage from "./ProjectPage";
import ContactPage from "./ContactPage";
import { initGoodies } from "shared/utils";
import Page from "./Page";

initGoodies();

const App = () => {
  const portfolio = usePortfolio();

  const matches = {
    about: useRouteMatch("/about"),
    contact: useRouteMatch("/contact"),
    projects: useRouteMatch({
      path: "/work",
      exact: true,
    }),
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
        <AboutPage key="about" about={portfolio.data.content.about} />
      )}
      {matches.contact && <ContactPage key="contact" />}
      {matches.projects && (
        <ProjectsPage
          key="projects"
          projects={portfolio.data.content.projects}
        />
      )}
      {matches.projectDetail && (
        <ProjectPage
          key="project-detail"
          project={portfolio.data.content.projects.find(
            (p) => p.id === matches.projectDetail.params.id
          )}
        />
      )}
      {!matches.about &&
        !matches.contact &&
        !matches.projectDetail &&
        !matches.projects && <LandingPage key="landing" />}
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
