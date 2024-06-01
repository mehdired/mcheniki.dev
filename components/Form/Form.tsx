'use client'

import { useState, type FormEvent } from 'react'
import { useGoogleReCaptcha } from 'react-google-recaptcha-v3'

import { FormGroup } from '../FormGroup/FormGroup'
import { Input } from '../Input/Input'
import { Textarea } from '../Textarea/Textarea'
import { Cta } from '../Cta/Cta'

import IconRocket from '@/svgs/rocket.svg'
import { formSchema, type FormattedErrors } from './validation'

export function Form({ ...rest }) {
    const [sending, setSending] = useState(false)
    const [errorEmail, setErrorEmail] = useState<FormattedErrors>()
    const [success, setSuccess] = useState(false)
    const { executeRecaptcha } = useGoogleReCaptcha()

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault()

        if (!executeRecaptcha) {
            console.log('Execute recaptcha not available yet')
            return
        }

        const target = event.currentTarget

        executeRecaptcha('enquiryFormSubmit').then((gReCaptchaToken) => {
            send(target, gReCaptchaToken)
        })
    }

    const send = async (target: HTMLFormElement, gReCaptchaToken: string) => {
        setSending(true)

        const formData = new FormData(target)

        const formValues = {
            name: formData.get('name'),
            email: formData.get('email'),
            message: formData.get('message'),
            gRecaptchaToken: gReCaptchaToken,
        }
        const validate = formSchema.safeParse(formValues)

        if (validate.success) {
            try {
                const sendResponse = await fetch('/api/send', {
                    method: 'POST',
                    headers: {
                        Accept: 'application/json',
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(formValues),
                })
                console.log('FORM : ', sendResponse)
                const sendData = await sendResponse.json()
                setSuccess(true)
            } catch (error) {
                console.log('ERROR : ', error)
            }
        } else {
            setErrorEmail(validate.error.format())
        }

        setSending(false)
    }

    return (
        <>
            {success ? (
                <p>SENDED</p>
            ) : (
                <form
                    {...rest}
                    method="post"
                    onSubmit={handleSubmit}
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
            )}
        </>
    )
}
