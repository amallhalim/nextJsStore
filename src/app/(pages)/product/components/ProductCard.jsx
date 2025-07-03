'use client'
import React from 'react'
import SystemThemeCheck from './SystemThemeCheck'

export default function ProductCard({ product }) {
    // const [isSystemDark, setIsSystemDark] = useState(false)

    return (
        <div
            style={{
                border: '1px solid red',
                padding: '10px',
                width: '100%',
            }}
        >
            <h1>{product.title}</h1>

            <div className="bg-[var(--color-amal-500)] text-white p-2 rounded">
                Hello, Amal!
            </div>

            <div className="bg-[var(--background)] text-[var(--foreground)] p-2 rounded mt-2">
                {product.body}
            </div>

            <div className="bg-red-500 text-white p-2 rounded mt-2">
                {product.body}
            </div>

            <p>Author: {product.author}</p>
            <img
                src={product.image}
                alt={product.title}
                style={{ width: '200px', height: '200px' }}
            />

            <SystemThemeCheck />
        </div>
    )
}
