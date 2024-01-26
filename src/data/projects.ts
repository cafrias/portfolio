import type { Project } from "src/models/Project";

import portfolioThumbnail from "./assets/portfolio-thumbnail.png";
import placeholderThumbnail from "./assets/placeholder-img.jpg";
import type { AvailableTechs, Techs } from "./techs";

export const projects: Project<AvailableTechs>[] = [
  {
    title: "Personal Portfolio",
    thumbnail: portfolioThumbnail,
    description: "My Personal Portfolio where I upload my new projects",
    repoUrl: "https://github.com/cafrias/portfolio",
    techStack: new Set(["ASTRO", "TAILWIND"]),
    status: "new",
  },
  {
    title: "Marketplace",
    thumbnail: placeholderThumbnail,
    description:
      "A market place where you can find the cheapest prices in town",
    repoUrl: "https://github.com/cafrias",
    techStack: new Set(["ASTRO", "JAMSTACK", "STRAPI", "TAILWIND"]),
    status: "upcoming",
  },
];
