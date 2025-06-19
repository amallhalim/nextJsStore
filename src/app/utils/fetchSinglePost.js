
export default async function fetchSinglePost({id}) {
    let postData = []  
        await new Promise(resolve => setTimeout(resolve, 1000));

    await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`,{
        //     cache:"force-cache",
        next:{
            revalidate:200
        }
    }
)
.then(response => response.json())
.then(json => {postData = json}
)
    return postData
}