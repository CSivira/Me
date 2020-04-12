import React from 'react';
import style from './NavbarButton.css';

class NavbarButton extends React.Component
{
	constructor(props)
	{
		super(props)
	}
	
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
