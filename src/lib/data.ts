import img1 from "../../public/fread-e-commerce.jpg";
import img2 from "../../public/aonu.jpg";
import img3 from "../../public/magic-mail.png";
import lan1 from "@/../public/dino-landing.jpg"
import lan2 from "@/../public/sunrise-f-landing.jpg"
import lan3 from "@/../public/dino-2-land.jpg"
import lan4 from "@/../public/wimble.jpg"

import { Project } from "@/lib/types.ts";
import { Github, Linkedin } from "lucide-react";

export const ProjectsArr: Project[] = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description:
      "A modern, responsive e-commerce platform built with React and Node.js, featuring real-time inventory management and secure payment processing.",
    image: img1 as string,
    technologies: ["React", "Node.js", "MongoDB", "Stripe"],
    githubUrl: "https://github.com/FreadSt/fread.",
    category: "Web Development",
  },
  {
    id: 2,
    title: "Mobile Video Platform App",
    description:
      "Mobile React Native and Expo full-stack application featured to upload and viewing videos application",
    image: img2 as string,
    technologies: ["React Native", "TypeScript", "AppWrite", "Expo"],
    githubUrl: "https://github.com/FreadSt/aonu",
    category: "Mobile Development",
  },
  {
    id: 3,
    title: "AI-Powered Email Generator",
    description:
      "An intelligent email generate application that provides real-time mails using AI Api's for business or just for fun.",
    image: img3 as string,
    technologies: ["Next.js", "framer-motion", "Typescript", "ChatGPT API"],
    liveUrl: "https://magicmail.app/",
    category: "Data Science",
  },
  {
    id: 4,
    title: "Landing Page Gallery",
    description:
      "A collection of beautifully crafted marketing landing pages demonstrating responsive design, clean UI/UX and animation techniques.",
    image: "/landing-gallery-preview.png",
    technologies: ["Next.js", "Tailwind CSS", "Framer Motion", "TypeScript"],
    category: "Web Design",
    isGallery: true,
    galleryImages: [
      { src: lan1 as string, href: "https://dinolanding5-5.vercel.app/" },
      { src: lan2 as string, href: "https://sunrise-flowers.vercel.app/" },
      { src: lan3 as string, href: "https://landing3.example.com" },
      { src: lan4 as string, href: "https://wimble.agency/" },
    ],
  },
];


export const socials = [
  {
    linked: Linkedin,
    link: "https://www.linkedin.com/in/freadstr/"
  },
  {
    linked: Github,
    link: "https://github.com/FreadSt"
  },
]

export const skills = [
  "React",
  "TypeScript",
  "Next.js",
  "Node.js",
  "Docker",
  "MongoDB",
  "GraphQL",
  "Tailwind CSS",
  "Figma",
];

export const services = [
  {
    title: "Web Development",
    description:
      "Building responsive, performant web applications with modern technologies and best practices.",
    features: [
      "React & Next.js",
      "TypeScript",
      "Performance Optimization",
      "SEO & Accessibility",
    ],
  },
  {
    title: "Mobile Development",
    description:
      "Creating native and cross-platform mobile applications for iOS and Android.",
    features: [
      "React Native",
      "Expo",
      "Native iOS/Android",
    ],
  },
  {
    title: "API & Backend Integration",
    description:
      "While I'm a frontend-first developer, I can design and integrate REST APIs, configure backends and deploy fullstack apps.",
    features: [
      "Node.js & Express",
      "Firebase / Appwrite",
      "API integration & deployment",
    ],
  },
  {
    title: "Design to Code",
    description:
      "I translate Figma designs into real, usable interfaces — matching layout and behavior exactly, down to the last pixel.",
    features: [
      "Figma → Code conversion",
      "Design Systems & Components",
      "Accessibility (a11y)",
      "Mobile-first approach",
    ],
  },
];
