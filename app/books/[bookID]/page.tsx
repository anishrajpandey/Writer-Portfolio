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
import { useParams } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function Page() {
  const BookData = [
    {
      BookName: "Ironman",
      BookID: 1,
      Chapters: [
        {
          chapter: 0,
          chapterName: "Introduction",
          URL: "https://firebasestorage.googleapis.com/v0/b/visionventures-b8ed4.appspot.com/o/book-pdf%2Fironman%2Fironman-3-9.pdf?alt=media&token=b03bef6c-1820-447f-95c4-9a31eac678f5",
        },

        {
          chapter: 0.1,
          chapterName: "Prologue ",
          URL: "https://firebasestorage.googleapis.com/v0/b/visionventures-b8ed4.appspot.com/o/book-pdf%2Fironman%2Fironman-11-30.pdf?alt=media&token=2b69cdac-6fb2-4e08-a2f8-ea6aef4946d6",
        },
        {
          chapter: 1,
          chapterName: "An Iron Man, A Virtuous Man, A Sage ! ",
          URL: "https://firebasestorage.googleapis.com/v0/b/visionventures-b8ed4.appspot.com/o/book-pdf%2Fironman%2Fironman-31-58.pdf?alt=media&token=165332d9-97bc-49e1-afc0-17e866f0ab0b",
        },
        {
          chapter: 2,
          chapterName: "The Thorny Leaves of a Promising Plant ! ",
          URL: "https://firebasestorage.googleapis.com/v0/b/visionventures-b8ed4.appspot.com/o/book-pdf%2Fironman%2Fironman-59-77.pdf?alt=media&token=3c5ffc5b-9c7e-48e0-956b-e62a82a02007",
        },
        {
          chapter: 3,
          chapterName: "A Prison or an Aspirational Center ? ",
          URL: "https://firebasestorage.googleapis.com/v0/b/visionventures-b8ed4.appspot.com/o/book-pdf%2Fironman%2Fironman-79-111.pdf?alt=media&token=fae3ca82-5808-4fdf-9722-8cdadaec3fda",
        },
        {
          chapter: 4,
          chapterName: "Ganeshman Singh's Role Models ",
          URL: "https://firebasestorage.googleapis.com/v0/b/visionventures-b8ed4.appspot.com/o/book-pdf%2Fironman%2Fironman-113-147.pdf?alt=media&token=047f5b0e-df65-4d64-b4d9-91d6fbf8c6e4",
        },
        {
          chapter: 5,
          chapterName: "People’s Movement 1990 ",
          URL: "https://firebasestorage.googleapis.com/v0/b/visionventures-b8ed4.appspot.com/o/book-pdf%2Fironman%2Fironman-149-256.pdf?alt=media&token=afea32af-5a09-483e-8289-a177c718033a",
        },
        {
          chapter: 6,
          chapterName:
            "A Roadmap for the Development and Consolidation of Democracy ",
          URL: "https://firebasestorage.googleapis.com/v0/b/visionventures-b8ed4.appspot.com/o/book-pdf%2Fironman%2Fironman-257-290.pdf?alt=media&token=891ba7d7-177b-48e2-bf87-0513c04d3453",
        },
        {
          chapter: 7,
          chapterName: "People's Awareness Campaign ",
          URL: "https://firebasestorage.googleapis.com/v0/b/visionventures-b8ed4.appspot.com/o/book-pdf%2Fironman%2Fironman-291-360.pdf?alt=media&token=d9b29ec0-90a7-41ae-8a63-279e2b29360d",
        },
        {
          chapter: 8,
          chapterName: "Birbhogya Basundhara ! ",
          URL: "https://firebasestorage.googleapis.com/v0/b/visionventures-b8ed4.appspot.com/o/book-pdf%2Fironman%2Fironman-361-395.pdf?alt=media&token=eaa072f2-77d0-4a51-975c-18a652808de8",
        },
        {
          chapter: 9,
          chapterName: "A Phenomenal Man ! ",
          URL: "https://firebasestorage.googleapis.com/v0/b/visionventures-b8ed4.appspot.com/o/book-pdf%2Fironman%2Fironman-397-408.pdf?alt=media&token=1d781753-d8bf-48f2-abe2-a745ec0f3a74",
        },
      ],
    },
    {
      BookName: "LauhaPurush",
      BookID: 2,
      Chapters: [
        {
          chapter: 1,
          chapterName: "Introduction",
          URL: "https://firebasestorage.googleapis.com/v0/b/visionventures-b8ed4.appspot.com/o/book-pdf%2Flauhapurush%2Flauhapurush-1-10.pdf?alt=media&token=ec70ccc3-f4fe-492d-9e1b-048b351b8e35",
        },

        {
          chapter: 2,
          chapterName: "प्राक्थान ",
          URL: "https://firebasestorage.googleapis.com/v0/b/visionventures-b8ed4.appspot.com/o/book-pdf%2Flauhapurush%2Flauhapurush-11-22.pdf?alt=media&token=ad44e311-454e-4574-a7e4-7592253a95ab",
        },

        {
          chapter: 3,
          chapterName: "लौहपुरुष, महापुरुष र असल मान्छे !  ",
          URL: "https://firebasestorage.googleapis.com/v0/b/visionventures-b8ed4.appspot.com/o/book-pdf%2Flauhapurush%2Flauhapurush-23-50.pdf?alt=media&token=051c2f4b-1c48-4a68-b215-439dd3135cb2",
        },
        {
          chapter: 4,
          chapterName: "हुने बिरुवा को 'खस्रो' पात ! ",
          URL: "https://firebasestorage.googleapis.com/v0/b/visionventures-b8ed4.appspot.com/o/book-pdf%2Flauhapurush%2Flauhapurush-51-70.pdf?alt=media&token=1239a300-99e8-4554-af5d-1bab3bc7b87e",
        },
        {
          chapter: 5,
          chapterName: "झ्याल्खाना कि साधना केन्द्र ?  ",
          URL: "https://firebasestorage.googleapis.com/v0/b/visionventures-b8ed4.appspot.com/o/book-pdf%2Flauhapurush%2Flauhapurush-71-104.pdf?alt=media&token=16cac130-9b00-451c-8271-3d361da44263",
        },
        {
          chapter: 6,
          chapterName: "गणेशमान्का चार माहान ",
          URL: "https://firebasestorage.googleapis.com/v0/b/visionventures-b8ed4.appspot.com/o/book-pdf%2Flauhapurush%2Flauhapurush-105-140.pdf?alt=media&token=5ff641e6-e328-46ae-a920-0f504aa248bb",
        },
        {
          chapter: 7,
          chapterName: "जनान्दोलन : २०४६  ",
          URL: "https://firebasestorage.googleapis.com/v0/b/visionventures-b8ed4.appspot.com/o/book-pdf%2Flauhapurush%2Flauhapurush-141-246.pdf?alt=media&token=059006c4-d36e-450e-b183-d69986850214",
        },
        {
          chapter: 8,
          chapterName: "प्रजातन्त्र को सम्वर्‍धन र बिकासको मार्गचित्र  ",
          URL: "https://firebasestorage.googleapis.com/v0/b/visionventures-b8ed4.appspot.com/o/book-pdf%2Flauhapurush%2Flauhapurush-247-276.pdf?alt=media&token=4db66a3d-6862-4d09-a423-79aead16c786",
        },
        {
          chapter: 9,
          chapterName: "जनजागरन अभियान  ",
          URL: "https://firebasestorage.googleapis.com/v0/b/visionventures-b8ed4.appspot.com/o/book-pdf%2Flauhapurush%2Flauhapurush-277-346.pdf?alt=media&token=4656d348-34c9-42e8-aa03-84b4ff644a24",
        },
        {
          chapter: 10,
          chapterName: "बिर्भोज्ञा बसुन्धारा  ",
          URL: "https://firebasestorage.googleapis.com/v0/b/visionventures-b8ed4.appspot.com/o/book-pdf%2Flauhapurush%2Flauhapurush-347-382.pdf?alt=media&token=b6dc53ab-5499-48fd-9f52-cc5acc771513",
        },
        {
          chapter: 11,
          chapterName: "अद्भुत मान्छे ",
          URL: "https://firebasestorage.googleapis.com/v0/b/visionventures-b8ed4.appspot.com/o/book-pdf%2Flauhapurush%2Flauhapurush-383-404.pdf?alt=media&token=71f897e8-e1a2-4578-839a-bcfefce667e6",
        },
        {
          chapter: 10,
          chapterName: "एसै पुस्तक्बाट",
          URL: "https://firebasestorage.googleapis.com/v0/b/visionventures-b8ed4.appspot.com/o/book-pdf%2Flauhapurush%2Flauhapurush-405-408.pdf?alt=media&token=d7350a80-4584-45ef-b801-3f2d209626ba",
        },
      ],
    },
  ];

  const [ShowSidebar, setShowSidebar] = useState(false);
  const [PDFURL, setPDFURL] = useState("");
  const params = useParams();
  let { bookID } = params;
  const bookIDInteger = +bookID;
  let filteredBook = BookData.filter((book) => book.BookID === bookIDInteger);
  // console.log("🤔 > Page > filteredBook:", filteredBook);

  useEffect(() => {
    // console.log(filteredBook);
  });

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
              {chapter.chapterName}
            </ListItem>
          );
        })}
      </Card>
      <ShowPDF URL={PDFURL} />
    </main>
  );
}
