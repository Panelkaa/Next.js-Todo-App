'use client'

import React from 'react'
import SignupCard from '@/components/SingUpCard'
import { ChakraProvider } from '@chakra-ui/react'


export default function Auth() {
  return (
    <div>
      <ChakraProvider>
        <SignupCard />
      </ChakraProvider>
    </div>
  )
}
