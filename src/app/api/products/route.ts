import { NextResponse } from 'next/server'

// Static furniture product data
const products = [
  {
    id: '1',
    name: 'Modern L-Shaped Sectional Sofa',
    description: 'Comfortable and stylish sectional sofa perfect for family gatherings and movie nights.',
    price: 1299.99,
    images: JSON.stringify([
      'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=600',
      'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=600'
    ]),
    category: 'living-room',
    stock: 15,
    isActive: true,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
  },
  {
    id: '2',
    name: 'Queen Size Platform Bed Frame',
    description: 'Elegant platform bed frame with built-in storage and modern design.',
    price: 899.99,
    images: JSON.stringify([
      'https://images.unsplash.com/photo-1505693314120-0d443867891c?w=600'
    ]),
    category: 'bedroom',
    stock: 25,
    isActive: true,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
  },
  {
    id: '3',
    name: 'Solid Wood Dining Table',
    description: 'Beautiful solid wood dining table that seats 6-8 people comfortably.',
    price: 799.99,
    images: JSON.stringify([
      'https://images.unsplash.com/photo-1615066390971-03e4e1c36ddf?w=600'
    ]),
    category: 'dining-room',
    stock: 20,
    isActive: true,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
  },
  {
    id: '4',
    name: 'Ergonomic Office Chair',
    description: 'Premium ergonomic office chair with adjustable features for maximum comfort.',
    price: 449.99,
    images: JSON.stringify([
      'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=600'
    ]),
    category: 'office',
    stock: 35,
    isActive: true,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
  },
  {
    id: '13',
    name: 'Floor Lamp with Shelves',
    description: 'Multi-functional floor lamp with built-in shelves for books and decor.',
    price: 179.99,
    images: JSON.stringify([
      'https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=600'
    ]),
    category: 'lighting',
    stock: 25,
    isActive: true,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
  },
  {
    id: '14',
    name: 'Accent Armchair',
    description: 'Stylish accent armchair with velvet upholstery and gold-finished legs.',
    price: 399.99,
    images: JSON.stringify([
      'https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?w=600'
    ]),
    category: 'living-room',
    stock: 20,
    isActive: true,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
  },
  {
    id: '15',
    name: 'Coffee Table with Storage',
    description: 'Modern coffee table with hidden storage compartment and sleek design.',
    price: 249.99,
    images: JSON.stringify([
      '/products/coffe-table.jpeg'
    ]),
    category: 'living-room',
    stock: 30,
    isActive: true,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
  },
  {
    id: '16',
    name: 'Console Table',
    description: 'Elegant console table perfect for entryways and hallways with decorative details.',
    price: 189.99,
    images: JSON.stringify([
      '/products/console-table.jpeg'
    ]),
    category: 'storage',
    stock: 18,
    isActive: true,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
  }
]

export async function GET() {
  try {
    return NextResponse.json(products)
  } catch (error) {
    console.error('Error fetching products:', error)
    return NextResponse.json(
      { message: 'Internal server error' },
      { status: 500 }
    )
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { name, description, price, images, category, stock } = body

    // Validation
    if (!name || !description || !price || !category) {
      return NextResponse.json(
        { message: 'Missing required fields' },
        { status: 400 }
      )
    }

    // For demo purposes, we'll just return success
    // In a real app, you'd want to store products in a database
    const newProduct = {
      id: Date.now().toString(),
      name,
      description,
      price: parseFloat(price),
      images: JSON.stringify(images || []),
      category,
      stock: parseInt(stock) || 0,
      isActive: true,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    }

    return NextResponse.json(
      { message: 'Product created successfully (demo mode)', product: newProduct },
      { status: 201 }
    )
  } catch (error) {
    console.error('Error creating product:', error)
    return NextResponse.json(
      { message: 'Internal server error' },
      { status: 500 }
    )
  }
} 