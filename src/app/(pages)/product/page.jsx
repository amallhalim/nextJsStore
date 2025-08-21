// "use client"
import React from 'react'
import fetchAllProduct from '../../lib/apis/fetchAllProduct'
import ProductCard from "./components/ProductCard"
export default async function page() {


    const product = await fetchAllProduct()
    // console.log("🚀 ~ page ~ product:", product)

    return (
        <div className='mt-10 mb-10'>
            {product?.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
                >
                    {product.map((product, index) => (
                        <div key={product.id} className="mb-4">
                            <ProductCard product={product} index={index} />
                        </div>
                    ))}

                </div>
            ) : (
                <p>No posts available</p>
            )}

        </div>
    )
}
