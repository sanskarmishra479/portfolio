"use client";

import React from "react";
import dynamic from "next/dynamic";

const MermaidDiagram = dynamic(() => import("./MermaidDiagram"), {
    ssr: false,
});

export default function MDXPre({
    children,
    ...props
}: React.HTMLAttributes<HTMLPreElement>) {
    // React.Children.toArray handles both single-element and array children
    // (some code blocks get whitespace text nodes added by remark, making
    // children an array — React.isValidElement would return false in that case).
    for (const child of React.Children.toArray(children)) {
        if (!React.isValidElement(child)) continue;
        const cls: string =
            ((child.props as Record<string, unknown>)?.className as string) ??
            "";
        if (cls.includes("language-mermaid")) {
            const chart =
                (child.props as Record<string, unknown>)?.children ?? "";
            return (
                <MermaidDiagram
                    chart={typeof chart === "string" ? chart : String(chart)}
                />
            );
        }
    }

    return <pre {...props}>{children}</pre>;
}
