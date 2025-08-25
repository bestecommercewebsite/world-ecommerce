'use client'

// Remove unused useState import
import Link from 'next/link'
import { 
  ShoppingBag, 
  Shield, 
  Heart, 
  Users, 
  Award, 
  Target, 
  Globe,
  Star,
  Sparkles,
  ArrowRight,
  ArrowUpRight,
  Zap,
  Clock
} from 'lucide-react'

export default function AboutPage() {
  // Remove unused state variables
  // const [activeTab, setActiveTab] = useState('story')

  const stats = [
    { number: '25K+', label: 'Happy Homes', icon: Heart, color: 'from-red-500 to-pink-500' },
    { number: '500+', label: 'Furniture Pieces', icon: ShoppingBag, color: 'from-blue-500 to-purple-500' },
    { number: '50+', label: 'Design Experts', icon: Users, color: 'from-green-500 to-teal-500' },
    { number: '8+', label: 'Years Experience', icon: Award, color: 'from-yellow-500 to-orange-500' },
  ]

  const values = [
    {
      icon: Shield,
      title: 'Premium Quality',
      description: 'We ensure every piece of furniture meets the highest craftsmanship standards before reaching your home.',
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: Heart,
      title: 'Home-Focused',
      description: 'Your home is our priority. We help you create beautiful, comfortable spaces that reflect your style.',
      color: 'from-red-500 to-pink-500'
    },
    {
      icon: Globe,
      title: 'Sustainable Design',
      description: 'We&apos;re committed to eco-friendly materials and sustainable furniture manufacturing practices.',
      color: 'from-green-500 to-teal-500'
    },
    {
      icon: Target,
      title: 'Design Excellence',
      description: 'Constantly evolving our designs to bring you the latest trends in furniture and home decor.',
      color: 'from-purple-500 to-indigo-500'
    }
  ]

  const team = [
    {
      name: 'Emily Rodriguez',
      role: 'Interior Design Director',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300',
      bio: 'Creating stunning interior design concepts and furniture collections.',
      social: { linkedin: '#', twitter: '#', email: 'emily@furniturestore.com' }
    },
    {
      name: 'David Kim',
      role: 'Operations Manager',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300',
      bio: 'Ensuring smooth furniture delivery and excellent customer service.',
      social: { linkedin: '#', twitter: '#', email: 'david@furniturestore.com' }
    }
  ]

  const milestones = [
    { year: '2016', title: 'FurnitureStore Founded', description: 'Started with a vision to transform homes through beautiful furniture' },
    { year: '2018', title: 'First 5K Homes', description: 'Reached our first major milestone with 5,000 happy homes furnished' },
    { year: '2020', title: 'Design Studio Launch', description: 'Launched our interior design consultation services' },
    { year: '2022', title: 'Premium Collection', description: 'Expanded to offer premium furniture collections nationwide' },
    { year: '2023', title: 'Sustainable Line', description: 'Introduced our eco-friendly sustainable furniture line' },
    { year: '2024', title: 'Future Vision', description: 'Continuing to innovate and create beautiful homes across the country' }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-700 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        {/* Animated background elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-white bg-opacity-10 rounded-full animate-pulse"></div>
        <div className="absolute top-40 right-20 w-16 h-16 bg-white bg-opacity-10 rounded-full animate-pulse delay-1000"></div>
        <div className="absolute bottom-20 left-1/4 w-12 h-12 bg-white bg-opacity-10 rounded-full animate-pulse delay-2000"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
          <div className="text-center">
            <div className="mb-6">
              <span className="inline-flex items-center px-6 py-3 bg-white bg-opacity-20 backdrop-blur-sm rounded-full text-sm font-medium mb-4 border border-white border-opacity-30">
                <Sparkles className="h-4 w-4 mr-2 animate-pulse" />
                Our Story
              </span>
            </div>
            <h1 className="text-6xl md:text-8xl font-bold mb-6 leading-tight">
              About Our
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-orange-300 animate-pulse">
                Company
              </span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100 max-w-3xl mx-auto leading-relaxed">
              We&apos;re passionate about bringing you the best furniture and home design experience. 
              Our journey started with a simple mission: to make beautiful, quality furniture accessible to every home.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/products"
                className="group bg-white text-blue-600 px-10 py-4 rounded-2xl font-bold hover:bg-gray-100 transition-all duration-300 inline-flex items-center justify-center shadow-2xl hover:shadow-3xl transform hover:-translate-y-2 hover:scale-105"
              >
                <ShoppingBag className="mr-2 h-5 w-5 group-hover:rotate-12 transition-transform" />
                Shop Now
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="/contact"
                className="group border-2 border-white text-white px-10 py-4 rounded-2xl font-bold hover:bg-white hover:text-blue-600 transition-all duration-300 backdrop-blur-sm"
              >
                Contact Us
                <ArrowUpRight className="ml-2 h-4 w-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => {
              const IconComponent = stat.icon
              return (
                <div key={index} className="text-center group">
                  <div className={`bg-gradient-to-br ${stat.color} w-20 h-20 rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-xl`}>
                    <IconComponent className="h-10 w-10 text-white" />
                  </div>
                  <div className="text-4xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                    {stat.number}
                  </div>
                  <div className="text-gray-600 font-medium">{stat.label}</div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-600 rounded-full text-sm font-medium mb-6">
                <Zap className="h-4 w-4 mr-2" />
                Our Journey
              </span>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">
                Our Story
              </h2>
              <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
                <p>
                  Founded in 2016, FurnitureStore began with a simple vision: to create beautiful 
                  homes through exceptional furniture. What started as a small team of passionate 
                  designers has grown into a thriving community of homeowners and design enthusiasts.
                </p>
                <p>
                  We&apos;ve always believed that furniture should make your home more beautiful and 
                  comfortable. That&apos;s why we&apos;ve focused on creating pieces that are 
                  both stylish and functional, designed to last for generations.
                </p>
                <p>
                  Today, we&apos;re proud to serve thousands of homes nationwide, offering 
                  everything from modern sofas to elegant dining sets, all with 
                  the same commitment to quality craftsmanship and design excellence that we started with.
                </p>
              </div>
              <div className="flex items-center mt-8 space-x-4">
                <div className="flex items-center">
                  <Star className="h-6 w-6 text-yellow-400 fill-current" />
                  <Star className="h-6 w-6 text-yellow-400 fill-current" />
                  <Star className="h-6 w-6 text-yellow-400 fill-current" />
                  <Star className="h-6 w-6 text-yellow-400 fill-current" />
                  <Star className="h-6 w-6 text-yellow-400 fill-current" />
                </div>
                <span className="text-gray-600 font-medium">Trusted by 25,000+ homeowners</span>
              </div>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-blue-500 to-purple-600 rounded-3xl p-8 shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600"
                  alt="Our team working together"
                  className="rounded-2xl shadow-lg"
                />
              </div>
              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 bg-white rounded-2xl p-4 shadow-xl">
                <div className="flex items-center">
                  <div className="bg-green-500 w-3 h-3 rounded-full mr-2"></div>
                  <span className="text-sm font-medium text-gray-900">Live Support</span>
                </div>
              </div>
              <div className="absolute -bottom-4 -left-4 bg-white rounded-2xl p-4 shadow-xl">
                <div className="flex items-center">
                  <Clock className="h-4 w-4 text-blue-600 mr-2" />
                  <span className="text-sm font-medium text-gray-900">24/7 Available</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-flex items-center px-4 py-2 bg-green-100 text-green-600 rounded-full text-sm font-medium mb-4">
              <Target className="h-4 w-4 mr-2" />
              Our Values
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Our Mission & Values
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We believe in creating value for our customers through quality products, 
              exceptional service, and innovative solutions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const IconComponent = value.icon
              return (
                <div key={index} className="group bg-gradient-to-br from-gray-50 to-blue-50 rounded-3xl p-8 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
                  <div className={`bg-gradient-to-br ${value.color} w-16 h-16 rounded-3xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-xl`}>
                    <IconComponent className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">
                    {value.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">{value.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Our Journey Through Time
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              From humble beginnings to becoming a trusted name in e-commerce
            </p>
          </div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-px h-full w-1 bg-gradient-to-b from-blue-500 to-purple-600"></div>
            
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <div key={index} className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                  <div className="w-1/2 px-8">
                    <div className="bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                      <div className="text-3xl font-bold text-blue-600 mb-2">{milestone.year}</div>
                      <h3 className="text-xl font-bold text-gray-900 mb-3">{milestone.title}</h3>
                      <p className="text-gray-600">{milestone.description}</p>
                    </div>
                  </div>
                  
                  {/* Timeline dot */}
                  <div className="relative z-10">
                    <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full shadow-lg border-4 border-white"></div>
                  </div>
                  
                  <div className="w-1/2 px-8"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

             {/* Team Section */}
       <section className="py-20 bg-white">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <div className="text-center mb-16">
             <span className="inline-flex items-center px-4 py-2 bg-purple-100 text-purple-600 rounded-full text-sm font-medium mb-4">
               <Users className="h-4 w-4 mr-2" />
               Meet Our Team
             </span>
             <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
               The People Behind Our Success
             </h2>
             <p className="text-xl text-gray-600 max-w-3xl mx-auto">
               We&apos;re a diverse team of professionals passionate about delivering 
               exceptional experiences to our customers.
             </p>
           </div>

           {/* CEO Section */}
           <div className="text-center mb-16">
             <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-3xl p-12 border border-blue-100">
               <div className="bg-gradient-to-br from-blue-600 to-purple-600 w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-6 shadow-xl">
                 <Users className="h-12 w-12 text-white" />
               </div>
               <h3 className="text-3xl font-bold text-gray-900 mb-2">Gary W Campbell</h3>
               <p className="text-xl text-blue-600 font-semibold mb-4">CEO & Founder</p>
               <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                 Passionate about creating beautiful homes through exceptional furniture. 
                 Leading our mission to transform spaces and lives through quality design.
               </p>
             </div>
           </div>

           
         </div>
       </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-700 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <div className="absolute top-10 right-10 w-32 h-32 bg-white bg-opacity-10 rounded-full animate-pulse"></div>
        <div className="absolute bottom-10 left-10 w-24 h-24 bg-white bg-opacity-10 rounded-full animate-pulse delay-1000"></div>
        
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Ready to Shop?
          </h2>
          <p className="text-xl mb-10 text-blue-100 max-w-2xl mx-auto">
            Join thousands of satisfied customers who trust us for their shopping needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/products"
              className="group bg-white text-blue-600 px-12 py-4 rounded-2xl font-bold hover:bg-gray-100 transition-all duration-300 inline-flex items-center shadow-2xl hover:shadow-3xl transform hover:-translate-y-1 hover:scale-105"
            >
              <ShoppingBag className="mr-2 h-5 w-5 group-hover:rotate-12 transition-transform" />
              Browse Products
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="/contact"
              className="group border-2 border-white text-white px-12 py-4 rounded-2xl font-bold hover:bg-white hover:text-blue-600 transition-all duration-300 backdrop-blur-sm"
            >
              Contact Us
              <ArrowUpRight className="ml-2 h-4 w-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
} 