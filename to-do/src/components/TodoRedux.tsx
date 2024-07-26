// src/components/TodoRedux.tsx
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState, AppDispatch } from '../redux/store';
import { addTodo } from '../redux/todo/todoSlice';

const TodoRedux: React.FC = () => {
  const [input, setInput] = useState<string>('');
  const todos = useSelector((state: RootState) => state.todo.todos);
  const dispatch = useDispatch<AppDispatch>();

  const handleAddTodo = () => {
    if (input) {
      dispatch(addTodo(input));
      setInput('');
    }
  };

  return (
    <div>
      <h2>Todo using Redux Toolkit</h2>
      <input type='text' value={input} onChange={(e) => setInput(e.target.value)} />
      <button onClick={handleAddTodo}>Add Todo</button>
      <ul>
        {todos.map((todo: string, index: number) => (
          <li key={index}>{todo}</li>
        ))}
      </ul>
    </div>
  );
};

export default TodoRedux;
