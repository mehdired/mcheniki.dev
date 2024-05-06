'use client'

import { Resend } from 'resend'
import { FormGroup } from '../FormGroup/FormGroup'
import { Input } from '../Input/Input'
import { Textarea } from '../Textarea/Textarea'
import { EmailTemplate } from '../EmailTemplate'
import { Cta } from '../Cta/Cta'
import { type FormEvent } from 'react'

export function Form({ ...rest }) {
    const send = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault()

        const formData = new FormData(event.currentTarget)

        const response = await fetch('/api/send', {
            method: 'POST',
            body: formData,
        })

        const data = await response.json()
        console.log(data)
    }

    return (
        <form {...rest} method="post" onSubmit={send}>
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
