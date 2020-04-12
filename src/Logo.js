import React from 'react';
import './Logo.css';

class Logo extends React.Component
{
	render()
	{
		const logo = require('./images/logo.png');
		return (
			<div>
				<img className='logo' src={logo} alt='Logo'/>
			</div>
		);
	}
}

export default Logo;
