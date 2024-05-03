import { Contact } from '@/components/Contact/Contact'
import { Hero } from '@/components/Hero/Hero'
import { StackSection } from '@/components/StackSection/StackSection'
import { About } from '@/components/About/About'

export default function Home() {
    return (
        <main className="min-h-screen">
            <section className="lg:min-h-screen">
                <Hero />
            </section>
            <section className="mb-96 lg:min-h-screen">
                <About />
            </section>
            <section className="mb-96">
                <StackSection />
            </section>
            <section>
                <Contact />
            </section>
        </main>
    )
}
