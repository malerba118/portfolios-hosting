import React, { useRef, useMemo, useEffect } from "react";
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
import { Text } from "@chakra-ui/react";
import Desktop from "./Desktop";
import { FileSystem, portfolioToNodes, os } from "./utils";
import FsProvider from "./FsProvider";

function App() {
  const history = useHistory();
  const location = useLocation();
  const portfolio = usePortfolio();
  const fs = new FileSystem(portfolioToNodes(portfolio));

  useEffect(() => {
    os.reset();
  }, []);

  const fonts = useFonts([
    portfolio.data.templateSettings.headingFont,
    portfolio.data.templateSettings.paragraphFont,
  ]);

  if (fonts.isLoading) {
    return null;
  }

  const { about, projects, contact } = portfolio.data.content;

  return (
    <FsProvider fs={fs}>
      <Desktop />
    </FsProvider>
  );
}

const RouterApp = (props) => (
  <Router>
    <App {...props} />
    <Advertisement />
  </Router>
);

export default RouterApp;
