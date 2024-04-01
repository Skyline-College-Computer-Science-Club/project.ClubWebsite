import './globals.css'

import { Poppins } from 'next/font/google';

import Navbar from '../components/Navbar'

const poppins = Poppins({
    subsets: ['latin'],
    display: 'swap',
    variable: '--font-poppins',
    weight: ['500']
});

export const metadata = {
    title: 'Computer Science @ Skyline',
    description: 'A description must go here! Somebody please!',
}

export default function RootLayout({ children }: { children: React.ReactNode }) : React.ReactNode {
    return (
        <html className={`${poppins.variable}`}>
            <body>
                <Navbar />
                {children}
            </body>
        </html>
    )
}