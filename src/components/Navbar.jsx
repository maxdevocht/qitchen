import { Menu } from "lucide-react";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import { Button } from "./ui/button";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="flex items-center m-auto w-full">
      <div className="flex items-center gap-3">
        <NavLink>
          <img src="./Logo.svg" alt="Qitchen Logo" className="w-24 h-24 " />
        </NavLink>
        <div>
          <Button className="font-sans tracking-widest text-xs">
            BOOK A TABLE
          </Button>
        </div>
        <div>
          <Menu size={32} strokeWidth={1} />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
