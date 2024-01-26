import type { Tech } from "./Tech";

export interface Project {
  title: string;
  thumbnail: ImageMetadata;
  description: string;
  repoUrl: string;
  /**
   * A set of Tech IDs
   */
  techStack: Array<Tech>;
  status?: "new" | "upcoming";
}
