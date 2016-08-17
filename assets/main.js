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
			buffer: [],
			info: {}
		}
	}
	componentDidMount() {
		this.getData();
	}
	getElemById(data) {
		this.setState({info: data});
		console.log(data);
		return data;
	}
	addNewElem(newData) {
		var elem = {}; 
		$.ajax({
			type:'POST',
			data: JSON.stringify(newData),
			url:'/upload',
			success:(data)=>{
				elem.id = data;
				Object.assign(elem, newData);
				let newBuffer = this.state.buffer;
				newBuffer.unshift(elem)
				this.setState({buffer: newBuffer});
			},
			error:(err)=>{console.log('add error: '+err)}
		});
	}
	getData() {

		$.ajax({
			type:'GET',
			response: 'json',
			url: '/load',
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
					<Container data={this.state.buffer} getElemById={this.getElemById.bind(this)}/>
					<Add_mov_modal addNewElem={this.addNewElem.bind(this)} />
					<Choose_file_modal />
					<Info_modal data={this.state.info}/>
				</div>
	}
}


$(document).ready(function() {

render(<App />, document.getElementById('root'));

});
