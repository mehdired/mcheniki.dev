import { Cta } from '@/components/Cta/Cta'
import { Container } from '../Container'

export function Header() {
    return (
        <header className="flex items-center justify-between py-12">
            <Container className="flex items-center justify-between">
                <p className="font-medium">Mehdi Cheniki</p>

                <nav>
                    <ul className="flex items-center gap-32">
                        <li>
                            <Cta url="/#about" indent="withIcon">
                                project
                            </Cta>
                        </li>
                        <li>
                            <Cta url="/#contact" indent="withIcon">
                                resume
                            </Cta>
                        </li>
                        <li>
                            <Cta url="/#contact">contact me</Cta>
                        </li>
                    </ul>
                </nav>
            </Container>
        </header>
    )
}
