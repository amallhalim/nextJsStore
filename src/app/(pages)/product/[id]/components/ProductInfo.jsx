"use client"
import React from 'react'
import { ShoppingCart } from 'lucide-react'
import { useCartStore } from '@/app/stores/cartStore';
export default function ProductInfo({ product }) {
    const addToCart = useCartStore(state => state.addToCart)

    const addToCartFunc = () => {

        addToCart(product);
    }
    return (
        <div className="grid md:grid-cols-2 gap-10 items-start">

            <div className="bg-white p-4 rounded-xl shadow-md hover:shadow-lg transition duration-200">
                <img
                    src={product.image}
                    alt={product.title}
                    className="w-full h-[400px] object-contain rounded-md"
                />
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md min-h-[100%]">
                <h1 className="text-3xl font-semibold text-gray-900 mb-2">{product.title}</h1>
                <div className="inline-block bg-amber-100 text-amber-700 text-sm px-3 py-1 rounded-full mb-4">
                    {product.category}
                </div>
                <p className="text-gray-700 text-base mb-6 leading-relaxed">
                    {product.description}
                </p>

                <div className="text-3xl font-bold text-red-600 mb-6">${product.price}</div>

                <div className="flex items-center gap-2 mb-6">
                    <div className="text-yellow-500 text-lg">
                        {'★'.repeat(Math.floor(product.rating?.rate || 0))}
                        {product.rating?.rate % 1 >= 0.5 && '½'}
                        {'☆'.repeat(5 - Math.ceil(product.rating?.rate || 0))}
                    </div>
                    <span className="text-sm text-gray-500">
                        ({product.rating?.count || 0} reviews)
                    </span>
                </div>

                <button className="w-full flex items-center
                     justify-center gap-2 bg-gray-800 hover:bg-gray-700
                      text-white font-medium py-2.5 px-4 rounded-lg shadow-sm transition     "
                    onClick={addToCartFunc}
                >
                    <ShoppingCart size={18} />
                    Add to Cart
                </button>
            </div>
        </div>
    )
}
