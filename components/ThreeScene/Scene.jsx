'use client'

//Core components
import { Canvas } from '@react-three/fiber'
import { Bloom } from '@react-three/postprocessing'
import { KernelSize, Resolution } from 'postprocessing'

//Model
import { Avatar } from './Avatar'
import { useEffect, useRef, useState } from 'react'
import { ViewportWatcher } from '@/components/ViewportWatcher'

export function Scene() {
    const [play, setPlay] = useState(true)
    const [init, setInit] = useState(false)
    const container = useRef()

    useEffect(() => {
        const checkPosition = () =>
            container.current?.getBoundingClientRect().top < 40 && setInit(true)

        window.addEventListener('scroll', checkPosition)
        checkPosition()
        ;() => window.removeEventListener('scroll', checkPosition)
    }, [])

    return (
        <ViewportWatcher
            innerRef={container}
            onEnter={() => setPlay(true)}
            onExit={() => setPlay(false)}
        >
            <div
                className="relative h-[496px] items-center justify-center lg:h-[80dvh]"
                data-active={init}
                ref={container}
            >
                <div className="absolute left-1/2 top-1/2 aspect-square max-h-[446px] w-full max-w-[446px] -translate-x-1/2 -translate-y-1/2 rounded-[50%] bg-secondary-500">
                    <span className=" absolute left-1/2 top-1/2 z-[1] h-[80%] w-[80%] -translate-x-1/2 -translate-y-1/2 rounded-[50%] bg-secondary-400"></span>
                    <span className=" absolute left-1/2 top-1/2 z-[2] h-[60%] w-[60%] -translate-x-1/2 -translate-y-1/2 rounded-[50%] bg-secondary-300"></span>
                    <span className=" absolute left-1/2 top-1/2 z-[3] h-[40%] w-[40%] -translate-x-1/2 -translate-y-1/2 rounded-[50%] bg-secondary-200"></span>
                </div>
                <Canvas
                    camera={{ fov: 60, position: [-4, 3, 6] }}
                    frameloop={play ? 'always' : 'never'}
                    className="mx-auto max-h-[900px] max-w-[380px] lg:max-w-[580px]"
                >
                    <ambientLight intensity={4} color={'#FFF3F0'} />
                    <spotLight
                        position={[10, 10, 10]}
                        angle={0.15}
                        penumbra={0.1}
                        decay={0}
                        intensity={14}
                        color={'#00E1FF'}
                    />
                    <spotLight
                        position={[-10, -10, -10]}
                        angle={-0.15}
                        penumbra={0.1}
                        decay={0}
                        intensity={40}
                        color={'#FF6A00'}
                    />
                    <Avatar
                        state={init ? 'INIT' : 'OFF'}
                        mode="DESKTOP" // DESKTOP | MOBILE (flemme de typescript lol)
                    />
                    <Bloom
                        intensity={3.0} // The bloom intensity.
                        blurPass={undefined} // A blur pass.
                        kernelSize={KernelSize.LARGE} // blur kernel size
                        luminanceThreshold={0.2} // luminance threshold. Raise this value to mask out darker elements in the scene.
                        luminanceSmoothing={0.025} // smoothness of the luminance threshold. Range is [0, 1]
                        mipmapBlur={false} // Enables or disables mipmap blur.
                        resolutionX={Resolution.AUTO_SIZE} // The horizontal resolution.
                        resolutionY={Resolution.AUTO_SIZE} // The vertical resolution.
                    />
                </Canvas>
            </div>
        </ViewportWatcher>
    )
}
