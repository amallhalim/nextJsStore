import React from 'react'

export default function layout({children}) {
  return (
<>
    <div style={{backgroundColor:"yellow",height :"100%" ,padding:"20px" ,margin:"20px"}}>
{children}
        layout of posts
        </div>

</>
)
}
