'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { useParams } from 'next/navigation'
import { ArrowLeft, ShoppingCart, Star, Heart } from 'lucide-react'
import { useCartStore } from '@/lib/store/cart'

// Category mapping for display names
const categoryLabels: Record<string, string> = {
  electronics: 'Electronics',
  computers: 'Computers & Laptops',
  audio: 'Audio & Headphones',
  cameras: 'Cameras & Photography',
  watches: 'Watches & Jewelry',
  gaming: 'Gaming',
  books: 'Books & Media',
  clothing: 'Clothing & Fashion',
  shoes: 'Shoes & Footwear',
  accessories: 'Accessories',
}

interface Product {
  id: string
  name: string
  description: string
  price: number
  images: string
  category: string
  stock: number
  isActive: boolean
  createdAt: string
  updatedAt: string
}

export default function CategoryPage() {
  const params = useParams()
  const slug = params.slug as string
  const [products, setProducts] = useState<Product[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const { addItem } = useCartStore()

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true)
        const response = await fetch(`/api/products/category/${slug}`)
        
        if (!response.ok) {
          throw new Error('Failed to fetch products')
        }
        
        const products = await response.json()
        setProducts(products)
        
        if (products.length === 0) {
          setError('No products found in this category')
        }
      } catch (error) {
        console.error('Error fetching products:', error)
        setError('Failed to load products')
      } finally {
        setLoading(false)
      }
    }

    if (slug) {
      fetchProducts()
    }
  }, [slug])

  const handleAddToCart = (product: Product) => {
    addItem({
      id: product.id,
      name: product.name,
      price: product.price,
      image: JSON.parse(product.images)[0] || ''
    })
  }

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
    }).format(price)
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
            <p className="mt-4 text-gray-600">Loading products...</p>
          </div>
        </div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gray-50 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="bg-white rounded-lg shadow-md p-8 max-w-md mx-auto">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Category Not Found</h2>
              <p className="text-gray-600 mb-6">{error}</p>
              <Link
                href="/categories"
                className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
              >
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Categories
              </Link>
            </div>
          </div>
        </div>
      </div>
    )
  }

  const categoryLabel = categoryLabels[slug] || slug.charAt(0).toUpperCase() + slug.slice(1)

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <Link
            href="/categories"
            className="inline-flex items-center text-blue-600 hover:text-blue-700 mb-4"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Categories
          </Link>
          <h1 className="text-4xl font-bold text-gray-900 mb-2">
            {categoryLabel}
          </h1>
          <p className="text-lg text-gray-600">
            {products.length} {products.length === 1 ? 'product' : 'products'} available
          </p>
        </div>

        {/* Products Grid */}
        {products.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {products.map((product) => {
              const images = JSON.parse(product.images)
              const mainImage = images[0] || '/placeholder-product.jpg'
              
              return (
                <div
                  key={product.id}
                  className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden"
                >
                  {/* Product Image */}
                  <div className="aspect-w-1 aspect-h-1 w-full">
                    <img
                      src={mainImage}
                      alt={product.name}
                      className="w-full h-48 object-cover"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement
                        target.src = '/placeholder-product.jpg'
                      }}
                    />
                  </div>

                  {/* Product Info */}
                  <div className="p-4">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2 line-clamp-2">
                      {product.name}
                    </h3>
                    <p className="text-gray-600 text-sm mb-3 line-clamp-2">
                      {product.description}
                    </p>
                    
                    {/* Price and Rating */}
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-xl font-bold text-gray-900">
                        {formatPrice(product.price)}
                      </span>
                      <div className="flex items-center">
                        <Star className="h-4 w-4 text-yellow-400 fill-current" />
                        <span className="text-sm text-gray-600 ml-1">4.5</span>
                      </div>
                    </div>

                    {/* Stock Status */}
                    <div className="mb-4">
                      {product.stock > 0 ? (
                        <span className="text-sm text-green-600">
                          In Stock ({product.stock} available)
                        </span>
                      ) : (
                        <span className="text-sm text-red-600">
                          Out of Stock
                        </span>
                      )}
                    </div>

                    {/* Action Buttons */}
                    <div className="flex space-x-2">
                      <button
                        onClick={() => handleAddToCart(product)}
                        disabled={product.stock === 0}
                        className="flex-1 bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 disabled:bg-gray-400 disabled:cursor-not-allowed transition-colors duration-200 flex items-center justify-center"
                      >
                        <ShoppingCart className="h-4 w-4 mr-2" />
                        Add to Cart
                      </button>
                      <button className="p-2 border border-gray-300 rounded-md hover:bg-gray-50 transition-colors duration-200">
                        <Heart className="h-4 w-4 text-gray-600" />
                      </button>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        ) : (
          <div className="text-center py-12">
            <div className="bg-white rounded-lg shadow-md p-8 max-w-md mx-auto">
              <h3 className="text-lg font-medium text-gray-900 mb-2">
                No Products Found
              </h3>
              <p className="text-gray-500 mb-4">
                We don&apos;t have any products in the {categoryLabel} category yet.
              </p>
              <Link
                href="/categories"
                className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
              >
                Browse Other Categories
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  )
} 