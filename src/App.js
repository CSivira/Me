import React from 'react';
import './App.css';

import Navbar from './Navbar';
import MainTitle from './MainTitle';

class App extends React.Component
{
	render()
	{
		return (
			<div className='main_image'>
				<Navbar/>
				<MainTitle/>
			</div>
		);
	}
}

export default App;
