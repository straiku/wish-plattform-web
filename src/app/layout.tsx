import { Metadata } from 'next'

import './globals.css'

export const metadata: Metadata = {
  title: 'WishFactory',
  description: 'The plattform that build the world with aspirations.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <head>
        <link rel="icon" type="image/svg+xml" href="/vite.svg" />
      </head>
      <body>
        <div id="root">{children}</div>
      </body>
    </html>
  )
}
