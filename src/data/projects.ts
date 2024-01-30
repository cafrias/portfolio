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
    title: "Marco Polo",
    thumbnail: placeholderThumbnail,
    description:
      "A market place where you can find the cheapest prices in town",
    repoUrl: "https://github.com/cafrias/marco-polo",
    techStack: [
      Techs.ASTRO,
      Techs.REACT,
      Techs.JAMSTACK,
      Techs.STRAPI,
      Techs.TAILWIND,
    ],
    status: "upcoming",
  },
];
