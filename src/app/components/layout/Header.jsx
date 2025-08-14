'use client'
import { ShoppingCart, Search, User } from 'lucide-react'
import React from 'react'
import { useCartStore } from "./../../stores/cartStore"
import { useRouter } from 'next/navigation';

export default function Header() {
    const itemsCount = useCartStore((state) => state.itemsCount);
    console.log("🚀 ~ Header ~ itemsCount:", itemsCount)
    const router = useRouter()
    
    return (
        <header className="bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg">
            <div className="max-w-7xl mx-auto px-6 py-4">
                <div className="flex items-center justify-between">
                    {/* Logo */}
                    <div className='cursor-pointer group' onClick={() => { router.push('/') }}>
                        <div className="flex items-center space-x-3">
                            <div className="w-10 h-10 bg-yellow-400 rounded-lg flex items-center justify-center shadow-md group-hover:scale-105 transition-transform duration-300">
                                <span className="text-xl font-bold text-gray-900">🛍️</span>
                            </div>
                            <h1 className="text-2xl font-bold tracking-wide text-white group-hover:text-yellow-200 transition-colors duration-300">
                                MyStore
                            </h1>
                        </div>
                    </div>

                    {/* Navigation */}
                    <nav className="hidden md:flex items-center space-x-8">
                        <div className='cursor-pointer group' onClick={() => { router.push('/product') }}>
                            <span className="text-lg font-medium text-white/90 group-hover:text-yellow-300 transition-colors duration-300">
                                All Products
                            </span>
                        </div>
                        <div className='cursor-pointer group'>
                            <span className="text-lg font-medium text-white/90 group-hover:text-yellow-300 transition-colors duration-300">
                                Categories
                            </span>
                        </div>
                        <div className='cursor-pointer group'>
                            <span className="text-lg font-medium text-white/90 group-hover:text-yellow-300 transition-colors duration-300">
                                About
                            </span>
                        </div>
                    </nav>

                    {/* Right side actions */}
                    <div className="flex items-center space-x-4">
                        {/* Search */}
                        <button className="p-2 bg-white/10 rounded-lg hover:bg-white/20 transition-all duration-300">
                            <Search className="w-5 h-5 text-white" />
                        </button>

                        {/* User */}
                        <button className="p-2 bg-white/10 rounded-lg hover:bg-white/20 transition-all duration-300">
                            <User className="w-5 h-5 text-white" />
                        </button>

                        {/* Cart */}
                        <button className="relative p-2 bg-yellow-400 rounded-lg hover:bg-yellow-300 transition-all duration-300 shadow-md">
                            <ShoppingCart className="w-5 h-5 text-gray-900" />
                            <span className="absolute -top-2 -right-2 w-5 h-5 bg-red-500 text-white text-xs rounded-full flex items-center justify-center font-bold">
                                {itemsCount}
                            </span>
                        </button>
                    </div>
                </div>

                {/* Welcome message */}
                <div className="mt-3 text-center">
                    <p className="text-sm text-white/80">
                        Welcome to our premium shopping experience! 🎉
                    </p>
                </div>
            </div>
        </header>
    )
}
