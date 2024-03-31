import { Container } from '../Container'
import IconGithub from '@/svgs/github.svg'
import IconMail from '@/svgs/mail.svg'
import IconPhone from '@/svgs/phone.svg'

export function Footer() {
    return (
        <footer className="mt-96 px-24">
            <Container className="flex flex-col items-center justify-between gap-48 rounded-32 bg-base-600 px-64 py-24 text-base-600 md:flex-row">
                <ul className="flex gap-24">
                    <li>
                        <a href="#" className="text-base-50">
                            <IconMail className="h-24 w-24 fill-current" />
                            <span className="sr-only">Send an email</span>
                        </a>
                    </li>
                    <li>
                        <a href="#" className="text-base-50">
                            <IconPhone className="h-24 w-24 fill-current" />
                            <span className="sr-only">Make a call</span>
                        </a>
                    </li>
                    <li>
                        <a href="#" className="text-base-50">
                            <IconGithub className="h-24 w-24 fill-current" />
                            <span className="sr-only">Go to the Github</span>
                        </a>
                    </li>
                </ul>
                <p className="text-center text-base-50">
                    Mehdi Cheniki
                    <br />
                    <span className="text-base-200">Front-end developer</span>
                </p>
                <nav>
                    <ul>
                        <li>
                            <a href="#" className="text-12 text-base-0">
                                Storybook
                            </a>
                        </li>
                    </ul>
                </nav>
            </Container>
        </footer>
    )
}
