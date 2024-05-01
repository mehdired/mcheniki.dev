import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { useFrame, useLoader, useThree } from '@react-three/fiber'

import * as THREE from 'three'
import { useEffect } from 'react'
import { clamp } from './utils'
import TWEEN from '@tweenjs/tween.js'

export function Avatar({ mode = 'DESKTOP', state = 'DEFAULT' }) {
    const { scene, animations } = useLoader(
        GLTFLoader,
        './avatar/mehdinaut.gltf'
    )

    const mixer = new THREE.AnimationMixer(scene)
    const { viewport } = useThree()

    void mixer
        .clipAction(animations.find((item) => item.name === 'Baked-floating'))
        .play()

    useFrame((state, delta) => {
        mixer.update(delta)
        TWEEN.update()
    })

    useEffect(() => {
        let head
        const onMouseMove = ({ clientX, clientY }) => {
            const { innerWidth, innerHeight } = window
            //put epicenter to 1/4 of screen width to be centered with canvas
            let xPos =
                (-1 * (innerWidth / (mode === 'MOBILE' ? 2 : 4) - clientX)) /
                    innerWidth -
                0.3
            let yPos = (-1 * (innerHeight / 2 - clientY)) / innerHeight + 0.2

            //need to put Tween within set timeout else Chrome issue
            setTimeout(() => {
                new TWEEN.Tween(head.rotation)
                    .to(
                        {
                            y: clamp(-0.8, 0.8)(xPos),
                            z: -1 * clamp(-0.1, 0.2)(yPos),
                            x: -1 * head.rotation.z,
                        },
                        300
                    )
                    .easing(TWEEN.Easing.Quintic.Out)
                    .start()
            }, 10)
        }

        const startAnimation = () => {
            //get head armature Bone
            scene.traverse(
                (item) =>
                    item.name === 'head' &&
                    item.type === 'Bone' &&
                    void (head = item)
            )

            if (head) {
                window.addEventListener('mousemove', onMouseMove)
            }
        }

        switch (state) {
            case 'INIT':
                startAnimation()

                new TWEEN.Tween(scene.scale)
                    .to({ x: 1, y: 1, z: 1 }, 1500)
                    .easing(TWEEN.Easing.Quintic.Out)
                    .start()

                new TWEEN.Tween(scene.rotation)
                    .to({ x: 0, y: 0, z: 0 }, 1500)
                    .easing(TWEEN.Easing.Quintic.Out)
                    .start()

                break

            case 'OFF':
            default:
                scene.scale.set(0, 0, 0)
                scene.rotation.set(0, Math.PI, 0)
        }

        ;() => window.removeEventListener('mousemove', onMouseMove)
    }, [scene, mode, state])

    return (
        <primitive
            object={scene}
            position={[0, -1, 0]}
            scale={viewport.width / 8}
        />
    )
}
