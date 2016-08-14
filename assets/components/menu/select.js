import React from 'react';


export default class Select extends React.Component {
	render() {
		return 	<div className='form-group'>
					<label className='control-label col-xs-5'>Search by</label>
					<div className='col-xs-5'>
						<select id='selFor' className="form-control">
  							<option>Movie Title</option>
  							<option>Actor's Name</option>
						</select>
					</div>
				</div>
	}
}