import React, { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

import IconReact from '@/svgs/next.svg'
import IconJS from '@/svgs/next.svg'
import IconWP from '@/svgs/wp.svg'
import IconPHP from '@/svgs/next.svg'
import CardStack from './CardStack'

export type SVGComponent = React.ComponentType<React.SVGProps<SVGSVGElement>>

// Types pour les animations
type AnimationConfig = {
    y: {
        duration: number
        repeat: number
        repeatType: 'reverse' | 'loop' | 'mirror'
        ease: string
        delay: number
        amount: number
    }
    hover: {
        scale: number
        transition: {
            type: string
            stiffness: number
            damping: number
        }
    }
}

// Type pour une technologie
type Technology = {
    id: number
    name: string
    Icon: SVGComponent
    description: string
    connections: number[]
    animation: AnimationConfig
}

// Type pour les positions
type Position = {
    x: number
    y: number
}

type Dimensions = {
    width: number
    height: number
}

// Type pour les animations des technologies
type TechAnimations = Record<number, number>

// Types pour les props des composants
type ConstellationProps = {
    positions: Record<number, Position>
    technologies: Technology[]
    hoveredTech: Technology | null
    techAnimations: TechAnimations
}

type TechBubbleProps = {
    tech: Technology
    position: Position
    isHovered: boolean
    onHover: () => void
    onLeave: () => void
    onAnimationUpdate: (value: number) => void
    techAnimations: TechAnimations
}

type InfoCardProps = {
    tech: Technology
}

const technologies: Technology[] = [
    {
        id: 1,
        name: 'React',
        Icon: IconReact as SVGComponent,
        description: 'A JavaScript library for building user interfaces',
        connections: [2, 3],
        animation: {
            y: {
                duration: 3,
                repeat: Infinity,
                repeatType: 'reverse',
                ease: 'easeInOut',
                delay: 0,
                amount: 10,
            },
            hover: {
                scale: 1.2,
                transition: {
                    type: 'spring',
                    stiffness: 300,
                    damping: 10,
                },
            },
        },
    },
    {
        id: 2,
        name: 'JavaScript',
        Icon: IconJS as SVGComponent,
        description: 'High-level, interpreted programming language',
        connections: [1],
        animation: {
            y: {
                duration: 4,
                repeat: Infinity,
                repeatType: 'reverse',
                ease: 'easeInOut',
                delay: 0.5,
                amount: 15,
            },
            hover: {
                scale: 1.2,
                transition: {
                    type: 'spring',
                    stiffness: 400,
                    damping: 8,
                },
            },
        },
    },
    {
        id: 3,
        name: 'WordPress',
        Icon: IconWP as SVGComponent,
        description: 'Open-source content management system',
        connections: [2, 4],
        animation: {
            y: {
                duration: 3.5,
                repeat: Infinity,
                repeatType: 'reverse',
                ease: 'easeInOut',
                delay: 1,
                amount: 12,
            },
            hover: {
                scale: 1.2,
                transition: {
                    type: 'spring',
                    stiffness: 350,
                    damping: 12,
                },
            },
        },
    },
    {
        id: 4,
        name: 'PHP',
        Icon: IconPHP as SVGComponent,
        description: 'General-purpose scripting language for web development',
        connections: [3],
        animation: {
            y: {
                duration: 3.2,
                repeat: Infinity,
                repeatType: 'reverse',
                ease: 'easeInOut',
                delay: 1.5,
                amount: 8,
            },
            hover: {
                scale: 1.2,
                transition: {
                    type: 'spring',
                    stiffness: 450,
                    damping: 15,
                },
            },
        },
    },
]

const TechConstellation: React.FC = () => {
    const [hoveredTech, setHoveredTech] = useState<Technology | null>(null)
    const containerRef = useRef<HTMLDivElement>(null)
    const [dimensions, setDimensions] = useState<Dimensions>({
        width: 0,
        height: 0,
    })
    const [techAnimations, setTechAnimations] = useState<TechAnimations>({})

    useEffect(() => {
        const updateDimensions = () => {
            if (containerRef.current) {
                const rect = containerRef.current.getBoundingClientRect()
                setDimensions({ width: rect.width, height: rect.height })
            }
        }

        updateDimensions()
        window.addEventListener('resize', updateDimensions)
        return () => window.removeEventListener('resize', updateDimensions)
    }, [])

    const updateTechAnimation = (techId: number, value: number) => {
        setTechAnimations((prev) => ({
            ...prev,
            [techId]: value,
        }))
    }

    const positions = technologies.reduce<Record<number, Position>>(
        (acc, tech, index) => {
            const radius = Math.min(dimensions.width, dimensions.height) * 0.3
            const centerX = dimensions.width / 2
            const centerY = dimensions.height / 2
            const angle = (index / technologies.length) * 2 * Math.PI

            acc[tech.id] = {
                x: centerX + Math.cos(angle) * radius,
                y: centerY + Math.sin(angle) * radius,
            }
            return acc
        },
        {}
    )

    return (
        <div
            ref={containerRef}
            className="constellation-container relative h-full w-full"
        >
            <div className="absolute left-0 top-0 flex h-full w-full">
                <div className="left-[10%] top-1/2 z-10 h-full max-h-[556px] py-32">
                    <div className="aspect-[447/556] h-full bg-stack-frame bg-cover bg-no-repeat p-12">
                        {hoveredTech && <InfoCard tech={hoveredTech} />}
                    </div>
                </div>
                <div className="relative h-full w-1/2 flex-1  basis-1/2">
                    <Constellation
                        positions={positions}
                        technologies={technologies}
                        hoveredTech={hoveredTech}
                        techAnimations={techAnimations}
                    />
                    {technologies.map((tech) => (
                        <TechBubble
                            key={tech.id}
                            tech={tech}
                            position={positions[tech.id]}
                            isHovered={hoveredTech?.id === tech.id}
                            onHover={() => setHoveredTech(tech)}
                            onLeave={() => setHoveredTech(null)}
                            onAnimationUpdate={(value) =>
                                updateTechAnimation(tech.id, value)
                            }
                            techAnimations={techAnimations}
                        />
                    ))}
                </div>
            </div>
        </div>
    )
}

const Constellation: React.FC<ConstellationProps> = ({
    positions,
    technologies,
    hoveredTech,
    techAnimations,
}) => {
    return (
        <motion.svg
            style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                zIndex: 1,
                pointerEvents: 'none',
            }}
        >
            {technologies.map((tech) =>
                tech.connections.map((connectedTechId) => {
                    const startPos = positions[tech.id]
                    const endPos = positions[connectedTechId]

                    if (startPos && endPos) {
                        const isConnectedToHovered =
                            hoveredTech?.id === tech.id ||
                            hoveredTech?.id === connectedTechId

                        const startOffset = techAnimations[tech.id] || 0
                        const endOffset = techAnimations[connectedTechId] || 0

                        return (
                            <motion.line
                                key={`${tech.id}-${connectedTechId}`}
                                x1={startPos.x}
                                y1={startPos.y + startOffset}
                                x2={endPos.x}
                                y2={endPos.y + endOffset}
                                stroke="rgb(255 255 255 / 0.3)"
                                strokeWidth={isConnectedToHovered ? 2 : 1}
                            />
                        )
                    }
                    return null
                })
            )}
        </motion.svg>
    )
}

const TechBubble: React.FC<TechBubbleProps> = ({
    tech,
    position,
    isHovered,
    onHover,
    onLeave,
    onAnimationUpdate,
    techAnimations,
}) => {
    useEffect(() => {
        let yPos = 0
        const interval = setInterval(() => {
            const time = (Date.now() + tech.animation.y.delay * 1000) / 1000
            yPos =
                Math.sin((time * Math.PI) / tech.animation.y.duration) *
                tech.animation.y.amount
            onAnimationUpdate(yPos)
        }, 16)

        return () => clearInterval(interval)
    }, [tech.animation.y, onAnimationUpdate])

    return (
        <motion.div
            style={{
                position: 'absolute',
                left: position.x - 30,
                top: position.y - 30,
                transform: 'translate(-50%, -50%)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: '60px',
                height: '60px',
                cursor: 'pointer',
                zIndex: 2,
            }}
            animate={{
                y: techAnimations[tech.id] || 0,
            }}
            whileHover={tech.animation.hover}
            onHoverStart={onHover}
            onHoverEnd={onLeave}
        >
            <tech.Icon width="100%" height="100%" fill="#fff" />
        </motion.div>
    )
}

const InfoCard: React.FC<InfoCardProps> = ({ tech }) => {
    return (
        <AnimatePresence>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
            >
                <CardStack
                    title={tech.name}
                    description={tech.description}
                    Icon={tech.Icon}
                />
            </motion.div>
        </AnimatePresence>
    )
}

export default TechConstellation
