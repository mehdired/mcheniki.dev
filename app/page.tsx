import { Contact } from '@/components/Contact/Contact'
import { Hero } from '@/components/Hero/Hero'

export default function Home() {
    return (
        <main className="min-h-screen">
            <section className="mb-96">
                <Hero />
            </section>

            <section>
                <Contact />
            </section>
        </main>
    )
}
