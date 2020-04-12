import React from 'react';
import './Navbar.css';

import Logo from './Logo.js';
import NavbarButton from './NavbarButton';


class Navbar extends React.Component
{
	render()
	{
		const button_container = {
			display: 'flex'
		}		

		return (
			<div className='navbar'>
				<Logo/>
				<div style={button_container}>
					<NavbarButton value='ABOUT'/>
					<NavbarButton value='CONTACT'/>
					<NavbarButton value='CV / RÈSUMÈ'/>
				</div>
			</div>
		);
	}
}

export default Navbar;
