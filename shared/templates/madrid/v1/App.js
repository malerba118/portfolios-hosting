import React, { useState, useEffect } from "react";
import {
  Box,
  Heading,
  Flex,
  Text,
  HStack,
  SimpleGrid,
  Stack,
  calc,
  Center,
} from "@chakra-ui/react";
import { Router } from "react-router-dom";
import { createBrowserHistory } from "history";
import ImageReveal from "./ImageReveal";
import {
  MotionBox,
  MotionStack,
  MotionFlex,
  transitions,
  useAnimation,
} from "shared/components/animation";
import Logo from "shared/components/Logo";
import DateViewer from "shared/components/DateViewer";
import useFonts from "../../../hooks/useFonts";
import Entrance from "shared/components/Entrance";
import MotionImage from "shared/components/MotionImage";
import RichtextViewer from "shared/components/RichtextViewer";
import { ScrollProvider } from "shared/components/animation/ScrollProvider";
// import Parallax from "shared/components/animation/Parallax";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";

const variants = {
  nav: {
    visible: {
      opacity: 1,
      transition: {
        ...transitions.one(1.5),
      },
    },
    hidden: {
      opacity: 0,
    },
  },
  fullName: {
    visible: {
      y: 0,
      opacity: 1,
      scale: 1,
      transition: {
        ...transitions.one(0.8),
        delay: 2,
      },
    },
    hidden: {
      opacity: 0,
      y: 80,
      scale: 0.9,
    },
  },
  main: {
    visible: {
      display: "block",
    },
    hidden: {
      display: "none",
    },
  },
};

const history = createBrowserHistory();

// export default function App(props) {
// let { about, projects, contact } = props.portfolio.content;

// projects = [...projects, ...projects, ...projects, ...projects];

// const animations = {
//   content: useAnimation("content"),
//   heading: useAnimation("heading"),
// };

// const fonts = useFonts([
//   props.portfolio.theme.headingFont,
//   props.portfolio.theme.paragraphFont,
// ]);

// useAnimation("about-image", {
//   before: ({ variant }) => {
//     if (variant === "loaded") animations.heading.start("visible");
//   },
//   after: ({ variant }) => {
//     if (variant === "loaded") animations.content.start("visible");
//   },
// });

// if (fonts.isLoading) {
//   return null;
// }

// const media = about.images.items[0];

//   return (
//     <ScrollProvider.Window>
//       <Router history={history}>
//         <Box position="relative" h="100vh">
//           <Toolbar animate={animations.content} />
//           <Flex position="absolute" inset={0} py="128px" justify="center">
//             <ImageReveal
//               mx={16}
//               maxWidth="900"
//               src={media?.processedUrl || media?.rawUrl}
//             />
//             <MotionBox
//               initial="hidden"
//               variants={variants.fullName}
//               pos="absolute"
//               top="70%"
//               w="100%"
//               textAlign="center"
//               animate={animations.heading}
//             >
//               <Heading size="xl">Austin Malerba</Heading>
//               <Heading size="md">Software Engineer</Heading>
//             </MotionBox>
//           </Flex>
//         </Box>
//         <MotionStack
//           initial="hidden"
//           variants={variants.main}
//           animate={animations.content}
//           py={24}
//           px={16}
//           position="relative"
//           bg="primary.100"
//           backgroundImage='url("https://www.transparenttextures.com/patterns/food.png")'
//           backgroundBlendMode="multiply"
//           backgroundSize="25%"
//         >
//           {/* <Flex w="100%" justify="center" position="absolute" top={"0"}>
//           <Divider color="black" />
//         </Flex> */}
//           {/* <Box className="about">
//             <About about={about} />
//           </Box> */}
//           <Box className="projects">
//             <Stack
//               spacing={0}
//               margin="0 auto"
//               maxWidth="900"
//               h={`calc(${projects.length * 100}vh - 1000px)`}
//               align="center"
//             >
//               {projects.map((project, i) => (
//                 <Parallax
//                   offset={i / (projects.length + 1)}
//                   minY={0}
//                   maxY={-1000}
//                   height="100vh"
//                 >
//                   <Flex align="center" justify="center" h="100vh" w="100%">
//                     <ProjectCard
//                       offset={i / (projects.length + 1)}
//                       transform={
//                         i % 2 === 0 ? `translateX(25%)` : `translateX(-15%)`
//                       }
//                       key={project.id}
//                       project={project}
//                       height="100vh"
//                       // maxWidth="500px"
//                     />
//                   </Flex>
//                 </Parallax>
//               ))}
//             </Stack>
//           </Box>
//         </MotionStack>
//       </Router>
//     </ScrollProvider.Window>
//   );
// }

export default function App(props) {
  let { about, projects, contact } = props.portfolio.content;

  const animations = {
    content: useAnimation("content"),
    heading: useAnimation("heading"),
  };

  const fonts = useFonts([
    props.portfolio.theme.headingFont,
    props.portfolio.theme.paragraphFont,
  ]);

  useAnimation("about-image", {
    before: ({ variant }) => {
      if (variant === "loaded") animations.heading.start("visible");
    },
    after: ({ variant }) => {
      if (variant === "loaded") animations.content.start("visible");
    },
  });

  if (fonts.isLoading) {
    return null;
  }

  const media = about.images.items[0];

  return (
    <Parallax
      pages={projects.length + 1}
      style={{
        height: "100vh",
      }}
    >
      <ParallaxLayer
        offset={0}
        factor={100}
        speed={0.1}
        style={{
          backgroundColor: "var(--chakra-colors-primary-100)",
          // backgroundImage:
          //   'url("https://www.transparenttextures.com/patterns/food.png")',
          // backgroundBlendMode: "multiply",
          // backgroundSize: "25%",
          backgroundImage: 'url("/templates/madrid/topography.svg")',
          backgroundBlendMode: "soft-light",
          backgroundSize: "30%",
          backgroundRepeat: "repeat",
        }}
      />
      <ParallaxLayer offset={0} speed={0.4}>
        <Box h="100%" bg="primary.50">
          <Toolbar animate={animations.content} portfolio={props.portfolio} />
          <Flex position="absolute" inset={0} py="128px" justify="center">
            <ImageReveal
              mx={16}
              maxWidth="900"
              src={media?.processedUrl || media?.rawUrl}
            />
            <MotionBox
              initial="hidden"
              variants={variants.fullName}
              pos="absolute"
              top="70%"
              w="100%"
              textAlign="center"
              animate={animations.heading}
            >
              <Heading size="xl">
                {about.firstName} {about.lastName}
              </Heading>
              <Heading size="md">{about.title}</Heading>
            </MotionBox>
          </Flex>
        </Box>
      </ParallaxLayer>
      {projects.map((project, i) => {
        const media = project.images.items[0];

        return (
          <>
            <ParallaxLayer key={project.id} offset={i + 1} speed={0.25}>
              <Center h="100%" w="100%">
                <MotionImage
                  initialScale={1}
                  src={
                    media?.processedUrl ||
                    media?.rawUrl ||
                    "/image-unavailable.svg"
                  }
                  maxHeight="90%"
                  width={{ base: "100%", md: "50%" }}
                  left={i % 2 === 0 ? 0 : undefined}
                  right={i % 2 !== 0 ? 0 : undefined}
                  m={{ base: 0, md: 12 }}
                  bg="primary.50"
                  position="absolute"
                  // boxShadow="lg"
                />
              </Center>
            </ParallaxLayer>
            <ParallaxLayer key={project.id} offset={i + 1} speed={0.45}>
              <Center h="100%" w="100%">
                <Heading
                  size="xl"
                  fontSize="6xl"
                  textTransform="uppercase"
                  color="white"
                  textShadow="2px 4px 0px var(--chakra-colors-primary-200), 4px 8px 0px var(--chakra-colors-primary-300)"
                >
                  {project.name}
                </Heading>
              </Center>
            </ParallaxLayer>
          </>
        );
      })}
    </Parallax>
  );
}

const Toolbar = ({ animate, portfolio }) => {
  return (
    <MotionFlex
      position="relative"
      zIndex={1}
      initial="hidden"
      animate={animate}
      variants={variants.nav}
      justify="space-between"
      h="128px"
      px={16}
      align="center"
      color="gray.600"
    >
      <Box>
        <Logo
          charOne={portfolio.content.about.firstName[0]}
          charTwo={portfolio.content.about.lastName[0]}
          color="primary.800"
        />
      </Box>
      <HStack
        spacing={4}
        fontSize="xs"
        textTransform="uppercase"
        fontWeight="bold"
      >
        <Text>About</Text>
        <Text>Projects</Text>
        <Text>Contact</Text>
      </HStack>
    </MotionFlex>
  );
};

const About = ({ about }) => {
  return (
    <Stack maxWidth="900" margin="0 auto">
      <Heading size="md">{about.summary}</Heading>
      <Box color="gray.600">
        <RichtextViewer value={about.description} />
      </Box>
    </Stack>
  );
};

const ProjectCard = ({ project, offset, ...otherProps }) => {
  const media = project.images.items[0];

  return (
    <Box position="relative" {...otherProps}>
      <MotionImage
        initialScale={1}
        src={media?.processedUrl || media?.rawUrl || "/image-unavailable.svg"}
        height="100%"
        width="100%"
        bg="primary.50"
      />
    </Box>
  );
};
