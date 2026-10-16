import Markdown from "@components/content/markdown";
import { type MarkdownDump } from "@data/projects/markdown";


export default function Article({ children }: MarkdownDump) {
    return (
        <article className="content">
            <Markdown>{children}</Markdown>
        </article>
    );
}