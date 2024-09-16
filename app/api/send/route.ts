import { formSchema } from './../../../components/Form/validation'
import { EmailTemplate } from '@/components/EmailTemplate'
import { Resend } from 'resend'

export const runtime = 'edge'

const resend = new Resend(process.env.RESEND_API_KEY)
const secretKey = process.env.HCAPTCHA_SECRET_KEY!

export async function POST(request: Request) {
    const { name, email, message, HCaptchaToken } = await request.json()

    const formValues = {
        name,
        email,
        message,
    }

    let responseRecaptcha: any
    try {
        console.log('responseRecaptcha: ', await request.json())
        /* const token = responseRecaptcha.get('captcha')?.toString() || null

        if (!token) {
            return { message: 'Invalid captcha', success: false }
        }

        const { success } = await verify(secretKey, token)

        if (!success) {
            return { message: 'Invalid captcha', success: false }
        }

        const send = await sendEmail(formValues)

        return Response.json(send) */
    } catch (error) {
        return Response.json({ error })
    }
}

async function sendEmail(formValues: {
    name: string
    email: string
    message: string
}) {
    try {
        formSchema.parse(formValues)

        const data = await resend.emails.send({
            from: 'Portfolio <noreply@mcheniki.dev>',
            to: ['contact@mcheniki.dev'],
            subject: 'Contact Form Portfolio',
            react: EmailTemplate({
                firstname: formValues.name,
                email: formValues.email,
                message: formValues.message,
            }),
        })

        return {
            status: 'success',
            name: formValues.name,
            email: formValues.email,
            message: formValues.message,
            data,
        }
    } catch (error) {
        return Response.json({ error })
    }
}
