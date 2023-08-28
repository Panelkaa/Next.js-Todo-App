import { useStateTodos } from "@/store/useTodo"
import { Button } from "@chakra-ui/react"

export const DeleteTodos = () => {
    const { deleteTodos } = useStateTodos((state) => ({
        deleteTodos: state.deleteTodos,
    }))
  return (
    <Button onClick={deleteTodos}>
      Delete
    </Button>
  )
}
