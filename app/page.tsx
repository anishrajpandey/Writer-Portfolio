"use client";
import Image from "next/image";

import Navbar from "./_globalComponents/Navbar";
import HeroSection from "./_components/HeroSection";
import Model from "./_components/BookModel";
import BookSection from "./_components/BookSection";
import Testimonials from "./_components/Testimonials";
import ShowPDF from "./books/[bookID]/_components/ShowPDF";
import AboutAuthor from "./_components/AboutAuthor";
import TestimonialScrollable from "./_components/TestimonialScrollable";
export default function Home() {
  return (
    <>
      <HeroSection />
      {/* <div>this is body</div> */}
      {/* Books section */}
      <h1 className="mb-0  mt-12 text-3xl font-extrabold text-gray-900  md:text-5xl lg:text-6xl">
        <span className="text-transparent bg-clip-text bg-gradient-to-r to-blue-primary from-orange-primary tracking-widest">
          PUBLISHED BOOKS
        </span>{" "}
      </h1>

      <BookSection
        BookName={"Lauha Purush"}
        Description={
          " Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda beatae quas ut! Voluptatem fuga vel, iure modi at voluptates sunt atque pariatur."
        }
        ImageFront={"/book1.png"}
        ImageBack={"/Event.jpg"}
        URL={"/book/1/read"}
      />
      <BookSection
        BookName={"Lauha Purush"}
        Description={
          " Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda beatae quas ut! Voluptatem fuga vel, iure modi at voluptates sunt atque pariatur."
        }
        ImageFront={"/book1.png"}
        ImageBack={"/Event.jpg"}
        URL={"/book/1/read"}
      />
      <BookSection
        BookName={"Lauha Purush"}
        Description={
          " Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda beatae quas ut! Voluptatem fuga vel, iure modi at voluptates sunt atque pariatur."
        }
        ImageFront={"/book1.png"}
        ImageBack={"/Event.jpg"}
        URL={"/book/1/read"}
      />
      <BookSection
        BookName={"Lauha Purush"}
        Description={
          " Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda beatae quas ut! Voluptatem fuga vel, iure modi at voluptates sunt atque pariatur."
        }
        ImageFront={"/book1.png"}
        ImageBack={"/Event.jpg"}
        URL={"/book/1/read"}
      />
      {/* about the author */}
      <AboutAuthor />

      {/* Reviews */}
      <h1 className="mb-0  mt-12 text-3xl font-extrabold text-gray-900  md:text-5xl lg:text-6xl">
        <span className="text-transparent bg-clip-text bg-gradient-to-r to-blue-primary from-orange-primary tracking-widest uppercase">
          Reviews
        </span>{" "}
      </h1>
      <h2 className="text-center m-0 p-0 text-lg sm:text-xl font-extralight text-faded tracking-wide uppercase">
        What Readers have to say
      </h2>
      {/* <Testimonials /> */}
      <TestimonialScrollable />
      {/* <ShowPDF /> */}
    </>
  );
}
