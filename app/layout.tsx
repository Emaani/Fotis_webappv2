import ProviderWrapper from './global/components/ProviderWrapper'
import './globals.css'
import 'react-toastify/dist/ReactToastify.css';

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
      <body>
        <ProviderWrapper>
          {children}
        </ProviderWrapper>
      </body>
    </html>
  )
}
