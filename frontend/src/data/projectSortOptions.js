
/**
 * @file projectSortOptions.js
 * @author Brendan Dileo, July 2025
 * 
 * Defines the different sorting options available for the project cards
 */


import { FaSortAlphaUp, FaSortAlphaDown, FaClock, FaCalendarAlt } from "react-icons/fa";

const sortOptions = [
    { value: "newest", label: "Newest First", icon: FaClock },
    { value: "oldest", label: "Oldest First", icon: FaCalendarAlt },
    { value: "name-asc", label: "A - Z", icon: FaSortAlphaDown },
    { value: "name-desc", label: "Z - A", icon: FaSortAlphaUp },
];

export default sortOptions;