import type { Metadata } from 'next'
import { jetbrains, roundo } from '../app/fonts'
import './globals.css'
import { Header } from '@/components/Header/Header'
import { Footer } from '@/components/Footer/Footer'

export const metadata: Metadata = {
    title: 'Mehdi Cheniki',
    description: 'Frontend Developer',
}

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html lang="en" className={`${jetbrains.variable} ${roundo.variable}`}>
            <body className="bg-base-800 font-roundo text-base-50">
                <Header />
                {children}
                <Footer />
            </body>
        </html>
    )
}
