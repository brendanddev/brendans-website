
/**
 * @file footerIcons.js
 * @author Brendan Dileo, September 2025
 * 
 * Defines and exports social icon components and colors for use in the footer.
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

export const footerIconColors = {
    GitHub: '#181717',
    LinkedIn: '#0A66C2',
    LeetCode: '#FFA116',
    StackOverflow: '#F58025',
    Discord: '#5865F2',
    Email: '#D44638'
}