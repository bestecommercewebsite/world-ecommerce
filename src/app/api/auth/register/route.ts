import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const { name, email, password } = await request.json()

    // Validation
    if (!name || !email || !password) {
      return NextResponse.json(
        { message: 'Missing required fields' },
        { status: 400 }
      )
    }

    if (password.length < 6) {
      return NextResponse.json(
        { message: 'Password must be at least 6 characters long' },
        { status: 400 }
      )
    }

    // For demo purposes, we'll just return success
    // In a real app, you'd want to store users in a database
    return NextResponse.json(
      { 
        message: 'Registration successful! Please sign in with the demo credentials.',
        demoCredentials: {
          admin: { email: 'admin@example.com', password: 'admin123' },
          user: { email: 'user@example.com', password: 'user123' }
        }
      },
      { status: 201 }
    )
  } catch (error) {
    console.error('Registration error:', error)
    return NextResponse.json(
      { message: 'Internal server error' },
      { status: 500 }
    )
  }
} 