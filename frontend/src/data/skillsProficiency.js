
/**
 * @file skillsProficiency.js
 * @author Brendan Dileo, July 2025
 * 
 * Defines the arrays of skill proficiency data to be categorized and used inside the skills
 * proficiency section on the highlights page
 */

import { Code } from "lucide-react";

const skillCategories = [
    {
        title: "Programming Languages",
        icon: Code,
        color: "text-blue-400",
        bgColor: "bg-blue-400/10",
        borderColor: "border-blue-400/20",
        
        skills: [
            { name: "Java", proficiency: 95, level: "Expert" },
            { name: "JavaScript", proficiency: 90, level: "Advanced" },
            { name: "Python", proficiency: 85, level: "Advanced" },
            { name: "C#", proficiency: 80, level: "Intermediate" },
            { name: "PHP", proficiency: 75, level: "Intermediate" },
            { name: "Swift", proficiency: 70, level: "Intermediate" }
        ]
    }
];

export { skillCategories };