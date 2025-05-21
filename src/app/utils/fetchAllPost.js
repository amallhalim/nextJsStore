
export default async function fetchAllPost() {
    let allPosts = []
    await fetch('https://jsonplaceholder.typicode.com/posts',{
    //     cache:"force-cache",
        next:{
            revalidate:200
    }
}
    )
        .then(response => response.json())
        .then(json => {allPosts = json}
        )
    return allPosts
}