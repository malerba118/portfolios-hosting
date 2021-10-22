import { useEffect } from "react";
import { useRouteMatch, useLocation, matchPath } from "react-router-dom";

export const ScrollRoute = ({ path, exact, onMatch, children = null }) => {
  //   const match = useRouteMatch({ path, exact });
  const location = useLocation();

  useEffect(() => {
    const match = matchPath(location.pathname, { path, exact });
    if (!location.state?.noScroll) {
      onMatch(match);
    }
  }, [location.pathname, location.state?.noScroll, path, exact]);

  return children;
};

export default ScrollRoute;
