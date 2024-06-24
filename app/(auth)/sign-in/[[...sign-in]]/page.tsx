import React from 'react'
import { SignIn } from '@clerk/next.js'

const Page = () => {
    return (
        <div className="flex-center glassmorphism-auth h-screen w-full">
            <SignIn />
            
        </div>
    )
}

export default Page
