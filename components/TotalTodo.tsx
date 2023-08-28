'use client';

import { useStateTodos } from '@/store/useTodo';
import { Text } from '@chakra-ui/react';

const TotalTodos = () => {
  const count = useStateTodos(state => state.todos.length)

  return (
    <div>
      {/* <Text fontWeight="bold">Total: {count}</Text> */}
    </div>   
  )
};

export { TotalTodos };