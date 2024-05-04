import { Container } from '../Container'
import { Scene } from '../ThreeScene/Scene'

export function About() {
    return (
        <Container className="flex flex-col items-center justify-between gap-32 lg:flex-row-reverse">
            <div className="max-lg:w-full lg:flex-1">
                <h2 className="mb-12 text-36 text-base-50">
                    <span className="mr-[10px] inline-block bg-primary-500 px-[10px]">
                        Extensive
                    </span>
                    web experiences
                </h2>
                <p className="mb-12">
                    Hello. I'm Mehdi, a developer with over 10 years of
                    extensive experience. Throughout my journey, I have explored
                    various work environments, allowing me to become highly
                    versatile and proficient in multiple technologies. The broad
                    amount of projects I got to work on also made me an{' '}
                    <strong>
                        expert in tailor-made WordPress development.
                    </strong>
                </p>
                <p>
                    I combine those sharp WordPress proficiencies with{' '}
                    <strong>strong JavaScript skills</strong> to keep on
                    providing optimized, fast, and up-to-date digital products.
                </p>
            </div>
            <div className="lg:flex-1">
                <Scene />
            </div>
        </Container>
    )
}
