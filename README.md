# Ecommerce Next.js Application

A modern, full-featured ecommerce application built with Next.js 14, TypeScript, Tailwind CSS, and Prisma.

## Features

- 🛍️ **Product Catalog** - Browse and search products with filtering and sorting
- 🛒 **Shopping Cart** - Add, remove, and manage cart items with persistent storage
- 👤 **User Authentication** - Secure sign-up and sign-in with NextAuth.js
- 💳 **Checkout Process** - Complete checkout flow (ready for payment integration)
- 📱 **Responsive Design** - Mobile-first design that works on all devices
- 🎨 **Modern UI** - Beautiful, accessible interface with Tailwind CSS
- 🔒 **Security** - Password hashing, session management, and input validation
- 🗄️ **Database** - SQLite database with Prisma ORM (easily switchable to PostgreSQL/MySQL)

## Tech Stack

- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Database**: SQLite (with Prisma ORM)
- **Authentication**: NextAuth.js
- **State Management**: Zustand
- **Icons**: Lucide React
- **UI Components**: Headless UI

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd ecommerce-app
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env.local
   ```
   
   Add the following to your `.env.local`:
   ```env
   DATABASE_URL="file:./dev.db"
   NEXTAUTH_SECRET="your-secret-key-here"
   NEXTAUTH_URL="http://localhost:3000"
   ```

4. **Set up the database**
   ```bash
   npx prisma generate
   npx prisma db push
   ```

5. **Run the development server**
   ```bash
   npm run dev
   ```

6. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## Project Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── api/               # API routes
│   ├── auth/              # Authentication pages
│   ├── cart/              # Shopping cart page
│   ├── products/          # Products listing page
│   └── layout.tsx         # Root layout
├── components/            # Reusable components
│   ├── layout/           # Layout components (Navbar, Footer)
│   └── providers/        # Context providers
├── lib/                  # Utility libraries
│   ├── auth.ts           # NextAuth configuration
│   ├── db.ts             # Database connection
│   └── store/            # Zustand stores
└── types/                # TypeScript type definitions
```

## Key Features Explained

### Authentication System
- User registration and login with email/password
- Password hashing with bcryptjs
- Session management with NextAuth.js
- Protected routes and middleware

### Shopping Cart
- Persistent cart storage with Zustand
- Add/remove items with quantity management
- Real-time total calculation
- Cart state synchronization across pages

### Product Management
- Product listing with search and filtering
- Category-based organization
- Price sorting and rating display
- Stock management

### Database Schema
The application uses Prisma with the following main models:
- **User**: Authentication and user profiles
- **Product**: Product catalog with images and metadata
- **Order**: Order management and tracking
- **OrderItem**: Individual items in orders
- **Review**: Product reviews and ratings

## API Endpoints

- `GET /api/products` - Fetch all products
- `POST /api/products` - Create new product
- `POST /api/auth/register` - User registration
- `POST /api/auth/[...nextauth]` - NextAuth endpoints

## Customization

### Adding New Features
1. **New Pages**: Add files to `src/app/`
2. **Components**: Create reusable components in `src/components/`
3. **API Routes**: Add endpoints in `src/app/api/`
4. **Database**: Update schema in `prisma/schema.prisma`

### Styling
- The app uses Tailwind CSS for styling
- Custom styles can be added to `src/app/globals.css`
- Component-specific styles use Tailwind classes

### Database
- Currently uses SQLite for development
- To switch to PostgreSQL/MySQL:
  1. Update `DATABASE_URL` in `.env.local`
  2. Run `npx prisma db push` to migrate

## Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Add environment variables in Vercel dashboard
4. Deploy automatically on push

### Other Platforms
- **Netlify**: Configure build settings for Next.js
- **Railway**: Add environment variables and deploy
- **DigitalOcean**: Use App Platform or Droplets

## Environment Variables

```env
# Database
DATABASE_URL="file:./dev.db"

# NextAuth
NEXTAUTH_SECRET="your-secret-key"
NEXTAUTH_URL="http://localhost:3000"

# Optional: Stripe (for payments)
STRIPE_PUBLISHABLE_KEY="pk_test_..."
STRIPE_SECRET_KEY="sk_test_..."
```

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## License

This project is licensed under the MIT License.

## Support

For support and questions:
- Create an issue in the repository
- Check the documentation
- Review the code examples

## Roadmap

- [ ] Payment integration (Stripe)
- [ ] Admin dashboard
- [ ] Email notifications
- [ ] Product reviews system
- [ ] Wishlist functionality
- [ ] Advanced search with filters
- [ ] Order tracking
- [ ] Inventory management
- [ ] Multi-language support
- [ ] PWA features

---

Built with ❤️ using Next.js and modern web technologies.
