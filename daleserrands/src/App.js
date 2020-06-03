import React from 'react';
import './App.css';
import { Link, Route } from 'react-router-dom'
import AddForm from './components/forms/AddForm'
import TaskList from './components/TaskList';

function App() {
  return (
			<div className='App'>
      <header className='App-header'>
        <Link to='/' className='link'>
						Errand List
					</Link>
					<Link to='/newErrand' className='link'>
						ADD AN ERRAND!!
					</Link>
					
				</header>

				<div>
					<Route exact path='/' component={TaskList} />
					<Route path='/newErrand' component={AddForm} />
				</div>
			</div>
		)
}

export default App;
