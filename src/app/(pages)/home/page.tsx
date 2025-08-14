import Link from 'next/link'
import ServerComponent from '../post2/components/ServerComponent'
import ClientComponent from "../post2/components/ClientComponent"

export const metadata = {
  title: {
    default: "HOME PAGE",
  },
  description: 'home page',
}

export default function page() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Enhanced Banner Section */}
      <div className="bg-gradient-to-r from-purple-600 via-blue-600 to-indigo-600 text-white py-8 px-6 shadow-lg">
        <div className="max-w-7xl mx-auto text-center">
          <div className="text-4xl font-bold mb-4 bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent">
            ---------- Welcome to MyStore ----------
          </div>
          <Link 
            href="/home" 
            className="inline-flex items-center px-6 py-3 bg-white text-blue-600 rounded-full font-semibold hover:bg-blue-50 transition-all duration-300 transform hover:scale-105 shadow-md hover:shadow-lg"
          >
            <span className="mr-2">🏠</span>
            Go to Home Page
          </Link>
        </div>
      </div>

      {/* Main Content Section */}
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Server Component Section */}
          <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden hover:shadow-2xl transition-all duration-300">
            <div className="bg-gradient-to-r from-green-500 to-emerald-600 px-6 py-4">
              <h3 className="text-2xl font-bold text-white flex items-center">
                <span className="mr-3">⚡</span>
                Server Component
              </h3>
              <p className="text-green-100 text-sm mt-1">Rendered on the server for optimal performance</p>
            </div>
            <div className="p-6">
              <ServerComponent />
            </div>
          </div>

          {/* Client Component Section */}
          <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden hover:shadow-2xl transition-all duration-300">
            <div className="bg-gradient-to-r from-blue-500 to-cyan-600 px-6 py-4">
              <h3 className="text-2xl font-bold text-white flex items-center">
                <span className="mr-3">🎨</span>
                Client Component
              </h3>
              <p className="text-blue-100 text-sm mt-1">Interactive components with dynamic features</p>
            </div>
            <div className="p-6">
              <ClientComponent />
            </div>
          </div>
        </div>

        {/* Additional Features Section */}
        <div className="mt-12 grid md:grid-cols-3 gap-6">
          <div className="bg-gradient-to-br from-pink-500 to-rose-600 text-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
            <div className="text-3xl mb-3">🚀</div>
            <h4 className="text-xl font-bold mb-2">Fast Performance</h4>
            <p className="text-pink-100">Optimized for speed and efficiency</p>
          </div>
          
          <div className="bg-gradient-to-br from-indigo-500 to-purple-600 text-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
            <div className="text-3xl mb-3">🛡️</div>
            <h4 className="text-xl font-bold mb-2">Secure & Reliable</h4>
            <p className="text-indigo-100">Built with security best practices</p>
          </div>
          
          <div className="bg-gradient-to-br from-emerald-500 to-green-600 text-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
            <div className="text-3xl mb-3">💎</div>
            <h4 className="text-xl font-bold mb-2">Premium Quality</h4>
            <p className="text-emerald-100">High-quality products and services</p>
          </div>
        </div>
      </div>
    </div>
  )
}
