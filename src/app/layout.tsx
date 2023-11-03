import '@/styles/globals.css'
import { Metadata } from 'next'
import {Inter} from "next/font/google";

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
    title: 'Posts',
}

export default function RootLayout({
   children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
            <body>
                <main
                    className={`prose prose-a:text-blue-600 hover:prose-a:text-blue-500 flex min-h-screen flex-col m-auto mt-16 ${inter.className}`}
                >
                    {children}
                </main>
            </body>
        </html>
    )
}