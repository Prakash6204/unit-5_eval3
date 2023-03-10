import React from 'react'
import Link from 'next/link'

export default function Navbar() {
    return (
        <div style={{ display: 'flex', justifyContent: 'space-around' }}>
            <Link href="/">Prakash Chandra Jena</Link>
            <Link href="/Project">Projects</Link>
            <Link href="/Experience">Experience</Link>
        </div>
    )
}
