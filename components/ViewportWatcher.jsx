import { useEffect } from 'react'

/* type ViewportWatcherProps = {
    innerRef: React.RefObject<HTMLElement>
    onEnter?: (e: { innerRef: HTMLElement }) => void
    onExit?: (e: { innerRef: HTMLElement }) => void
    onScroll?: (e: {
        innerRef: HTMLElement
        top: number
        bottom: number
    }) => void
    children: React.ReactNode
} */

export function ViewportWatcher({
    innerRef,
    onEnter,
    onExit,
    onScroll,
    children,
}) {
    useEffect(() => {
        if (!innerRef.current) {
            return void 0
        }

        //stirng flag to only trigger callback once
        let state

        const onScrollHandler = (e) => {
            const { top, bottom } = innerRef.current?.getBoundingClientRect()

            onScroll &&
                onScroll({ ...e, innerRef: innerRef.current, top, bottom })

            if (
                state !== 'exit' &&
                (bottom <= 0 || top >= window.innerHeight) &&
                onExit
            ) {
                onExit({ ...e, innerRef: innerRef.current })
                state = 'exit'
            } else if (state !== 'enter' && onEnter) {
                onEnter({ ...e, innerRef: innerRef.current })
                state = 'enter'
            }
        }

        //init check
        onScrollHandler()

        //on scroll check
        window.addEventListener('scroll', onScrollHandler)
        ;() => window.removeEventListener('scroll', onScrollHandler)
    }, [innerRef])

    return <>{children}</>
}
