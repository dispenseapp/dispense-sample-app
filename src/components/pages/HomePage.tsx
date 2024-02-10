'use client'

import { ProductsList } from '@/components/ProductsList'
import Hero from '../Hero'
import { Product } from '@/types'
import Typography from '../Typography'
import Image from 'next/image'
import Container from '../Container'
import styled, { css } from 'styled-components'

const categories = [
  {
    name: 'Flower',
    image: 'https://assets.dispenseapp.com/highscore-cannabis/hs-flower.svg',
  },
  {
    name: 'Vapes',
    image: 'https://assets.dispenseapp.com/highscore-cannabis/hs-vapes.svg',
  },
  {
    name: 'Edibles',
    image: 'https://assets.dispenseapp.com/highscore-cannabis/hs-edibles.svg',
  },
  {
    name: 'Pre Rolls',
    image: 'https://assets.dispenseapp.com/highscore-cannabis/hs-pre-rolls.svg',
  },
  {
    name: 'Topicals',
    image: 'https://assets.dispenseapp.com/highscore-cannabis/hs-topicals.svg',
  },
]

const Section = styled.div`
  margin-inline: auto;
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 40px;
  justify-content: center;
  align-items: center;
  padding: 65px 0;

  @media (min-width: 700px) {
    width: 700px;
  }

  @media (max-width: 700px) {
    width: 100%;
  }
`

export default function HomePage({ products }: { products: Product[] }) {
  return (
    <main>
      <Hero />
      <Section as="section">
        <Typography variant="h2">Shop by Category</Typography>
        <div
          css={css`
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            width: 100%;
          `}
        >
          {categories.map((category) => (
            <div
              key={category.name}
              css={css`
                display: flex;
                flex-direction: column;
                gap: 20px;
                align-items: center;
              `}
            >
              <Image
                src={category.image}
                height={80}
                width={80}
                alt={category.name}
              />
              <Typography variant="h3">{category.name}</Typography>
            </div>
          ))}
        </div>
      </Section>
      <Section>
        <Typography variant="h2">Shop Most Popular</Typography>
      </Section>
      <ProductsList products={products} />
    </main>
  )
}
