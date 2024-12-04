import { useRef, useState, type FormEvent } from 'react';
import HCaptcha from '@hcaptcha/react-hcaptcha';

import { FormGroup } from './FormGroup';
import { Input } from './Input';
import { Textarea } from './Textarea';
import { CtaReact } from './CtaReact';

import IconRocket from '@svgs/rocket.svg?react';
import { formSchema, type FormattedErrors } from './validation';

const siteKey = import.meta.env.PUBLIC_HCAPTCHA_SITE_KEY!;

export function Form({ ...rest }) {
    const [sending, setSending] = useState(false);
    const [errorEmail, setErrorEmail] = useState<FormattedErrors>();
    const [success, setSuccess] = useState(false);
    const captchaRef = useRef<HCaptcha | null>(null);
    const [captchaToken, setCaptchaToken] = useState<string | null>(null);

    const onVerify = (token: string) => setCaptchaToken(token);

    const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        if (!captchaToken) {
            console.log('Execute recaptcha not available yet');
            return;
        }
        console.log('captchaToken: ', captchaToken);

        const target = event.currentTarget;
        send(target);
    };

    const send = async (target: HTMLFormElement) => {
        setSending(true);

        const formData = new FormData(target);

        const formValues = {
            name: formData.get('name'),
            email: formData.get('email'),
            message: formData.get('message'),
            HCaptchaToken: captchaToken,
        };
        const validate = formSchema.safeParse(formValues);

        if (validate.success) {
            try {
                const sendResponse = await fetch('/api/contact', {
                    method: 'POST',
                    headers: {
                        Accept: 'application/json',
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(formValues),
                });

                if (sendResponse.ok) {
                    const sendData = await sendResponse.json();
                    setSuccess(true);
                } else {
                    console.error("Erreur lors de l'envoi du formulaire");
                }
            } catch (error) {
                console.error('ERROR : ', error);
            }
        } else {
            setErrorEmail(validate.error.format());
        }

        setSending(false);

        captchaRef.current?.resetCaptcha();
        setCaptchaToken(null);
    };

    return (
        <>
            {success ? (
                <p className="flex-1 self-center text-center font-jetbrains">
                    <span className="text-36 font-bold text-primary-500">
                        Merci pour ton message!
                    </span>
                    <br />
                    <span className="text-25 font-semibold">
                        Je reviens vers toi dès que j'ai fini mon café! <br />
                    </span>
                    <span aria-hidden="true" className="text-48">
                        &#9749;
                    </span>
                </p>
            ) : (
                <form {...rest} method="post" onSubmit={handleSubmit} noValidate autoComplete="off">
                    <div className="flex items-center gap-12 max-md:flex-col">
                        <FormGroup name="nom" className="w-full flex-1">
                            <Input type="text" id="name" name="name" required="required" />
                            {errorEmail && (
                                <span className="absolute left-0 top-full text-12 font-bold text-error-500">
                                    {errorEmail?.name?._errors[0]}
                                </span>
                            )}
                        </FormGroup>
                        <FormGroup name="e-mail" className="w-full flex-1">
                            <Input type="email" id="email" name="email" required="required" />
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
                    <HCaptcha sitekey={siteKey} ref={captchaRef} onVerify={onVerify} theme="dark" />

                    <div className="mt-24 flex">
                        <CtaReact disabled={sending || captchaToken === null}>
                            <IconRocket
                                className={`fill-current ${sending ? 'animate-shake' : ''}`}
                            />
                            Envoyer
                        </CtaReact>
                    </div>
                </form>
            )}
        </>
    );
}
