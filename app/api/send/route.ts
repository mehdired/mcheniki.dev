import { EmailTemplate } from '@/components/EmailTemplate'
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request: Request) {
    try {
        const formData = await request.formData()
        const name = formData.get('name') as string
        const email = formData.get('email') as string
        const message = formData.get('message') as string

        const data = await resend.emails.send({
            from: 'Portfolio <noreply@mcheniki.dev>',
            to: ['contact@mcheniki.dev'],
            subject: 'Contact Form Portfolio',
            react: EmailTemplate({ firstname: name, email, message }),
        })

        return Response.json({ status: 'success', name, email, data })
    } catch (error) {
        return Response.json({ error })
    }
}

export const dynamic = 'force-static'
