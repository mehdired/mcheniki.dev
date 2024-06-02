import { Contact } from '@/components/Contact/Contact'
import { Hero } from '@/components/Hero/Hero'
import { StackSection } from '@/components/StackSection/StackSection'
import { About } from '@/components/About/About'
import RecaptchaWrapper from '@/components/RecaptchaWrapper'
import { Marquee } from '@/components/Marquee/Marquee'

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
            <section className="overflow-hidden pt-64">
                <Marquee>
                    <p className="text-64 font-semibold italic text-base-400">
                        <span className="text-stroke-secondary text-transparent">
                            LET'S GET
                        </span>{' '}
                        IN TOUCH
                    </p>
                </Marquee>
                <RecaptchaWrapper>
                    <Contact />
                </RecaptchaWrapper>
            </section>
        </main>
    )
}
