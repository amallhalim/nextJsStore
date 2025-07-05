'use client'
import React from 'react'
import { Star, StarHalf } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Avatar, AvatarFallback, AvatarImage } from '@radix-ui/react-avatar'
import { redirect, useRouter } from "next/navigation";

export default function ProductCard({ product }) {
    const router = useRouter()
    // const [isSystemDark, setIsSystemDark] = useState(false)
    const rate = [...Array(product.rating?.rate.toFixed())]
    const decimalPart = product.rating?.rate % 1  // 0.7
    const rateWithoutDecimal = Math.floor(product.rating?.rate)
    const emptyStars = 5 - rate
    const safeRate = typeof rate === "number" ? rate : 0;

    return (
        <div className="relative w-[100%] h-[100%] p-4 bg-white border border-gray-200 rounded-xl shadow hover:shadow-md transition">

            {!product.freeShipping && (
                <div className="absolute top-2 left-2 bg-green-100 text-green-600  text-xs px-2 py-1 rounded-full shadow">
                    Free Shipping
                </div>
            )}

            <div className="flex justify-center mb-4">
                <Avatar className="w-40 h-40 overflow-hidden rounded-md border">
                    <AvatarImage src={product.image} className="object-contain w-full h-full" />
                    <AvatarFallback>IMG</AvatarFallback>
                </Avatar>
            </div>

            <h2 className="text-lg  mb-1 text-center text-gray-800">
                {product.title?.length > 25 ? product.title.slice(0, 20) + '...' : product.title}
            </h2>

            <div className="bg-amber-200 text-amber-800 rounded-full px-3 py-1 text-sm text-center w-fit mx-auto mb-2">
                {product.category}
            </div>

            <p className="text-center text-xl font-bold text-red-600 mb-3">
                ${product.price}
            </p>

            <div className="flex items-center justify-center gap-1 mb-4">
                {[...Array(rateWithoutDecimal)].map((_, index) => (
                    <Star key={index} size={20} className="text-amber-500 fill-amber-500" strokeWidth={0.5} />
                ))}
                {decimalPart > 0 && (
                    <StarHalf size={20} className="text-amber-500 fill-amber-500" strokeWidth={0.5} />
                )}
                {[...Array(emptyStars)].map((_, index) => (
                    <Star key={index + 5} size={20} className="text-gray-300 fill-gray-300" strokeWidth={0.5} />
                ))}
                <span className="ml-2 text-sm text-gray-500">({product.rating?.rate?.toFixed(1)})</span>

            </div>

            <Button className="w-full bg-gray-700 hover:bg-gray-600 text-white font-medium">
                Add to Cart
            </Button>
            <Button className="w-full bg-blue-300 hover:bg-blue-600 text-white font-medium mt-2" onClick={() =>
                router.push(`/product/${product.id}`)}
            >
                go to details
            </Button>
        </div >
    )
}
