import { type ReactNode } from "react";


type HighlightsProb = {
    name: ReactNode;
    children: ReactNode;
};

export default function HighlightDetails({ name, children }: HighlightsProb) {
    return (
        <>
            <details>
                <summary>
                    <span className=""> {name}
                    </span>
                </summary>
                <div className="box">
                    <div>
                        {children}
                    </div>
                </div>
            </details >
        </>
    )

}