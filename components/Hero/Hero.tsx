import { Container } from '../Container'
import Image from 'next/image'

export function Hero() {
    return (
        <Container className="flex flex-col items-center justify-between gap-32 lg:flex-row">
            <div>
                <h1 className="md:text-clamp-158 mb-12 text-64 font-bold uppercase italic leading-[0.9]">
                    <span className="block text-primary-500">Mehdi</span>
                    <span className="text-stroke text-transparent">
                        Cheniki
                    </span>
                </h1>
                <p className="text-25 font-semibold leading-9">
                    Expert Wordpress / Frontend Developer
                </p>
            </div>
            <div>
                <Image
                    src="/images/hero-img.png"
                    alt="Mehdi Cheniki"
                    width={480}
                    height={740}
                />
            </div>
        </Container>
    )
}
