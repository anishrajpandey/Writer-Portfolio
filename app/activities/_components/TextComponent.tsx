import React from "react";

export default function TextComponent({
  Title,
  Description,
}: {
  Title: String;
  Description: String;
}) {
  return (
    <article className="w-full h-fit my-14">
      <h2 className="text-lg md:text-xl text-faded  font-semibold text-left ">
        {Title}
      </h2>
      <p className="text-faded-light text-md md:text-lg">{Description}</p>
    </article>
  );
}
