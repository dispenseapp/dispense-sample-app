import 'server-only'

import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/next'
import { Source_Code_Pro } from 'next/font/google'
import { QueryClient, dehydrate } from '@tanstack/react-query'

import './globals.css'
import StyledComponentsRegistry from '@/components/registry'
import TopNav from '@/components/TopNav'
import Providers from './providers'
import { QueryClientKey } from '@/utils/queryClient'
import AppInit from './AppInit'
import venueService from '@/api/venueService'

if (!process.env.NEXT_PUBLIC_ENV) throw new Error('NEXT_PUBLIC_ENV')
if (!process.env.NEXT_PUBLIC_AUTH_COOKIE)
  throw new Error('NEXT_PUBLIC_AUTH_COOKIE')
if (!process.env.NEXT_PUBLIC_DISPENSE_BASE_URL)
  throw new Error('NEXT_PUBLIC_DISPENSE_BASE_URL')
if (!process.env.NEXT_PUBLIC_DISPENSE_VENUE_ID)
  throw new Error('NEXT_PUBLIC_DISPENSE_VENUE_ID')
if (!process.env.NEXT_PUBLIC_DISPENSE_API_KEY)
  throw new Error('NEXT_PUBLIC_DISPENSE_API_KEY')

const font = Source_Code_Pro({
  subsets: ['latin'],
  display: 'swap',
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
    <html lang="en" className={font.className}>
      <body>
        <StyledComponentsRegistry>
          <Providers dehydratedState={dehydrate(queryClient)}>
            <AppInit />
            <TopNav />
            {children}
          </Providers>
        </StyledComponentsRegistry>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  )
}
