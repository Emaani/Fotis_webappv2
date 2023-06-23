import './globals.css'

export const metadata = {
  title: 'Fotis Agro',
  description: 'Agri-Commodity Sourcing, Logistics & Warehousing',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
