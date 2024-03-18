"use client";
import Modal from "@/app/_globalComponents/Modal";
import Title from "@/app/_globalComponents/Title";
import Image from "next/image";
import { useEffect, useState } from "react";

const Page = () => {
  const [ModalData, setModalData] = useState({});
  useEffect(() => {
    setModalData({
      Title: "This is some title",
      Image: "/assets/files/Article1.jpg",
      show: false,
    });
  }, []);

  const ArticlesData = [
    {
      id: 1,
      title: "Article Title",
      url: "https://ganeshmansinghfoundation.org/autobiographyseries/peoples-movement-1990-struggle-for-democracy/",
      imageSource: "/assets/files/Article1.jpg",
      date: "23rd February 2024",
    },
    {
      id: 2,
      title: "Article Title",
      url: "https://ganeshmansinghfoundation.org/autobiographyseries/peoples-movement-1990-struggle-for-democracy/",
      imageSource: "/assets/files/Article2.jpg",
      date: "23rd February 2024",
    },
    {
      id: 3,
      title: "Article Title",
      url: "https://ganeshmansinghfoundation.org/autobiographyseries/peoples-movement-1990-struggle-for-democracy/",
      imageSource: "/assets/files/Article3.jpg",
      date: "23rd February 2024",
    },
    {
      id: 4,
      title: "Article Title",
      url: "https://ganeshmansinghfoundation.org/autobiographyseries/peoples-movement-1990-struggle-for-democracy/",
      imageSource: "/assets/files/Article4.jpg",
      date: "23rd February 2024",
    },
    {
      id: 5,
      title: "Article Title",
      url: "https://ganeshmansinghfoundation.org/autobiographyseries/peoples-movement-1990-struggle-for-democracy/",
      imageSource: "/assets/files/Article4.jpg",
    },
    {
      id: 6,
      title: "Article Title",
      url: "https://ganeshmansinghfoundation.org/autobiographyseries/peoples-movement-1990-struggle-for-democracy/",
      imageSource: "/assets/files/Article4.jpg",
      date: "23rd February 2024",
    },
  ];

  return (
    <section className="w-screen md:w-[70vw] 12 mx-auto flex flex-col gap-20 ">
      <Title>Articles</Title>
      <Modal ModalData={ModalData} setModalData={setModalData} />
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
            <a
              href={"#"}
              onClick={() => {
                console.log("clicked");
                setModalData({ Title: title, Image: imageSource, show: true });
              }}
            >
              <Image
                className="w-full h-full"
                src={`${imageSource}`}
                alt="cannot load article"
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

export default Page;
