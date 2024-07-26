import './App.css';
import Header from './page/Header';
import { Route, Routes } from 'react-router-dom';
import TodoState from './components/TodoState';
import TodoReducer from './components/TodoReducer';
import TodoRedux from './components/TodoRedux';

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path='/' element={<TodoState />} />
        <Route path='/todo-reducer' element={<TodoReducer />} />
        <Route path='/todo-redux' element={<TodoRedux />} />
      </Routes>
    </div>
  );
}

export default App;
