import { type Metadata } from 'next'

import { Analytics } from '@vercel/analytics/react'
import { Providers } from '@/app/providers'
import { Layout } from '@/components/Layout'

import '@/styles/tailwind.css'

export const metadata: Metadata = {
  title: {
    template: '%s - Mateo Ivan Radman',
    default:
      'Mateo Ivan Radman - Software developer and open-source enthusiast',
  },
  description:
    'I’m Mateo, a software developer and entrepreneur based Croatia.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="h-full antialiased" suppressHydrationWarning>
      <body className="flex h-full bg-zinc-50 dark:bg-black">
        <Providers>
          <div className="flex w-full">
            <Layout>
              {children}
              <Analytics />
            </Layout>
          </div>
        </Providers>
      </body>
    </html>
  )
}
