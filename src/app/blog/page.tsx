import Container from "@/src/components/sections/Container";
import { getAllPosts } from "@/src/lib/blog";
import { format, isValid, parseISO } from "date-fns";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog | Sanskar Mishra",
  description: "Notes on building, tools, and shipping.",
};

function formatPostDate(iso: string): string {
  const d = parseISO(iso);
  return isValid(d) ? format(d, "MMMM d, yyyy") : iso;
}

export default function BlogIndexPage() {
  const posts = getAllPosts();

  return (
    <div className="flex justify-center min-h-screen bg-mainSecondary">
      <Container>
        <header className="mt-12 px-4 pb-8">
          <Link
            href="/"
            className="hero-link inline-block text-white/50 text-[12px] uppercase font-Geist_Mono tracking-wide hover:text-white"
          >
            ← Home
          </Link>
          <h1 className="mt-8 font-instrument-serif text-[clamp(32px,5vw,56px)] font-light text-mainPrimary leading-tight">
            Blog
          </h1>
          <p className="mt-3 text-sm text-white/50 max-w-xl">
            Longer writing on tools, projects, and lessons learned.
          </p>
        </header>

        <ul className="border-t border-dashed border-white/10">
          {posts.length === 0 ? (
            <li className="px-4 py-8 text-sm text-white/50">
              No posts yet. Add a <code className="font-Geist_Mono text-xs">.mdx</code> file under{" "}
              <code className="font-Geist_Mono text-xs">src/content/blog/</code>.
            </li>
          ) : (
            posts.map((post) => (
              <li
                key={post.slug}
                className="border-b border-dashed border-white/10 px-4 py-6 hover:bg-white/2 transition-colors"
              >
                <Link href={`/blog/${post.slug}`} className="group block">
                  <p className="text-[11px] uppercase tracking-wider text-white/40 font-Geist_Mono mb-2">
                    {formatPostDate(post.date)}
                  </p>
                  <h2 className="font-instrument-serif text-xl text-mainPrimary group-hover:text-white transition-colors">
                    {post.title}
                  </h2>
                  <p className="mt-2 text-sm text-white/50 leading-relaxed max-w-2xl">
                    {post.description}
                  </p>
                </Link>
              </li>
            ))
          )}
        </ul>
      </Container>
    </div>
  );
}
