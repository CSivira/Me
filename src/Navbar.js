import React from 'react';
import style from './Navbar.css';

import NavbarButton from './NavbarButton';

class Navbar extends React.Component
{
	render()
	{
		const logo = require('./images/logo.png');
		const style = {
			height: '50px',
			width: '50px',
			filter: 'invert(100%)',
			position: 'absolute',
			marginLeft: '-30px',
			marginTop: '10px'
		}

		return (
			<div>
				<div className="navbar">
					<div>
						<img style={style} src={logo} alt='Logo'/>		
					</div>
					<div style={{display: 'flex'}}>
						<NavbarButton value='ABOUT'/>
						<NavbarButton value='CONTACT'/>
						<NavbarButton value='CV / RESUMÈ'/>
					</div>
				</div>
			</div>
		);
	}
}

export default Navbar;
