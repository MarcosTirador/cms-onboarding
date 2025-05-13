import '@/app/globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export const metadata = {
  title: 'Mi Proyecto',
  description: 'Payload + Next + Tailwind',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body className="bg-gray-50 font-sans text-gray-800">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
