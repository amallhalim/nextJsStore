import React from 'react'

export const metadata = {
  title: 'Product',
  description: 'Product page',
}
export default function page(props) {
  // console.log("🚀 ~ page ~ props:", props)
    console.log("🚀 ~ page ~ props:", props)

  return (
    <div className=''>productId {props?.params?.ID} 56565 </div>
  )
}
