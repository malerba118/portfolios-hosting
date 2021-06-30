import React, { Suspense, useEffect, useRef } from "react";
import { Canvas } from "react-three-fiber";
import { Box, Heading, Image, Badge, Wrap } from "@chakra-ui/react";
import { OrbitControls, Environment, Plane, Reflector } from "drei";
import gsap from "gsap";
import Text from "./Text";

const { PI, sin, cos } = Math;

const Letter = ({ i, count, radius, l }) => {
  const $ref = useRef();

  return (
    <group ref={$ref} rotation={[0, 0, 0]}>
      <Text
        hAlign="center"
        position={[
          radius * sin((i / count) * PI * 2),
          -0.8,
          radius * cos((i / count) * PI * 2),
        ]}
        rotation={[0, (i / count) * PI * 2, 0]}
        i={i}
        children={l}
      />
    </group>
  );
};

const Magic = ({ text, count, radius, start = 0, position }) => {
  const $ref = useRef();
  useEffect(() => {
    gsap.to($ref.current.rotation, {
      duration: 6,
      y: PI * 1.3 + PI * 2,
      repeat: -1,
      ease: "power3.inOut",
    });
  });
  return (
    <group
      ref={$ref}
      position={position}
      rotation={[0, PI * 1.3, 0]}
      scale={[-1, 1, 1]}
    >
      {text.split("").map((l, i) => (
        <Letter key={`1${i}`} l={l} radius={radius} i={i} count={count} />
      ))}
    </group>
  );
};

const Pavement = () => {
  return (
    <>
      <Plane
        rotation-x={-PI * 0.5}
        position={[0, -7.9, 0]}
        args={[200, 200]}
        receiveShadow
      >
        <meshBasicMaterial
          color={"#ffcda3"}
          attach="material"
          transparent={true}
          opacity={0.4}
        />
      </Plane>
      <Reflector
        clipBias={0.1}
        textureWidth={1024}
        textureHeight={1024}
        position={[0, -8, 0]}
        rotation={[-PI * 0.5, 0, 0]}
      >
        <planeBufferGeometry args={[200, 200]} />
      </Reflector>
    </>
  );
};

export default function App(props) {
  const { about, projects } = props.portfolio.content;

  const text = about.firstName.replace(/\s/g, "").toUpperCase();
  return (
    <Box>
      <Canvas
        style={{ height: "70vh" }}
        colorManagement
        camera={{ fov: 20, position: [0, 90, 180] }}
      >
        <color attach="background" args={["#ebcfba"]} />
        <directionalLight position={[-40, 20, 20]} color="#c59cf1" />
        <directionalLight
          position={[10.5, 20, 10]}
          intensity={1.5}
          color="#e78f48"
        />
        <ambientLight color="#8d69cb" />
        <Suspense fallback={null}>
          <Pavement />
          <Environment preset="night" />
          <Magic text={text} start={Math.PI * 1.18} count={11} radius={25} />
        </Suspense>
        <OrbitControls />
      </Canvas>
      <Box p={8}>
        <Heading fontSize="2xl">
          {about.firstName} {about.lastName}
        </Heading>
        <Heading fontSize="lg">{about.title}</Heading>
      </Box>
      <Box p={8} py={0}>
        <Heading fontSize="xl" mb="4">
          Projects
        </Heading>
        <Wrap spacing={4}>
          {projects.map((proj) => (
            <Project key={proj.id} project={proj} />
          ))}
        </Wrap>
      </Box>
    </Box>
  );
}

function Project({ project }) {
  return (
    <Box
      maxW="sm"
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      w="300px"
    >
      <Image
        h="200px"
        w="300px"
        objectFit="cover"
        src={
          project.images.items[0]?.processedUrl ||
          project.images.items[0]?.rawUrl ||
          "https://picsum.photos/400"
        }
      />
      <Box p="4">
        <Box
          mt="1"
          fontWeight="semibold"
          as="h4"
          lineHeight="tight"
          isTruncated
        >
          {project.name}
        </Box>
        <Box> {project.summary}</Box>
      </Box>
    </Box>
  );
}
