

// NavBar.jsx
// Brendan Dileo

import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="w-full bg-black border-b border-gray-700 p-4 font-mono text-[#00ff00] flex items-center justify-between z-40 relative">
      <div>
        <span className="font-semibold text-xl tracking-tight text-[#00ff00]">
          Brendan Dileo
        </span>
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
      </ul>
    </nav>
  );
};

export default NavBar;