import { Resend } from 'resend'
import { FormGroup } from '../FormGroup/FormGroup'
import { Input } from '../Input/Input'
import { Textarea } from '../Textarea/Textarea'
import { EmailTemplate } from '../EmailTemplate'
import { Cta } from '../Cta/Cta'

export function Form({ ...rest }) {
    async function send() {
        'use server'

        const resend = new Resend(process.env.RESEND_API_KEY)

        const { data } = await resend.emails.send({
            from: 'Mehdi <contact@mcheniki.dev>',
            to: ['mehdi.cheniki+test@gmail.com'],
            subject: 'Hello World',
            react: EmailTemplate({ firstname: 'Mehdi' }),
        })

        console.log(data)
    }

    return (
        <form {...rest} action={send}>
            <div className="flex items-center gap-12 max-md:flex-col">
                <FormGroup name="name" className="w-full flex-1">
                    <Input
                        type="text"
                        id="name"
                        name="name"
                        required="required"
                    />
                </FormGroup>
                <FormGroup name="email" className="w-full flex-1">
                    <Input
                        type="email"
                        id="email"
                        name="email"
                        required="required"
                    />
                </FormGroup>
            </div>
            <FormGroup name="message" className="mt-24">
                <Textarea id="message" required="required" />
            </FormGroup>

            <button>send</button>
        </form>
    )
}
