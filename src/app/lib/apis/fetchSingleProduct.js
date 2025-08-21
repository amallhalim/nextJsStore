
export default async function fetchSingleProduct(id) {

    if (!id) {
        console.error("fetchSingleProduct called without an ID.");
        return null; // or throw new Error("Product ID is required");
    }
    console.log("🚀 ~ fetchSingleProduct ~ id:", id)

    let allPosts = await fetch(`https://fakestoreapi.com/products/${id}`, {
        //     cache:"force-cache",
        next: {
            // revalidate: 200
        }
    }
    )
    return allPosts.json()
}