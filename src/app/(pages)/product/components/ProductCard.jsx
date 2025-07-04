'use client'
import React from 'react'
import SystemThemeCheck from './SystemThemeCheck'
import { AirVent, AlarmClockPlus } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Avatar, AvatarFallback, AvatarImage } from '@radix-ui/react-avatar'

export default function ProductCard({ product }) {
    // const [isSystemDark, setIsSystemDark] = useState(false)

    return (
        <div className='w-[100%] h-[100%] p-2 bg-gray-100 border-2 border-gray-200 text-black'
        >
            <h1>{product.title}</h1>
            <div className="bg-amber-400 p-2 rounded mt-2">
                {product.category}
            </div>
            <p className='bg-slate-700'>price: {product.price}</p>
            <p>rating: {product.rating?.rate}</p>

            {/* <img
                src={product.image}
                alt={product.title}
                style={{ width: '200px', height: '200px' }}
            /> */}
            <Avatar>
                <AvatarImage src={product.image} />
                <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <AirVent size={32} color="#545cc9" />
            <AlarmClockPlus />
            <AirVent />

            <Button>Click me</Button>

            <div className='bg-red-600'>
                add to card
                {/* <SystemThemeCheck /> */}
            </div>
        </div>
    )
}
