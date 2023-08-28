'use client';

import React, { MutableRefObject, useEffect } from 'react';
import {
  Button,
  Input,
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
} from '@chakra-ui/react';
  import { useRef } from 'react';
import { useStateTodos } from '@/store/useTodo';
  
  export const NewTodo = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const ref = useRef() as React.MutableRefObject<HTMLInputElement>;
    const addTodo = useStateTodos(state => state.addTodo)

    const handleAddTodo = () => {
      if(ref.current !== null) {
        addTodo(ref.current.value)
      }     
      onClose();
    }

    return (
      <>
        <Button colorScheme="teal" onClick={onOpen}>
        Add new todo
        </Button>

        <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
          <DrawerOverlay />
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerHeader>Create new todo</DrawerHeader>

            <DrawerBody>
              <Input
                placeholder="Type here..."
                ref={ref}
                onKeyDown={(e) => e.key === 'Enter' && handleAddTodo()}
                autoFocus
              />
            </DrawerBody>

            <DrawerFooter>
              <Button variant="outline" mr={3} onClick={onClose}>
                Cancel
              </Button>
              <Button colorScheme="blue" onClick={handleAddTodo}>
                Save
              </Button>
            </DrawerFooter>
          </DrawerContent>
        </Drawer>
      </>
    );
  };
  
 