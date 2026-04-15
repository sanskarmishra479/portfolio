import Container from "@/src/components/sections/Container";
import { getPostBySlug, getPostSlugs } from "@/src/lib/blog";
import { renderMdxBody } from "@/src/lib/mdx";
import { format, isValid, parseISO } from "date-fns";
import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";

type Props = {
  params: Promise<{ slug: string }>;
};

function formatPostDate(iso: string): string {
  const d = parseISO(iso);
  return isValid(d) ? format(d, "MMMM d, yyyy") : iso;
}

export function generateStaticParams(): { slug: string }[] {
  return getPostSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};
  return {
    title: `${post.title} | Sanskar Mishra`,
    description: post.description,
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  const content = await renderMdxBody(post.body);

  return (
    <div className="flex justify-center min-h-screen bg-mainSecondary">
      <Container>
        <article className="px-4 pt-12 pb-20 max-w-3xl">
          <nav className="mb-10">
            <Link
              href="/blog"
              className="hero-link inline-block text-white/50 text-[12px] uppercase font-Geist_Mono tracking-wide hover:text-white"
            >
              ← All posts
            </Link>
          </nav>
          <header className="mb-10">
            <p className="text-[11px] uppercase tracking-wider text-white/40 font-Geist_Mono mb-3">
              {formatPostDate(post.date)}
            </p>
            <h1 className="font-instrument-serif text-[clamp(32px,5vw,48px)] font-light text-mainPrimary leading-tight">
              {post.title}
            </h1>
            <p className="mt-4 text-sm text-white/50 leading-relaxed">{post.description}</p>
          </header>
          <div className="blog-prose">{content}</div>
        </article>
      </Container>
    </div>
  );
}
