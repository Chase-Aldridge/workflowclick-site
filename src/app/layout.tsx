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
