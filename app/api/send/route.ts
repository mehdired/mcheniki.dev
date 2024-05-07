import { formSchema } from './../../../components/Form/validation'
import { EmailTemplate } from '@/components/EmailTemplate'
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request: Request) {
    try {
        const formData = await request.formData()
        const formValues = {
            name: formData.get('name') as string,
            email: formData.get('email') as string,
            message: formData.get('message') as string,
        }

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

        return Response.json({
            status: 'success',
            name: formValues.name,
            email: formValues.email,
            message: formValues.message,
            data,
        })
    } catch (error) {
        return Response.json({ error })
    }
}

export const dynamic = 'force-static'
