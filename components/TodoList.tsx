'use client';

import { useStateFilter, useStateTodos } from '@/store/useTodo';
import { Checkbox, HStack, Stack, Text } from '@chakra-ui/react';
import { useState, useEffect } from 'react';

type TodoProps = {
  id: number | string,
  title: string,
  completed: boolean,
}

const Todo = ({ id, title, completed }: TodoProps) => {

  const toggleTodo = useStateTodos(state => state.toggleTodo)

  return (
      <HStack spacing={4}>
        <Checkbox isChecked={completed} onChange={() => toggleTodo(id as number)}/>
        <Text>{title}</Text>
      </HStack>
      // <></>
  );
};


const TodoList = () =>  {
    const [isClient, setIsClient] = useState(false)
    const filter = useStateFilter(state => state.filter);
    const todos = useStateTodos((state) => { 
      switch (filter) {
        case 'completed': 
          return state.todos.filter(todo => todo.completed)
        case 'uncompleted': 
          return state.todos.filter(todo => !todo.completed)
        default: 
          return state.todos
      }
    }); 

  return (
    <div>
      <Stack minH="300px">
        {todos && todos.map((todo) => (
          <Todo key={todo.id} {...todo} />
        ))}
      </Stack>
    </div>
  );
};

export { TodoList };