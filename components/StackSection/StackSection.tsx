import { Container } from '../Container'

export function StackSection() {
    return (
        <Container className="lg:flex lg:justify-between lg:gap-48">
            <h2 className="text-96 mb-32 font-semibold uppercase italic leading-[0.9] lg:mb-0">
                <span className="block text-primary-500">Technical</span>
                <span className="text-stroke text-transparent">Stack</span>
            </h2>
            <p className="text-25 text-base-100">
                Faucibus cras ornare tristique adipiscing. Non morbi eros
                vivamus interdum orci viverra ultrices blandit.
            </p>
        </Container>
    )
}
