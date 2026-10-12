import ReactMarkdown from "react-markdown";

type MarkdownProps = {
    children: string;
};

export default function Markdown({ children }: MarkdownProps) {
    return <ReactMarkdown>{children}</ReactMarkdown>;
}