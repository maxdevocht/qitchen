import { useState } from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="absolute top-12 left-12 border border-border-default rounded-lg p-2">
      <div className="flex items-center justify-between">
        <NavLink to={"/"} className="flex items-center">
          <img
            src="./Logo.svg"
            alt="Qitchen logo"
            className="pl-2"
            height={120}
            width={120}
          />
        </NavLink>

        <div className="flex mr-4 ml-12">
          <ul className="flex items-center gap-4">
            <NavLink className="font-sans font-light tracking-wider text-xs">
              MENU
            </NavLink>
            <NavLink className="font-sans font-light tracking-wider text-xs">
              ABOUT
            </NavLink>
          </ul>
        </div>

        <div className="flex items-center gap-4">
          <button className="font-sans font-light tracking-wider text-xs py-3.5 px-4 border border-border-default rounded-lg bg-background-muted hover:border-border-default-hover hover:bg-background-muted-hover transition-all duration-100">
            BOOK A TABLE
          </button>

          <button
            className={`hamburger hamburger--minus flex items-center py-2.5 px-4 border border-border-default rounded-lg bg-background-muted hover:border-border-default-hover hover:bg-background-muted-hover transition-all duration-100 ${
              isMenuOpen ? "is-active" : ""
            }`}
            type="button"
            onClick={() => setIsMenuOpen((prev) => !prev)}
          >
            <span className="hamburger-box">
              <span className="hamburger-inner"></span>
            </span>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
