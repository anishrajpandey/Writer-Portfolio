import Title from "@/app/_globalComponents/Title";
import React from "react";

const page = () => {
  const interviewData = [
    {
      id: 1,
      title:
        "गणेशमान सिंहको संकल्प !l Ganesh Man Singh Foundation #lauhapurush #ganeshmansigh #nepalpolitics",
      src: "https://youtube.com/embed/uOb-PNhMuXk",
      date: "Apr 10, 2024",
    },
    {
      id: 2,
      title:
        "गणेशमान सिंहको संकल्प भाग १ l Ganesh Man Singh Foundation #lauhapurush #ganeshmansigh",
      src: "https://youtube.com/embed/Sp0Vm0MYaJA",
      date: "Sep 7, 2012",
    },

    {
      id: 3,
      title: "गणेशमान सिंहको संकल्प भाग २ l Ganesh Man Singh Foundation",
      src: "https://youtube.com/embed/Tw03yqFtEuM",
      date: "Apr 22, 2024",
    },
    {
      id: 4,
      title: "गणेशमान सिंहको संकल्प भाग ३ l Ganesh Man Singh Foundation",
      src: "https://youtube.com/embed/xpGyyr-pOtE",
      date: "  Apr 29, 2024  ",
    },
    {
      id: 5,
      title: "गणेशमान सिंहको संकल्प भाग ३ l Ganesh Man Singh Foundation",
      src: "https://youtube.com/embed/xpGyyr-pOtE",
      date: " Apr 29, 2024",
    },
    {
      id: 6,
      title:
        "गणेशमान सिंहको संकल्प भाग ५ l Ganesh Man Singh Foundation l Ghanendra Purush Dhakal l",
      src: "https://youtube.com/embed/0082tbw8BmI",
      date: " May 20, 2024  ",
    },
    {
      id: 7,
      title: "गणेशमान सिंहको संकल्प भाग ४ l Ganesh Man Singh Foundation",
      src: "https://youtube.com/embed/aQbt21zLzpQ",
      date: " Jun 10, 2024 ",
    },
    {
      id: 8,
      title:
        "गणेशमान सिंहको संकल्प भाग ८ l Ganesh Man Singh Foundation ft. Ghanendra Purush Dhakal",
      src: "https://youtube.com/embed/7pfPQxkbzO4",
      date: "Jun 10, 2024  ",
    },
    {
      id: 9,
      title:
        "गणेशमान सिंहको संकल्प भाग ९ l Ganesh Man Singh Foundation ft. Ghanendra Purush Dhakal",
      src: "https://youtube.com/embed/-6rIVHIPcaE",
      date: "  Jun 17 2024  ",
    },
    {
      id: 10,
      title:
        "गणेशमान सिंहको संकल्प भाग १० l Ganesh Man Singh Foundation ft. Ghanendra Purush Dhakal",
      src: "https://youtube.com/embed/gipQQmqU09Q",
      date: "  Jun 24, 2024  ",
    },
    {
      id: 11,
      title:
        "गणेशमान सिंहको संकल्प भाग ११ l Ganesh Man Singh Foundation ft. Ghanendra Purush Dhakal",
      src: "https://youtube.com/embed/CyL-pYm273s",
      date: "  Jul 2, 2024    ",
    },
    {
      id: 12,
      title:
        "गणेशमान सिंहको संकल्प भाग १२ l Ganesh Man Singh Foundation ft. Ghanendra Purush Dhakal",
      src: "https://youtube.com/embed/ARJP4AE3gk8",
      date: "  Jul 2, 2024    ",
    },
  ];

  return (
    <section className="w-screen md:w-[70vw] 12 mx-auto flex flex-col gap-20 ">
      <Title>Podcasts</Title>

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
