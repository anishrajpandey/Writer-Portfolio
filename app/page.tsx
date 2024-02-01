"use client";
import HeroSection from "./_components/HeroSection";
import BookSection from "./_components/BookSection";
import AboutAuthor from "./_components/AboutAuthor";
import TestimonialScrollable from "./_components/TestimonialScrollable";
import Title from "./_globalComponents/Title";
import Books from "./_components/Books";
export default function Home() {
  return (
    <>
      <HeroSection />

      {/* Books section */}
      <Books />
      {/* </BubbleAnimation> */}

      {/* about the author */}
      <AboutAuthor />
      {/* Reviews */}
      <Title>reviews</Title>
      <h2 className="text-center m-0 p-0 text-lg sm:text-xl font-extralight text-faded tracking-wide uppercase">
        What Readers have to say
      </h2>
      <TestimonialScrollable />
    </>
  );
}
