import React from 'react'
import SystemThemeCheck from "./components/SystemThemeCheck"
import fetchAllProduct from './../../utils/fetchAllProduct'
import ProductCard from "./components/ProductCard"
import ClientWrapper from "./components/ClientWrapper"
export default async function page() {


    const product = await fetchAllProduct()
    console.log("🚀 ~ page ~ product:", product)

    return (
        <div>
            {product?.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
                >
                    {product.map(product => (
                        <div key={product.id} className="mb-4">
                            {/* <SystemThemeCheck /> */}
                            <ClientWrapper>

                                <ProductCard product={product} key={product.id} />
                            </ClientWrapper>
                        </div>
                    ))}
                </div>
            ) : (
                <p>No posts available</p>
            )}

        </div>
    )
}
