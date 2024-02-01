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
import Title from "./_globalComponents/Title";
export default function Home() {
  return (
    <>
      <HeroSection />
      {/* <div>this is body</div> */}
      {/* Books section */}
      <Title>published books</Title>

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
      <br />
      {/* Reviews */}
      <Title>reviews</Title>
      <h2 className="text-center m-0 p-0 text-lg sm:text-xl font-extralight text-faded tracking-wide uppercase">
        What Readers have to say
      </h2>
      {/* <Testimonials /> */}
      <TestimonialScrollable />
      {/* <ShowPDF /> */}
    </>
  );
}
