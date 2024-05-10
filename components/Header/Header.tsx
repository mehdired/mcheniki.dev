'use client'

import { Cta } from '@/components/Cta/Cta'
import { Container } from '../Container'
import Burger from '@/svgs/burger.svg'
import { useState } from 'react'
import ArrowRight from '@/svgs/arrow-right.svg'

export function Header() {
    const [isOpen, setIsOpen] = useState(false)
    const [openClass, setOpenClass] = useState('translate-x-full')

    const openMenu = () => {
        setIsOpen(!isOpen)

        if (!isOpen) {
            setOpenClass('translate-x-1/4')
        } else {
            setOpenClass('translate-x-full')
        }
    }

    return (
        <header className="absolute left-0 top-0 flex w-full items-center justify-between py-12">
            <Container className="flex items-center justify-between">
                <p className="hidden font-medium md:block">Mehdi Cheniki</p>

                <nav
                    className={`fixed left-0 top-0 z-10 h-screen w-full bg-base-800 transition-transform duration-300 ease-out md:h-auto ${openClass} md:relative md:w-auto md:translate-x-0`}
                >
                    <ul className="flex flex-col gap-32 px-24 py-32 md:flex-row md:items-center md:px-0 md:py-0">
                        <li>
                            <Cta url="/#about" indent="withIcon">
                                project
                                <ArrowRight className="fill-current" />
                            </Cta>
                        </li>
                        <li>
                            <Cta url="/#contact" indent="withIcon">
                                resume
                                <ArrowRight className="fill-current" />
                            </Cta>
                        </li>
                        <li>
                            <Cta url="/#contact">contact me</Cta>
                        </li>
                    </ul>
                </nav>
                <button
                    className="relative z-20 ml-auto h-[20px] w-32 md:hidden"
                    onClick={() => {
                        openMenu()
                    }}
                >
                    <div className="sr-only">
                        {isOpen ? 'Close menu' : 'Open menu'}
                    </div>
                    <div
                        aria-hidden="true"
                        className={`absolute top-0 h-[2px] w-full rounded-6 bg-base-0 transition duration-300 ease-out ${
                            isOpen ? 'translate-y-[10px] rotate-45' : ''
                        }`}
                    />
                    <div
                        aria-hidden="true"
                        className={`absolute top-[calc(50%-1px)] h-[2px] w-full rounded-6 bg-base-0 transition duration-300 ease-out ${
                            isOpen ? 'opacity-0' : 'opacity-100'
                        }`}
                    />
                    <div
                        aria-hidden="true"
                        className={`absolute bottom-0 h-[2px] w-full rounded-6 bg-base-0 transition duration-300 ease-out ${
                            isOpen ? '-translate-y-[8px] -rotate-45' : ''
                        }`}
                    />
                </button>
            </Container>
        </header>
    )
}
