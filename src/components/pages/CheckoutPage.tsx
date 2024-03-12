'use client'

import React from 'react'
import { useRouter } from 'next/navigation'

import useCart from '@/hooks/useCart'

export default function CheckoutPage() {
  const q_cart = useCart()
  const router = useRouter()

  React.useEffect(() => {
    if (!q_cart?.data || !q_cart?.data?.checkoutUrl) {
      router.push('/')
    }
  }, [q_cart?.data])

  React.useEffect(() => {
    window.addEventListener('message', function (e) {
      if (e.data === 'GO_BACK') {
        router.back()
      }
    })
  }, [])

  return (
    <div>
      <iframe
        src={q_cart?.data?.checkoutUrl}
        style={{ width: '100%', height: '100vh', border: 'none' }}
      />
    </div>
  )
}
