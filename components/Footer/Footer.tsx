import { Container } from '../Container'
import IconGithub from '@/svgs/github.svg'
import IconMail from '@/svgs/mail.svg'
import IconStar from '@/svgs/star.svg'

export function Footer() {
    return (
        <footer className="mt-96">
            <Container>
                <div className="flex flex-col items-center justify-between gap-48 rounded-32 bg-base-600 px-64 py-24 text-base-600 md:flex-row">
                    <ul className="flex gap-24">
                        <li>
                            <a
                                href="mailto:contact@mcheniki.dev"
                                className="text-base-50"
                            >
                                <IconMail className="h-24 w-24 fill-current" />
                                <span className="sr-only">Send an email</span>
                            </a>
                        </li>
                        <li>
                            <a href="#" className="text-base-50">
                                <IconGithub className="h-24 w-24 fill-current" />
                                <span className="sr-only">
                                    Go to the Github
                                </span>
                            </a>
                        </li>
                    </ul>
                    <p className="text-center text-base-50">
                        Mehdi Cheniki
                        <br />
                        <span className="text-base-200">
                            Front-end developer
                        </span>
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
                </div>
                <p className="flex items-center justify-center gap-6 py-24 text-12 text-base-100">
                    Developed by{' '}
                    <span className="underline">Mehdi Cheniki</span>
                    <IconStar className="fill-current" />
                    Designed by{' '}
                    <a
                        href="https://elkhantour.com"
                        target="_blank"
                        className="underline"
                    >
                        Nassim El Khantour
                    </a>
                </p>
            </Container>
        </footer>
    )
}
