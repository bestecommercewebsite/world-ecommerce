'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { ShoppingBag, Smartphone, Laptop, Headphones, Camera, Watch, Gamepad, Book, Shirt, Footprints } from 'lucide-react'

// Define available categories with their icons
const categories = [
  { name: 'electronics', label: 'Electronics', icon: Smartphone, color: 'bg-blue-500' },
  { name: 'computers', label: 'Computers & Laptops', icon: Laptop, color: 'bg-gray-500' },
  { name: 'audio', label: 'Audio & Headphones', icon: Headphones, color: 'bg-purple-500' },
  { name: 'cameras', label: 'Cameras & Photography', icon: Camera, color: 'bg-green-500' },
  { name: 'watches', label: 'Watches & Jewelry', icon: Watch, color: 'bg-yellow-500' },
  { name: 'gaming', label: 'Gaming', icon: Gamepad, color: 'bg-red-500' },
  { name: 'books', label: 'Books & Media', icon: Book, color: 'bg-indigo-500' },
  { name: 'clothing', label: 'Clothing & Fashion', icon: Shirt, color: 'bg-pink-500' },
  { name: 'shoes', label: 'Shoes & Footwear', icon: Footprints, color: 'bg-orange-500' },
  { name: 'accessories', label: 'Accessories', icon: ShoppingBag, color: 'bg-teal-500' },
]

export default function CategoriesPage() {
  const [categoryCounts, setCategoryCounts] = useState<Record<string, number>>({})
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchCategoryCounts = async () => {
      try {
        const response = await fetch('/api/products')
        const products = await response.json()
        
        const counts: Record<string, number> = {}
        products.forEach((product: any) => {
          const category = product.category.toLowerCase()
          counts[category] = (counts[category] || 0) + 1
        })
        
        setCategoryCounts(counts)
      } catch (error) {
        console.error('Error fetching category counts:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchCategoryCounts()
  }, [])

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
            <p className="mt-4 text-gray-600">Loading categories...</p>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Product Categories
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Explore our wide range of products organized by category. Find exactly what you're looking for with our comprehensive selection.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {categories.map((category) => {
            const IconComponent = category.icon
            const productCount = categoryCounts[category.name] || 0
            
            return (
              <Link
                key={category.name}
                href={`/categories/${category.name}`}
                className="group bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
              >
                <div className="p-6 text-center">
                  <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full ${category.color} text-white mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <IconComponent className="h-8 w-8" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors duration-300">
                    {category.label}
                  </h3>
                  <p className="text-sm text-gray-500">
                    {productCount} {productCount === 1 ? 'product' : 'products'}
                  </p>
                </div>
              </Link>
            )
          })}
        </div>

        {/* Empty State */}
        {Object.keys(categoryCounts).length === 0 && (
          <div className="text-center py-12">
            <div className="bg-white rounded-lg shadow-md p-8 max-w-md mx-auto">
              <ShoppingBag className="h-16 w-16 text-gray-400 mx-auto mb-4" />
              <h3 className="text-lg font-medium text-gray-900 mb-2">
                No Products Available
              </h3>
              <p className="text-gray-500 mb-4">
                We don't have any products in our categories yet. Check back soon!
              </p>
              <Link
                href="/products"
                className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
              >
                View All Products
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  )
} 