import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export function Model(props) {
  const { nodes, materials } = useGLTF("/scene.gltf");
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]} scale={10} translateY={29}>
        <mesh
          // args={[2, 3, 3]}
          geometry={nodes.Architexture_0.geometry}
          material={materials.Architexture}
        />
        <mesh
          // args={[2, 3, 3]}
          geometry={nodes.Architexture_1.geometry}
          material={materials.Bookpage}
        />
      </group>
    </group>
  );
}

useGLTF.preload("/scene.gltf");
