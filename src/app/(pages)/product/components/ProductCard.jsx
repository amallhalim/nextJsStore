'use client'
import React from 'react'
import SystemThemeCheck from './SystemThemeCheck'
import { AirVent, AlarmClockPlus, Star, StarHalf } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Avatar, AvatarFallback, AvatarImage } from '@radix-ui/react-avatar'

export default function ProductCard({ product }) {
    // const [isSystemDark, setIsSystemDark] = useState(false)
    const rate = [...Array(product.rating?.rate.toFixed())]
    const decimalPart = product.rating?.rate % 1  // 0.7
    const rateWithoutDecimal = Math.floor(product.rating?.rate)
    const emptyStars = 5 - rate

    return (
        <div className='w-[100%] h-[100%] p-2 bg-gray-100 border-2 border-gray-200 text-black'
        >
            <div className='display: flex justify-center' >

                <Avatar >
                    <AvatarImage src={product.image} className='w-auto h-[200px]'
                    />
                    <AvatarFallback>CN</AvatarFallback>
                </Avatar>
            </div>
            <h1>{product.title?.length > 20 ? product.title.slice(0, 25) + '...' : product.title}</h1>
            <div className=" bg-amber-200 rounded-full px-4 py-1 mt-2 border w-fit h-auto  flex justify-center">
                {product.category}
            </div>
            <p className='text-red-900'> {product.price} $</p>
            <Button className='mt-2 bg-gray-500 hover:bg-gray-400'>  Add to card  </Button>
            <div className=' display: flex'>
                {
                    [...Array(rateWithoutDecimal)].map((item, index) => {
                        return <Star size={22} color="#a1a1a1" fill='#a1a1a1' strokeWidth={0.25} key={index} />
                    })
                }
                {decimalPart > 0 && <StarHalf size={22} color="#a1a1a1" strokeWidth={0.75} fill='#a1a1a1' />
                }
                <p>{product.rating?.rate}</p>

            </div>
        </div>
    )
}
