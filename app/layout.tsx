import type { Metadata } from 'next'
import ProviderWrapper from './global/components/ProviderWrapper'
import './globals.css'
import 'react-toastify/dist/ReactToastify.css';
import Head from 'next/head'

export const metadata: Metadata = {
  title: 'Fotis Agro',
  description: 'Agri-Commodity Sourcing, Logistics & Warehousing',
  // Remove the icons property
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <Head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </Head>
      <body>
        <ProviderWrapper>
          {children}
        </ProviderWrapper>
      </body>
    </html>
  )
}
