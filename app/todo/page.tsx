'use client'

import React from 'react'
import { ChakraProvider, Divider, VStack } from '@chakra-ui/react'
import { Filter } from '@/components/Filter'
import { TodoList } from '@/components/TodoList'
import { TotalTodos } from '@/components/TotalTodo'
import { NewTodo } from '@/components/NewTodo'
import { DeleteTodos } from '@/components/DeleteTodos'
import { FetchTodos } from '@/components/FetchTodos'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Todo | Learning Next',
  description: 'Generated by create next app',
}

export default function Todo() {
  return (
    <ChakraProvider>
        <VStack spacing={4}>
            <Filter />
            <TodoList />
            <Divider />
            <TotalTodos /> 
            <NewTodo />
            <FetchTodos />
            <DeleteTodos />
        </VStack>
    </ChakraProvider>
  )
}

