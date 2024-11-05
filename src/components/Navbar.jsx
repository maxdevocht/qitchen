import { Menu } from "lucide-react";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import { Button } from "./ui/button";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="relative z-[999] mx-auto mt-5 flex w-full items-start justify-center px-[5%] md:mt-6 lg:mx-[5%] lg:w-auto lg:px-0">
      <div className="flex min-h-16 w-full items-center justify-between gap-4 px-5 md:min-h-18 md:px-8 lg:w-auto">
        <NavLink to={"/"}>
          <img src="./Logo.svg" alt="Qitchen logo" />
        </NavLink>
        <div className="flex items-center gap-2">
          <Button className="text-xs font-sans tracking-widest p-2">
            BOOK A TABLE
          </Button>

          <Menu size={32} strokeWidth={1} className="cursor-pointer" />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
