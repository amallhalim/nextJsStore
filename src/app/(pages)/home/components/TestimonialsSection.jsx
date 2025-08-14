export default function TestimonialsSection() {
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Fashion Enthusiast",
      content: "Amazing quality products and fast delivery. MyStore has become my go-to shopping destination!",
      rating: 5,
      gradient: "from-pink-500 to-rose-500"
    },
    {
      name: "Mike Chen",
      role: "Tech Reviewer",
      content: "The electronics selection is top-notch. Great prices and excellent customer service.",
      rating: 5,
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      name: "Emily Davis",
      role: "Home Decor Lover",
      content: "Beautiful home products that transform any space. Highly recommended!",
      rating: 5,
      gradient: "from-green-500 to-emerald-500"
    }
  ]

  return (
    <section className="py-20 bg-gradient-to-br from-white via-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-yellow-500 to-orange-500 text-white rounded-full text-sm font-medium mb-4">
            💬 Customer Reviews
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            What Our Customers Say
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Don't just take our word for it - hear from our satisfied customers
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="group relative bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100 overflow-hidden">
              {/* Background gradient on hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${testimonial.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
              
              {/* Content */}
              <div className="relative z-10">
                <div className="flex justify-center mb-6">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} className="text-2xl text-yellow-400 group-hover:scale-110 transition-transform duration-300" style={{animationDelay: `${i * 0.1}s`}}>⭐</span>
                  ))}
                </div>
                
                <div className="relative mb-8">
                  <div className="absolute top-0 left-0 w-8 h-8 text-4xl text-gray-200">"</div>
                  <p className="text-gray-700 leading-relaxed text-lg pl-8 group-hover:text-gray-800 transition-colors duration-300">
                    {testimonial.content}
                  </p>
                  <div className="absolute bottom-0 right-0 w-8 h-8 text-4xl text-gray-200">"</div>
                </div>
                
                <div className="text-center">
                  <h4 className="font-bold text-gray-800 text-lg group-hover:text-gray-900 transition-colors duration-300">
                    {testimonial.name}
                  </h4>
                  <p className="text-gray-600 text-sm mt-1 group-hover:text-gray-700 transition-colors duration-300">
                    {testimonial.role}
                  </p>
                </div>
                
                {/* Animated bottom border */}
                <div className={`absolute bottom-0 left-0 h-1 bg-gradient-to-r ${testimonial.gradient} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500`}></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
