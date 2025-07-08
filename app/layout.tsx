import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { ScrollToTop } from "@/components/scroll-to-top"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "ChessCoin 0.32% - Strategic Cryptocurrency",
  description:
    "Cryptocurrency built on strategic thinking and efficient blockchain technology using PoS mechanism.",
  generator: "",
  icons: {
    icon: "/favicon.ico", // /public path
    shortcut: "/favicon.ico",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="dark" disableTransitionOnChange>
          {children}
          <ScrollToTop />
        </ThemeProvider>
      </body>
    </html>
  )
}
