import React from 'react'

export default function layout({ children, notification, user, post ,login }) {
  console.log("🚀 ~ layout ~ login:", login)
  const isLogin = false
  return (
    <div>
     <div className=" bg-green-100 text-amber-950 p-4">
      <h1 className="text-2xl font-bold mb-4">Complex Dashboard Layout</h1>
      <p className="mb-4">Notification: {notification}</p>
      <p className="mb-4">User: {user}</p>
      <p className="mb-4">Post: {post}</p>
      {isLogin ? (
        <div className="bg-blue-100 p-4 rounded">
          <h2 className="text-xl font-semibold">Welcome back!</h2>
        </div>
      ) : (
        <div className="bg-red-300 p-4 rounded">
            <h2 className="text-xl font-semibold">Welcome to login again!</h2>
            <div> {login}</div>
        </div>
      )}    
    </div>
    </div>
  )
}

