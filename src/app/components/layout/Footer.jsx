"use client"
import Link from 'next/link'
import { Mail, Phone, MapPin, ArrowUp } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-gray-800 to-gray-900 text-white ">
      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* Main footer content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-yellow-400 rounded-lg flex items-center justify-center">
                <span className="text-xl font-bold text-gray-900">🛍️</span>
              </div>
              <h3 className="text-xl font-bold text-white">
                MyStore
              </h3>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              Your premier destination for quality products and exceptional shopping experiences.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-bold text-white">Quick Links</h4>
            <div className="space-y-2">
              <Link href="/product" className="block text-gray-300 hover:text-yellow-300 transition-colors duration-300 text-sm">
                All Products
              </Link>
              <Link href="/product?category=electronics" className="block text-gray-300 hover:text-yellow-300 transition-colors duration-300 text-sm">
                Electronics
              </Link>
              <Link href="/product?category=fashion" className="block text-gray-300 hover:text-yellow-300 transition-colors duration-300 text-sm">
                Fashion & Style
              </Link>
              <Link href="/product?category=home" className="block text-gray-300 hover:text-yellow-300 transition-colors duration-300 text-sm">
                Home & Garden
              </Link>
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-bold text-white">Contact Info</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-yellow-400" />
                <span className="text-gray-300 text-sm">hello@mystore.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-yellow-400" />
                <span className="text-gray-300 text-sm">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="w-4 h-4 text-yellow-400" />
                <span className="text-gray-300 text-sm">123 Shopping St, Retail City</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom section */}
        <div className="border-t border-gray-700 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-center md:text-left">
              <p className="text-gray-400 text-sm">
                © 2024 MyStore. All rights reserved.
              </p>
            </div>
            
            {/* Back to top button */}
            <button 
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="p-2 bg-yellow-400 rounded-lg hover:bg-yellow-300 transition-all duration-300"
            >
              <ArrowUp className="w-4 h-4 text-gray-900" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  )
}
