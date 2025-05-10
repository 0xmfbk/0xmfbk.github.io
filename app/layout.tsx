import type React from "react"
import "@/app/globals.css"
import { ThemeProvider } from "@/components/theme-provider"

export const metadata = {
  title: "0xmfbk.sec",
  description:
    "Portfolio of Mustafa Faek Banikhalaf, a Cybersecurity Engineer specializing in Penetration Testing & Red Team operations.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/img.ico" type="image/x-icon" />
        <title>0xmfbk.sec</title>
      </head>
      <body>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
