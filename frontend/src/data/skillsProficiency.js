
/**
 * @file skillsProficiency.js
 * @author Brendan Dileo, July 2025
 * 
 * Defines the arrays of skill proficiency data to be categorized and used inside the skills
 * proficiency section on the highlights page
 */

import { Code, Globe, Database, Wrench } from "lucide-react";

const skillProficiencyCategories = [
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
    },
    
    {
        title: "Web Development",
        icon: Globe,
        color: "text-green-400",
        bgColor: "bg-green-400/10",
        borderColor: "border-green-400/20",
        skills: [
            { name: "React", proficiency: 88, level: "Advanced" },
            { name: "HTML/CSS", proficiency: 92, level: "Expert" },
            { name: "Node.js", proficiency: 75, level: "Intermediate" },
            { name: "Tailwind CSS", proficiency: 85, level: "Advanced" },
            { name: "Bootstrap", proficiency: 80, level: "Intermediate" }
        ]
    },

    {
        title: "Databases & Tools",
        icon: Database,
        color: "text-purple-400",
        bgColor: "bg-purple-400/10",
        borderColor: "border-purple-400/20",
        skills: [
            { name: "MySQL", proficiency: 82, level: "Advanced" },
            { name: "SQL Server", proficiency: 78, level: "Intermediate" },
            { name: "Git", proficiency: 85, level: "Advanced" },
            { name: "VS Code", proficiency: 90, level: "Expert" },
            { name: "Unity", proficiency: 70, level: "Intermediate" }
        ]
    },
    {
        title: "Development Tools",
        icon: Wrench,
        color: "text-orange-400",
        bgColor: "bg-orange-400/10",
        borderColor: "border-orange-400/20",
        skills: [
            { name: "IntelliJ IDEA", proficiency: 88, level: "Advanced" },
            { name: "PyCharm", proficiency: 80, level: "Intermediate" },
            { name: "Xcode", proficiency: 75, level: "Intermediate" },
            { name: "Linux", proficiency: 70, level: "Intermediate" },
            { name: "GIMP", proficiency: 65, level: "Intermediate" }
        ]
    }
];

export { skillProficiencyCategories };