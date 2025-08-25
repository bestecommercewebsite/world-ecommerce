const { PrismaClient } = require('@prisma/client')

const prisma = new PrismaClient()

const furnitureProducts = [
  {
    name: "Modern L-Shaped Sectional Sofa",
    description: "Contemporary L-shaped sectional sofa with premium fabric upholstery. Perfect for family gatherings and movie nights. Features deep seating and removable covers for easy cleaning.",
    price: 1299.99,
    category: "living-room",
    stock: 15,
    images: JSON.stringify([
      "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=800",
      "https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?w=800",
      "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800"
    ])
  },
  {
    name: "Queen Size Platform Bed Frame",
    description: "Minimalist queen size platform bed with wooden frame and upholstered headboard. Includes under-bed storage and easy assembly. Perfect for modern bedrooms.",
    price: 599.99,
    category: "bedroom",
    stock: 25,
    images: JSON.stringify([
      "https://images.unsplash.com/photo-1505693314120-0d443867891c?w=800",
      "https://images.unsplash.com/photo-1505693314120-0d443867891c?w=800",
      "https://images.unsplash.com/photo-1505693314120-0d443867891c?w=800"
    ])
  },
  {
    name: "Extendable Dining Table Set",
    description: "6-8 person extendable dining table with 6 matching chairs. Made from solid oak wood with a natural finish. Perfect for family dinners and entertaining guests.",
    price: 899.99,
    category: "dining-room",
    stock: 12,
    images: JSON.stringify([
      "https://images.unsplash.com/photo-1615066390971-03e4e1c36ddf?w=800",
      "https://images.unsplash.com/photo-1615066390971-03e4e1c36ddf?w=800",
      "https://images.unsplash.com/photo-1615066390971-03e4e1c36ddf?w=800"
    ])
  },
  {
    name: "Ergonomic Office Chair",
    description: "High-back ergonomic office chair with adjustable height, lumbar support, and breathable mesh back. Perfect for long work hours and home offices.",
    price: 299.99,
    category: "office",
    stock: 30,
    images: JSON.stringify([
      "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800",
      "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800",
      "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800"
    ])
  },
  {
    name: "Modern Floor Lamp",
    description: "Contemporary floor lamp with adjustable head and LED bulb. Features a sleek metal base and fabric shade. Perfect for living rooms and reading corners.",
    price: 149.99,
    category: "lighting",
    stock: 40,
    images: JSON.stringify([
      "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=800",
      "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=800",
      "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=800"
    ])
  },
  {
    name: "Storage Cabinet with Drawers",
    description: "Versatile storage cabinet with multiple drawers and shelves. Made from engineered wood with a white finish. Perfect for organizing any room.",
    price: 399.99,
    category: "storage",
    stock: 20,
    images: JSON.stringify([
      "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800",
      "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800",
      "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800"
    ])
  },
  {
    name: "Decorative Wall Mirror",
    description: "Round decorative wall mirror with gold frame. Perfect for entryways, living rooms, or bedrooms. Adds elegance and makes spaces appear larger.",
    price: 89.99,
    category: "decor",
    stock: 35,
    images: JSON.stringify([
      "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=800",
      "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=800",
      "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=800"
    ])
  },
  {
    name: "Handmade Area Rug",
    description: "Handmade wool area rug with geometric pattern. Available in multiple sizes and colors. Adds warmth and texture to any room.",
    price: 199.99,
    category: "rugs",
    stock: 18,
    images: JSON.stringify([
      "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800",
      "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800",
      "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800"
    ])
  },
  {
    name: "Accent Armchair",
    description: "Comfortable accent armchair with velvet upholstery and gold legs. Perfect as a statement piece in living rooms or bedrooms.",
    price: 449.99,
    category: "living-room",
    stock: 22,
    images: JSON.stringify([
      "https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?w=800",
      "https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?w=800",
      "https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?w=800"
    ])
  },
  {
    name: "Nightstand with USB Port",
    description: "Modern nightstand with built-in USB charging port and drawer storage. Made from engineered wood with a sleek design.",
    price: 179.99,
    category: "bedroom",
    stock: 28,
    images: JSON.stringify([
      "https://images.unsplash.com/photo-1505693314120-0d443867891c?w=800",
      "https://images.unsplash.com/photo-1505693314120-0d443867891c?w=800",
      "https://images.unsplash.com/photo-1505693314120-0d443867891c?w=800"
    ])
  },
  {
    name: "Bar Stools Set",
    description: "Set of 2 modern bar stools with padded seats and chrome legs. Perfect for kitchen islands or home bars.",
    price: 249.99,
    category: "dining-room",
    stock: 15,
    images: JSON.stringify([
      "https://images.unsplash.com/photo-1615066390971-03e4e1c36ddf?w=800",
      "https://images.unsplash.com/photo-1615066390971-03e4e1c36ddf?w=800",
      "https://images.unsplash.com/photo-1615066390971-03e4e1c36ddf?w=800"
    ])
  },
  {
    name: "Standing Desk",
    description: "Electric standing desk with memory presets and cable management. Perfect for home offices and promotes better posture.",
    price: 699.99,
    category: "office",
    stock: 10,
    images: JSON.stringify([
      "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800",
      "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800",
      "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800"
    ])
  },
  {
    name: "Pendant Light Fixture",
    description: "Industrial-style pendant light fixture with Edison bulb. Perfect for dining rooms, kitchens, or entryways.",
    price: 129.99,
    category: "lighting",
    stock: 25,
    images: JSON.stringify([
      "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=800",
      "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=800",
      "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=800"
    ])
  },
  {
    name: "Bookshelf with Ladder",
    description: "Tall bookshelf with sliding ladder and multiple shelves. Made from solid wood with a rustic finish. Perfect for home libraries.",
    price: 549.99,
    category: "storage",
    stock: 8,
    images: JSON.stringify([
      "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800",
      "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800",
      "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800"
    ])
  },
  {
    name: "Wall Art Canvas",
    description: "Abstract wall art canvas with vibrant colors. Stretched canvas ready to hang. Adds personality and color to any room.",
    price: 79.99,
    category: "decor",
    stock: 45,
    images: JSON.stringify([
      "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=800",
      "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=800",
      "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=800"
    ])
  },
  {
    name: "Runner Rug",
    description: "Traditional runner rug with Persian-inspired design. Perfect for hallways, entryways, or alongside beds.",
    price: 159.99,
    category: "rugs",
    stock: 20,
    images: JSON.stringify([
      "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800",
      "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800",
      "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800"
    ])
  }
]

async function main() {
  console.log('Starting to seed furniture products...')

  // Clear existing products
  await prisma.product.deleteMany()

  // Create new furniture products
  for (const product of furnitureProducts) {
    await prisma.product.create({
      data: product
    })
  }

  console.log('Furniture products seeded successfully!')
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  }) 