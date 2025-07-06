
/**
 * @file sortLabels.js
 * @author Brendan Dileo, July 2025
 * 
 * Defines a utility function for sorting labels based on a specified criteria
 */

const sortLabels = {
    newest: "Newest First",
    oldest: "Oldest First",
    "name-asc": "A - Z",
    "name-desc": "Z - A",
    stars: "Most Stars",
    popularity: "Most Popular",
};

export const getSortLabel = (sortBy = "newest") => sortLabels[sortBy] || sortLabels.newest;
