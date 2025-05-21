"use client"

import Link from "next/link";

export default function PostCardClient({ title, body,id }) {
  return (
    <div
      onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.03)')}
      onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
      style={{
        backgroundColor: 'white',
        borderRadius: '12px',
        boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
        padding: '20px',
        transition: 'transform 0.2s ease',
        cursor: 'pointer',
        color: '#222', // add default text color here
      }}
    >
      <button>
      <Link href={`/product/${id}`}>go to detail</Link>
      </button>
      <h2>{title}</h2>
      <p>{body}</p>
    </div>
  );
}
