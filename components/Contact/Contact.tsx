import { Form } from '@/components/Form/Form'
import Mail from '@/svgs/mail.svg'
import { Container } from '../Container'

export function Contact() {
    return (
        <Container className="mt-64 md:flex md:gap-64">
            <div className="mb-32 md:mb-0 md:basis-4/12">
                <h2 className="mb-32 text-48 font-semibold uppercase italic text-primary-500 md:text-clamp-h2">
                    Contact
                </h2>
                <p className="mb-32">
                    Want to work with me? Want to say hi?<br />
                    Feel free to use the form.
                </p>
                <address>
                    <a
                        href="mailto:mehdi.cheniki@gmail.com"
                        className="mb-12 flex items-center gap-6"
                    >
                        <Mail className="h-12 w-12 fill-current" />
                        contact@mcheniki.dev
                    </a>
                </address>
            </div>
            <Form className="md:basis-3/5" />
        </Container>
    )
}
