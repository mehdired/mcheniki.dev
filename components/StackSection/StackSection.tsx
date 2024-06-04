import Image from 'next/image'
import { Container } from '../Container'
import { ParticulesBack } from '../StackParticules/ParticulesBack'
import { ParticulesFirst } from '../StackParticules/ParticulesFirst'

export function StackSection() {
    return (
        <>
            <Container>
                <header className="mb-32 lg:flex lg:justify-between lg:gap-48">
                    <h2 className="mb-32 text-48 font-semibold uppercase italic leading-[0.9] md:text-clamp-h2 lg:mb-0">
                        <span className="block text-primary-500">
                            Technical
                        </span>
                        <span className="text-stroke-primary text-transparent">
                            Stack
                        </span>
                    </h2>
                    {/* <p className="text-25 text-base-100">
                        Faucibus cras ornare tristique adipiscing. Non morbi
                        eros vivamus interdum orci viverra ultrices blandit.
                    </p> */}
                </header>

                <div className="relative aspect-square max-h-[753px] overflow-hidden rounded-32 border-1 border-base-50 md:aspect-video md:min-h-[350px]">
                    <div className="absolute left-0 top-0 -z-10 h-full w-full">
                        <ParticulesBack />
                    </div>
                    <div className="radialParticule absolute left-0 top-0 z-10 h-full w-full">
                        <div className='absolute left-0 top-1/2 animate-mini-mehdi-x w-full'>
                            <Image src="/images/mini-mehdi.webp" alt='Floated mehdi' width={77} height={86} className='animate-float' />
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
