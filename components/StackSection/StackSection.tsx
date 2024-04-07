import { Container } from '../Container'
import { StackCard } from '../StackCard/StackCard'
import IconWP from '@/svgs/wp.svg'

export function StackSection() {
    return (
        <Container>
            <header className="lg:flex lg:justify-between lg:gap-48">
                <h2 className="mb-32 text-96 font-semibold uppercase italic leading-[0.9] lg:mb-0">
                    <span className="block text-primary-500">Technical</span>
                    <span className="text-stroke text-transparent">Stack</span>
                </h2>
                <p className="text-25 text-base-100">
                    Faucibus cras ornare tristique adipiscing. Non morbi eros
                    vivamus interdum orci viverra ultrices blandit.
                </p>
            </header>

            <StackCard
                icon={IconWP}
                name="Wordpress"
                description="Augue sit habitant odio consectetur tempor. Senectus sit vel auctor dui. Bibendum lorem tortor est urna pharetra nunc praesent a. Praesent vitae ultrices ornare dignissim purus elit eget."
            />
        </Container>
    )
}
