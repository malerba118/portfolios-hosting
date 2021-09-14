import { useEffect } from "react";
import { useRouteMatch } from "react-router-dom";

export const ScrollRoute = ({ path, exact, onMatch, children = null }) => {
  const match = useRouteMatch({ path, exact });

  useEffect(() => {
    onMatch(match);
  }, [JSON.stringify(match)]);

  return children;
};

export default ScrollRoute;
