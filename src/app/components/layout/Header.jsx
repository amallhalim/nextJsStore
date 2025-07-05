'use client'
import { ShoppingCart } from 'lucide-react'
import React from 'react'

export default function Header() {
    return (
        <header className="bg-blue-500 text-white py-4 shadow-md mb-3">
            <div className="max-w-7xl mx-auto flex items-center justify-between">
                <h1 className="text-2xl font-bold tracking-wide">MyStore</h1>

                <p className="text-lg font-medium hidden sm:block">Welcome to our shop</p>

                <button className="relative group">
                    <ShoppingCart strokeWidth={1.5} absoluteStrokeWidth className="w-6 h-6 group-hover:scale-110 transition-transform duration-150" />
                    <span className="absolute -top-2 -right-2 text-xs bg-yellow-300 text-black rounded-full px-1.5 py-0.5 font-semibold">
                        3
                    </span>
                </button>
            </div>
        </header>
    )
}
