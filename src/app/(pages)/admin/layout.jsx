import React from 'react'

export default function layout({ children }) {
    return (
        <div className='flex flex-col h-screen bg-gray-700 ext-gray-900 text-white'
        >
            layout
            {children}
            layout
        </div>
    )
}
