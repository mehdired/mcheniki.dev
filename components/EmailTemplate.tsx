import { FC } from 'react'

type EmailTemplateProps = {
    firstname: string
    email: string
    message: string
}

export function EmailTemplate({
    firstname,
    email,
    message,
}: Readonly<EmailTemplateProps>) {
    return (
        <div>
            <h1>Formulaire contact</h1>
            <p>First name: {firstname}</p>
            <p>Email: {email}</p>
            <p>
                message: <br />
                {message}
            </p>
        </div>
    )
}
