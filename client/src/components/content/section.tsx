import Markdown from "@components/content/markdown";

type SectionProps = {
    children: string;
    className?: string;
};

export default function Section({ children, className }: SectionProps) {
    return (
        <article className={className}>
            <Markdown>{children}</Markdown>
        </article>
    );
}