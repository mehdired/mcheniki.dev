import { ReactNode, useLayoutEffect } from 'react'

type MarqueeProps = {
    children: JSX.Element
    nbrDuplicate?: number
}

export function Marquee({ children, nbrDuplicate = 2 }: MarqueeProps) {
    return (
        <div
            className="flex -translate-x-3 -rotate-6 items-center gap-12"
            aria-hidden="true"
        >
            {Array.from({ length: nbrDuplicate }).map((_, i) => (
                <ul
                    key={`list-${i}`}
                    className="flex animate-marquee items-center gap-12 text-nowrap "
                >
                    <li>{children}</li>
                    <li>{children}</li>
                    <li>{children}</li>
                </ul>
            ))}
        </div>
    )
}
