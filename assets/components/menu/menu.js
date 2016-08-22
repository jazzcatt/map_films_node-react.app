import React from 'react';

import Select_search from './select-search';
import Search_line from './search-line';
import Sort_by from './sort-by';

export default class Menu extends React.Component {
	constructor() {
		super();
		this.state = { searchBy: '',
	
				}
	}
	tipSearchBy(param) {
		this.setState({searchBy: 'Search by: '+param});
	}

	render() {
		return <div className='menu'>	
					<form className='form-inline'>
						<Search_line searchBy={this.state.searchBy} search={this.props.search} />
						<Select_search  tipSearchBy={this.tipSearchBy.bind(this)}/>
						
						<input type='button' className='btn btn-primary btn-sm col-xs-offset-1' value='+Add Film'
						 data-toggle="modal" data-target="#add_modal" data-backdrop="static" data-keyboard="false"/>

						<input type='button' className='btn btn-warning btn-sm ' value='↺Export'
						data-toggle='modal' data-target='#choose_modal' />

						<Sort_by sort={this.props.sort}/>
					</form>
				</div>
	}
}