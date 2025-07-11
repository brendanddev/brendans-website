
/**
 * @file personalHighlights.js
 * @author Brendan Dileo, July 2025
 * 
 * Defines my personal highlights that will be displayed inside the DottedGridSection
 * component on the about page
 */

import { Star, Heart, Target, Zap, Coffee, BookOpen, Gamepad2, Palette } from "lucide-react";

const personalHighlights = [
    {
      icon: Star,
      title: "Academic Excellence",
      description: "93.5 GPA with consistent Dean's List honors",
      color: "text-yellow-400",
      bgColor: "bg-yellow-400/10",
      borderColor: "border-yellow-400/20"
    },
    {
      icon: Heart,
      title: "Passion for Code",
      description: "Love creating solutions that make a difference",
      color: "text-red-400",
      bgColor: "bg-red-400/10",
      borderColor: "border-red-400/20"
    },
    {
      icon: Target,
      title: "Goal-Oriented",
      description: "Focused on becoming a full-stack developer",
      color: "text-blue-400",
      bgColor: "bg-blue-400/10",
      borderColor: "border-blue-400/20"
    },
    {
      icon: Zap,
      title: "Fast Learner",
      description: "Quickly adapt to new technologies and frameworks",
      color: "text-purple-400",
      bgColor: "bg-purple-400/10",
      borderColor: "border-purple-400/20"
    },
    {
      icon: Coffee,
      title: "Problem Solver",
      description: "Turn complex challenges into elegant solutions",
      color: "text-orange-400",
      bgColor: "bg-orange-400/10",
      borderColor: "border-orange-400/20"
    },
    {
      icon: BookOpen,
      title: "Continuous Learning",
      description: "Always exploring new technologies and best practices",
      color: "text-green-400",
      bgColor: "bg-green-400/10",
      borderColor: "border-green-400/20"
    },
    {
      icon: Gamepad2,
      title: "Gaming Enthusiast",
      description: "Love game development and interactive experiences",
      color: "text-pink-400",
      bgColor: "bg-pink-400/10",
      borderColor: "border-pink-400/20"
    },
    {
      icon: Palette,
      title: "Creative Mind",
      description: "Balance technical skills with creative problem-solving",
      color: "text-indigo-400",
      bgColor: "bg-indigo-400/10",
      borderColor: "border-indigo-400/20"
    }
];

export default personalHighlights;