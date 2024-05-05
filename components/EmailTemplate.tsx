import { FC } from 'react'

type EmailTemplateProps = {
    firstname: string
}

export function EmailTemplate({ firstname }: Readonly<EmailTemplateProps>) {
    return (
        <div>
            <h1>Test email : {firstname} </h1>
        </div>
    )
}
