"use client";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { cn } from "@/lib/utils";
import BookData from "@/public/data/BookData";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { cameraLogDepth } from "three/examples/jsm/nodes/Nodes.js";

const Navbar = () => {
  const [showNavbar, setShowNavbar] = useState(false);
  return (
    <nav
      className={
        "flex justify-between sm:justify-normal gap-4 sm:gap-56 w-screen h-16 items-center fixed z-50  top-0  bg-white"
      }
    >
      <div className="logoContainer flex items-center p-2">
        <div className="relative w-12 h-12 pb-4">
          <Image src={"/assets/files/logo.svg"} fill alt="logo" />
        </div>
        <h2 className="font-bold ">Ghanendra Purush Dhakal</h2>
      </div>

      <div
        className=" sm:hidden self-end h-full flex items-center  mr-4 z-50"
        onClick={() => {
          setShowNavbar(!showNavbar);
        }}
      >
        <Image
          src={"/assets/files/hamMenu.png"}
          width={40}
          height={40}
          alt="ham icon"
        />
      </div>
      <ul
        className={cn(
          "flex flex-col text-lg font-semibold fixed -left-full px-4 pt-8 sm:pt-0 sm:px-12 top-0  sm:w-fit sm:inset-0 backdrop-blur-xl z-20 w-screen sm:bg-transparent sm:relative sm:flex-row gap-4 h-full sm:items-center transition duration-100 min-w-fit mobileNav",
          {
            "left-0": showNavbar,
          }
        )}
      >
        <li className="hover:text-orange-secondary transition cursor-pointer">
          <Link
            href={"/"}
            onClick={() => {
              setShowNavbar(!showNavbar);
            }}
          >
            {" "}
            Home
          </Link>{" "}
        </li>
        <li className="hover:text-orange-secondary transition cursor-pointer">
          {" "}
          <DropdownMenu>
            <DropdownMenuTrigger>Books</DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuLabel> Books</DropdownMenuLabel>

              <DropdownMenuSeparator />
              {/* {console.log(BookData)} */}

              {BookData.map((book) => (
                <DropdownMenuSub key={book.BookID}>
                  <DropdownMenuSubTrigger>
                    <span>{book.BookName}</span>
                  </DropdownMenuSubTrigger>
                  <DropdownMenuPortal>
                    <DropdownMenuSubContent>
                      {book.Chapters.map(
                        ({ chapter, URL, chapterName }, index) => {
                          return (
                            <Link
                              onClick={() => {
                                setShowNavbar(!showNavbar);
                              }}
                              href={`/books/${book.BookID}?chap=${index + 1}`}
                              key={chapter}
                            >
                              <DropdownMenuItem>
                                <span>{chapterName}</span>
                              </DropdownMenuItem>
                            </Link>
                          );
                        }
                      )}
                    </DropdownMenuSubContent>
                  </DropdownMenuPortal>
                </DropdownMenuSub>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
        </li>
        <li className="hover:text-orange-secondary transition cursor-pointer">
          <DropdownMenu>
            <DropdownMenuTrigger>Journalism</DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuLabel> Journalism</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <Link
                href={"/journalism/articles"}
                onClick={() => {
                  setShowNavbar(!showNavbar);
                }}
              >
                <DropdownMenuItem>Articles</DropdownMenuItem>
              </Link>
              <Link
                href={"/journalism/interviews"}
                onClick={() => {
                  setShowNavbar(!showNavbar);
                }}
              >
                <DropdownMenuItem>Interviews</DropdownMenuItem>
              </Link>
            </DropdownMenuContent>
          </DropdownMenu>
        </li>
        <li className="hover:text-orange-secondary transition cursor-pointer">
          {" "}
          <DropdownMenu>
            <DropdownMenuTrigger>Activities</DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuLabel> Activities</DropdownMenuLabel>
              <DropdownMenuSeparator />

              <DropdownMenuSub>
                <DropdownMenuSubTrigger>
                  <span> Political</span>
                </DropdownMenuSubTrigger>
                <DropdownMenuPortal>
                  <DropdownMenuSubContent>
                    <DropdownMenuItem>
                      <span>Political Actiivty 1</span>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <span>Political Actiivty 2</span>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <span>Political Actiivty 2</span>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <span>Political Actiivty 4</span>
                    </DropdownMenuItem>
                  </DropdownMenuSubContent>
                </DropdownMenuPortal>
              </DropdownMenuSub>

              <DropdownMenuSub>
                <DropdownMenuSubTrigger>
                  <span> Spiritual</span>
                </DropdownMenuSubTrigger>
                <DropdownMenuPortal>
                  <DropdownMenuSubContent>
                    <DropdownMenuItem>
                      <span>Spiritual Actiivty 1</span>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <span>Spiritual Actiivty 2</span>
                    </DropdownMenuItem>
                  </DropdownMenuSubContent>
                </DropdownMenuPortal>
              </DropdownMenuSub>

              <DropdownMenuSub>
                <DropdownMenuSubTrigger>
                  <span> Education and Training</span>
                </DropdownMenuSubTrigger>
                <DropdownMenuPortal>
                  <DropdownMenuSubContent>
                    <DropdownMenuItem>
                      <span>Education and Training Actiivty 1</span>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <span>Education and Training Actiivty 2</span>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <span>Education and Training Actiivty 2</span>
                    </DropdownMenuItem>
                  </DropdownMenuSubContent>
                </DropdownMenuPortal>
              </DropdownMenuSub>
            </DropdownMenuContent>
          </DropdownMenu>
        </li>
        <li className="hover:text-orange-secondary transition cursor-pointer">
          Blogs
        </li>
        <li className="hover:text-orange-secondary transition cursor-pointer">
          Media
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
