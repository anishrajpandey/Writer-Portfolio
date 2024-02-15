import Title from "@/app/_globalComponents/Title";
import { Target } from "lucide-react";
import Image from "next/image";
import React from "react";

const page = () => {
  const ArticlesData = [
    {
      id: 1,
      title: "Article Title",
      url: "https://ganeshmansinghfoundation.org/autobiographyseries/peoples-movement-1990-struggle-for-democracy/",
      imageSource:
        "https://ganeshmansinghfoundation.org/wp-content/uploads/2021/11/1990-insta-1.jpg",
      date: "23rd February 2024",
    },
    {
      id: 2,
      title: "Article Title",
      url: "https://ganeshmansinghfoundation.org/autobiographyseries/peoples-movement-1990-struggle-for-democracy/",
      imageSource:
        "https://ganeshmansinghfoundation.org/wp-content/uploads/2021/11/1990-insta-1.jpg",
      date: "23rd February 2024",
    },
    {
      id: 3,
      title: "Article Title",
      url: "https://ganeshmansinghfoundation.org/autobiographyseries/peoples-movement-1990-struggle-for-democracy/",
      imageSource:
        "https://ganeshmansinghfoundation.org/wp-content/uploads/2021/11/1990-insta-1.jpg",
      date: "23rd February 2024",
    },
    {
      id: 4,
      title: "Article Title",
      url: "https://ganeshmansinghfoundation.org/autobiographyseries/peoples-movement-1990-struggle-for-democracy/",
      imageSource:
        "https://ganeshmansinghfoundation.org/wp-content/uploads/2021/11/1990-insta-1.jpg",
      date: "23rd February 2024",
    },
    {
      id: 5,
      title: "Article Title",
      url: "https://ganeshmansinghfoundation.org/autobiographyseries/peoples-movement-1990-struggle-for-democracy/",
      imageSource:
        "https://ganeshmansinghfoundation.org/wp-content/uploads/2021/11/1990-insta-1.jpg",
    },
    {
      id: 6,
      title: "Article Title",
      url: "https://ganeshmansinghfoundation.org/autobiographyseries/peoples-movement-1990-struggle-for-democracy/",
      imageSource:
        "https://ganeshmansinghfoundation.org/wp-content/uploads/2021/11/1990-insta-1.jpg",
      date: "23rd February 2024",
    },
  ];

  return (
    <section className="w-screen md:w-[70vw] 12 mx-auto flex flex-col gap-20 ">
      <Title>Articles</Title>

      {ArticlesData.map(({ id, title, imageSource, date, url }) => (
        <article className="flex flex-col items-center shadow-xl" key={id}>
          <header className="w-full flex gap-5 justify-between items-center pb-2">
            <h1 className="text-lg md:text-xl text-faded font-semibold ">
              {" "}
              {title}
            </h1>
            <h4 className="text-sm md:text-md text-faded-light "> {date} </h4>
            <a href={url} target="blank">
              <button className="w-fit px-4 py-2 bg-orange-secondary hover:bg-transparent border-1 border-orange-secondary transition text-white hover:text-faded ">
                See More
              </button>
            </a>
          </header>

          <div className="bg-blue-gray-100 m-0 p-0 h-[1px] w-full "></div>

          <div className="aspect-video w-full mt-4 relative">
            <a href={url} target="_blank">
              <Image
                className="w-full h-full"
                src={`${imageSource}`}
                alt="cannor load article"
                fill
              ></Image>{" "}
            </a>
          </div>
        </article>
      ))}
    </section>
  );
  //   todo insert youtube links
};

export default page;
