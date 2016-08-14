import React from 'react';

export default class Search_line extends React.Component {
	render() {
		return <div className='form-group col-md-offset-1'>			
					<input type='text' className='form-control' maxLength='25' placeholder='Search'/>
					<input type='button' className='btn btn-primary' value='Search'/>		
				</div>
	}
} 