import { Contact } from '@/components/Contact/Contact'
import { Hero } from '@/components/Hero/Hero'
import { StackSection } from '@/components/StackSection/StackSection'
import { About } from '@/components/About/About'
import RecaptchaWrapper from '@/components/RecaptchaWrapper'

export default function Home() {
    return (
        <main className="min-h-screen">
            <section className="flex min-h-screen items-center">
                <Hero />
            </section>
            <section className="mb-96 flex items-center lg:min-h-screen">
                <About />
            </section>
            <section className="mb-96">
                <StackSection />
            </section>
            <section>
                <RecaptchaWrapper>
                    <Contact />
                </RecaptchaWrapper>
            </section>
        </main>
    )
}
