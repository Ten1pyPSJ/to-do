import React, { useReducer, useState } from 'react';

type State = { todos: string[] };
type Action = { type: 'ADD_TODO'; payload: string };

const initialState: State = { todos: [] };

function reducer(state: State, action: Action): State {
  switch (action.type) {
    case 'ADD_TODO':
      return { ...state, todos: [...state.todos, action.payload] };
    default:
      return state;
  }
}

const TodoReducer: React.FC = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [input, setInput] = useState<string>('');
  const [input1, setInput1] = useState<string>('');

  const addTodo = () => {
    if (input) {
      dispatch({ type: 'ADD_TODO', payload: input });
      setInput('');
    }
  };

  return (
    <div>
      <h2>Todo using useReducer</h2>
      <input type='text' value={input} onChange={(e) => setInput(e.target.value)} />
      <button onClick={addTodo}>Add Todo</button>
      <ul>
        {state.todos.map((todo, index) => (
          <li key={index}>{todo}</li>
        ))}
      </ul>
    </div>
  );
};

export default TodoReducer;
