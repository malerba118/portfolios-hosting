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
import { FileSystem, portfolioToNodes, os, getPath } from "./utils";
import FsProvider from "./FsProvider";
import { autorun } from "mobx";
import { initGoodies } from "shared/utils";

initGoodies();

function App() {
  const history = useHistory();
  const location = useLocation();
  const portfolio = usePortfolio();
  const fs = new FileSystem(portfolioToNodes(portfolio));

  useEffect(() => {
    os.reset();
    const path = getPath(location.pathname);
    if (path?.length) {
      const target = fs.query(path);
      if (target) {
        os.open(target);
      }
    }
  }, []);

  useEffect(() => {
    // push urls when active window changes
    return autorun(() => {
      const pathname = "/" + fs.path(os.selected?.node).slice(1).join("/");
      history.push(pathname);
    });
  }, []);

  const fonts = useFonts([
    portfolio.data.templateSettings.headingFont,
    portfolio.data.templateSettings.paragraphFont,
  ]);

  if (fonts.isLoading) {
    return null;
  }

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
