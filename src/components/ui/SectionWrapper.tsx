import { ReactNode } from "react";

interface SectionWrapperProps {
    children: ReactNode;
    id?: string;
    className?: string;
    withGrid?: boolean;
    withRadial?: boolean;
}

export default function SectionWrapper({
    children,
    id,
    className = "",
    withGrid = false,
    withRadial = false,
}: SectionWrapperProps) {
    return (
        <section
            id={id}
            className={`relative px-6 sm:px-10 lg:px-20 xl:px-32 py-20 md:py-28 overflow-hidden ${withGrid ? "grid-bg" : ""
                } ${withRadial ? "radial-section" : ""} ${className}`}
        >
            {children}
        </section>
    );
}
