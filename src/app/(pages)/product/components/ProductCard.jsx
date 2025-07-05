'use client';
import React from 'react';
import { Star, StarHalf } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@radix-ui/react-avatar';
import { useRouter } from 'next/navigation';
import { useCartStore } from "./../../../stores/cartStore"
export default function ProductCard({ product, index }) {
    console.log("🚀 ~ ProductCard ~ index:", index)
    const router = useRouter();
    const addToCart = useCartStore(state => state.addToCart)
    const rate = product.rating?.rate || 0;
    const rateWithoutDecimal = Math.floor(rate);
    const decimalPart = rate % 1;
    const emptyStars = 5 - Math.ceil(rate);
    const addToCartFunc = () => {
        addToCart(product);

    }
    return (
        <div className="relative w-full h-full p-5 bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-200">

            {/* Badge */}
            {index % 2 == 0 && (
                <div className="absolute top-3 left-3 bg-green-100 text-green-700 text-xs px-2 py-1 rounded-full font-medium shadow-sm">
                    Free Shipping
                </div>
            )}

            {/* Product Image */}
            <div className="flex justify-center items-center mb-4">
                <Avatar className="w-36 h-36 overflow-hidden rounded-lg border">
                    <AvatarImage src={product.image} className="object-contain w-full h-full" />
                    <AvatarFallback>IMG</AvatarFallback>
                </Avatar>
            </div>

            {/* Title */}
            <h2 className="text-center text-base font-semibold text-gray-800 mb-1">
                {product.title?.length > 40 ? product.title.slice(0, 37) + '...' : product.title}
            </h2>

            {/* Category */}
            <div className="text-xs text-center bg-amber-100 text-amber-800 px-3 py-0.5 rounded-full font-medium w-fit mx-auto mb-2">
                {product.category}
            </div>

            {/* Price */}
            <p className="text-center text-xl font-bold text-red-600 mb-3">${product.price}</p>

            {/* Rating */}
            <div className="flex items-center justify-center gap-0.5 mb-4">
                {[...Array(rateWithoutDecimal)].map((_, index) => (
                    <Star index={`filled-${index}`} size={18} className="text-amber-500 fill-amber-500" strokeWidth={0.5} />
                ))}
                {decimalPart >= 0.5 && (
                    <StarHalf size={18} className="text-amber-500 fill-amber-500" strokeWidth={0.5} />
                )}
                {[...Array(emptyStars)].map((_, index) => (
                    <Star index={`empty-${index}`} size={18} className="text-gray-300 fill-gray-300" strokeWidth={0.5} />
                ))}
                <span className="ml-2 text-sm text-gray-500">({rate.toFixed(1)})</span>
            </div>

            {/* Actions */}
            <div className="space-y-2">
                <Button
                    className=" mb-6 w-full bg-gray-800 hover:bg-gray-700 text-white font-semibold transition duration-150"
                    onClick={addToCartFunc}
                >
                    Add to Cart
                </Button>
                <Button
                    variant="outline"
                    className="w-full text-blue-600 border-blue-300 hover:bg-blue-50 hover:text-blue-700"
                    onClick={() => router.push(`/product/${product.id}`)}
                >
                    View Details
                </Button>
            </div>
        </div>
    );
}
