import Link from 'next/link'

export default function FeaturedProducts() {
  const featuredProducts = [
    {
      id: 1,
      name: "Premium Wireless Headphones",
      price: "$199.99",
      image: "/assets/img/headphones.jpg",
      category: "Electronics",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      id: 2,
      name: "Designer Leather Bag",
      price: "$89.99",
      image: "/assets/img/bag.jpg",
      category: "Fashion",
      gradient: "from-pink-500 to-rose-500"
    },
    {
      id: 3,
      name: "Smart Fitness Watch",
      price: "$299.99",
      image: "/assets/img/watch.jpg",
      category: "Electronics",
      gradient: "from-green-500 to-emerald-500"
    },
    {
      id: 4,
      name: "Organic Coffee Beans",
      price: "$24.99",
      image: "/assets/img/coffee.jpg",
      category: "Food & Beverages",
      gradient: "from-orange-500 to-red-500"
    }
  ]

  return (
    <section className="py-20 bg-gradient-to-br from-gray-100 via-white to-purple-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full text-sm font-medium mb-4">
            ⭐ Featured Products
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Handpicked for You
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Discover our carefully curated selection of premium products that our customers love
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {featuredProducts.map((product) => (
            <div key={product.id} className="group relative bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-4 overflow-hidden border border-gray-100">
              {/* Product Image Area */}
              <div className="relative h-56 bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center overflow-hidden">
                <div className="text-6xl opacity-30 group-hover:scale-110 transition-transform duration-500">📦</div>
                <div className={`absolute top-4 right-4 bg-gradient-to-r ${product.gradient} text-white text-xs px-3 py-1 rounded-full font-semibold shadow-lg`}>
                  {product.category}
                </div>
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
              
              {/* Product Info */}
              <div className="p-6">
                <h3 className="font-bold text-gray-800 mb-3 group-hover:text-gray-900 transition-colors duration-300 text-lg line-clamp-2">
                  {product.name}
                </h3>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                    {product.price}
                  </span>
                  <Link 
                    href={`/product/${product.id}`}
                    className="group/link inline-flex items-center text-blue-600 hover:text-blue-800 font-semibold text-sm transition-colors duration-300"
                  >
                    View Details
                    <span className="ml-1 group-hover/link:translate-x-1 transition-transform duration-300">→</span>
                  </Link>
                </div>
                
                {/* Animated bottom border */}
                <div className={`absolute bottom-0 left-0 h-1 bg-gradient-to-r ${product.gradient} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500`}></div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-16">
          <Link 
            href="/product"
            className="group inline-flex items-center px-10 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-blue-500/25"
          >
            View All Products
            <span className="ml-2 group-hover:translate-x-1 transition-transform duration-300">→</span>
          </Link>
        </div>
      </div>
    </section>
  )
}
