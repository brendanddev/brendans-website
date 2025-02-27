

// NavBar.jsx
// Brendan Dileo

import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="w-full bg-black border-b border-gray-700 p-4 font-mono text-green-500 flex items-center justify-between">
      <div>
        <span className="font-semibold text-xl tracking-tight text-green-500">
          Brendan Dileo
        </span>
      </div>

      <ul className="flex gap-5 text-lg">
        <li className="hover:text-green-500">
          <span className="text-green-500">[</span>
          <Link to="/" className="text-green-500 hover:text-green-500">home</Link>
          <span className="text-green-500">]</span>
        </li>
        <li className="hover:text-green-500">
          <span className="text-green-500">[</span>
          <Link to="/about" className="text-green-500 hover:text-green-500">about</Link>
          <span className="text-green-500">]</span>
        </li>
        <li className="hover:text-green-500">
          <span className="text-green-500">[</span>
          <Link to="/projects" className="text-green-500 hover:text-green-500">projects</Link>
          <span className="text-green-500">]</span>
        </li>
        <li className="hover:text-green-500">
          <span className="text-green-500">[</span>
          <Link to="/contact" className="text-green-500 hover:text-green-500">contact</Link>
          <span className="text-green-500">]</span>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
