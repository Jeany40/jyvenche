"use client";

/**
 * Container
 * - Centers content and constrains width.
 * - Keep this small so every page stays consistent.
 */
export type ContainerProps = {
    children: React.ReactNode;
    className?: string;
};

export default function Container({ children, className = "" }: ContainerProps) {
    return (
        <div
            className={[
                "mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8",
                className,
            ].join(" ")}
        >
            {children}
        </div>
    );
}
