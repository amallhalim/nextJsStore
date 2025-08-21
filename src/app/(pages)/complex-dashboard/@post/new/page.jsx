import Link from 'next/link'
import React from 'react'

export default function NewPost() {
  return (
    <div>NewPostooo
         <Link href="/complex-dashboard">
            <button className="bg-gray-200 text-black px-4 py-2 rounded hover:bg-gray-300">
              Go to default Product
            </button>
          </Link>
    </div>
  )
}
