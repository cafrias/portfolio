import astroIcon from "./assets/astro-icon.svg";
import dockerIcon from "./assets/docker-icon.svg";
import jamIcon from "./assets/jam-icon.svg";
import nextjsIcon from "./assets/nextjs-icon.svg";
import pwaIcon from "./assets/pwa-icon.svg";
import reactIcon from "./assets/react-icon.svg";
import sassIcon from "./assets/sass-icon.svg";
import tailwindIcon from "./assets/tailwind-icon.svg";
import typescriptIcon from "./assets/typescript-icon.svg";
import strapiIcon from "./assets/strapi-icon.svg";
import nodeIcon from "./assets/node-icon.svg";
import type { Tech } from "src/models/Tech";

export type AvailableTechs =
  | "ASTRO"
  | "DOCKER"
  | "JAMSTACK"
  | "NODE"
  | "NEXTJS"
  | "PWA"
  | "REACT"
  | "SASS"
  | "TAILWIND"
  | "TYPESCRIPT"
  | "STRAPI";

export const Techs: Record<AvailableTechs, Tech> = {
  ASTRO: { name: "Astro", icon: astroIcon },
  DOCKER: { name: "Docker", icon: dockerIcon },
  JAMSTACK: { name: "JamStack", icon: jamIcon },
  NODE: { name: "NodeJS", icon: nodeIcon },
  NEXTJS: { name: "NextJS", icon: nextjsIcon },
  PWA: { name: "Progressive Web Application", icon: pwaIcon },
  REACT: { name: "React", icon: reactIcon },
  SASS: { name: "Sass", icon: sassIcon },
  TAILWIND: { name: "Tailwind", icon: tailwindIcon },
  TYPESCRIPT: { name: "Typescript", icon: typescriptIcon },
  STRAPI: { name: "Strapi", icon: strapiIcon },
};

export const FeaturedTechs = [
  Techs.TYPESCRIPT,
  Techs.NODE,
  Techs.REACT,
  Techs.DOCKER,
  Techs.NEXTJS,
  Techs.SASS,
  Techs.ASTRO,
];
