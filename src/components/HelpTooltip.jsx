// Tooltip.jsx
// Brendan Dileo

import { Tooltip, Typography } from "@material-tailwind/react";

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

export default HelpTooltip;
