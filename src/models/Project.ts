import type { Techs } from "./Techs";

export interface Project {
  title: string;
  thumbnail: string;
  description: string;
  repoUrl: string;
  techStack: Set<Techs>;
}
