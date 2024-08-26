import { Contact } from '@/components/Contact/Contact'
import { Hero } from '@/components/Hero/Hero'
import { StackSection } from '@/components/StackSection/StackSection'
import { About } from '@/components/About/About'
import { Marquee } from '@/components/Marquee/Marquee'

export default function Home() {
    return (
        <main className="min-h-screen pt-48">
            <section className="flex min-h-screen items-center">
                <Hero />
            </section>
            <section className="mb-96 flex items-center">
                <About />
            </section>
            <section className="mb-96">
                <StackSection />
            </section>
            <section className="overflow-hidden pt-64" id="contact">
                <Marquee>
                    <p className="text-64 font-semibold italic text-base-400">
                        ÉCHANGEONS{' '}
                        <span className="text-stroke-secondary text-transparent">
                            ENSEMBLE
                        </span>
                    </p>
                </Marquee>
                <Contact />
            </section>
        </main>
    )
}
