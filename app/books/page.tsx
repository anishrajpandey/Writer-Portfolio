import Image from "next/image";
import Link from "next/link";
import React from "react";

const Book = () => {
  return (
    <main className="bg-orange-10  ">
      <h2 className="text-left px-12 text-2xl pt-8 md:text-5xl font-bold tracking-tight text-gray-900">
        Published Books{" "}
      </h2>
      <main className="w-screen grid grid-cols-1 md:grid-cols-4 gap-7 px-12 place-content-center pt-6 pb-12 justify-center">
        <BookCard
          Title={"Ironman"}
          Description={"lorem ipsum dolor sit comet apticum blah blah blahh"}
          ImageURL={"/assets/photos/books/ironman.jpg"}
          RouteURL={"/books/1"}
        />
        <BookCard
          Title={"Lauha Purush"}
          Description={"lorem ipsum dolor sit comet apticum blah blah blahh"}
          ImageURL={"/assets/photos/books/lauhapurush.jpg"}
          RouteURL={"/books/2"}
        />
        <BookCard
          Title={"Itihas"}
          Description={"lorem ipsum dolor sit comet apticum blah blah blahh"}
          ImageURL={"/assets/photos/books/itihas.jpg"}
          RouteURL={"/books/3"}
        />
        <BookCard
          Title={"Jana Andalon"}
          Description={"lorem ipsum dolor sit comet apticum blah blah blahh"}
          ImageURL={"/assets/photos/books/janaandolan.jpg"}
          RouteURL={"/books/4"}
        />
        <BookCard
          Title={"Kripalu Uddhhan"}
          Description={
            "lorem ipsum dolor sit comet apticum blah blah blahhlorem ipsum dolor sit comet apticum blah blah blahhlorem ipsum dolor sit comet apticum blah blah blahhlorem ipsum dolor sit comet apticum blah blah blahh"
          }
          ImageURL={"/assets/photos/books/kripalu.jpg"}
          RouteURL={"/books/3"}
        />
      </main>
    </main>
  );
};
function BookCard({
  Title = "sdf",
  ImageURL = "sdfsdf",
  Description = "sdfsdf",
  RouteURL = "fsdf",
}: {
  Title: String;
  ImageURL: any;
  Description: String;
  RouteURL: any;
}) {
  return (
    <div className="w-fit bg-white border cursor:pointer hover:scale-95 transition duration-300 border-gray-200 rounded-lg shadow flex flex-col items-center pt-8">
      <Image
        width={150}
        height={250}
        className="rounded-t-lg h-52 cursor-pointer"
        src={ImageURL}
        alt=""
      />

      <div className="p-5 ">
        <a href="#">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 ">
            {Title}
          </h5>
        </a>
        <p className="mb-3 font-normal text-gray-700 ">{Description}</p>

        <button>
          <Link
            href={RouteURL}
            className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300  -700 -800"
          >
            Read Book
            <svg
              className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 10"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 5h12m0 0L9 1m4 4L9 9"
              />
            </svg>
          </Link>
        </button>
      </div>
    </div>
  );
}
export default Book;
