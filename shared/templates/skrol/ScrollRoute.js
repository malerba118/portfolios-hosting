import { useEffect } from "react";
import { useRouteMatch } from "react-router-dom";

export const ScrollRoute = ({ path, exact, onMatch, children = null }) => {
  const match = useRouteMatch({ path, exact });

  useEffect(() => {
    onMatch(match);
  }, [match]);

  return children;
};

export default ScrollRoute;
