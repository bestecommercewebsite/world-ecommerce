import { NextRequest, NextResponse } from 'next/server'

// Import the same static product data
const products = [
  {
    id: '1',
    name: 'iPhone 15 Pro',
    description: 'The latest iPhone with advanced features and stunning design.',
    price: 999.99,
    images: JSON.stringify([
      '/products/iphone15.jpeg',
      '/products/iphone15-2.jpeg'
    ]),
    category: 'electronics',
    stock: 50,
    isActive: true,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
  },
  {
    id: '2',
    name: 'MacBook Air M2',
    description: 'Powerful laptop with Apple M2 chip for ultimate performance.',
    price: 1199.99,
    images: JSON.stringify([
      '/products/macbookairm2.jpeg',
      '/products/macbookairm2-2.jpeg'
    ]),
    category: 'computers',
    stock: 30,
    isActive: true,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
  },
  {
    id: '3',
    name: 'Sony WH-1000XM5',
    description: 'Premium noise-canceling headphones with exceptional sound quality.',
    price: 349.99,
    images: JSON.stringify([
      '/products/sony-wh-1000xm5.jpeg'
    ]),
    category: 'audio',
    stock: 75,
    isActive: true,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
  },
  {
    id: '4',
    name: 'Canon EOS R6',
    description: 'Professional mirrorless camera for stunning photography.',
    price: 2499.99,
    images: JSON.stringify([
      '/products/canon-eos-r6.jpeg'
    ]),
    category: 'cameras',
    stock: 20,
    isActive: true,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
  },
  {
    id: '5',
    name: 'Apple Watch Series 9',
    description: 'Advanced smartwatch with health monitoring and fitness tracking.',
    price: 399.99,
    images: JSON.stringify([
      '/products/apple-watch-series-9.jpeg'
    ]),
    category: 'watches',
    stock: 100,
    isActive: true,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
  },
  {
    id: '6',
    name: 'PlayStation 5',
    description: 'Next-generation gaming console with incredible graphics.',
    price: 499.99,
    images: JSON.stringify([
      '/products/playstation-5.jpeg'
    ]),
    category: 'gaming',
    stock: 25,
    isActive: true,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
  },
  {
    id: '7',
    name: 'Nike Air Max 270',
    description: 'Comfortable running shoes with innovative cushioning technology.',
    price: 129.99,
    images: JSON.stringify([
      '/products/nike-air-max-270.jpeg'
    ]),
    category: 'shoes',
    stock: 200,
    isActive: true,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
  },
  {
    id: '8',
    name: 'The Art of Computer Programming',
    description: 'Comprehensive guide to computer programming by Donald Knuth.',
    price: 89.99,
    images: JSON.stringify([
      '/products/the-art-of-computer-programming.jpeg'
    ]),
    category: 'books',
    stock: 150,
    isActive: true,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
  }
]

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ category: string }> }
) {
  const { category } = await params
  try {

    if (!category) {
      return NextResponse.json(
        { message: 'Category parameter is required' },
        { status: 400 }
      )
    }

    const filteredProducts = products.filter(product => 
      product.category.toLowerCase() === category.toLowerCase() && 
      product.isActive
    )

    return NextResponse.json(filteredProducts)
  } catch (error) {
    console.error('Error fetching products by category:', error)
    return NextResponse.json(
      { message: 'Internal server error' },
      { status: 500 }
    )
  }
} 