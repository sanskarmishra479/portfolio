"use client";

import React from "react";
import MermaidDiagram from "./MermaidDiagram";

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
