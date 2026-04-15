import Link from "next/link";

export default function SectionHeader({ title, href }: { title: string; href: string }) {
  return (
    <div className="flex items-baseline justify-between gap-4 mb-6 border-b border-dashed border-white/10 pb-3">
    <h2 className="text-[12px] text-white/50 font-Geist_Mono uppercase tracking-wider">
      {title}
    </h2>
    <Link
      href={href}
      className="hero-link text-[12px] text-white/50 font-Geist_Mono uppercase hover:text-white"
    >
      View all
    </Link>
  </div>
  );
}