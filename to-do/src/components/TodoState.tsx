import React, { useState } from 'react';

const TodoState: React.FC = () => {
  const [todos, setTodos] = useState<{ title: string; info: string }[]>([]);
  const [inputTitle, setInputTitle] = useState<string>('');
  const [inputInfo, setInputInfo] = useState<string>('');

  const addTodo = () => {
    if (inputTitle && inputInfo) {
      setTodos([...todos, { title: inputTitle, info: inputInfo }]);
      setInputTitle('');
      setInputInfo('');
    }
  };

  return (
    <div>
      <h2>Список дел</h2>
      <input
        type='text'
        value={inputTitle}
        onChange={(e) => setInputTitle(e.target.value)}
        placeholder='Заголовок'
      />
      <input
        type='text'
        value={inputInfo}
        onChange={(e) => setInputInfo(e.target.value)}
        placeholder='Описание'
      />
      <button onClick={addTodo}>Создать</button>
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>
            <strong>{todo.title}</strong>: {todo.info}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoState;
