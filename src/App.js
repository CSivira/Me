import React from 'react';
import './App.css';

import Navbar from './Navbar';

class App extends React.Component
{
	render()
	{
		return (
			<div className='main_image'>
				<Navbar/>
			</div>
		);
	}
}

export default App;
