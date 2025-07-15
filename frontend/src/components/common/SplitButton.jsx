
/**
 * @file SplitButton.jsx
 * @author Brendan Dileo, July 2025
 *
 * A reusable split button component that combines two actions into one 
 */

import Button from "./Button";
import LinkButton from "./LinkButton";
import { Sparkles, BookOpen } from "lucide-react";


const SplitButton = ({ onReadStory }) => (
  
  <div className="flex rounded-xl shadow-lg overflow-hidden">

    <Button
      onClick={onReadStory}
      className="flex items-center justify-center gap-2 px-6 py-3 sm:px-8 sm:py-4 bg-gradient-to-r from-green-500 to-emerald-600 text-white font-semibold text-base sm:text-lg rounded-l-xl hover:from-green-600 hover:to-emerald-700 transition-all duration-300 border-0 shadow-lg hover:shadow-xl"
      style={{ borderTopRightRadius: 0, borderBottomRightRadius: 0 }}
    >
      <BookOpen size={18} className="sm:w-5 sm:h-5" />
      <span>My Story</span>
    </Button>

    <LinkButton
      to="/highlights"
      className="flex items-center justify-center gap-2 px-6 py-3 sm:px-8 sm:py-4 bg-slate-800 text-white font-semibold text-base sm:text-lg rounded-r-xl border-l border-green-400/40 hover:bg-slate-700 transition-all duration-300 shadow-lg hover:shadow-xl"
      style={{ borderTopLeftRadius: 0, borderBottomLeftRadius: 0 }}
    >
      <Sparkles size={18} className="sm:w-5 sm:h-5" />
      <span>Highlights</span>
    </LinkButton>
    
  </div>
);

export default SplitButton; 