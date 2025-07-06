
/**
 * @file sortProjects.js
 * @author Brendan Dileo, July 2025
 * 
 * Defines utility functions for sorting the project data based on a specified criteria
 */

export const sortProjects = (projects, sortBy) => {
    const sortedProjects = [...projects];

    switch (sortBy) {
        case "newest":
            return sortedProjects.sort((a, b) => {

                // Sorts by newest based on completion date
                const dateA = new Date(a.completionDate);
                const dateB = new Date(b.completionDate);
                return dateB - dateA;
            });

        case "oldest":
            return sortedProjects.sort((a, b) => {
                // Sorts by oldest based on completion date
                const dateA = new Date(a.completionDate);
                const dateB = new Date(b.completionDate);
                return dateA - dateB;
            });

        case "name-asc":
            // Sorts by name in ascending order
            return sortedProjects.sort((a, b) => 
                a.title.localeCompare(b.title)
            );

        case "name-desc":
            // Sorts by name in descending order
            return sortedProjects.sort((a, b) => 
                b.title.localeCompare(a.title)
            );

        default:
            return sortedProjects;
    }
}; 