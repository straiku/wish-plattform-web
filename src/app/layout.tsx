import { Metadata } from 'next'

import './globals.css'

export const metadata: Metadata = {
  title: 'WishFactory',
  description: 'The plattform that build the world with aspirations.',
  icons: {
    icon: '/vite.svg',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body>
        <div id="root">{children}</div>
      </body>
    </html>
  )
}
