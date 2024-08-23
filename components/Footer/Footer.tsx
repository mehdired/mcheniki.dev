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
                                href="mailto:hello@mcheniki.dev"
                                className="text-base-50"
                            >
                                <IconMail className="h-24 w-24 fill-current" />
                                <span className="sr-only">
                                    Envoyer un e-mail
                                </span>
                            </a>
                        </li>
                        <li>
                            <a
                                href="#"
                                className="text-base-50"
                                target="_blank"
                            >
                                <IconGithub className="h-24 w-24 fill-current" />
                                <span className="sr-only">
                                    Aller sur Github
                                </span>
                            </a>
                        </li>
                    </ul>
                    <p className="text-center text-base-50">
                        Mehdi Cheniki
                        <br />
                        <span className="text-base-200">Expert Wordpress</span>
                    </p>
                    {/*  <nav>
                        <ul>
                            <li>
                                <a
                                    href="/resume_mehdi_cheniki_dev.pdf"
                                    className="text-12 text-base-0"
                                    target="_blank"
                                >
                                    CV
                                </a>
                            </li>
                        </ul>
                    </nav> */}
                </div>
                <p className="flex items-center justify-center gap-6 py-24 text-12 text-base-100 max-md:flex-col">
                    Développé par{' '}
                    <span className="underline">Mehdi Cheniki</span>
                    <IconStar className="fill-current" />
                    Designé par{' '}
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
