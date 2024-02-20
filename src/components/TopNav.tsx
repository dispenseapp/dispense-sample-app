'use client'

import React, { useEffect } from 'react'
import styled from 'styled-components'
import Link from 'next/link'
import Image from 'next/image'
import { useRouter } from 'next/navigation'

import Container from './Container'
import { imageUrl } from '@/utils/image'
import SlideOutPanel from './SlideOutPanel'
import Icon from './Icon'
import useVenue from '@/hooks/useVenue'
import useCart from '@/hooks/useCart'
import Badge from './Badge'
import cartService from '@/api/cartService'
import Cart from './Cart'

// import Icon from './Icon'
// import Badge from './Badge'
// import useCart from 'src/hooks/useCart'
// import { getTotalItemCount } from 'src/utils/cartUtils'
// import Cart from 'src/components/Cart'
// import SlideOutPanel from './SlideOutPanel'
// import Image from './Image'
// import router from 'src/router'

const topNavLinks = [
  {
    name: 'Shop',
    path: '/shop',
  },
]

const TopNavEl = styled.div`
  height: 70px;
  box-shadow: 0px -1px 0px 0px var(--card-border-color) inset;
`

const TopNavContainer = styled(Container)`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 20px;
  padding-block: 0;
  height: 100%;
`

const Logo = styled(Link)`
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 100%;

  img {
    height: 50px !important;
    position: relative !important;
  }
`

const LeftCol = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 100%;
  gap: 20px;
`

const RightCol = styled.div`
  margin-left: auto;
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 100%;
  gap: 20px;
`

const Links = () => {
  return (
    <div
      style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}
    >
      {topNavLinks.map((l) => {
        return (
          <Link key={l.path} href={l.path}>
            {l.name}
          </Link>
        )
      })}
    </div>
  )
}

export default function TopNav() {
  const router = useRouter()
  const q_venue = useVenue()
  const q_cart = useCart()
  const [cartSlideOutOpen, setCartSlideOutOpen] = React.useState(false)

  useEffect(() => {
    setCartSlideOutOpen(false)
  }, [router])

  return (
    <>
      <TopNavEl>
        <TopNavContainer>
          <LeftCol>
            <Logo href="/">
              <Image
                alt={`${q_venue?.data?.name} logo`}
                src={imageUrl(q_venue?.data?.logo ?? '', {
                  height: '50px',
                })}
                fill
                loading="lazy"
              />
            </Logo>
            <Links />
          </LeftCol>
          <RightCol>
            <Icon type="SEARCH" />
            <a
              href="#"
              // css={css`
              //   display: flex;
              //   flex-direction: row;
              //   gap: 4px;
              //   align-items: center;
              //   justify-content: center;
              // `}
              onClick={(e) => {
                e.preventDefault()

                setCartSlideOutOpen(true)
              }}
            >
              <Icon type="CART" />
              {q_cart?.data?.items && q_cart?.data?.items.length ? (
                <Badge
                  style={{ position: 'absolute', top: '14px', right: '10px' }}
                  variant="primary"
                >
                  {cartService.getTotalItemCount()}
                </Badge>
              ) : null}
            </a>
          </RightCol>
        </TopNavContainer>
      </TopNavEl>
      <SlideOutPanel
        width="600px"
        open={cartSlideOutOpen}
        onClose={() => setCartSlideOutOpen(false)}
      >
        <Cart />
      </SlideOutPanel>
    </>
  )
}
