import PostCardClient from '../components/PostCardClient'
import { use } from 'react'
import fetchAllPost from "../../../_utils/fetchAllPost"
export default  function ServerComponent() {
    const posts = use(fetchAllPost()) 
//  if (false) {
//     redirect('/login')
//   }

  return (
    <div>
      {posts?.length > 0 ? (
        posts.map(post => (
          <PostCardClient key={post.id} id={post.id}  title={post.title} body={post.body} />
        ))
      ) : (
        <p>No posts available</p>
      )}
    </div>
  )
}
