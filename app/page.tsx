import { Contact } from '@/components/Contact/Contact'
import { Hero } from '@/components/Hero/Hero'
import { StackSection } from '@/components/StackSection/StackSection'
import { Scene } from '@/components/ThreeScene/Scene'

export default function Home() {
    return (
        <main className="min-h-screen">
            <section className="mb-96">
                <Hero />
            </section>
            <section className="mb-96">
                <Scene />
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
