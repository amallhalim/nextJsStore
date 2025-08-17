import Link from 'next/link'

export default function CTASection() {
  return (
    <section className="relative py-20 bg-gradient-to-br from-indigo-900 via-purple-800 to-pink-700 text-white overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 via-purple-600/20 to-pink-600/20 animate-pulse"></div>
      <div className="absolute top-0 left-0 w-96 h-96 bg-yellow-400/10 rounded-full blur-3xl animate-bounce"></div>
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-pink-400/10 rounded-full blur-3xl animate-pulse"></div>
      
      <div className="relative max-w-5xl mx-auto px-6 text-center">
        <div className="inline-flex items-center px-4 py-2 bg-yellow-400/20 backdrop-blur-sm rounded-full border border-yellow-400/30 mb-6">
          <span className="text-yellow-300 text-sm font-medium">🚀 Ready to Shop?</span>
        </div>
        
        <h2 className="text-4xl lg:text-6xl font-bold mb-8 leading-tight">
          Ready to Start
          <span className="block bg-gradient-to-r from-yellow-300 via-orange-300 to-pink-300 bg-clip-text text-transparent">
            Shopping?
          </span>
        </h2>
        
        <p className="text-xl mb-12 text-purple-100 leading-relaxed max-w-3xl mx-auto">
          Join thousands of satisfied customers and discover amazing products today. 
          Start your shopping journey with us!
        </p>
        
        <div className="flex flex-col sm:flex-row gap-6 justify-center">
          <Link 
            href="/product"
            className="group inline-flex items-center justify-center px-10 py-5 bg-gradient-to-r from-yellow-400 to-orange-400 text-gray-900 font-bold rounded-xl hover:from-yellow-300 hover:to-orange-300 transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-yellow-400/25 border-2 border-yellow-300/50"
          >
            <span className="mr-2 text-xl">🛒</span>
            Start Shopping Now
            <span className="ml-2 group-hover:translate-x-1 transition-transform duration-300">→</span>
          </Link>
          
          <Link 
            href="/product"
            className="group inline-flex items-center justify-center px-10 py-5 bg-white/10 backdrop-blur-sm text-white font-semibold rounded-xl hover:bg-white/20 transition-all duration-300 border-2 border-white/20 hover:border-white/40 shadow-xl hover:shadow-white/10"
          >
            Browse All Categories
            <span className="ml-2 group-hover:translate-x-1 transition-transform duration-300">📂</span>
          </Link>
        </div>
        
        {/* Decorative elements */}
        <div className="mt-16 flex justify-center space-x-4">
          <div className="w-3 h-3 bg-yellow-400 rounded-full animate-pulse"></div>
          <div className="w-3 h-3 bg-pink-400 rounded-full animate-pulse" style={{animationDelay: '0.2s'}}></div>
          <div className="w-3 h-3 bg-blue-400 rounded-full animate-pulse" style={{animationDelay: '0.4s'}}></div>
          <div className="w-3 h-3 bg-purple-400 rounded-full animate-pulse" style={{animationDelay: '0.6s'}}></div>
        </div>
      </div>
    </section>
  )
}
