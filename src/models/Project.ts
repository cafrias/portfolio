import type { Techs } from "./Techs";

export interface Project {
  title: string;
  thumbnail: ImageMetadata;
  description: string;
  repoUrl: string;
  techStack: Set<Techs>;
  status?: "new" | "upcoming";
}
