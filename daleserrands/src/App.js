import React from 'react';
import './App.css';
import { Link, Route } from 'react-router-dom'
import AddForm from './components/forms/AddForm'
import TaskList from './components/TaskList';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Link to='/newErrand'>ADD AN ERRAND!!</Link>
        <Link to='/'>Errand List</Link>
      </header>

      <div>
        <Route exact path='/' component={TaskList}/>
        <Route path='/newErrand' component={AddForm}/>
      </div>
    </div>
  );
}

export default App;
