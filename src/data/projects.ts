import type { Project } from "src/models/Project";
import { Techs } from "../models/Techs";

export const projects: Project[] = [
  {
    title: "Personal Portfolio",
    thumbnail: "/post_img.webp",
    description: "My Personal Portfolio where I upload my new projects",
    repoUrl: "https://github.com/cafrias/portfolio",
    techStack: new Set([Techs.ASTRO, Techs.TAILWIND]),
  },
];
