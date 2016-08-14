import React from 'react';

export default class Sort_by extends React.Component {
	render() {
		return <div className='form-group col-xs-offset-1'>
					<label className='control-label'>Sort by</label>
					<select className='form-control'>
					 <option>▂ ▃ ▅</option>
					 <option>A-z/А-я</option>
					 <option>Z-a/Я-а</option>
					</select>
				</div>
	}
}