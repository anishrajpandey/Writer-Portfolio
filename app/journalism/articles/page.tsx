"use client";
import Modal from "@/app/_globalComponents/Modal";
import Title from "@/app/_globalComponents/Title";
import Image from "next/image";
import { useEffect, useState } from "react";
import ArticlesData from "./ArticlesData.json";
import { useSearchParams } from "next/navigation";
const Page = () => {
  const [ModalData, setModalData] = useState({});
  let params = useSearchParams();
  let page = params.get("page");

  useEffect(() => {
    setModalData({
      Title: "This is some title",
      Image: "/assets/files/Article1.jpg",
      show: false,
    });
  }, []);
  // function changePagenumber() {}

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

      {/* page numbers section*/}

      <div className="flex gap-x-2 justify-center items-center mb-3 ">
        <b>Page Number:</b>
        <div
          className={`w-4 h-4 bg-gray-300 ${
            page == "1" && "bg-blue-400"
          } hover:bg-blue-400 cursor-pointer p-4 grid place-content-center`}
        >
          1
        </div>
        <div
          className={`w-4 h-4 bg-gray-300 ${
            page == "2" && "bg-blue-400"
          } hover:bg-blue-400 cursor-pointer p-4 grid place-content-center`}
        >
          2
        </div>
        <div
          className={`w-4 h-4  ${
            page == "3" && "bg-blue-400"
          } bg-gray-300 hover:bg-blue-400 cursor-pointer p-4 grid place-content-center`}
        >
          3
        </div>
        <div
          className={`w-4 h-4 bg-gray-300 ${
            page == "4" && "bg-blue-400"
          } hover:bg-blue-400 cursor-pointer p-4 grid place-content-center`}
        >
          4
        </div>
        <div
          className={`w-4 h-4 bg-gray-300 ${
            page == "5" && "bg-blue-400"
          } hover:bg-blue-400 cursor-pointer p-4 grid place-content-center`}
        >
          5
        </div>
        <div
          className={`w-4 h-4 bg-gray-300 ${
            page == "6" && "bg-blue-400"
          } hover:bg-blue-400 cursor-pointer p-4 grid place-content-center`}
        >
          6
        </div>
        <div
          className={`w-4 h-4 bg-gray-300 ${
            page == "7" && "bg-blue-400"
          } hover:bg-blue-400 cursor-pointer p-4 grid place-content-center`}
        >
          7
        </div>
        <div
          className={`w-4 h-4 bg-gray-300 ${
            page == "8" && "bg-blue-400"
          } hover:bg-blue-400 cursor-pointer p-4 grid place-content-center`}
        >
          8
        </div>
        <div
          className={`w-4 h-4 bg-gray-300 ${
            page == "9" && "bg-blue-400"
          } hover:bg-blue-400 cursor-pointer p-4 grid place-content-center`}
        >
          9
        </div>
        <div
          className={`w-4 h-4 bg-gray-300 ${
            page == "10" && "bg-blue-400"
          } hover:bg-blue-400 cursor-pointer p-4 grid place-content-center`}
        >
          10
        </div>
      </div>
    </section>
  );
  //   todo insert youtube links
};

export default Page;
