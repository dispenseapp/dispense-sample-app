import styled, { css } from 'styled-components'
import React from 'react'
import { Link } from '@tanstack/react-router'

import { imageUrl } from 'src/sdk'
import Typography from 'src/components/Typography'
import Button from 'src/components/Button'
import Container from 'src/components/Container'
import ProductList from 'src/components/ProductList'

const Hero = styled.div`
  height: 700px;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 100px 0;
  align-items: center;
  justify-content: space-between;
`

export default function HomePage() {
  return (
    <>
      <Hero
        style={{
          backgroundImage: `url(${imageUrl(
            'https://dispense-images.imgix.net/highscore-hero-1.png',
            {
              height: 1200,
            }
          )})`,
        }}
      >
        <Typography
          variant="body"
          as="h1"
          css={css`
            max-width: 600px;
            color: #fff;
            text-align: center;
            text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
            font-size: 60px;
            font-style: normal;
            font-weight: 700;
            line-height: 65px;
          `}
        >
          Blazing Stories. Legendary Strains.
        </Typography>
        <Link to="/shop">
          <Button
            size="default"
            variant="tertiary"
            style={{ paddingInline: '60px' }}
          >
            SHOP
          </Button>
        </Link>
      </Hero>
      <Container>
        <div
          css={css`
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
          `}
        >
          <Typography variant="h2" as="h2" style={{ fontWeight: 'bold' }}>
            Shop by Category
          </Typography>
          <ProductList />
        </div>
      </Container>
    </>
  )
}
