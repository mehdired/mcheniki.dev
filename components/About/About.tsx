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
                    Hello, I'm Mehdi, a developer for almost 10 years. Over the
                    years, I've explored different work environments that have
                    enabled me to be versatile in different technologies. It was
                    through various projects that I became an expert in custom
                    WordPress development.
                </p>
                <p>
                    While continuing my work as a WordPress developer, I
                    explored the world of JavaScript, where I've continued to
                    grow over the past few years.
                </p>
            </div>
            <div className="lg:flex-1">
                <Scene />
            </div>
        </Container>
    )
}
