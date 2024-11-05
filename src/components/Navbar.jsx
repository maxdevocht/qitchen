import { motion } from "framer-motion";
import { useState } from "react";
import { NavLink } from "react-router-dom";

const topLineVariants = {
  open: {
    translateY: 8,
    transition: { delay: 0.1 },
  },
  rotatePhase: {
    rotate: -45,
    transition: { delay: 0.2 },
  },
  closed: {
    translateY: 0,
    rotate: 0,
    transition: { duration: 0.2 },
  },
};

const middleLineVariants = {
  open: {
    width: 0,
    transition: { duration: 0.1 },
  },
  closed: {
    width: "1.5rem",
    transition: { delay: 0.3, duration: 0.2 },
  },
};

const bottomLineVariants = {
  open: {
    translateY: -8,
    transition: { delay: 0.1 },
  },
  rotatePhase: {
    rotate: 45,
    transition: { delay: 0.2 },
  },
  closed: {
    translateY: 0,
    rotate: 0,
    transition: { duration: 0.2 },
  },
};

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="absolute top-12 left-12 border border-border-default rounded-lg p-2">
      <div className="flex items-center justify-between">
        <NavLink to={"/"} className="flex items-center">
          <img src="./Logo.svg" alt="Qitchen logo" />
        </NavLink>

        <div className="flex mr-4 ml-16">
          <ul className="flex items-center gap-4">
            <NavLink className="font-sans font-light tracking-wider">
              MENU
            </NavLink>
            <NavLink className="font-sans font-light tracking-wider">
              ABOUT
            </NavLink>
          </ul>
        </div>

        <div className="flex items-center gap-4">
          <button className="font-sans font-light tracking-wider py-3.5 px-4 border border-border-default rounded-lg bg-background-muted hover:border-border-default-hover hover:bg-background-muted-hover transition-all duration-100">
            BOOK A TABLE
          </button>

          <button
            className={`hamburger hamburger--minus flex items-center py-3.5 px-4 border border-border-default rounded-lg bg-background-muted hover:border-border-default-hover hover:bg-background-muted-hover transition-all duration-100 ${
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
