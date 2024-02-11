import { Product } from '@/types'
import { request } from './apiClient'

type ProductsResponse = {
  data: Product[]
  count: number
}

export const listProducts = async (params: {
  venueId: string
  limit?: number
}): Promise<ProductsResponse> => {
  return request<ProductsResponse>({
    type: 'GET',
    path: '/products',
    params,
  })
}

export const getProductById = async (
  id: string,
  params: {
    venueId: string
  }
): Promise<Product> => {
  return request<Product>({
    type: 'GET',
    path: `/products/${id}`,
    params,
  })
}
