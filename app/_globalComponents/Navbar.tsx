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
import Image from "next/image";
import { useState } from "react";

const Navbar = () => {
  const [showNavbar, setShowNavbar] = useState(false);
  return (
    <nav
      className={
        "flex justify-between sm:justify-normal gap-4 sm:gap-56 w-screen h-16 fixed z-50  top-0"
      }
    >
      <div className="logoContainer flex items-center p-2">
        <div className="relative w-12 h-12 pb-4">
          <Image src={"/logo.svg"} fill alt="logo" />
        </div>
        <h2 className="font-bold ">Ghanendra Purush Dhakal</h2>
      </div>

      <div
        className=" sm:hidden self-end h-full flex items-center  mr-4 z-50"
        onClick={() => {
          setShowNavbar(!showNavbar);
        }}
      >
        <Image src={"/hamMenu.png"} width={40} height={40} alt="ham icon" />
      </div>
      <ul
        className={cn(
          "flex flex-col text-lg font-semibold fixed -left-full px-4 pt-8 sm:pt-0 sm:px-12 top-0  sm:w-fit sm:inset-0 bg-blue-primary z-20 w-screen sm:bg-transparent sm:relative sm:flex-row gap-4 h-full sm:items-center transition duration-100 min-w-fit mobileNav",
          {
            "left-0": showNavbar,
          }
        )}
      >
        <li className="hover:text-orange-secondary transition cursor-pointer">
          Home{" "}
        </li>
        <li className="hover:text-orange-secondary transition cursor-pointer">
          {" "}
          <DropdownMenu>
            <DropdownMenuTrigger>Books</DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuLabel> Books</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuSub>
                <DropdownMenuSubTrigger>
                  <span>Jana Andolan</span>
                </DropdownMenuSubTrigger>
                <DropdownMenuPortal>
                  <DropdownMenuSubContent>
                    <DropdownMenuItem>
                      <span>Email</span>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <span>Message</span>
                    </DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem>
                      <span>More...</span>
                    </DropdownMenuItem>
                  </DropdownMenuSubContent>
                </DropdownMenuPortal>
              </DropdownMenuSub>
              <DropdownMenuSub>
                <DropdownMenuSubTrigger>
                  <span>Ironman</span>
                </DropdownMenuSubTrigger>
                <DropdownMenuPortal>
                  <DropdownMenuSubContent>
                    <DropdownMenuItem>
                      <span>Email</span>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <span>Message</span>
                    </DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem>
                      <span>More...</span>
                    </DropdownMenuItem>
                  </DropdownMenuSubContent>
                </DropdownMenuPortal>
              </DropdownMenuSub>
              <DropdownMenuSub>
                <DropdownMenuSubTrigger>
                  <span>Lauhapurush</span>
                </DropdownMenuSubTrigger>
                <DropdownMenuPortal>
                  <DropdownMenuSubContent>
                    <DropdownMenuItem>
                      <span>Email</span>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <span>Message</span>
                    </DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem>
                      <span>More...</span>
                    </DropdownMenuItem>
                  </DropdownMenuSubContent>
                </DropdownMenuPortal>
              </DropdownMenuSub>
              <DropdownMenuSub>
                <DropdownMenuSubTrigger>
                  <span>
                    Ganeshman Singh <br /> in the Eyes of Legends
                  </span>
                </DropdownMenuSubTrigger>
                <DropdownMenuPortal>
                  <DropdownMenuSubContent>
                    <DropdownMenuItem>
                      <span>Email</span>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <span>Message</span>
                    </DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem>
                      <span>More...</span>
                    </DropdownMenuItem>
                  </DropdownMenuSubContent>
                </DropdownMenuPortal>
              </DropdownMenuSub>
            </DropdownMenuContent>
          </DropdownMenu>
        </li>
        <li className="hover:text-orange-secondary transition cursor-pointer">
          <DropdownMenu>
            <DropdownMenuTrigger>Journalism</DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuLabel> Journalism</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem> Newspaper</DropdownMenuItem>
              <DropdownMenuItem> Articles</DropdownMenuItem>
              <DropdownMenuItem> Columns</DropdownMenuItem>
              <DropdownMenuItem> Interviews</DropdownMenuItem>
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
              <DropdownMenuItem> Ganeshman Singh Foundation</DropdownMenuItem>
              <DropdownMenuItem> Bankali Garden</DropdownMenuItem>
              <DropdownMenuItem> Social Service</DropdownMenuItem>
              <DropdownMenuItem> Trainings</DropdownMenuItem>
              <DropdownMenuItem> Spirituality</DropdownMenuItem>
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
