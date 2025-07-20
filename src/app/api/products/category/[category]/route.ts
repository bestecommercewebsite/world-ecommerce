import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/db'

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

    const products = await prisma.product.findMany({
      where: {
        category: {
          equals: category.toLowerCase()
        },
        isActive: true
      },
      orderBy: {
        createdAt: 'desc'
      }
    })

    return NextResponse.json(products)
  } catch (error) {
    console.error('Error fetching products by category:', error)
    return NextResponse.json(
      { message: 'Internal server error' },
      { status: 500 }
    )
  }
} 