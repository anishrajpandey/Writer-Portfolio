import React from "react";
import Image from "next/image";
import "../globals.css";
import { ChevronDown } from "lucide-react";
import Particles from "./Particles";

export default function Intro() {
  const handleScroll = () => {
    window.scrollTo({ top: 600, behavior: "smooth" });
  };
  return (
    <section className="relative h-like-screen mt-0 pt-0 w-screen">
      {/* <Particles /> */}
      <div
        className="scrollbutton absolute left-1/2 bottom-0 animate-bounce cursor-pointer z-20 "
        onClick={handleScroll}
      >
        {/* <ChevronDown /> */}
        <ChevronDown size={70} color="white" strokeWidth={4} />
      </div>
      <div className="absolute -z-10 inset-0">
        <Image
          src="/assets/photos/introbackground.JPG"
          fill
          alt="Unable to load image"
          className="object-cover drop-shadow-md"
        ></Image>
      </div>
      <main className="w-screen">
        {/* <div className="relative w-32 md:w-1/2 h-64"> */}
        <Image
          src="/assets/photos/introimg.png"
          width={450}
          height={600}
          alt="Unable to load image"
          className="absolute bottom-0"
        ></Image>
        {/* </div> */}
        <div className="absolute flex justify-end min-w-screen bg-fadeGradient  md:bg-opacity-50 bg-opacity-70  right-0 px-2 md:px-4 items-end md:h-[47vh]  bottom-0  left-0 z-0 md:-z-10">
          <div className=" px-2 md:px-4 h-[50vh]  bottom-0   pt-10 text-white  rounded-s-xl  w-full md:w-1/2 text-md sm:text-lg md:text-xl">
            <h1 className="text-4xl font-bold text-center text-orange-primary py-2">
              Ghanendra Purush Dhakal{" "}
            </h1>
            <p className="text-white">
              क्ष धभ तबपभ त्चयकतभचगम’क कगननभकतष्यल तजबत बत भिबकत तजयकभ बिलनगबनभक
              धष्तज फ्यचभ तजबल ज्ञट,ण्ण्ण् कउभबपभचक कजयगमि दभ धचष्ततभल, धभ ाष्लम
              तजबत धभ कजयगमि भहउभअत बिि बिलनगबनभक मयधल तय बलम ष्लअगिमष्लन
              म्जष्फ्ब िकजयगमि दभ ध
            </p>
          </div>
        </div>
      </main>
    </section>
  );
}
