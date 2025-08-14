'use client';
import React from 'react';
import { Star, StarHalf, ShoppingCart, Eye, Heart, Truck, Shield, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@radix-ui/react-avatar';
import { useRouter } from 'next/navigation';
import { useCartStore } from '@/app/stores/cartStore';

export default function ProductCard({ product, index, viewMode = 'grid' }) {
    const router = useRouter();
    const addToCart = useCartStore(state => state.addToCart);

    const rate = product.rating?.rate || 0;
    const rateWithoutDecimal = Math.floor(rate);
    const decimalPart = rate % 1;
    const emptyStars = 5 - Math.ceil(rate);

    const addToCartFunc = () => {
        addToCart(product);
    };

    // Grid view component
    const GridView = () => (
        <div className="group relative w-full h-full p-6 bg-white border border-gray-200 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 overflow-hidden">
            {/* Badge */}
            {index % 3 === 0 && (
                <div className="absolute top-4 left-4 bg-gradient-to-r from-green-500 to-emerald-500 text-white text-xs px-3 py-1 rounded-full font-semibold shadow-lg z-10">
                    <Truck className="w-3 h-3 inline mr-1" />
                    Free Shipping
                </div>
            )}
            {index % 5 === 0 && (
                <div className="absolute top-4 right-4 bg-gradient-to-r from-red-500 to-pink-500 text-white text-xs px-3 py-1 rounded-full font-semibold shadow-lg z-10">
                    <Zap className="w-3 h-3 inline mr-1" />
                    Hot Deal
                </div>
            )}

            {/* Product Image */}
            <div className="relative mb-6 group-hover:scale-105 transition-transform duration-500 flex justify-center items-center">
                <Avatar className="w-48 h-48 rounded-2xl border overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200 mx-auto">
                    <AvatarImage src={product.image} className="w-48 h-48  object-contain w-full h-full p-4" />
                    <AvatarFallback className="text-4xl">📦</AvatarFallback>
                </Avatar>
                
                {/* Quick Actions Overlay */}
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl flex items-center justify-center gap-2">
                    <button className="p-3 bg-white/90 backdrop-blur-sm rounded-full hover:bg-white transition-all duration-300 transform hover:scale-110">
                        <Heart className="w-5 h-5 text-red-500" />
                    </button>
                    <button 
                        onClick={() => router.push(`/product/${product.id}`)}
                        className="p-3 bg-white/90 backdrop-blur-sm rounded-full hover:bg-white transition-all duration-300 transform hover:scale-110"
                    >
                        <Eye className="w-5 h-5 text-blue-600" />
                    </button>
                </div>
            </div>

            {/* Content */}
            <div className="space-y-4">
                {/* Category */}
                <div className="text-center">
                    <span className="inline-flex items-center px-3 py-1 bg-gradient-to-r from-yellow-100 to-orange-100 text-yellow-800 text-xs rounded-full font-medium">
                        {product.category}
                    </span>
                </div>

                {/* Title */}
                <h3 className="text-center text-lg font-bold text-gray-800 group-hover:text-gray-900 transition-colors duration-300 line-clamp-2 leading-tight">
                    {product.title}
                </h3>

                {/* Price */}
                <div className="text-center">
                    <span className="text-3xl font-bold bg-gradient-to-r from-red-600 to-pink-600 bg-clip-text text-transparent">
                        ${product.price}
                    </span>
                </div>

                {/* Rating */}
                <div className="flex items-center justify-center gap-1">
                    {[...Array(rateWithoutDecimal)].map((_, i) => (
                        <Star key={`filled-${i}`} size={16} className="text-yellow-500 fill-yellow-500" strokeWidth={0.5} />
                    ))}
                    {decimalPart >= 0.5 && (
                        <StarHalf size={16} className="text-yellow-500 fill-yellow-500" strokeWidth={0.5} />
                    )}
                    {[...Array(emptyStars)].map((_, i) => (
                        <Star key={`empty-${i}`} size={16} className="text-gray-300 fill-gray-300" strokeWidth={0.5} />
                    ))}
                    <span className="ml-2 text-sm text-gray-500">({rate.toFixed(1)})</span>
                </div>

                {/* Action Buttons */}
                <div className="space-y-3 pt-2">
                    <Button
                        onClick={addToCartFunc}
                        className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold py-3 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                    >
                        <ShoppingCart className="w-5 h-5 mr-2" />
                        Add to Cart
                    </Button>
                    <Button
                        variant="outline"
                        onClick={() => router.push(`/product/${product.id}`)}
                        className="w-full border-2 border-gray-200 hover:border-blue-500 hover:bg-blue-50 text-gray-700 hover:text-blue-700 font-medium py-3 rounded-xl transition-all duration-300"
                    >
                        <Eye className="w-5 h-5 mr-2" />
                        View Details
                    </Button>
                </div>
            </div>

            {/* Bottom accent line */}
            <div className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-blue-600 to-purple-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
        </div>
    );

    // List view component
    const ListView = () => (
        <div className="group bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
            <div className="flex flex-col md:flex-row">
                {/* Product Image */}
                <div className="relative md:w-64 h-64 md:h-auto">
                    <Avatar className="w-full h-full rounded-none h-full">
                        <AvatarImage src={product.image} className="object-contain w-full h-full p-8" />
                        <AvatarFallback className="text-6xl">📦</AvatarFallback>
                    </Avatar>
                    
                    {/* Badge */}
                    {index % 3 === 0 && (
                        <div className="absolute top-4 left-4 bg-gradient-to-r from-green-500 to-emerald-500 text-white text-xs px-3 py-1 rounded-full font-semibold shadow-lg">
                            <Truck className="w-3 h-3 inline mr-1" />
                            Free Shipping
                        </div>
                    )}
                </div>

                {/* Content */}
                <div className="flex-1 p-6 flex flex-col justify-between">
                    <div className="space-y-4">
                        {/* Header */}
                        <div className="flex items-start justify-between">
                            <div className="flex-1">
                                <div className="flex items-center gap-2 mb-2">
                                    <span className="inline-flex items-center px-3 py-1 bg-gradient-to-r from-yellow-100 to-orange-100 text-yellow-800 text-sm rounded-full font-medium">
                                        {product.category}
                                    </span>
                                    <div className="flex items-center gap-1">
                                        {[...Array(rateWithoutDecimal)].map((_, i) => (
                                            <Star key={`filled-${i}`} size={14} className="text-yellow-500 fill-yellow-500" strokeWidth={0.5} />
                                        ))}
                                        {decimalPart >= 0.5 && (
                                            <StarHalf size={14} className="text-yellow-500 fill-yellow-500" strokeWidth={0.5} />
                                        )}
                                        <span className="text-sm text-gray-500 ml-1">({rate.toFixed(1)})</span>
                                    </div>
                                </div>
                                <h3 className="text-xl font-bold text-gray-800 group-hover:text-gray-900 transition-colors duration-300">
                                    {product.title}
                                </h3>
                            </div>
                            <div className="text-right">
                                <span className="text-3xl font-bold bg-gradient-to-r from-red-600 to-pink-600 bg-clip-text text-transparent">
                                    ${product.price}
                                </span>
                            </div>
                        </div>

                        {/* Description */}
                        <p className="text-gray-600 leading-relaxed line-clamp-3">
                            {product.description || "High-quality product with exceptional features and premium design."}
                        </p>

                        {/* Features */}
                        <div className="flex items-center gap-4 text-sm text-gray-500">
                            <div className="flex items-center gap-1">
                                <Shield className="w-4 h-4" />
                                <span>1 Year Warranty</span>
                            </div>
                            <div className="flex items-center gap-1">
                                <Truck className="w-4 h-4" />
                                <span>Fast Delivery</span>
                            </div>
                            <div className="flex items-center gap-1">
                                <Zap className="w-4 h-4" />
                                <span>Premium Quality</span>
                            </div>
                        </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex items-center gap-3 pt-4 border-t border-gray-100">
                        <Button
                            onClick={addToCartFunc}
                            className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold py-3 rounded-xl transition-all duration-300"
                        >
                            <ShoppingCart className="w-5 h-5 mr-2" />
                            Add to Cart
                        </Button>
                        <Button
                            variant="outline"
                            onClick={() => router.push(`/product/${product.id}`)}
                            className="px-6 border-2 border-gray-200 hover:border-blue-500 hover:bg-blue-50 text-gray-700 hover:text-blue-700 font-medium py-3 rounded-xl transition-all duration-300"
                        >
                            <Eye className="w-5 h-5 mr-2" />
                            View Details
                        </Button>
                        <Button
                            variant="ghost"
                            className="p-3 text-gray-400 hover:text-red-500 hover:bg-red-50 rounded-xl transition-all duration-300"
                        >
                            <Heart className="w-5 h-5" />
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );

    return viewMode === 'grid' ? <GridView /> : <ListView />;
}
