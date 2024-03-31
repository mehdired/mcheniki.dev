import { Form } from '@/components/Form/Form'
import Mail from '@/svgs/mail.svg'
import Phone from '@/svgs/phone.svg'
import { Container } from '../Container'

export function Contact() {
    return (
        <Container className="md:flex md:gap-64">
            <div className="mb-32 md:mb-0 md:basis-4/12">
                <h2 className="text-64 font-semibold uppercase italic text-primary-500">
                    Contact
                </h2>
                <p className="mb-32">
                    Tortor malesuada aliquam odio accumsan maecenas. Sed
                    ullamcorper aliquam vehicula egestas ligula egestas varius.
                </p>
                <address>
                    <a
                        href="mailto:mehdi.cheniki@gmail.com"
                        className="mb-12 flex items-center gap-6"
                    >
                        <Mail className="fill-current" />
                        mehdi.cheniki@gmail.com
                    </a>
                    <a
                        href="tel:16474919798"
                        className="flex items-center gap-6"
                    >
                        <Phone className="fill-current" />
                        647.491.9798
                    </a>
                </address>
            </div>
            <Form className="md:basis-3/5" />
        </Container>
    )
}
