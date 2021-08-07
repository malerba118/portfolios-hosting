import React, { Suspense, useState, useEffect, useRef } from "react";
import {
  Box,
  ChakraProvider,
  Heading,
  Image,
  Wrap,
  useBreakpointValue,
  Alert,
} from "@chakra-ui/react";
import { Canvas } from "@react-three/fiber";
import {
  Html,
  Environment,
  useGLTF,
  ContactShadows,
  OrbitControls,
} from "@react-three/drei";
import { Router, Switch, Route, Link } from "react-router-dom";
import { AnimateSharedLayout, motion, useSpring } from "framer-motion";
import Model from "./Laptop";
import Landing from "./Landing";
import Page from "./Page";
import { createBrowserHistory } from "history";
import theme from "./theme";
import AboutPage from "./AboutPage";
import ProjectsPage from "./ProjectsPage";
import useFonts from "../../../../hooks/useFonts";
import { transitions } from "./components/animation";

const history = createBrowserHistory();

const useLocation = () => {
  const [location, setLocation] = useState(history.location);

  useEffect(() => {
    return history.listen(() => {
      setLocation(history.location);
    });
  }, []);

  return location;
};

export default function App(props) {
  const { about, projects, contact } = props.portfolio.content;
  const location = useLocation();
  // const [expanded, setExpanded] = useState(false);
  // const scaleShim = useBreakpointValue({
  //   xs: -1,
  //   sm: 0,
  //   md: 1,
  //   lg: 2,
  //   xl: 3,
  //   base: 0,
  // });

  const expanded = [
    "/about",
    "/projects",
    "/work",
    "/education",
    "/contact",
  ].includes(location?.pathname);

  const fonts = useFonts(["Archivo", "Karla"]);

  if (fonts.isLoading) {
    return null;
  }

  return (
    <Router history={history}>
      <Box>
        <motion.div
          style={{ height: "100vh", background: "#252525" }}
          animate={{
            opacity: expanded ? 0 : 1,
            transition: transitions.two(0.6),
          }}
        >
          <Canvas dpr={[1, 2]} camera={{ position: [0, -16, -16], fov: 35 }}>
            <pointLight position={[10, 10, 10]} intensity={1.5} />
            <Suspense fallback={null}>
              <group rotation={[0, Math.PI, 0]}>
                <Model
                  scale={expanded ? 1.5 : 1}
                  rotationY={expanded ? Math.PI / 4 : 0}
                >
                  <ChakraProvider theme={theme}>
                    <Router history={history}>
                      <Landing
                        portfolio={props.portfolio}
                        // onExpand={() => history.push()}
                      />
                    </Router>
                  </ChakraProvider>
                </Model>
              </group>
              <Environment preset="city" />
            </Suspense>
            <ContactShadows
              rotation-x={Math.PI / 2}
              position={[0, -4.5, 0]}
              opacity={1}
              width={20}
              height={20}
              blur={2}
              far={4.5}
            />
            <OrbitControls
              enablePan={false}
              enableZoom={false}
              minPolarAngle={Math.PI / 2}
              maxPolarAngle={Math.PI / 2}
            />
          </Canvas>
        </motion.div>
        <motion.div
          initial={false}
          style={{
            position: "fixed",
            inset: 0,
            zIndex: expanded ? 10000 : -1,
            overflow: "auto",
          }}
          animate={{ opacity: expanded ? 1 : 0 }}
          transition={{ delay: 0.26, duration: 0.4 }}
        >
          {location?.pathname === "/about" && <AboutPage about={about} />}
          {location?.pathname === "/projects" && (
            <ProjectsPage projects={projects} />
          )}
          {location?.pathname === "/contact" && (
            <Page id="contact" title="Contact"></Page>
          )}
        </motion.div>
      </Box>
    </Router>
  );
}
