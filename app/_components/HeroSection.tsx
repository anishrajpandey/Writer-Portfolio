"use client";
import Image from "next/image";
import Link from "next/link";
// import Marquee from "react-marquee-slider";
import Marquee from "react-fast-marquee";

export default function HeroSection() {
  return (
    <main className=" bg-cloudBg bg-no-repeat relative bg-cover ml-0  min-h-screen w-screen flex flex-col md:flex-row pt-32 md:pt-11 -mt-16 overflow-hidden  ">
      <div className="left w-screen md:w-3/5  grid place-content-center scale-110">
        <div className="text-xl md:text-3xl font-bold ">
          <h1>Nepal Today Bestselling and</h1>
          <h1>Spirituality Author</h1>
        </div>
        <div>
          <h1 className="text-2xl md:text-4xl font-bold text-orange-primary uppercase ">
            Ghanendra{" "}
          </h1>
          <h1 className="text-2xl md:text-4xl font-bold text-orange-primary uppercase ">
            Purush Dhakal
          </h1>
        </div>
        <div className="my-3">
          <p className="text-md md:text-lg text-faded">
            Writer of Jana Andolan and Iron Man
          </p>
        </div>
        <div className="btns flex gap-3 text-white">
          <Link href={"/books"}>
            <button className="w-32 h-22 p-3  rounded-lg hover:bg-orange-secondary primary font-semibold  transition bg-orange-primary  ">
              Books
            </button>
          </Link>
          <button className="w-32 h-22 p-3 rounded-lg  transition bg-faded-light font-semibold  border ">
            Blogs
          </button>
        </div>
      </div>
      <div className="right w-screen md:w-2/5 h-full flex items-center ">
        <div className="w-full aspect-square flex justify-center items-center relative">
          <Image
            src={"/book1.jpg"}
            // width={300}
            // height={300}
            fill
            alt="book"
            className="mix-blend-multiply"
          />
          {/* <BookModel /> */}
          {/* todo replace image wth a 3d model */}
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0">
        <Marquee>
          I can be a React component, multiple React components, or just some
          text.
        </Marquee>
      </div>
    </main>
  );
}
