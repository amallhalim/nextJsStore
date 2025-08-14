import Link from 'next/link'

export default function CategoriesSection() {
  const categories = [
    { name: "Electronics", icon: "📱", gradient: "from-blue-500 to-cyan-500", bg: "from-blue-50 to-cyan-50" },
    { name: "Fashion", icon: "👗", gradient: "from-pink-500 to-rose-500", bg: "from-pink-50 to-rose-50" },
    { name: "Home & Garden", icon: "🏠", gradient: "from-green-500 to-emerald-500", bg: "from-green-50 to-emerald-50" },
    { name: "Sports", icon: "⚽", gradient: "from-orange-500 to-red-500", bg: "from-orange-50 to-red-50" },
    { name: "Books", icon: "📚", gradient: "from-purple-500 to-indigo-500", bg: "from-purple-50 to-indigo-50" },
    { name: "Beauty", icon: "💄", gradient: "from-yellow-500 to-orange-500", bg: "from-yellow-50 to-orange-50" }
  ]

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 via-white to-blue-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-full text-sm font-medium mb-4">
            🎯 Explore Categories
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Shop by Category
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Explore our wide range of categories and find exactly what you're looking for
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {categories.map((category, index) => (
            <Link 
              key={index}
              href={`/product?category=${category.name.toLowerCase()}`}
              className="group relative bg-white rounded-2xl p-8 text-center shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 border border-gray-100 overflow-hidden"
            >
              {/* Background gradient on hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${category.bg} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
              
              {/* Content */}
              <div className="relative z-10">
                <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br ${category.gradient} rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-500 shadow-lg`}>
                  <span className="text-3xl">{category.icon}</span>
                </div>
                <h3 className="font-bold text-gray-800 group-hover:text-gray-900 transition-colors duration-300 text-lg">
                  {category.name}
                </h3>
                
                {/* Animated border */}
                <div className={`absolute bottom-0 left-0 h-1 bg-gradient-to-r ${category.gradient} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500`}></div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
