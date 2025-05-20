
export default async function fetchAllPost() {
    let allPosts = []
    await fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        .then(json => {allPosts = json}
        )
    return allPosts
}