import * as THREE from "three";
import React, { Suspense, useEffect, useRef, useState } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Html, Environment, useGLTF } from "@react-three/drei";
import { useSpring } from "framer-motion";
import styles from "./Laptop.module.css";

export default function Model({
  scale = 1,
  rotationY = 0,
  children,
  ...otherProps
}) {
  const group = useRef();
  const viewport = useRef();
  const springs = {
    scale: useSpring(scale, { stiffness: 28 }),
    rotationY: useSpring(rotationY, { stiffness: 28 }),
  };

  useEffect(() => {
    springs.scale.set(scale);
  }, [scale]);

  useEffect(() => {
    springs.rotationY.set(rotationY);
  }, [rotationY]);

  // Load model
  const { nodes, materials } = useGLTF("/templates/venice/mac-draco.glb");
  // Make it float
  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    group.current.rotation.x = THREE.MathUtils.lerp(
      group.current.rotation.x,
      Math.cos(t / 2) / 10 + 0.25,
      0.1
    );
    group.current.rotation.y =
      THREE.MathUtils.lerp(
        group.current.rotation.y,
        Math.sin(t / 4) / 10,
        0.1
      ) + springs.rotationY.get();
    group.current.rotation.z = THREE.MathUtils.lerp(
      group.current.rotation.z,
      Math.sin(t / 4) / 20,
      0.1
    );
    group.current.position.y = THREE.MathUtils.lerp(
      group.current.position.y,
      (-5 + Math.sin(t)) / 5,
      0.1
    );
    group.current.scale.y = springs.scale.get();
    group.current.scale.x = springs.scale.get();
    group.current.scale.z = springs.scale.get();
  });
  // The jsx graph was auto-generated by: https://github.com/pmndrs/gltfjsx
  return (
    <group ref={group} {...otherProps} dispose={null}>
      <group rotation-x={-0.425} position={[0, -0.04, 0.41]}>
        <group position={[0, 2.96, -0.13]} rotation={[Math.PI / 2, 0, 0]}>
          <mesh
            material={materials.aluminium}
            geometry={nodes["Cube008"].geometry}
          />
          <mesh
            material={materials["matte.001"]}
            geometry={nodes["Cube008_1"].geometry}
          />
          <mesh ref={viewport} geometry={nodes["Cube008_2"].geometry}>
            {/* Drei's HTML component can now "hide behind" canvas geometry */}
            <Html
              zIndexRange={[1000, 2000]}
              className={styles.content}
              rotation-x={-Math.PI / 2}
              position={[0, 0.05, -0.09]}
              transform
              occlude
            >
              <div className={styles.wrapper}>{children}</div>
            </Html>
          </mesh>
        </group>
      </group>
      <mesh
        material={materials.keys}
        geometry={nodes.keyboard.geometry}
        position={[1.79, 0, 3.45]}
      />
      <group position={[0, -0.1, 3.39]}>
        <mesh
          material={materials.aluminium}
          geometry={nodes["Cube002"].geometry}
        />
        <mesh
          material={materials.trackpad}
          geometry={nodes["Cube002_1"].geometry}
        />
      </group>
      <mesh
        material={materials.touchbar}
        geometry={nodes.touchbar.geometry}
        position={[0, -0.03, 1.2]}
      />
    </group>
  );
}
