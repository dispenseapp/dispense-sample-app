import 'server-only'

import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/next'
import { Montserrat } from 'next/font/google'

import type { Metadata } from 'next'

import './globals.css'
import StyledComponentsRegistry from '@/lib/registry'
import TopNav from '@/components/TopNav'
import { getVenueById } from '@/api/venueService'
import AppContextProvider from './AppContextProvider'

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

const font = Montserrat({
  subsets: ['latin'],
  display: 'swap',
})

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const venue = await getVenueById(process.env.NEXT_PUBLIC_VENUE_ID!)

  return (
    <html lang="en" className={font.className}>
      <body>
        <StyledComponentsRegistry>
          <AppContextProvider data={JSON.stringify(venue)}>
            <TopNav />
            {children}
          </AppContextProvider>
        </StyledComponentsRegistry>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  )
}
