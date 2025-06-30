
/**
 * @file NavLogo.jsx
 * @author Brendan Dileo, June 2025
 * 
 * 
 */

import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const NavLogo = () => (
    // Adds effect to the logo in the navbar
    <motion.div
        className="font-semibold text-xl tracking-tight text-[#00ff00]"
        whileHover={{ scale: 1.05 }}
        transition={{ type: "spring", stiffness: 400, damping: 10 }}
    >
    {/* Link to home page */}
    <Link to="/" className="focus:outline-none focus:ring-2 focus:ring-[#00ff00]/50 rounded">
      Brendan Dileo
    </Link>
  </motion.div>
);

export default NavLogo;