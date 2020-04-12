import React from 'react';
import style from './NavbarButton.css';

class NavbarButton extends React.Component
{
	render()
	{
		return (
			<div className='button'>
				<p className='content'> {this.props.value || "EMPTY"} </p>	
			</div>
		);
	}
}

export default NavbarButton;
