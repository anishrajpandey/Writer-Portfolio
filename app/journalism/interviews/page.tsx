import Title from "@/app/_globalComponents/Title";
import React from "react";

const page = () => {
  const interviewData = [
    {
      id: 1,
      title: "Talk Show Ghanendra Purush Dhakal Part 1",
      src: "https://youtube.com/embed/1d48ZUIgagk",
      date: " Sep 7, 2012",
    },
    {
      id: 2,
      title: "Ep 29 Talk Show Ghanendra Purush Dhakal Part 2",
      src: "https://youtube.com/embed/zd7cyEzvDJY",
      date: "Sep 7, 2012",
    },

    {
      id: 3,
      title: "The Life and Values of Ganesh Man Singh",
      src: "https://youtube.com/embed/8VBAHBjq7ig",
      date: "  Nov 19, 2023 ",
    },
  ];

  return (
    <section className="w-screen md:w-[70vw] 12 mx-auto flex flex-col gap-20 ">
      <Title>Interviews</Title>

      {interviewData.map(({ id, title, src, date }) => (
        <article className="flex flex-col items-center shadow-xl" key={id}>
          <header className="w-full flex gap-5 justify-between">
            <h1 className="text-lg md:text-xl text-faded font-semibold ">
              {" "}
              {title}
            </h1>
            <h4 className="text-sm md:text-md text-faded-light "> {date} </h4>
          </header>

          <div className="bg-blue-gray-100 m-0 p-0 h-[1px] w-full "></div>

          <div className="aspect-video w-full mt-4">
            <iframe
              className="w-full h-full"
              src={src}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>{" "}
          </div>
        </article>
      ))}
    </section>
  );
  //   todo insert youtube links
};

export default page;
