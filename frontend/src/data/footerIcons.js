
/**
 * @file footerIcons.js
 * @author Brendan Dileo, September 2025
 * 
 * Defines and exports social icon components for use in the footer.
 */


import { FaGithub, FaLinkedin, FaStackOverflow, FaDiscord, FaEnvelope } from 'react-icons/fa';
import { SiLeetcode } from 'react-icons/si';

export const footerIconsByName = {
    GitHub: FaGithub,
    LinkedIn: FaLinkedin,
    LeetCode: SiLeetcode,
    StackOverflow: FaStackOverflow,
    Discord: FaDiscord,
    Email: FaEnvelope
};
