import React from 'react';
import style from './App.css';

import Navbar from './Navbar';

class App extends React.Component
{
	render()
	{
		const bg = require('./images/background.jpg');		

		return (
			<div className='main_image'>
				<Navbar/>
			</div>
		);
	}
}

export default App;
