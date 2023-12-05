"use client";
import Image from "next/image";
import React, { Suspense } from "react";
import { Canvas, useThree } from "@react-three/fiber";
import { CameraControls, Environment, OrbitControls } from "@react-three/drei";

import BookModel from "./BookModel";

export default function HeroSection() {
  return (
    <main className="relative bg-cloudBg bg-no-repeat bg-cover ml-0  min-h-screen w-screen flex flex-col md:flex-row">
      <div className="left w-screen md:w-3/5 bg-yellow-300 ">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam eum
        nulla quidem nobis! Tempore repudiandae, porro deserunt atque omnis,
        animi dicta iure veritatis voluptate provident facilis, tempora labore
        laudantium error!
      </div>
      <div className="right w-screen md:w-2/5 h-full flex items-center ">
        <div className=" w-full  aspect-squareflex justify-center items-center relative">
          {/* <Image src={"/book1.jpg"} fill alt="book" /> */}
          <Canvas
            className="h-2xl w-2xl"
            camera={{
              fov: 100,
              near: 1,
              far: 334,
              position: [13, 30, 0],
            }}
          >
            <mesh
              rotation-x={Math.PI / 2}
              rotation-z={Math.PI / 2}

              // translateOnAxis={}
            >
              <pointLight position={[10, 10, 10]} />
              <ambientLight intensity={1.25} />
              <OrbitControls
                autoRotate
                rotation={[0, 1, 0]}
                rotateSpeed={2}
                minPolarAngle={Math.PI / 2}
                maxPolarAngle={Math.PI - Math.PI / 2}
              />
              {/* <boxGeometry /> */}
              <Suspense fallback={null}>
                <BookModel />
              </Suspense>
              <Environment preset="city" />

              <meshLambertMaterial />
            </mesh>
          </Canvas>

          {/* todo replace image wth a 3d model */}
        </div>
      </div>
    </main>
  );
}
