"use client";
import React from 'react'


export default function PostCard({ postData }) {
  if (!postData) {
      throw new Error('Something went wrong while loading the post');
    return <div>Loading...</div>; // Or some fallback UI
  }

  return (
    <div>
      <h1>{postData.title}</h1>
      <p>{postData.body}</p>
      <p>Author: {postData.author}</p>
    </div>
  );
}