import '@/styles/globals.css'
import { ReactNode } from 'react'
import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';

export default function RootLayout({ children }: { children: ReactNode }) {
    return (
        <html lang="en">
            <body>
                <Header></Header>
                {children}
                <Footer></Footer>
            </body>
        </html>
    )
}
