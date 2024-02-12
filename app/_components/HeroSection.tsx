"use client";
import Image from "next/image";
import Link from "next/link";
import Marquee from "react-fast-marquee";
import Scene from "./BookModel";
import Cube from "./Cube";
import Particles from "./Particles";
export default function HeroSection() {
  return (
    <main className=" bg-opacity-10 bg-[rgb(153,255,250)]  bg-no-repeat relative bg-cover ml-0 min-h-screen w-screen flex flex-col md:flex-row  ">
      {/* <Particles /> */}
      <div className="left w-screen md:w-3/5  grid place-content-center scale-110">
        <div className="text-xl md:text-3xl font-bold text-faded  ">
          <h1> Bestselling </h1>
          <h1>Spirituality Author</h1>
        </div>
        <div>
          <h1 className="text-2xl md:text-4xl font-bold text-orange-primary uppercase">
            Ghanendra{" "}
          </h1>
          <h1 className="text-2xl md:text-4xl font-bold text-orange-primary uppercase ">
            Purush Dhakal
          </h1>
        </div>
        <div className="my-3">
          <p className="text-md md:text-lg text-faded-light">
            Writer of Jana Andolan and Iron Man
          </p>
        </div>
        <div className="btns flex gap-3 text-white">
          <Link href={"/books"}>
            <button className="w-32 h-22 p-3 rounded-lg bg-orange-primary hover:bg-orange-secondary primary font-semibold  transition  ">
              Books
            </button>
          </Link>
          <button className="w-32 h-22 p-3 rounded-lg  transition bg-faded-light font-semibold  border ">
            Blogs
          </button>
        </div>
      </div>

      <div className=" right z-0  h-screen flex items-center ">
        <Cube />
        {/* <Scene /> */}
      </div>

      <div className="absolute bottom-0 left-0 right-0 text-white">
        <Marquee>
          I can be a React component, multiple React components, or just some
          text.
        </Marquee>
      </div>
    </main>
  );
}
