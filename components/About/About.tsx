import { Container } from '../Container'
import { Scene } from '../ThreeScene/Scene'

export function About() {
    return (
        <Container className="flex flex-col items-center justify-between gap-32 lg:flex-row-reverse">
            <div className="max-lg:w-full lg:flex-1">
                <h2 className="mb-12 text-36 text-base-50">
                    <span className="mr-[10px] inline-block bg-primary-500 px-[10px]">
                        10 ans
                    </span>
                    d'expertise web
                </h2>
                <p className="mb-12 leading-6">
                    Salut, moi c'est Mehdi,
                    <br />
                    Développeur web spécialisé en WordPress avec plus de 10 ans
                    d'expérience. Mon expertise réside dans la création de{' '}
                    <strong>sites WordPress sur mesure</strong>, conçus from
                    scratch. Ma polyvalence technique, acquise à travers divers
                    projets et environnements, me permet de fournir des
                    solutions WordPress optimisées et parfaitement adaptées aux
                    besoins de chaque client.
                </p>
                <p className="leading-6">
                    Je combine mes compétences approfondies en WordPress avec
                    une <strong>maîtrise avancée de JavaScript</strong> pour
                    créer des sites web performants, évolutifs et faciles à
                    maintenir
                </p>
            </div>
            <div className="max-lg:w-full max-lg:max-w-[464px] lg:flex-1">
                <Scene />
            </div>
        </Container>
    )
}
