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
import Image from "next/image";

const Navbar = () => {
  return (
    <nav className="flex justify-between w-screen h-16 bg-red-50">
      <div className="relative w-16 h-16">
        <Image src={"/logo.svg"} fill alt="logo" />
      </div>
      <ul className="flex gap-4 h-full items-center">
        <li>Home </li>
        <li>
          {" "}
          <DropdownMenu>
            <DropdownMenuTrigger>Books</DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuLabel>My Books</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Iron </DropdownMenuItem>
              <DropdownMenuItem>Billing</DropdownMenuItem>

              <DropdownMenuSub>
                <DropdownMenuSubTrigger>
                  {/* <UserPlus className="mr-2 h-4 w-4" /> */}
                  <span>Invite users</span>
                </DropdownMenuSubTrigger>
                <DropdownMenuPortal>
                  <DropdownMenuSubContent>
                    <DropdownMenuItem>
                      {/* <Mail className="mr-2 h-4 w-4" /> */}
                      <span>Email</span>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      {/* <MessageSquare className="mr-2 h-4 w-4" /> */}
                      <span>Message</span>
                    </DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem>
                      {/* <PlusCircle className="mr-2 h-4 w-4" /> */}
                      <span>More...</span>
                    </DropdownMenuItem>
                  </DropdownMenuSubContent>
                </DropdownMenuPortal>
              </DropdownMenuSub>
            </DropdownMenuContent>
          </DropdownMenu>
        </li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
      </ul>
    </nav>
  );
};

export default Navbar;
