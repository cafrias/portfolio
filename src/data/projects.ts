import type { Project } from "src/models/Project";

import portfolioThumbnail from "./assets/portfolio-thumbnail.png";
import marcoThumb from "./assets/marco-polo.png";
import { Techs } from "./techs";

export const projects: Project[] = [
  {
    title: "Marco Polo",
    thumbnail: marcoThumb,
    description:
      "A DEMO market place app where you can find the cheapest prices in town",
    repoUrl: "https://github.com/cafrias/marco-polo",
    techStack: [
      Techs.NEXTJS,
      Techs.REACT,
      Techs.TYPESCRIPT,
      Techs.PAYLOAD,
      Techs.DOCKER,
      Techs.JAMSTACK,
      Techs.MONGO,
      Techs.TAILWIND,
      Techs.MEILI,
    ],
    status: "new",
  },
  {
    title: "Personal Portfolio",
    thumbnail: portfolioThumbnail,
    description: "My Personal Portfolio where I upload my new projects",
    repoUrl: "https://github.com/cafrias/portfolio",
    techStack: [Techs.ASTRO, Techs.TAILWIND],
  },
];
