import React from "react";
import Image from "next/image";
export default function Intro() {
  return (
    <section className="h-screen mt-0 pt-0 w-screen  ">
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
          width={500}
          height={700}
          alt="Unable to load image"
          className="absolute bottom-0"
        ></Image>
        {/* </div> */}

        <div className="right-4 h-[50vh] bottom-4 absolute  bg-black bg-opacity-45 text-white rounded-s-xl p-4 w-full md:w-1/2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo, in quis
          incidunt rerum blanditiis repellat, ex perspiciatis cum nisi natus
          velit! Itaque molestias provident nisi possimus reiciendis non
          sapiente doloremque vero repellendus culpa placeat expedita
          cupiditate, fuga accusamus repudiandae consequatur fugit a quam
          quaerat autem molestiae laudantium nesciunt eum tempora. Est ex
          laudantium cum error ut repudiandae quaerat similique officiis quo
          voluptate fugiat recusandae possimus, eveniet obcaecati esse soluta
          incidunt fuga, doloremque, impedit vel. Suscipit ad, amet molestiae
          itaque dolores temporibus dolorem quam, iusto tenetur numquam
          excepturi maiores, laborum sequi nulla eos! Neque laborum ducimus sed
          voluptates accusantium eveniet nesciunt.
        </div>
      </main>
    </section>
  );
}
