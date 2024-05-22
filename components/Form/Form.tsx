'use client'

import { useState, type FormEvent } from 'react'

import { FormGroup } from '../FormGroup/FormGroup'
import { Input } from '../Input/Input'
import { Textarea } from '../Textarea/Textarea'
import { Cta } from '../Cta/Cta'

import IconRocket from '@/svgs/rocket.svg'
import { formSchema, type FormattedErrors } from './validation'

export function Form({ ...rest }) {
    const [sending, setSending] = useState(false)
    const [errorEmail, setErrorEmail] = useState<FormattedErrors>()

    const send = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault()

        setSending(true)

        const formData = new FormData(event.currentTarget)
        const formValues = {
            name: formData.get('name'),
            email: formData.get('email'),
            message: formData.get('message'),
        }
        const validate = formSchema.safeParse(formValues)

        if (validate.success) {
            await fetch('/api/send', {
                method: 'POST',
                body: formData,
            })
        } else {
            setErrorEmail(validate.error.format())
        }

        setSending(false)
    }

    return (
        <form
            {...rest}
            method="post"
            onSubmit={send}
            noValidate
            autoComplete="off"
        >
            <div className="flex items-center gap-12 max-md:flex-col">
                <FormGroup name="name" className="w-full flex-1">
                    <Input
                        type="text"
                        id="name"
                        name="name"
                        required="required"
                    />
                    {errorEmail && (
                        <span className="absolute left-0 top-full text-12 font-bold text-error-500">
                            {errorEmail?.name?._errors[0]}
                        </span>
                    )}
                </FormGroup>
                <FormGroup name="email" className="w-full flex-1">
                    <Input
                        type="email"
                        id="email"
                        name="email"
                        required="required"
                    />
                    {errorEmail && (
                        <span className="absolute left-0 top-full text-12 font-bold text-error-500">
                            {errorEmail?.email?._errors[0]}
                        </span>
                    )}
                </FormGroup>
            </div>
            <FormGroup name="message" className="mt-32">
                <Textarea id="message" required="required" />
                {errorEmail && (
                    <span className="absolute left-0 top-full text-12 font-bold text-error-500">
                        {errorEmail?.message?._errors[0]}
                    </span>
                )}
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
