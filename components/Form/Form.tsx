'use client'

import { useState, type FormEvent } from 'react'

import { FormGroup } from '../FormGroup/FormGroup'
import { Input } from '../Input/Input'
import { Textarea } from '../Textarea/Textarea'
import { Cta } from '../Cta/Cta'

import IconRocket from '@/svgs/rocket.svg'

export function Form({ ...rest }) {
    const [sending, setSending] = useState(false)

    const send = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault()

        setSending(true)

        const formData = new FormData(event.currentTarget)

        const response = await fetch('/api/send', {
            method: 'POST',
            body: formData,
        })

        const data = await response.json()
        setSending(false)

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

            <div className="mt-24 flex justify-end">
                <Cta disabled={sending}>
                    <IconRocket
                        className={`fill-current ${sending ? 'animate-shake' : ''}`}
                    />
                    send
                </Cta>
            </div>
        </form>
    )
}
