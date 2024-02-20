"use client";
import React, { useState, useEffect } from "react";
import {
  Card,
  Typography,
  ListItem,
  ListItemPrefix,
} from "@material-tailwind/react";
import BookIcon from "@/app/_globalComponents/icons/BookIcon";
import ArrowIcon from "@/app/_globalComponents/icons/ArrowIcon";
import ShowPDF from "./_components/ShowPDF";
import { useParams, useSearchParams } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
// let BookData;
import BookData from "../../../public/data/BookData";

export default function Page() {
  let SearchParams = useSearchParams();
  let chapter = SearchParams.get("chap");
  console.log(chapter);
  const [ShowSidebar, setShowSidebar] = useState(false);
  const [PDFURL, setPDFURL] = useState(
    "https://firebasestorage.googleapis.com/v0/b/visionventures-b8ed4.appspot.com/o/book-pdf%2Fplaceholder.pdf?alt=media&token=16eb75f7-9f43-4ef3-8b1e-17cc54a8d241"
  );
  const params = useParams();
  let { bookID } = params;
  const bookIDInteger = +bookID;
  let filteredBook = BookData.filter((book) => book.BookID === bookIDInteger);

  useEffect(() => {
    let chap: any = SearchParams.get("chap");
    if (chap) {
      chap = +chap;
      console.log(chapter);
      let [chapterData] = filteredBook[0].Chapters.filter(
        ({ chapter }) => chapter == chap
      );
      // console.log(chapterData);
      console.log(chapterData.URL);
      setPDFURL(chapterData.URL);
    }
  }, []);

  // const [SelectedBook, setSelectedBook] = useState({Book:1,ID})
  return (
    <main className="flex bg-blue-gray-500 w-screen h-screen overflow-y-scroll overflow-x-hidden">
      <div
        className="bg-white flex-1 rounded-md p-4 md:hidden absolute z-10 flex gap-2 justify-center items-center cursor-pointer "
        onClick={() => setShowSidebar(!ShowSidebar)}
      >
        <h2 className="text-lg font-semibold">Chapters</h2>
        <span className="text-3xl w-fit rounded-[50%] p-2 bg-orange-primary ">
          <ArrowIcon />
        </span>
      </div>
      <Card
        placeholder={"A card"}
        className={`${
          ShowSidebar ? "block" : "hidden"
        } md:block h-screen pr-4  w-full max-w-[20rem] p-2 shadow-xl shadow-blue-gray-900/5 overflow-y-scroll overflow-x-hidden`}
      >
        <div className="mb-2 p-4 w-screen">
          <Typography
            placeholder={"Chapters"}
            variant="h5"
            color="blue-gray"
            className="flex gap-2"
          >
            <Link href={"/books"}>
              <ArrowLeft />
            </Link>{" "}
            {filteredBook[0]?.BookName}
          </Typography>
        </div>

        {filteredBook[0].Chapters.map((chapter) => {
          return (
            <ListItem
              placeholder={""}
              key={chapter.chapter}
              onClick={() => {
                setPDFURL(chapter.URL);
              }}
            >
              <ListItemPrefix placeholder={""}>
                <BookIcon />{" "}
              </ListItemPrefix>
              <div className="flex justify-center items-center gap-1">
                <span className="font-semibold">{chapter.chapter}.</span>
                {chapter.chapterName}
              </div>
            </ListItem>
          );
        })}
      </Card>
      <ShowPDF URL={PDFURL} />
    </main>
  );
}
