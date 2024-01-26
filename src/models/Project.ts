export interface Project<A = string> {
  title: string;
  thumbnail: ImageMetadata;
  description: string;
  repoUrl: string;
  /**
   * A set of Tech IDs
   */
  techStack: Set<A>;
  status?: "new" | "upcoming";
}
