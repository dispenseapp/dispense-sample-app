import 'server-only'

import localFont from 'next/font/local'
import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/next'
import { QueryClient, dehydrate } from '@tanstack/react-query'

import './globals.css'
import StyledComponentsRegistry from '@/components/registry'
import TopNav from '@/components/TopNav'
import Providers from './providers'
import { QueryClientKey } from '@/utils/queryClient'
import AppInit from './AppInit'
import venueService from '@/api/venueService'
import { Suspense } from 'react'

if (!process.env.NEXT_PUBLIC_ENV) throw new Error('NEXT_PUBLIC_ENV')
if (!process.env.NEXT_PUBLIC_AUTH_COOKIE)
  throw new Error('NEXT_PUBLIC_AUTH_COOKIE')
if (!process.env.NEXT_PUBLIC_DISPENSE_BASE_URL)
  throw new Error('NEXT_PUBLIC_DISPENSE_BASE_URL')
if (!process.env.NEXT_PUBLIC_DISPENSE_VENUE_ID)
  throw new Error('NEXT_PUBLIC_DISPENSE_VENUE_ID')
if (!process.env.NEXT_PUBLIC_DISPENSE_API_KEY)
  throw new Error('NEXT_PUBLIC_DISPENSE_API_KEY')

const font1 = localFont({
  src: [
    {
      path: '../fonts/Gotham-Book.woff2',
      weight: 'normal',
      style: 'normal',
    },
    {
      path: '../fonts/Gotham-Bold.woff2',
    },
  ],
  display: 'swap',
  variable: '--font-family-primary',
})
const font2 = localFont({
  src: '../fonts/GentyDemo-Regular.woff2',
  display: 'swap',
  variable: '--font-family-secondary',
})

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const venue = await venueService.getById(
    process.env.NEXT_PUBLIC_DISPENSE_VENUE_ID!
  )

  const queryClient = new QueryClient()

  queryClient.setQueryData(QueryClientKey.VENUE, venue)

  return (
    <html lang="en" className={`${font1.variable} ${font2.variable}`}>
      <body>
        <StyledComponentsRegistry>
          <Providers dehydratedState={dehydrate(queryClient)}>
            <AppInit />
            <TopNav />
            <Suspense>{children}</Suspense>
          </Providers>
        </StyledComponentsRegistry>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  )
}
