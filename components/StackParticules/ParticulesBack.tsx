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

export function ParticulesBack() {
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
                color: 'transparent',
            },
            detectRetina: false,
            fullScreen: false,
            fpsLimit: 30,
            interactivity: {
                detectsOn: 'canvas',
                events: {
                    resize: true,
                },
            },
            particles: {
                color: {
                    value: '#fff',
                },
                number: {
                    density: {
                        enable: true,
                        area: 1920,
                    },
                    limit: 0,
                    value: 1500,
                },
                opacity: {
                    animation: {
                        enable: true,
                        speed: 0.3,
                        sync: false,
                        count: 1500,
                    },
                    random: {
                        enable: true,
                        minimumValue: 0.05,
                    },
                    value: {
                        min: 0.1,
                        max: 0.8,
                    },
                },
                shape: {
                    type: 'circle',
                },
                size: {
                    value: { min: 1, max: 2 },
                },
            },
        }),
        []
    )

    return (
        <Particles
            id="back"
            className="h-full w-full"
            particlesLoaded={particlesLoaded}
            options={options}
        />
    )
}
