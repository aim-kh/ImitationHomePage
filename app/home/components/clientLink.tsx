"use client"
import React from 'react'
import Link from 'next/link'

export function ClientLink ({href, className, children}: {href: string, className?:string, children: React.ReactNode}) {
    return (
            <Link href={href} className={className}>{children}</Link>
    )
}