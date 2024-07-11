import React from 'react'
import { SignIn } from '@clerk/nextjs'
// import { ClerkProvider, SignedIn, SignedOut, SignIn, SignUp } from '@clerk/clerk-react';

const Page = () => {
    return (
        <div className="flex-center glassmorphism-auth h-screen w-full">
            <SignIn />
            
        </div>
    )
}

export default Page
