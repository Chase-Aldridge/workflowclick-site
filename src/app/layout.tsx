import type { Metadata } from 'next'
import { Rajdhani } from 'next/font/google'
import Script from 'next/script'
import '@/styles/globals.css'
import { AudienceProvider } from '@/context/AudienceContext'
import { AudienceGate } from '@/components/AudienceGate'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { SchemaScript } from '@/components/shared/SchemaScript'
import { getOrganizationSchema } from '@/lib/schema'

const rajdhani = Rajdhani({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-heading',
  display: 'swap',
})

export const metadata: Metadata = {
  title: {
    default: 'WorkflowClick | Done-For-You Cold Email for Insurance',
    template: '%s | WorkflowClick',
  },
  description:
    'We build and manage your entire cold email infrastructure for insurance agencies and insurtech companies. Domain warming, email authentication, psychology-driven copy, and qualified meetings delivered to your calendar.',
  metadataBase: new URL('https://workflowclick.com'),
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
    ],
    apple: '/apple-touch-icon.png',
  },
  manifest: '/site.webmanifest',
  openGraph: {
    title: 'WorkflowClick | Done-For-You Cold Email for Insurance',
    description:
      'Get qualified meetings on your calendar every week. Done-for-you cold email infrastructure for insurance agencies and insurtech companies.',
    url: 'https://workflowclick.com',
    siteName: 'WorkflowClick',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={rajdhani.variable}>
      <head>
        {/* Critical inline styles - render-blocking, available before any external CSS */}
        <style
          dangerouslySetInnerHTML={{
            __html: `
              #gate-backdrop{position:fixed;top:0;left:0;right:0;bottom:0;z-index:60;background:#0a0d1a}
              html.app-ready #gate-backdrop{display:none}
              html:not(.app-ready) header,html:not(.app-ready) main,html:not(.app-ready) footer{visibility:hidden}
            `,
          }}
        />
        {/* Synchronous bypass-path check - runs before body paints */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){var p=location.pathname;if(/^\\/(privacy|terms|contact|blog|about|review)/.test(p)){document.documentElement.classList.add('app-ready')}})()`,
          }}
        />
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-HTDGWW4N3W"
          strategy="afterInteractive"
        />
        <Script id="gtag-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-HTDGWW4N3W');
          `}
        </Script>
      </head>
      <body className="bg-dark">
        {/* Static backdrop - covers viewport from first paint, no external CSS needed */}
        <div id="gate-backdrop" />
        <AudienceProvider>
          <SchemaScript schema={getOrganizationSchema()} />
          <AudienceGate />
          <Header />
          <main>{children}</main>
          <Footer />
        </AudienceProvider>
      </body>
    </html>
  )
}
