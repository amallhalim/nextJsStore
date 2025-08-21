// src/components/PrimaryBtn.tsx
import { clsx } from 'clsx'
import React from 'react'

type Props = {
    label: string
    onClick?: () => void
    type?: 'button' | 'submit' | 'reset'
    variant?: 'primary' | 'secondary' | 'danger'
    size?: 'sm' | 'md' | 'lg'
    disabled?: boolean
    fullWidth?: boolean
    loading?: boolean
    backgroundColor?: string
    icon?: React.ReactNode
}

export default function PrimaryBtn({
    label,
    onClick,
    type = 'button',
    variant = 'primary',
    size = 'md',
    disabled = false,
    fullWidth = false,
    loading = false,
    icon,
    backgroundColor = "#f2f2",
}: Props) {
    const base = 'flex items-center justify-center rounded font-medium transition duration-200'
    const sizes = {
        sm: 'text-sm px-3 py-1.5',
        md: 'text-base px-4 py-2',
        lg: 'text-lg px-5 py-3',
    }

    const variants = {
        primary: 'bg-blue-600 hover:bg-blue-700 text-white',
        secondary: 'bg-gray-100 hover:bg-gray-200 text-gray-800',
        danger: 'bg-red-600 hover:bg-red-700 text-white',
    }

    return (
        <button
            type={type}
            onClick={onClick}
            disabled={disabled}
            className={clsx(
                base,
                sizes[size],
                variants[variant],
                fullWidth && 'w-full',
                disabled && 'opacity-50 cursor-not-allowed'

            )}
            style={{ backgroundColor }}
        >

            {icon && <span className="mr-2">{icon}</span>}
            {label}
        </button>
    )
}
