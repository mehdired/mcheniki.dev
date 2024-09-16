'use client'

import { useEffect, useState } from 'react'

export function NotInTouch({ children }: { children: React.ReactNode }) {
    const [isTouch, setIsTouch] = useState(false)

    useEffect(() => {
        const media = window.matchMedia('(hover: none), (pointer: coarse)')

        if (media.matches !== isTouch) {
            setIsTouch(media.matches)
        }
        const listener = () => setIsTouch(media.matches)
        window.addEventListener('resize', listener)
        return () => window.removeEventListener('resize', listener)
    }, [isTouch])

    return <>{!isTouch ? children : null}</>
}
