export type BlogPostMeta = {
  slug: string;
  title: string;
  /** ISO date string (YYYY-MM-DD) */
  date: string;
  description: string;
  draft?: boolean;
};

export type BlogPost = BlogPostMeta & {
  /** MDX body after frontmatter */
  body: string;
};
