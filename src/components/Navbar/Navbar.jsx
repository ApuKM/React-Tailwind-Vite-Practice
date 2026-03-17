import React, { useState } from "react";
import Link from "./Link";
import { Menu, X } from "lucide-react";

const navLinks = [
  {
    id: 1,
    name: "Home",
    path: "/",
  },
  {
    id: 2,
    name: "About",
    path: "/about",
  },
  {
    id: 3,
    name: "Services",
    path: "/services",
  },

  {
    id: 4,
    name: "Contact",
    path: "/contact",
  },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const links = navLinks.map((link) => <Link key={link.id} link={link} />);
  return (
    <nav className="container mx-auto py-5">
       <ul
        className={`md:hidden absolute left-2 top-14 bg-transparent  pr-8 py-4 shadow-md space-y-2 ${
          open ? "block" : "hidden"
        }`}
      >
        {links}
      </ul>
      <div className="flex justify-between items-center relative">
        <div className="flex items-center gap-10">
          {open ? (
            <X onClick={() => setOpen(!open)} className="md:hidden block" />
          ) : (
            <Menu onClick={() => setOpen(!open)} className="md:hidden block" />
          )}

          <img src="/src/assets/hero.png" alt="" className="w-8" />
        </div>
        <ul className="md:flex gap-4 hidden">{links}</ul>
        <button>Sign In</button>
      </div>
    </nav>
  );
};

export default Navbar;
