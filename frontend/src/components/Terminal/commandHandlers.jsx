
/**
 * @file commandHandlers.js
 * @author Brendan Dileo, July 2025
 * 
 * Contains the handler logic for processing terminal commands and generating responses
 */


import CommandOutput from "./CommandOutput";

export const handleCommand = (command, setOutput) => {
    const lower = command.toLowerCase();
    
    // Main switch that controls the command handling logic
    switch (lower) {
        
      case "help":
          return (
              <div className="text-white">
                <p className="mb-2">Here is a list of supported commands:</p>
                <ul className="list-inside list-disc pl-2">
                  <li><strong className="text-green-400">help</strong> - Ask for help</li>
                  <li><strong className="text-green-400">home</strong> - Are you home?</li>
                  <li><strong className="text-green-400">about</strong> - About the creator</li>
                  <li><strong className="text-green-400">projects</strong> - About the creators projects</li>
                  <li><strong className="text-green-400">contact</strong> - Can you contact the creator?</li>
                  <li><strong className="text-green-400">clear</strong> - Clear the terminal</li>
                </ul>
              </div>
            );

      case "home":
          return <CommandOutput text="You are Home!" />;
      case "about":
          return <CommandOutput text="Hey! My name is Brendan..." />;
      case "projects":
          return <CommandOutput text="I have worked on various types of projects..." />;
      case "contact":
          return <CommandOutput text="Email: brendan.dileo@mohawkcollege.ca" />;
      case "greet":
          return <CommandOutput text="Hello, welcome to Brendans Portfolio Website!" />;
      default:
          return <CommandOutput text="Uhhh... I don't know how to respond to that. Try 'help'." />;
    }
};
