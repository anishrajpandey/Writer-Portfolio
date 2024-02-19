import React, { useState } from "react";
import Image from "next/image";
import "../globals.css";
import { ChevronDown } from "lucide-react";

import { Languages } from "lucide-react";
import { Button } from "@material-tailwind/react";
export default function Intro() {
  let [isTranslated, setIsTranslated] = useState(false);
  const handleScroll = () => {
    window.scrollTo({ top: 600, behavior: "smooth" });
  };
  function handleTranslate() {
    setIsTranslated(!isTranslated);
    console.log("here");
  }
  return (
    <section className="relative h-like-screen mt-0 pt-0 w-screen">
      {/* <Particles /> */}
      <div
        className="scrollbutton absolute left-1/2 bottom-0 animate-ping cursor-pointer z-20 "
        onClick={handleScroll}
      >
        {/* <ChevronDown /> */}
        <ChevronDown size={35} color="white" strokeWidth={4} />
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
          className="absolute bottom-0 md:z-10"
        ></Image>
        {/* </div> */}
        <div className="absolute flex justify-end min-w-screen bg-fadeGradient  md:bg-opacity-50 bg-opacity-70  right-0 px-2 md:px-4 items-end md:h-[47vh]  bottom-0  left-0 z-0 ">
          <div className=" px-2 md:px-4 h-[50vh]  bottom-0   pt-10 text-white  rounded-s-xl  w-full md:w-1/2 text-md sm:text-lg md:text-xl ">
            {isTranslated ? (
              <>
                <h1 className="text-4xl font-bold text-center text-orange-primary py-2 flex justify-between items-center px-3 relative z-30">
                  <span>घनेन्द्र पुरुष ढकाल </span>
                  <Button
                    placeholder={"hi"}
                    onClick={handleTranslate}
                    className="cursor-pointer  min-w-fit bg-orange-secondary "
                    // onClick={handleTranslate}
                  >
                    <Languages
                      size={30}
                      color="white"
                      className="cursor-pointer"
                    />
                  </Button>
                </h1>
                <p className="text-white">
                  &apos;जनआन्दोलनः २०४६&apos; नामक पुस्तकको रचना गरेर हाम्रा
                  साथी ढकालजी अमर हुनुभएको छ ।”
                </p>
              </>
            ) : (
              <>
                <h1 className="text-4xl font-bold text-center text-orange-primary py-2 flex justify-between items-center px-3 z-30">
                  <span>Ghanendra Purush Dhakal </span>
                  <Button
                    placeholder={"hi"}
                    onClick={handleTranslate}
                    className="cursor-pointer bg-transparent"
                    // onClick={handleTranslate}
                  >
                    <Languages
                      size={30}
                      color="white"
                      className="cursor-pointer"
                    />
                  </Button>
                </h1>
                <p className="text-white">
                  By composing a book called &apos;Jan Andolan: 2046&apos; Our
                  friend Dhakalji has become immortal.”
                </p>
              </>
            )}
          </div>
        </div>
      </main>
    </section>
  );
}
