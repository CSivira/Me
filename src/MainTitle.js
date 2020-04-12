import React from 'react';
import './MainTitle.css';

class MainTitle extends React.Component
{
	render()
	{
		const name = 'CARLOS';
		const lastname = 'SIVIRA';
		const title = 'TITLE';

		return (
			<div className='container'>
				<p className='text title'> {title} </p>
				<hr className='line'/>
				<div style={{display: 'flex'}}>
					<p className='text name'> {name} </p>
					<p className='text lastname'> {lastname} </p>
				</div>
			</div>
		);
	}
}

export default MainTitle;
