export default function FeaturesSection() {
  const features = [
    {
      icon: "🚚",
      title: "Fast Delivery",
      description: "Free shipping on orders over $50",
      gradient: "from-blue-500 to-cyan-500",
      bg: "from-blue-50 to-cyan-50"
    },
    {
      icon: "🛡️",
      title: "Secure Payment",
      description: "100% secure payment processing",
      gradient: "from-green-500 to-emerald-500",
      bg: "from-green-50 to-emerald-50"
    },
    {
      icon: "💬",
      title: "24/7 Support",
      description: "Round the clock customer service",
      gradient: "from-purple-500 to-pink-500",
      bg: "from-purple-50 to-pink-50"
    }
  ]

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 via-white to-blue-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-green-500 to-emerald-500 text-white rounded-full text-sm font-medium mb-4">
            ✨ Why Choose Us
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Our Promise to You
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            We're committed to providing the best shopping experience with these key features
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="group relative bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 border border-gray-100 overflow-hidden">
              {/* Background gradient on hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${feature.bg} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
              
              {/* Content */}
              <div className="relative z-10 text-center">
                <div className={`inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br ${feature.gradient} rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-500 shadow-lg`}>
                  <span className="text-4xl">{feature.icon}</span>
                </div>
                
                <h3 className="text-2xl font-bold text-gray-800 mb-4 group-hover:text-gray-900 transition-colors duration-300">
                  {feature.title}
                </h3>
                
                <p className="text-gray-600 group-hover:text-gray-700 transition-colors duration-300 leading-relaxed">
                  {feature.description}
                </p>
                
                {/* Animated bottom border */}
                <div className={`absolute bottom-0 left-0 h-1 bg-gradient-to-r ${feature.gradient} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500`}></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
