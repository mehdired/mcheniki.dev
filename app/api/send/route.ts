import { EmailTemplate } from '@/components/EmailTemplate'
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request: Request) {
    try {
        const formData = await request.formData()
        const name = formData.get('name') as string
        const email = formData.get('email')
        const data = await resend.emails.send({
            from: 'Mehdi <contact@mcheniki.dev>',
            to: ['mehdi.cheniki+test@gmail.com'],
            subject: 'Hello World',
            react: EmailTemplate({ firstname: name }),
        })

        return Response.json({ status: 'success', name, email, data })
    } catch (error) {
        return Response.json({ error })
    }
}

export const dynamic = 'force-static'
