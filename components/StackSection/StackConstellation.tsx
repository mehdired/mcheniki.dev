import React, { useState, useEffect } from 'react'
import { useSpring, animated, to } from '@react-spring/web'
import { useDrag } from '@use-gesture/react'

import IconReact from '@/svgs/next.svg'
import IconJS from '@/svgs/next.svg'
import IconWP from '@/svgs/wp.svg'
import IconPHP from '@/svgs/next.svg'

const technologies = [
    {
        id: 1,
        name: 'React',
        Icon: IconReact,
        description: 'A JavaScript library for building user interfaces',
        connections: [2, 3],
    },
    {
        id: 2,
        name: 'JavaScript',
        Icon: IconJS,
        description: 'High-level, interpreted programming language',
        connections: [1, 3, 4, 5],
    },
    {
        id: 4,
        name: 'WordPress',
        Icon: IconWP,
        description: 'Open-source content management system',
        connections: [1, 2],
    },
    {
        id: 5,
        name: 'PHP',
        Icon: IconPHP,
        description: 'General-purpose scripting language for web development',
        connections: [2, 5],
    },
]

const TechConstellation = () => {
    const [hoveredTech, setHoveredTech] = useState(null)
    const [positions, setPositions] = useState({})
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        const calculatePositions = () => {
            const newPositions = {}
            const containerWidth = window.innerWidth
            const containerHeight = 600 // Ajustez selon vos besoins
            const radius = Math.min(containerWidth, containerHeight) * 0.3

            technologies.forEach((tech, index) => {
                const angle = (index / technologies.length) * 2 * Math.PI
                newPositions[tech.id] = {
                    x: containerWidth / 2 + Math.cos(angle) * radius,
                    y: containerHeight / 2 + Math.sin(angle) * radius,
                }
            })
            setPositions(newPositions)
            setIsLoading(false)
        }

        calculatePositions()
        window.addEventListener('resize', calculatePositions)
        return () => window.removeEventListener('resize', calculatePositions)
    }, [])

    if (isLoading) {
        return <div>Loading...</div>
    }

    return (
        <div
            className="constellation-container"
            style={{
                position: 'relative',
                width: '100%',
                height: '600px',
                background: '#0a0a2a',
                overflow: 'hidden',
            }}
        >
            <SVGConstellation
                positions={positions}
                technologies={technologies}
            />
            {technologies.map((tech) => (
                <TechBubble
                    key={tech.id}
                    tech={tech}
                    position={positions[tech.id]}
                    onHover={() => setHoveredTech(tech)}
                    onLeave={() => setHoveredTech(null)}
                />
            ))}
            {hoveredTech && <InfoCard tech={hoveredTech} />}
        </div>
    )
}

const TechBubble = ({ tech, position, onHover, onLeave }) => {
    const [{ x, y }, api] = useSpring(() => ({
        x: position?.x || 0,
        y: position?.y || 0,
        config: { mass: 1, tension: 350, friction: 40 },
    }))

    const bind = useDrag(({ offset: [ox, oy] }) => {
        api.start({ x: ox, y: oy })
    })

    useEffect(() => {
        if (position) {
            api.start({ x: position.x, y: position.y })
        }
    }, [position, api])

    const floatingAnimation = useSpring({
        from: { translateY: 0 },
        to: { translateY: 10 },
        config: { duration: 2000, tension: 300, friction: 10 },
        loop: { reverse: true },
    })

    if (!position) return null

    return (
        <animated.div
            {...bind()}
            style={{
                x,
                y,
                position: 'absolute',
                transform: to(
                    [x, y, floatingAnimation.translateY],
                    (x, y, ty) =>
                        `translate(${x}px, ${y + ty}px) translate(-50%, -50%)`
                ),
                cursor: 'grab',
                userSelect: 'none',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: '60px',
                height: '60px',
            }}
            onMouseEnter={onHover}
            onMouseLeave={onLeave}
        >
            <tech.Icon width="100%" height="100%" />
        </animated.div>
    )
}

const InfoCard = ({ tech }) => {
    const springProps = useSpring({
        opacity: 1,
        transform: 'translateY(0)',
        from: { opacity: 0, transform: 'translateY(50px)' },
        config: { tension: 300, friction: 10 },
    })

    return (
        <animated.div
            style={{
                ...springProps,
                position: 'absolute',
                left: '20px',
                top: '20px',
                background: 'rgba(255, 255, 255, 0.9)',
                padding: '20px',
                borderRadius: '10px',
                boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
                maxWidth: '300px',
            }}
        >
            <h3>{tech.name}</h3>
            <p>{tech.description}</p>
        </animated.div>
    )
}

const SVGConstellation = ({ positions, technologies }) => {
    return (
        <svg style={{ position: 'absolute', width: '100%', height: '100%' }}>
            {technologies.map((tech) =>
                tech.connections.map((connectedTechId) => {
                    const startPos = positions[tech.id]
                    const endPos = positions[connectedTechId]
                    if (startPos && endPos) {
                        return (
                            <line
                                key={`${tech.id}-${connectedTechId}`}
                                x1={startPos.x}
                                y1={startPos.y}
                                x2={endPos.x}
                                y2={endPos.y}
                                stroke="rgba(255, 165, 0, 0.2)"
                                strokeWidth="1"
                            />
                        )
                    }
                    return null
                })
            )}
        </svg>
    )
}

export default TechConstellation
