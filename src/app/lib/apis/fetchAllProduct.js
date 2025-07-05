
export default async function fetchAllProduct() {

    let allPosts = await fetch('https://fakestoreapi.com/products', {
        //     cache:"force-cache",
        next: {
            // revalidate: 200
        }
    }
    )
    return allPosts.json()
}