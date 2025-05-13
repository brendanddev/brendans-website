
/**
 * @file Tooltip.jsx
 * @author Brendan Dileo 
 * 
 * The tooltip component for the home page.
 * This component uses the Material Tailwind React library to display a tooltip,
 * that displays a text box above once it is hovered on.
*/


import { Tooltip, Typography } from "@material-tailwind/react";

/**
 * HelpTooltip Functional Component
 * 
 * This component uses the base Tooltip component from the Material Tailwind React library
 * and customizes it by applying tailwind classes and using the typography component. 
 * 
 * @returns {JSX.Element} The JSX that forms the tooltip component.
 */
const HelpTooltip = () => {
  return (
    <Tooltip
      content={
        <div className="w-80">
          <Typography color="white" className="font-bold text-center">
            Need Help?
          </Typography>
          <Typography variant="medium" color="white" className="font-normal opacity-80">
            Interact with the terminal by typing a command followed by pressing enter. (i.e., 'greet')
          </Typography>
        </div>
      }
      placement="top"
    >
      {/* Retreives the icon for the tooltip */}
      <div className="fixed bottom-4 right-4 flex items-center justify-center w-12 h-12 rounded-full bg-blue-500 text-white cursor-pointer shadow-md hover:bg-blue-600">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
          className="h-6 w-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 9v2m0 4h.01M12 2a10 10 0 1010 10A10 10 0 0012 2z"
          />
        </svg>
      </div>
    </Tooltip>
  );
};

// Exports the HelpTooltip component to be used in other files
export default HelpTooltip;
