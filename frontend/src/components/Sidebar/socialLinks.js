
/**
 * @file socialLinks.js
 * @author Brendan Dileo, June 2025
 * 
 * Social media and contact links data for the Sidebar component.
 */

import { FaGithub, FaDiscord, FaLinkedin, FaStackOverflow, FaGitlab } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import { CgMail } from "react-icons/cg";

export const socialLinks = [
    {
        name: "GitHub",
        icon: FaGithub,
        href: "https://github.com/brendanddev",
        color: "hover:text-white",
        bgColor: "hover:bg-gray-800"
    },
    {
        name: "LinkedIn",
        icon: FaLinkedin,
        href: "https://www.linkedin.com/in/brendan-dileo-bb39b4328/",
        color: "hover:text-[#0077b5]",
        bgColor: "hover:bg-blue-900/20"
    },
    {
        name: "Discord",
        icon: FaDiscord,
        href: "",
        color: "hover:text-[#7289da]",
        bgColor: "hover:bg-indigo-900/20"
    },
    {
        name: "Stack Overflow",
        icon: FaStackOverflow,
        href: "https://stackoverflow.com/users/24895390/brendan-d",
        color: "hover:text-[#f48024]",
        bgColor: "hover:bg-orange-900/20"
    },
    {
        name: "GitLab",
        icon: FaGitlab,
        href: "https://gitlab.com/brendandileo",
        color: "hover:text-[#fc6d26]",
        bgColor: "hover:bg-red-900/20"
    },
    {
        name: "LeetCode",
        icon: SiLeetcode,
        href: "https://leetcode.com/u/devbrendandileo/",
        color: "hover:text-[#f8a200]",
        bgColor: "hover:bg-yellow-900/20"
    },
    {
        name: "Email",
        icon: CgMail,
        href: "mailto:brendan.dileo@mohawkcollege.ca",
        color: "hover:text-[#d44638]",
        bgColor: "hover:bg-red-900/20"
    }
];