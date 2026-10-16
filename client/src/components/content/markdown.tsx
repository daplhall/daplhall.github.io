import ReactMarkdown from "react-markdown";
import type { MarkdownDump } from "@data/projects/markdown"

type MarkdownProps = MarkdownDump;

export default function Markdown({ children }: MarkdownProps) {
    return <ReactMarkdown>{children}</ReactMarkdown>;
}