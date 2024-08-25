// to use current path name you can use usePathname hook in client component
'use client'
import { usePathname, useSearchParams } from 'next/navigation'
import React from 'react'
export default function cartpage() {
    const pathname=usePathname()
    console.log("current path name:",pathname)
    const searchparams=useSearchParams()
    console.log("search params name:",searchparams.get('search'))
    console.log("search params age:",searchparams.get('age'))
  return (
    <div className='flex justify-center items-center min-h-screen'>
      <h1 className='text-red-600 align-center text-5xl font-bold'>Welcome to cart page</h1>
    </div>
  )
}
