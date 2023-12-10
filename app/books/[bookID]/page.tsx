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
import Chapter from "./_components/Chapter";

export default function page() {
  return (
    <main className="flex  bg-blue-gray-500 w-screen h-screen overflow-y-scroll">
      <Sidebar />
      <Chapter />
    </main>
  );
}

function Sidebar() {
  const [ShowSidebar, setShowSidebar] = useState(false);

  return (
    <>
      <div
        className="bg-white flex-1 rounded-md p-4 md:hidden absolute z-10 flex gap-2 justify-center items-center cursor-pointer "
        onClick={() => setShowSidebar(!ShowSidebar)}
      >
        <h2 className="text-lg font-semibold">Chapters</h2>
        <span className="text-3xl w-fit rounded-[50%] p-2 bg-orange-primary text-white ">
          <ArrowIcon />
        </span>
      </div>
      <Card
        className={`${
          ShowSidebar ? "block" : "hidden"
        } md:block max-h-[calc(100vh-2rem)]  text-white  w-full max-w-[20rem] p-4 shadow-xl shadow-blue-gray-900/5 overflow-y-scroll`}
      >
        <div className="mb-2 p-4 text-white">
          <Typography variant="h5" color="blue-gray">
            Chapters
          </Typography>
        </div>
        <List>
          <ListItem>
            <ListItemPrefix>
              <BookIcon />{" "}
            </ListItemPrefix>
            Dashboard
          </ListItem>
          <ListItem>
            <ListItemPrefix>
              <BookIcon />{" "}
            </ListItemPrefix>
            कमाि पकम वा पकम बाव बपव{" "}
          </ListItem>

          <ListItem>
            <ListItemPrefix>
              <BookIcon />{" "}
            </ListItemPrefix>
            कमाि पकम वा पकम बाव बपव{" "}
          </ListItem>

          <ListItem>
            <ListItemPrefix>
              <BookIcon />{" "}
            </ListItemPrefix>
            कमाि पकम वा पकम बाव बपव{" "}
          </ListItem>

          <ListItem>
            <ListItemPrefix>
              <BookIcon />{" "}
            </ListItemPrefix>
            कमाि पकम वा पकम बाव बपव{" "}
          </ListItem>

          <ListItem>
            <ListItemPrefix>
              <BookIcon />{" "}
            </ListItemPrefix>
            कमाि पकम वा पकम बाव बपव{" "}
          </ListItem>

          <ListItem>
            <ListItemPrefix>
              <BookIcon />{" "}
            </ListItemPrefix>
            कमाि पकम वा पकम बाव बपव{" "}
          </ListItem>

          <ListItem>
            <ListItemPrefix>
              <BookIcon />{" "}
            </ListItemPrefix>
            कमाि पकम वा पकम बाव बपव{" "}
          </ListItem>

          <ListItem>
            <ListItemPrefix>
              <BookIcon />{" "}
            </ListItemPrefix>
            कमाि पकम वा पकम बाव बपव{" "}
          </ListItem>

          <ListItem>
            <ListItemPrefix>
              <BookIcon />{" "}
            </ListItemPrefix>
            कमाि पकम वा पकम बाव बपव{" "}
          </ListItem>

          <ListItem>
            <ListItemPrefix>
              <BookIcon />{" "}
            </ListItemPrefix>
            कमाि पकम वा पकम बाव बपव{" "}
          </ListItem>

          <ListItem>
            <ListItemPrefix>
              <BookIcon />{" "}
            </ListItemPrefix>
            कमाि पकम वा पकम बाव बपव{" "}
          </ListItem>
        </List>
      </Card>
    </>
  );
}
