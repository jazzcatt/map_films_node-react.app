import React from 'react';
import { render } from 'react-dom';
import $ from 'jquery';

import Menu from './components/menu/menu';
import Add_mov_modal from './components/modals/add-modal';
import Choose_file_modal from './components/modals/choose-file-modal';
import Container from './components/content/container';
import Info_modal from './components/modals/info-modal';

class App extends React.Component {

	constructor() {
		super();
		this.state = {
			buffer: []
		}
	}
	componentDidMount() {
		this.getData();
	}

	getData() {

		$.ajax({
			type:'GET',
			response: 'json',
			url: 'http://localhost:3000/load',
			success: function(data) {
			this.setState({buffer: JSON.parse(data)});
			}.bind(this),
			error: function (error) {
				console.log('error: ' + JSON.stringify(error))}.bind(this)
		});
	}

	render() {

		return	<div>
					<Menu />
					<Container data={this.state.buffer} />
					<Add_mov_modal />
					<Choose_file_modal />
					<Info_modal/>
				</div>
	}
}


$(document).ready(function() {

render(<App />, document.getElementById('root'));

});
