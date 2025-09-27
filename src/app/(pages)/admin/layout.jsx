"use client";
import clsx from 'clsx';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react'

export default function layout({ children }) {
    const pathname = usePathname();
    console.log("🚀 ~ layout ~ pathname:", pathname)
    console.log("🚀 ~ layout ~ pathname:", pathname === "/admin")

    let links = [
        {
            name: 'Dashboard',
            href: '/admin',
            // icon: MapPin,
        },
        {
            name: 'Users',
            href: '/admin/users',
            // icon: MapPin,
        },
        {
            name: 'admin',
            href: '/admin',
            // icon: MapPin,
        },
    ]
    return (
        <div className='flex flex-col h-screen bg-gray-700 ext-gray-900 text-white'
        >
            layout
            {links.map((link) => {
                // const LinkIcon = link.icon;
                return (
                    <Link
                        key={link.name}
                        href={link.href}
                        className={clsx(
                            'flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3',
                            {
                                'bg-sky-100 text-blue-600': pathname === link.href,
                            },
                        )}
                    >
                        {/* <LinkIcon className="w-6" /> */}
                        <p className="hidden md:block">{link.name}</p>
                    </Link>
                );
            })}
            {children}
            layout
        </div>
    )
}
