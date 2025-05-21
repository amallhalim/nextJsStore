import React from 'react'
import fetchSinglePost from '../../../utils/fetchSinglePost'
import PostDetails  from '../[ID]/PostDetails'

export const metadata = {
  title: 'Product',
  description: 'Product page',
}
export default  async function page(props) {

const { params } = props
const data = await fetchSinglePost({id:params?.ID})

  return (
      <div className="max-w-3xl mx-auto p-6 mt-10 bg-white rounded-2xl shadow-lg">
      <h1 className="text-3xl font-bold mb-4 text-indigo-600">📦 Product Details</h1>
     <PostDetails  data={data} /> 
    </div>
  )
}
