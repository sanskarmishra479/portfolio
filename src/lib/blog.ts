import "server-only";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import type { BlogPost, BlogPostMeta } from "@/src/types/blog";

const CONTENT_DIR = path.join(process.cwd(), "src/content/blog");

function isProd(): boolean {
  return process.env.NODE_ENV === "production";
}

function parseFile(
  slug: string,
  raw: string,
): { meta: BlogPostMeta; body: string } {
  const { data, content } = matter(raw);
  const draft = Boolean(data.draft);
  return {
    meta: {
      slug,
      title: String(data.title ?? ""),
      date: String(data.date ?? ""),
      description: String(data.description ?? ""),
      draft,
    },
    body: content,
  };
}

function assertMeta(meta: BlogPostMeta, fileLabel: string): void {
  if (!meta.title || !meta.date || !meta.description) {
    throw new Error(
      `Blog ${fileLabel}: frontmatter must include title, date, and description`,
    );
  }
}

export function getAllPosts(): BlogPostMeta[] {
  if (!fs.existsSync(CONTENT_DIR)) return [];
  const files = fs.readdirSync(CONTENT_DIR).filter((f) => f.endsWith(".mdx"));
  const posts: BlogPostMeta[] = [];
  for (const file of files) {
    const slug = file.replace(/\.mdx$/i, "");
    const raw = fs.readFileSync(path.join(CONTENT_DIR, file), "utf8");
    const { meta } = parseFile(slug, raw);
    assertMeta(meta, file);
    if (isProd() && meta.draft) continue;
    posts.push(meta);
  }
  return posts.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
  );
}

export function getPostSlugs(): string[] {
  return getAllPosts().map((p) => p.slug);
}

export function getPostBySlug(slug: string): BlogPost | null {
  const filePath = path.join(CONTENT_DIR, `${slug}.mdx`);
  if (!fs.existsSync(filePath)) return null;
  const raw = fs.readFileSync(filePath, "utf8");
  const { meta, body } = parseFile(slug, raw);
  assertMeta(meta, `${slug}.mdx`);
  if (isProd() && meta.draft) return null;
  return { ...meta, body };
}
