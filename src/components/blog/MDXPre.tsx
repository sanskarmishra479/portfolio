"use client";

import React from "react";
import dynamic from "next/dynamic";

// ssr: false ensures mermaid (a browser-only library) is never imported
// on the server — fixes diagrams disappearing on direct load / refresh.
const MermaidDiagram = dynamic(() => import("./MermaidDiagram"), {
    ssr: false,
});

type CodeChild = React.ReactElement<{ className?: string; children?: string }>;

export default function MDXPre({
    children,
    ...props
}: React.HTMLAttributes<HTMLPreElement>) {
    const child = React.isValidElement(children)
        ? (children as CodeChild)
        : null;
    const className = child?.props?.className ?? "";

    if (className.includes("language-mermaid")) {
        const chart = child?.props?.children ?? "";
        return <MermaidDiagram chart={chart} />;
    }

    return <pre {...props}>{children}</pre>;
}
