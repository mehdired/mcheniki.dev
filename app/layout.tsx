import type { Metadata, Viewport } from 'next'
import { jetbrains, roundo } from '../app/fonts'
import './globals.css'
import { Header } from '@/components/Header/Header'
import { Footer } from '@/components/Footer/Footer'

export const viewport: Viewport = {
    width: 'device-width',
    initialScale: 1,
}

export const metadata: Metadata = {
    metadataBase: new URL('https://mcheniki.dev'),
    alternates: {
        canonical: '/',
    },
    title: 'Mehdi Cheniki | Expert WordPress',
    description:
        'Développement de sites WordPress sur mesure pour des sites web performants et uniques',
    keywords: [
        'Expert WordPress',
        'Développeur frontend',
        'Sites web sur mesure',
    ],
    openGraph: {
        type: 'website',
        siteName: 'Mehdi Cheniki | Expert WordPress',
        url: 'https://mcheniki.dev',
        locale: 'fr_FR',
        title: 'Mehdi Cheniki | Expert WordPress',
        description:
            'Développement de sites WordPress sur mesure pour des sites web performants et uniques',
        images: [
            {
                url: 'https://mcheniki.dev/images/og.webp',
                width: 1200,
                height: 630,
                alt: 'Photo du site de Mehdi Cheniki',
            },
        ],
    },
}

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html lang="fr" className={`${jetbrains.variable} ${roundo.variable}`}>
            <body className="bg-base-800 font-roundo text-base-50">
                <Header />
                {children}
                <Footer />
            </body>
        </html>
    )
}
