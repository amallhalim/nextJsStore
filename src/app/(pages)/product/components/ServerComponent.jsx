import PostCardClient from '../components/PostCardClient'
import fetchAllPost from ".././../../utils/fetchAllPost"

export default async function ServerComponent() {
  const allPost =  await fetchAllPost()
  console.log("🚀 ~ ServerComponent ~ allPost:", allPost)

  return (
    <div>
      {allPost?.length > 0 ? (
        allPost.map(post => (
          <PostCardClient key={post.id} title={post.title} body={post.body} />
        ))
      ) : (
        <p>No posts available</p>
      )}
    </div>
  )
}
