
/**
 * @file NavBar.jsx
 * @author Brendan Dileo
 * 
 * The NavBar component for my portfolio-website
*/

import { Link } from "react-router-dom";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Routes
  const links = [
    { to: "/", label: "home" },
    { to: "/about", label: "about" },
    { to: "/projects", label: "projects" },
    { to: "/contact", label: "contact" },
    { to: "/me", label: "me" },
  ];

  // Render react router links
  const renderLinks = (closeMenu = false) =>
    links.map(({ to, label }) => (
      <li key={label}>
        <span>[</span>
        <Link
          to={to}
          onClick={closeMenu ? () => setIsOpen(false) : undefined}
          className="hover:text-[#00ff00] transition"
        >
          {label}
        </Link>
        <span>]</span>
      </li>
    ));


  return (
    <nav className="w-full bg-black border-b border-gray-700 p-4 font-mono text-[#00ff00] flex items-center justify-between z-40 relative">
      <div>
        <span className="font-semibold text-xl tracking-tight text-[#00ff00]">
          Brendan Dileo
        </span>

        <button
          className="md:hidden text-[#00ff00]"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <ul className="flex gap-5 text-lg">
        <li className="hover:text-[#00ff00]">
          <span className="text-[#00ff00]">[</span>
          <Link to="/" className="text-[#00ff00] hover:text-[#00ff00]">home</Link>
          <span className="text-[#00ff00]">]</span>
        </li>
        <li className="hover:text-[#00ff00]">
          <span className="text-[#00ff00]">[</span>
          <Link to="/about" className="text-[#00ff00] hover:text-[#00ff00]">about</Link>
          <span className="text-[#00ff00]">]</span>
        </li>
        <li className="hover:text-[#00ff00]">
          <span className="text-[#00ff00]">[</span>
          <Link to="/projects" className="text-[#00ff00] hover:text-[#00ff00]">projects</Link>
          <span className="text-[#00ff00]">]</span>
        </li>
        <li className="hover:text-[#00ff00]">
          <span className="text-[#00ff00]">[</span>
          <Link to="/contact" className="text-[#00ff00] hover:text-[#00ff00]">contact</Link>
          <span className="text-[#00ff00]">]</span>
        </li>

        <li className="hover:text-[#00ff00]">
          <span className="text-[#00ff00]">[</span>
          <Link to="/me" className="text-[#00ff00] hover:text-[#00ff00]">me</Link>
          <span className="text-[#00ff00]">]</span>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;