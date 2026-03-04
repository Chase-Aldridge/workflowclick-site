import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import '@/styles/globals.css'
import { AudienceProvider } from '@/context/AudienceContext'
import { AudienceGate } from '@/components/AudienceGate'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { SchemaScript } from '@/components/shared/SchemaScript'
import { getOrganizationSchema } from '@/lib/schema'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
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
    <html lang="en" className={inter.variable}>
      <body>
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
