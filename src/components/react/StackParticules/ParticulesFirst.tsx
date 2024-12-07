'use client'

import { useEffect, useMemo, useRef, useState } from 'react'
import Particles, { initParticlesEngine } from '@tsparticles/react'
import {
    type Container,
    type ISourceOptions,
    MoveDirection,
    OutMode,
} from '@tsparticles/engine'
import { loadSlim } from '@tsparticles/slim'

export function ParticulesFirst() {
    const [init, setInit] = useState(false)

    // this should be run only once per application lifetime
    useEffect(() => {
        initParticlesEngine(async (engine) => {
            // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
            // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
            // starting from v2 you can add only the features you need reducing the bundle size
            //await loadAll(engine);
            //await loadFull(engine);
            await loadSlim(engine)
            //await loadBasic(engine);
        }).then(() => {
            setInit(true)
        })
    }, [])

    const particlesLoaded = async (container?: Container): Promise<void> => {
        console.log(container)
    }

    const options: ISourceOptions = useMemo(
        () => ({
            background: {
                color: {
                    value: 'transparent',
                },
            },
            fullScreen: false,
            fpsLimit: 120,
            interactivity: {
                events: {
                    onClick: {
                        enable: false,
                        mode: 'push',
                    },
                    onHover: {
                        enable: false,
                        mode: 'repulse',
                    },
                },
                modes: {
                    push: {
                        quantity: 4,
                    },
                    repulse: {
                        distance: 200,
                        duration: 0.4,
                    },
                },
            },
            particles: {
                reduceDuplicates: true,
                color: {
                    value: '#ffffff',
                },
                links: {
                    color: '#ffffff',
                    distance: 3000,
                    enable: true,
                    opacity: 0.15,
                    width: 1,
                },
                collisions: {
                    enable: true,
                    mode: 'bounce',
                },
                move: {
                    direction: MoveDirection.none,
                    enable: true,
                    outModes: {
                        default: OutMode.bounce,
                    },
                    random: false,
                    speed: 0.12,
                    straight: false,
                },
                number: {
                    density: {
                        enable: false,
                    },
                    value: 4,
                },
                shape: {
                    type: 'image',
                    options: {
                        image: [
                            {
                                src: '/images/wordpress-white.svg',
                                width: 1,
                                height: 1,
                            },
                            {
                                src: '/images/javascript-white.svg',
                                width: 1,
                                height: 1,
                            },
                            {
                                src: '/images/react-white.svg',
                                width: 1,
                                height: 1,
                            },
                            {
                                src: '/images/next-white.png',
                                width: 1,
                                height: 1,
                            },
                        ],
                    },
                },
                size: {
                    value: {
                        min: 15,
                        max: 45,
                    },
                },
            },
            detectRetina: true,
        }),
        []
    )

    return (
        <Particles
            id="first"
            className="h-full w-full"
            particlesLoaded={particlesLoaded}
            options={options}
        />
    )
}
