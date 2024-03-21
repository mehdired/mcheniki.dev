import { Cta } from '@/components/Cta/Cta'
import { Container } from '../Container'

export function Header() {
    return (
        <header className="flex items-center justify-between py-12">
            <Container>
                <div>Mehdi</div>
                <nav>
                    <ul className="flex items-center gap-12">
                        <li>
                            <a href="#about">Project</a>
                        </li>
                        <li>
                            <a href="#work">Resume</a>
                        </li>
                        <li>
                            <Cta url="/#contact">Contact</Cta>
                        </li>
                    </ul>
                </nav>
            </Container>
        </header>
    )
}
