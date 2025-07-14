
/**
 * @file aboutStoryContent.js
 * @author Brendan Dileo, July 2025
 * 
 * Defines the text content to be displayed inside of the about story modal
 */

// Top section content for the about story
export const intro = {
  role: "Software Development Student",
  description: `Hi, I'm Brendan Dileo, a passionate software development student with a drive to create meaningful solutions through code. I believe in the power of technology to solve real-world problems and am committed to continuous learning and growth in this ever-evolving field.`,
};

// The actual content of the about story modal
// split into sections
export const journeySections = [
  {
    icon: "TrendingUp",
    title: "Academic Excellence",
    color: "green",
    content: `Maintaining a 93.5 GPA while consistently achieving top marks in programming courses. My dedication to learning has earned me a place on the Dean's Honors List every semester, demonstrating my commitment to academic excellence and continuous improvement.`,
  },
  {
    icon: "Lightbulb",
    title: "Technical Innovation",
    color: "blue",
    content: `From Java to React, I've developed a diverse skill set that spans multiple programming paradigms. My projects reflect a deep understanding of both frontend and backend development, with a focus on creating intuitive user experiences and robust system architectures.`,
  },
  {
    icon: "Users",
    title: "Collaborative Growth",
    color: "purple",
    content: `I thrive in collaborative environments where I can contribute to meaningful projects while learning from experienced developers. My goal is to join a team where I can apply my technical skills, embrace new challenges, and grow as a full-stack developer while making a positive impact on users' lives.`,
  },
];

// Bottom call to action section content
export const callToAction = `Ready to bring my passion for development to your team. Let's build something amazing together.`;
