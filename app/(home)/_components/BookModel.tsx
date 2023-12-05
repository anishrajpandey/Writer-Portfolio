import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export default function Model(props: any) {
  const { nodes, materials }: any = useGLTF("/book.gltf");
  return (
    <group scale={0.2} {...props} dispose={null}>
      <mesh geometry={nodes.pCube1.geometry} material={nodes.pCube1.material} />
    </group>
  );
}

useGLTF.preload("/book.gltf");
