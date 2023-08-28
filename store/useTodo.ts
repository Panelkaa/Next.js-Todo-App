import { create } from "zustand";
import { devtools,persist} from 'zustand/middleware';
import { v4 } from 'uuid'

type Todo = {
    id: number | string,
    title: string, 
    completed: boolean,
}

interface StateTodos {
    todos: Todo[],
    addTodo: (title: string) => void
    toggleTodo: (todoId: number) => void,
    fetchTodos?: ()  => void ,
    deleteTodos: () => void,
    loading: boolean,
    error: null,
}

interface StateFilter {
    filter: string
    setFilter: (value: string) => void
}

export const useStateTodos = create<StateTodos>()(devtools(persist((set, get) => ({
    todos: [],
    loading: false,
    error: null,
    addTodo: (title) => {
        const newTodo = { id: v4(), title, completed: false}
        
        set({todos: [...get().todos, newTodo]})
    },
    toggleTodo: (todoId) => set({
        todos: get().todos.map(todo => todoId === todo.id ? {...todo, completed: !todo.completed} : todo)
    }),
    fetchTodos: async () => {
        set({ loading: true })
    
        try {
          const res = await fetch('https://jsonplaceholder.typicode.com/todos?_limit=10')
    
          if (!res.ok) throw new Error('Failed to fetch! Try again.')
    
          set({ todos: await res.json(), error: null })
        } catch (error: any) {            
          set({ error: error.message })         
        } finally {
          set({ loading: false })
        }
      },
    deleteTodos: () => { 
        set({todos: [...get().todos] = []})
    },
}),{ name: 'todos'})))

export const useStateFilter = create<StateFilter>(set => ({
    filter: 'all',
    setFilter: (value) => {
        set({ filter: value })
    }
}))


  