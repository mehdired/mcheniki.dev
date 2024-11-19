import { Container } from '../Container'
import { Portal } from '../Portal/Portal'

export function Hero() {
    return (
        <Container className="flex flex-col items-center justify-between gap-32 lg:flex-row">
            <div className="flex-1 flex-grow-0 lg:basis-[50%]">
                <h1 className="mb-12 text-64 font-bold uppercase italic leading-[0.9] tracking-[-0.9rem] md:text-clamp-h1">
                    <span className="block text-primary-500">Mehdi</span>
                    <span className="text-stroke-primary text-transparent">
                        Cheniki
                    </span>
                </h1>
                <p className="mb-24 text-25 font-semibold leading-9">
                    Expert WordPress / Développeur front-end
                </p>
                <p className="text-20 leading-8">
                    Développement WordPress sur mesure pour des sites web
                    performants et uniques
                </p>
            </div>
            <div className="w-full max-w-[570px] flex-1 flex-grow-0 lg:w-auto lg:basis-[570px]">
                <Portal />
            </div>
        </Container>
    )
}
