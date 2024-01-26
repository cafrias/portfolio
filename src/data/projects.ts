import type { Project } from "src/models/Project";

import portfolioThumbnail from "./assets/portfolio-thumbnail.png";
import placeholderThumbnail from "./assets/placeholder-img.jpg";
import { Techs } from "./techs";

export const projects: Project[] = [
  {
    title: "Personal Portfolio",
    thumbnail: portfolioThumbnail,
    description: "My Personal Portfolio where I upload my new projects",
    repoUrl: "https://github.com/cafrias/portfolio",
    techStack: [Techs.ASTRO, Techs.TAILWIND],
    status: "new",
  },
  {
    title: "Marketplace",
    thumbnail: placeholderThumbnail,
    description:
      "A market place where you can find the cheapest prices in town",
    repoUrl: "https://github.com/cafrias",
    techStack: [Techs.ASTRO, Techs.JAMSTACK, Techs.STRAPI, Techs.TAILWIND],
    status: "upcoming",
  },
];
