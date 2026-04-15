import { getAllPosts } from "@/src/lib/blog";
import { format, isValid, parseISO } from "date-fns";
import Link from "next/link";
import SectionHeader from "../ui/SectionHeader";

function formatPostDate(iso: string): string {
  const d = parseISO(iso);
  return isValid(d) ? format(d, "MMM d, yyyy") : iso;
}

export default async function BlogSection() {
  const posts = getAllPosts().slice(0, 3);
  if (posts.length === 0) return null;

  return (
    <section className="w-full px-4 py-8">
      <SectionHeader title="Writing" href="/blog" />
      <ul className="flex flex-col gap-5">
        {posts.map((post) => (
          <li key={post.slug} className="hover:bg-white/2 p-3">
            <Link href={`/blog/${post.slug}`} className="group block">
              <p className="text-[11px] uppercase tracking-wider text-white/35 font-Geist_Mono mb-1">
                {formatPostDate(post.date)}
              </p>
              <p className="font-instrument-serif text-lg text-mainPrimary group-hover:text-white transition-colors">
                {post.title}
              </p>
              <p className="mt-1 text-sm text-white/45 line-clamp-2">{post.description}</p>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
