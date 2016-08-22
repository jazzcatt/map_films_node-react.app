import React from 'react';


export default class Select extends React.Component {
	onChange(e) {
		this.props.tipSearchBy(e.target.value);
	}
	render() {
		return 	<div className='form-group'>
					<label className='control-label col-xs-5'>Search by</label>
					<div className='col-xs-5'>
						<select id='selFor' className="form-control" onChange={this.onChange.bind(this)}>
  							<option>Movie Title</option>
  							<option>Actor's Name</option>
						</select>
					</div>
				</div>
	}
}