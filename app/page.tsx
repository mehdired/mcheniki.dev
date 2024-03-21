import { Cta } from '@/components/Cta/Cta'

export default function Home() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
            <Cta url="/about" indent="secondary">
                label
            </Cta>
        </main>
    )
}
