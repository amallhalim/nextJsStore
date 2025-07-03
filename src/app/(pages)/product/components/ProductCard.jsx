import React from 'react'

export default function ProductCard({ product }) {
    return (
        <div sx={{ border: '1px solid red', padding: '10px', width: "100%", border: "1px solid red" }}>
            <h1>{product.title}</h1>
            <p>{product.body}</p>
            <p>Author: {product.author}</p>
            <img style={{ width: '200px', height: '200px' }} src={product.image} alt={product.title} />
        </div>
    )
}
