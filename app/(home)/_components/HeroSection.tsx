"use client";
import Image from "next/image";
import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { Environment, OrbitControls } from "@react-three/drei";

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
        <div className="relative w-full mix-blend-darken aspect-square">
          {/* <Image src={"/book1.jpg"} fill alt="book" /> */}

          <Canvas>
            <mesh rotation-x={1.3}>
              <ambientLight intensity={1.25} />
              <OrbitControls />
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
