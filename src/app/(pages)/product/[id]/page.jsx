import fetchSingleProduct from './../../../lib/apis/fetchSingleProduct'
import ProductInfo from "./components/ProductInfo"

export default async function ProductDetailsPage({ params }) {
    const product = await fetchSingleProduct(params?.id)

    if (!product) return <div className="p-6">Loading product...</div>
    return (
        <div className=" h-[80%] px-4 py-8">
            <ProductInfo product={product} />
        </div>
    )
}
