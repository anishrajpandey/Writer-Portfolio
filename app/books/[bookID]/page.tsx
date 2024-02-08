"use client";
import React, { useState } from "react";
import {
  Card,
  Typography,
  List,
  ListItem,
  ListItemPrefix,
  ListItemSuffix,
  Chip,
} from "@material-tailwind/react";
import BookIcon from "@/app/_globalComponents/icons/BookIcon";
import ArrowIcon from "@/app/_globalComponents/icons/ArrowIcon";
import ShowPDF from "./_components/ShowPDF";
import { useParams } from "next/navigation";

export default function Page() {
  const [ShowSidebar, setShowSidebar] = useState(false);

  const params = useParams();
  let { bookID } = params;
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
          <Typography placeholder={"Chapters"} variant="h5" color="blue-gray">
            Chapters
          </Typography>
        </div>

        <ListItem placeholder={""}>
          <ListItemPrefix placeholder={""}>
            <BookIcon />{" "}
          </ListItemPrefix>
          Dashboard
        </ListItem>

        <ListItem placeholder={""}>
          <ListItemPrefix placeholder={""}>
            <BookIcon />{" "}
          </ListItemPrefix>
          Yet another chapter to lifee{" "}
        </ListItem>
        <ListItem placeholder={""}>
          <ListItemPrefix placeholder={""}>
            <BookIcon />{" "}
          </ListItemPrefix>
          Yet another chapter to lifee{" "}
        </ListItem>
        <ListItem placeholder={""}>
          <ListItemPrefix placeholder={""}>
            <BookIcon />{" "}
          </ListItemPrefix>
          Yet another chapter to lifee{" "}
        </ListItem>
        <ListItem placeholder={""}>
          <ListItemPrefix placeholder={""}>
            <BookIcon />{" "}
          </ListItemPrefix>
          Yet another chapter to lifee{" "}
        </ListItem>
      </Card>
      <ShowPDF />
    </main>
  );
}

function Sidebar() {
  return <></>;
}
