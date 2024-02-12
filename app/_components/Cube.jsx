"use client";
import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { Suspense, useRef } from "react";

import { TextureLoader } from "three";
function Mesh() {
  let boxRef = useRef();

  const [map1, map2, map3, map4] = useLoader(TextureLoader, [
    "/assets/photos/books/ironman_texture.jpg",
    "/assets/photos/books/lauhapurush_texture.jpg",
    "/assets/photos/books/janaandolan_texture.jpg",
    "/assets/photos/books/itihas_texture.jpg",
  ]);
  useFrame(() => {
    boxRef.current.rotation.y += 0.003;
  });
  return (
    <mesh ref={boxRef}>
      <ambientLight />
      <boxGeometry args={[2, 3, 2]} />
      <meshStandardMaterial attach="material-0" map={map1} />
      <meshStandardMaterial attach="material-2" color={"white"} />
      <meshBasicMaterial attach="material-3" color="white" />
      <meshBasicMaterial attach="material-4" map={map2} />
      <meshBasicMaterial attach="material-5" map={map3} />
      <meshBasicMaterial attach="material-1" map={map4} />
    </mesh>
  );
}
export default function Cube() {
  return (
    <Canvas>
      <OrbitControls enableZoom={false} />
      <ambientLight intensity={0.2} />
      <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
      {/* <pointLight position={[-10, -10, -10]} /> */}
      <Suspense fallback={null}>
        {/* <div</div> */}
        <Mesh />
      </Suspense>
    </Canvas>
  );
}
