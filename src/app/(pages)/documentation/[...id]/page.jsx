"use client";

import { usePathname } from 'next/navigation';
import React, { use } from 'react'

export default function page() {
const paths = usePathname().split('/');

  return (
    <div>innner id


      {paths?.map((path, index) => (
        <div key={index}> {index} -- {path}</div>
      ))}
    </div>
  )
}
