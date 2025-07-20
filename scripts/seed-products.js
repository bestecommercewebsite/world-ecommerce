const { PrismaClient } = require('@prisma/client')

const prisma = new PrismaClient()

const sampleProducts = [
  {
    name: 'iPhone 15 Pro',
    description: 'Latest iPhone with advanced camera system and A17 Pro chip',
    price: 999.99,
    images: JSON.stringify(['/products/iphone15.jpeg']),
    category: 'electronics',
    stock: 50
  },
  {
    name: 'MacBook Air M2',
    description: 'Ultra-thin laptop with M2 chip for incredible performance',
    price: 1199.99,
    images: JSON.stringify(['/products/macbookairm2.jpeg']),
    category: 'computers',
    stock: 30
  },
  {
    name: 'Sony WH-1000XM5',
    description: 'Premium noise-cancelling wireless headphones',
    price: 349.99,
    images: JSON.stringify(['/products/sony-wh-1000xm5.jpeg']),
    category: 'audio',
    stock: 25
  },
  {
    name: 'Canon EOS R6',
    description: 'Full-frame mirrorless camera for professional photography',
    price: 2499.99,
    images: JSON.stringify(['/products/canon-eos-r6.jpeg']),
    category: 'cameras',
    stock: 15
  },
  {
    name: 'Apple Watch Series 9',
    description: 'Advanced smartwatch with health monitoring features',
    price: 399.99,
    images: JSON.stringify(['/products/apple-watch-series-9.jpeg']),
    category: 'watches',
    stock: 40
  },
  {
    name: 'PlayStation 5',
    description: 'Next-generation gaming console with 4K graphics',
    price: 499.99,
    images: JSON.stringify(['/products/playstation-5.jpeg']),
    category: 'gaming',
    stock: 20
  },
  {
    name: 'The Art of Computer Programming',
    description: 'Comprehensive guide to computer programming by Donald Knuth',
    price: 89.99,
    images: JSON.stringify(['/products/the-art-of-computer-programming.jpeg']),
    category: 'books',
    stock: 100
  },
  {
    name: 'Nike Air Max 270',
    description: 'Comfortable running shoes with Air Max technology',
    price: 129.99,
    images: JSON.stringify(['/products/nike-air-max-270.jpeg']),
    category: 'shoes',
    stock: 75
  },
  {
    name: 'Levi\'s 501 Original Jeans',
    description: 'Classic straight-fit jeans in authentic denim',
    price: 59.99,
    images: JSON.stringify(['/products/jeans.jpeg']),
    category: 'clothing',
    stock: 200
  },
  {
    name: 'Apple AirPods Pro',
    description: 'Wireless earbuds with active noise cancellation',
    price: 249.99,
    images: JSON.stringify(['/products/apple-airpods-pro.jpeg']),
    category: 'accessories',
    stock: 60
  }
]

async function seedProducts() {
  try {
    console.log('🌱 Seeding products...')
    
    for (const product of sampleProducts) {
      await prisma.product.create({
        data: product
      })
      console.log(`✅ Created product: ${product.name}`)
    }
    
    console.log('🎉 All products seeded successfully!')
  } catch (error) {
    console.error('❌ Error seeding products:', error)
  } finally {
    await prisma.$disconnect()
  }
}

seedProducts() 