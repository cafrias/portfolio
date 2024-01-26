import type { Project } from "src/models/Project";
import { Techs } from "../models/Techs";

import portfolioThumbnail from "./assets/portfolio-thumbnail.png";

export const projects: Project[] = [
  {
    title: "Personal Portfolio",
    thumbnail: portfolioThumbnail,
    description: "My Personal Portfolio where I upload my new projects",
    repoUrl: "https://github.com/cafrias/portfolio",
    techStack: new Set([Techs.ASTRO, Techs.TAILWIND]),
  },
];
