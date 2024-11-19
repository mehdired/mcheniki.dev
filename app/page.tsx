import { Contact } from '@/components/Contact/Contact'
import { Hero } from '@/components/Hero/Hero'
import { StackSection } from '@/components/StackSection/StackSection'
import { About } from '@/components/About/About'
import { Marquee } from '@/components/Marquee/Marquee'

export default function Home() {
    return (
        <main className="min-h-screen pt-128 lg:pt-48">
            <section className="mb-96 flex min-h-screen items-center md:mb-0">
                <Hero />
            </section>
            <section className="mb-96 flex items-center">
                <About />
            </section>
            <section className="mb-96">
                <StackSection />
            </section>
            <section>
                <Marquee>
                    <p className="text-48 font-semibold italic text-base-400 md:text-64">
                        ÉCHANGEONS{' '}
                        <span className="text-stroke-secondary text-transparent">
                            ENSEMBLE
                        </span>
                    </p>
                </Marquee>
            </section>
            <section className="mt-96 overflow-hidden" id="contact">
                <Contact />
            </section>
        </main>
    )
}
