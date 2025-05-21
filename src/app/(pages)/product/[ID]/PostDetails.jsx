import React from 'react'

export const metadata = {
  title: 'Product',
  description: 'Product page',
}
export default  async function PostDetails({data}) {

  return (
      <div className="border-t pt-4">
        <h2 className="text-xl font-semibold text-gray-800 mb-2">{data?.title}</h2>
        <p className="text-gray-600 mb-4">{data?.body}</p>
        <div className="text-sm text-gray-500">Product ID: <span className="font-mono">{data?.id}</span></div>
      </div>
  )
}
