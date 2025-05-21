
export default async function fetchAllPost() {

    await new Promise(resolve => setTimeout(resolve, 1000));
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