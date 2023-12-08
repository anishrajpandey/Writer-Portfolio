import React, { Suspense, useRef } from "react";
import { OrbitControls, useGLTF } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";

export default function Model(props: any) {
  const { nodes, materials }: any = useGLTF("/book.gltf");
  return (
    <Canvas className="min-h-screen bg-red-300">
      {/* <mesh 
              

              // translateOnAxis={}
            > */}
      <pointLight intensity={2} />
      <ambientLight intensity={1.25} />
      <OrbitControls
        autoRotate
        rotation={[0, -1, 0]}
        rotateSpeed={1}
        minPolarAngle={Math.PI / 2}
        maxPolarAngle={Math.PI - Math.PI / 2}
      />
      {/* <boxGeometry /> */}
      <Suspense fallback={null}>
        <group {...props} dispose={null} className="bg-yellow-500">
          <mesh
            position={[-5, -8, 0]}
            geometry={nodes.pCube1.geometry}
            material={nodes.pCube1.material}
            rotation-x={Math.PI / 2}
            rotation-z={Math.PI / 2}
          />
        </group>
      </Suspense>
      {/* <Environment preset="city" /> */}

      <meshLambertMaterial />
      {/* </mesh> */}
    </Canvas>
  );
}

useGLTF.preload("/book.gltf");
