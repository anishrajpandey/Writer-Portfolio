import Image from "next/image";
import React from "react";
import TextComponent from "./TextComponent";

export default function TextAndImageComponent({
  FileName,
  Title,
  Description,
}: {
  FileName: String;
  Title: String;
  Description: String;
}) {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 items-center px-2 gap-3 place-content-center">
      <Image
        src={`/assets/photos/${FileName}`}
        width={400}
        height={400}
        alt="cannot load "
      />

      <TextComponent Title={Title} Description={Description} />
    </section>
  );
}
