import Markdown from "@components/core/markdown";


type Props = {
    children: string;
};
export default function Snippit({ children }: Props) {

    return <p className="lead">
        <Markdown>
            {children}
        </Markdown>
    </p>
}