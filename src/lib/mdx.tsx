import { compileMDX } from "next-mdx-remote/rsc";
import remarkGfm from "remark-gfm";
import MDXPre from "@/src/components/blog/MDXPre";

export async function renderMdxBody(source: string) {
    const { content } = await compileMDX({
        source,
        components: {
            pre: MDXPre,
        },
        options: {
            mdxOptions: {
                remarkPlugins: [remarkGfm],
            },
        },
    });
    return content;
}
