import React from 'react';
import { Route, Switch, Link } from 'react-router-dom';
import { TodoList } from './TodoList';
import { EditTodo } from './EditTodo';
import { CreateTodo } from './CreateTodo';

function App() {
  return (
    <div>
      <nav className="navbar bg-light navbar-expand-lg navbar-light">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item">
            <Link to="/" className="nav-link">
              Todos
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/create" className="nav-link">
              Create Todo
            </Link>
          </li>
        </ul>
      </nav>
      <Switch>
        <Route path="/" component={TodoList} exact />
        <Route path="/edit/:id" component={EditTodo} />
        <Route path="/create" component={CreateTodo} />
      </Switch>
    </div>
  );
}

export default App;
