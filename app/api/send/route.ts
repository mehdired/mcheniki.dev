import { formSchema } from './../../../components/Form/validation'
import { EmailTemplate } from '@/components/EmailTemplate'
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)
const secretKey = process?.env?.RECAPTCHA_SECRET_KEY

export async function POST(request: Request) {
    const { name, email, message, gRecaptchaToken } = await request.json()

    const formValues = {
        name,
        email,
        message,
    }

    const formDataReCaptcha = `secret=${secretKey}&response=${gRecaptchaToken}`

    let responseRecaptcha: any
    try {
        responseRecaptcha = await fetch(
            'https://www.google.com/recaptcha/api/siteverify',
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                },
                body: formDataReCaptcha,
            }
        )
        const data = await responseRecaptcha.json()

        if (data?.success && data?.score > 0.5) {
            const send = await sendEmail(formValues)

            return Response.json(send)
        } else {
            console.log('fail: res.data?.score:', responseRecaptcha.data?.score)
            return Response.json({
                success: false,
                score: responseRecaptcha.data?.score,
            })
        }
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

export const dynamic = 'force-static'
