import React from 'react'
import fetchAllProduct from './../../utils/fetchAllProduct'
import ProductCard from "./components/ProductCard"
export default async function page() {

    const product = await fetchAllProduct()
    console.log("🚀 ~ page ~ product:", product)

    return (
        <div>
            {product?.length > 0 ? (
                product.map(product => {
                    return (
                        <div >
                            <ProductCard product={product} key={product.id} />
                        </div>
                    )
                }
                )
            ) : (
                <p>No posts available</p>
            )}

        </div>
    )
}
