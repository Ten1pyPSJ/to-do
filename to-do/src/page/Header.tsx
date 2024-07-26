import React from 'react';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
  return (
    <div>
      <Link to='/'>useState</Link>
      <Link to='/todo-reducer'>useReducer</Link>
      <Link to='/todo-redux'>Redux</Link>
    </div>
  );
};

export default Header;
