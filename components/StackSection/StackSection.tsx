import Image from 'next/image'
import { Container } from '../Container'
import { ParticulesBack } from '../StackParticules/ParticulesBack'
import { ParticulesFirst } from '../StackParticules/ParticulesFirst'

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

                <div className="relative aspect-square max-h-[753px] overflow-hidden rounded-32 border-1 border-base-50 md:aspect-video md:min-h-[350px]">
                    <div className="absolute left-0 top-0 -z-10 h-full w-full">
                        <ParticulesBack />
                    </div>
                    <div className="radialParticule absolute left-0 top-0 z-10 h-full w-full">
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
                    <div className="absolute left-1/2 top-1/2 z-20 h-[90%] w-1/2 -translate-x-1/2 -translate-y-1/2">
                        <ParticulesFirst />
                    </div>
                </div>
            </Container>
        </>
    )
}
