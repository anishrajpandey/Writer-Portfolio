import React from "react";

const TitleComponent = ({ Title, URL = "#" }: { Title: String; URL: any }) => {
  return (
    <a href={URL}>
      <h1 className="text-2xl underline-offset-4 underline md:text-3xl my-6  uppercase font-bold text-center text-blue-secondary ">
        {Title}{" "}
      </h1>
    </a>
  );
};

export default TitleComponent;
