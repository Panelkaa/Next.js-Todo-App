import { Button } from '@chakra-ui/react';
import { shallow } from 'zustand/shallow';
import { useStateTodos } from '@/store/useTodo';

const FetchTodos = () => {
  const { loading, error, fetchTodos } = useStateTodos(
    (state) => ({
      loading: state.loading,
      error: state.error,
      fetchTodos: state.fetchTodos,
    }), shallow
  );
  console.log('render FetchTodos');

  return (
    <Button isLoading={loading} onClick={fetchTodos}>
      {!error ? 'Get todos' : <div> [ error ] </div>}
    </Button>
  );
};

export { FetchTodos };