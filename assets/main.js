import React from 'react';
import { render } from 'react-dom';
import $ from 'jquery';

import Menu from './components/menu/menu';
import Add_mov_modal from './components/modals/add-modal';
import Choose_file_modal from './components/modals/choose-file-modal';
import Container from './components/content/container';

function 	parser(data) {
		return JSON.parse(data);
	}

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
		let buffer = [];

		$.ajax({
			type:'GET',
			response: 'json',
			url: 'http://localhost:3000/load',
			success: function(data) {
			buffer.push(parser(data));
			console.log('container'+buffer);
			this.setState({buffer: buffer[0]});
			}.bind(this),
			error: function (error) {console.log('error: ' + JSON.stringify(error))}.bind(this)
		});


		//let buffer = [{title:'movit title',year:1000,actors:'Daya patya, tetya motya'},{title:'secont ditl', year:2000,actors:'Daya patya, tetya motya'}];
		return buffer;
	}



	render() {

		return	<div>
					<Menu />
					<Container data={this.state.buffer} />
					<Add_mov_modal />
					<Choose_file_modal />
				</div>
	}
}




$(document).ready(function() {

render(<App />, document.getElementById('root'));

});
