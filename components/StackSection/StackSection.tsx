'use client'

import Image from 'next/image'
import { Container } from '../Container'
import { ParticulesBack } from '../StackParticules/ParticulesBack'
import CardStack from './CardStack'
import IconWP from '@/svgs/wp.svg'
import TechConstellation from './StackConstellation'

export function StackSection() {
    return (
        <>
            <Container>
                <header className="mb-32 lg:flex lg:justify-between lg:gap-48">
                    <h2 className="mb-32 text-48 font-semibold uppercase italic leading-[0.9] tracking-tighter md:text-clamp-h2 lg:mb-0">
                        <span className="block text-primary-500">Stack</span>
                        <span className="text-stroke-primary text-transparent">
                            Technique
                        </span>
                    </h2>
                    <p className="text-base text-base-100 md:text-25">
                        Des technologies modernes et éprouvées, combinant
                        performance et facilité d'utilisation. Notre stack
                        WordPress, PHP et JavaScript offre puissance et
                        flexibilité pour des sites web sur mesure, adaptés à vos
                        besoins spécifiques.
                    </p>
                </header>
            </Container>

            <div className="relative aspect-square max-h-[753px] w-full overflow-hidden rounded-32 md:aspect-video md:min-h-[350px]">
                <div className="absolute left-0 top-0 -z-10 h-full w-full">
                    <ParticulesBack />
                </div>
                <TechConstellation />
                {/* <div className="radialParticule absolute left-0 top-0 z-10 h-full w-full">
                    <div className="absolute left-0 top-1/2 w-full animate-mini-mehdi-x">
                        <Image
                            src="/images/mini-mehdi.webp"
                            alt="Floated mehdi"
                            width={77}
                            height={86}
                            className="animate-float"
                        />
                    </div>
                </div>
                <div className="flex">
                    <div className="absolute left-[10%] top-1/2 z-10 h-full max-h-[556px] -translate-y-1/2 py-32">
                        <div className="aspect-[447/556] h-full bg-stack-frame bg-cover bg-no-repeat p-12">
                            <CardStack
                                title="WordPress"
                                description="WordPress est un système de gestion de contenu (CMS) open source qui permet de gérer facilement votre site web. Il est conçu pour être intuitif et facile à utiliser, avec une interface utilisateur moderne et intuitive."
                                icon={
                                    <IconWP
                                        className="block fill-base-50"
                                        width="80"
                                        height="80"
                                    />
                                }
                            />
                        </div>
                    </div>
                    <div className="relative h-full w-1/2 flex-1 basis-1/2">

                    </div>
                </div> */}
            </div>
        </>
    )
}
