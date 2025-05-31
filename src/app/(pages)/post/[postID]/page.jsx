import { notFound } from 'next/navigation'
import { title } from 'process'
const postData ={
  title : '222222222title test',
  body : '333333333body' ,
  author: 1,
  auother : '5555555555author'
}
export const metadata = {
  title: postData.title,
  description: postData.body,
  icons: {
    icon: postData.icon
  }
}

export default function postDetails() {

  // if(true) return notFound()
  return (
    <div>post --------  postDetails 0000000000000000</div>
  )
}
