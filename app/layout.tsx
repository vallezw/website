import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Analytics } from "@vercel/analytics/react";
import { Newsreader } from "next/font/google";
import { cn } from "@/lib/utils";
import Quote from "@/components/quote";
import LocalTime from "@/components/time";
import Link from "next/link";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Valentin Zwerschke",
  description: "Musician & Developer",
  metadataBase: new URL("https://vallezw.dev"),
  icons: '/z-logo.png',
  openGraph: {
    images: [
      {
        url: "/api/og",
        alt: "Valentin Zwerschke",
      },
    ],
  },
};

const newsreader = Newsreader({
  subsets: ["latin"],
  style: ["normal", "italic"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={GeistSans.className}>
        <Analytics />
        {process.env.NODE_ENV === "production" && (
          <Script
            src="https://cdn.seline.so/seline.js"
            data-token="52947f744a8a4fa"
            async
          />
        )}
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <div className="bg-background flex overflow-y-auto items-center px-5 gap-3 sm:px-24 h-[calc(100dvh)] justify-center selection:text-primary-foreground selection:bg-primary">
            {/* Max width container */}
            <div className="flex flex-col justify-between h-full w-full gap-10 max-w-2xl">
              <div className="space-y-10">
                {/* Header */}
                <header className="transition-all animate-enter inline-flex flex-col pt-5 sm:pt-24 w-full">
                  <Link href="/">Valentin Zwerschke</Link>
                  <span
                    className={cn(
                      newsreader.className,
                      "text-secondary-foreground "
                    )}
                  >
                    Musician & Developer
                  </span>
                </header>
                <main className="flex flex-col gap-10 w-full h-fit">
                  {children}
                </main>
              </div>
              {/* Footer */}
              <div className="w-full max-w-2xl justify-between flex items-start pt-2 animate-enter delay-200 min-h-[50px] sm:min-h-[116px]">
                <Quote />
                <LocalTime />
              </div>
            </div>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
