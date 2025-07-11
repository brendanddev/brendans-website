
/**
 * @file IntroActions.jsx
 * @author Brendan Dileo
 * 
 * Component for the intro action buttons on the About page
*/

import Button from "../common/Button";
import { Download } from "lucide-react";
import { motion } from "framer-motion";


const IntroActions = ({ onReadStory }) => {
  return (
    <motion.div 
      className="flex flex-col sm:flex-row justify-center gap-8 mt-6 mb-6"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
    >
      {/* My Story button */}
      <Button
        onClick={onReadStory}
        className="px-8 py-3 text-lg font-semibold"
      >
        Read My Story
      </Button>

      {/* Download Resume button */}
      <Button
        as="a"
        href="/BrendanDileo_Resume.pdf"
        download="BrendanDileo_Resume.pdf"
        className="px-8 py-3 text-lg font-semibold flex items-center justify-center gap-2"
      >
        Download Resume
        <Download size={20} />
      </Button>
    </motion.div>
  );
};

export default IntroActions; 