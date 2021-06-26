import * as THREE from "three";
import React, { useRef, useEffect, useMemo } from "react";
import { useLoader, useUpdate } from "react-three-fiber";
import gsap from "gsap";

export default function Text({
  children,
  vAlign = "center",
  hAlign = "center",
  size = 1,
  color = "#000000",
  i,
  ...props
}) {
  const font = useLoader(THREE.FontLoader, "/templates/venice/bold.blob");
  const config = useMemo(
    () => ({
      font,
      size: 10,
      height: 2,
      curveSegments: 30,
      bevelEnabled: true,
      bevelThickness: 2,
      bevelSize: 1,
      bevelOffset: 0.1,
      bevelSegments: 30,
    }),
    [font]
  );
  const group = useRef();
  const mesh = useUpdate(
    (self) => {
      const size = new THREE.Vector3();
      self.geometry.computeBoundingBox();
      self.geometry.boundingBox.getSize(size);
      self.position.x +=
        hAlign === "center" ? -size.x / 2 : hAlign === "right" ? 0 : -size.x;
      self.position.y +=
        vAlign === "center" ? -size.y / 2 : vAlign === "top" ? 0 : -size.y;
    },
    [children]
  );

  useEffect(() => {
    gsap.defaults({
      duration: 1.4,
      ease: "power3.inOut",
      delay: 1.5 + i * 0.1,
      yoyo: true,
      repeat: -1,
      repeatDelay: 1.6,
    });
    gsap.to(mesh.current.rotation, {
      x: Math.PI * 0.5,
    });
    gsap.to(group.current.position, {
      y: 1.8,
    });
  });

  return (
    <>
      <group {...props} ref={group}>
        <mesh ref={mesh}>
          <textBufferGeometry args={[children, config]} />
          <meshStandardMaterial
            attach="material"
            metalness={0.2}
            roughness={0.3}
            color="#f7b77e"
          />
        </mesh>
      </group>
    </>
  );
}
