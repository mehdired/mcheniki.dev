import { NextResponse } from 'next/server'

export async function POST(request: Request, response: Response) {
    const secretKey = process?.env?.RECAPTCHA_SECRET_KEY

    const postData = await request.json()
    const { gRecaptchaToken, firstName, lastName, email, hearFromSponsors } =
        postData

    console.log(
        'gRecaptchaToken,firstName,lastName,email,hearFromSponsors:',
        gRecaptchaToken?.slice(0, 10) + '...',
        firstName,
        lastName,
        email,
        hearFromSponsors
    )

    let res: any
    const formData = `secret=${secretKey}&response=${gRecaptchaToken}`
    try {
        res = await fetch('https://www.google.com/recaptcha/api/siteverify', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: formData,
        })
    } catch (e) {
        console.log('recaptcha error:', e)
    }

    if (res && res.data?.success && res.data?.score > 0.5) {
        // Save data to the database from here
        console.log(
            'Saving data to the database:',
            firstName,
            lastName,
            email,
            hearFromSponsors
        )
        console.log('res.data?.score:', res.data?.score)

        return NextResponse.json({
            success: true,
            firstName,
            lastName,
            score: res.data?.score,
        })
    } else {
        console.log('fail: res.data?.score:', res.data?.score)
        return NextResponse.json({
            success: false,
            name,
            score: res.data?.score,
        })
    }
}