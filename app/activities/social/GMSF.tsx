import React from "react";
import Image from "next/image";
import ImageComponent from "../_components/ImageComponent";
import TextComponent from "../_components/TextComponent";
import Particles from "@/app/_components/Particles";
import BubbleAnimation from "@/app/_globalComponents/BubbleAnimation";

const GMSF = ({ children }: { children: any }) => {
  return (
    <main className="w-screen md:w-[80vw] mx-auto  py-8 px-2 md:px-6 ">
      <a href="https://ganeshmansinghfoundation.org/">
        <h1 className="text-2xl underline-offset-4 underline md:text-3xl my-6 text-faded uppercase font-bold text-center ">
          GaneshMan Singh Foundation
        </h1>
      </a>
      <article className="w-full h-fit my-3">
        <h2 className="text-lg md:text-xl text-faded  font-semibold text-left ">
          Introduction
        </h2>
        <p className="text-faded-light text-md md:text-lg">
          It is Ganesh Man Singh Foundation&apos;s pride to continue Ganesh Man
          Singh&apos;s legacy. Singh, besides being one of Nepal&apos;s most
          revered and respected leader, ensured a positive development of Nepal,
          and Nepalis throughout his lifetime. Considered Nepal&apos;s Father of
          Democracy, Singh in his lifetime resisted against two regimes to
          ensure Nepalis weren&apos;t deprived of their inherent right to
          democracy. He first led a movement against the autocratic Rana regime
          which ruled over Nepal for more than 100 years, and later against the
          &apos;partyless&apos; Panchayat System introduced by then King
          Mahendra. The Foundation continues to cherish Singh&apos;s belief in
          democracy, and other activities which include development of sports,
          infrastructure, improvement of living standards of all Nepalis, and
          much more.
        </p>
      </article>
      <div className="relative w-full md:h-like-screen h-[50vh] my-2 md:my-6">
        <Image
          src={"/assets/photos/gmsf.png"}
          fill
          alt="Ganesh Man Singh Foundation"
        />
      </div>

      <article className="w-full h-fit my-3">
        <h2 className="text-lg md:text-xl text-faded  font-semibold text-left ">
          Impact
        </h2>
        <p className="text-faded-light text-md md:text-lg">
          It is Ganesh Man Singh Foundation&apos;s pride to continue Ganesh Man
          Singh&apos;s legacy. Singh, besides being one of Nepal&apos;s most
          revered and respected leader, ensured a positive development of Nepal,
          and Nepalis throughout his lifetime. Considered Nepal&apos;s Father of
          Democracy, Singh in his lifetime resisted against two regimes to
          ensure Nepalis weren&apos;t deprived of their inherent right to
          democracy. He first led a movement against the autocratic Rana regime
          which ruled over Nepal for more than 100 years, and later against the
          &apos;partyless&apos; Panchayat System introduced by then King
          Mahendra. The Foundation continues to cherish Singh&apos;s belief in
          democracy, and other activities which include development of sports,
          infrastructure, improvement of living standards of all Nepalis, and
          much more.
        </p>
      </article>
      {/* <BubbleAnimation> */}
      <section className="grid grid-cols-1 md:grid-cols-2 items-center px-2 gap-3">
        <Image
          src={"/assets/photos/ganeshman.jpg"}
          width={400}
          height={400}
          alt="cannot load "
        />

        <TextComponent
          Title={"Who is Ganesh Man Singh"}
          Description={
            "Ganesh Man Singh was the leader of the democratic movement of 1990 in Nepal. He is revered as the Father of Democracy and the Iron-man of Nepali politics. He joined Praja Parishad to protest against the autocratic rule of the Ranas"
          }
        />
      </section>
      {/* </BubbleAnimation> */}
    </main>
  );
};
export default GMSF;
