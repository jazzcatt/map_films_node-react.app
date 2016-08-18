import React from 'react';
import { render } from 'react-dom';
import $ from 'jquery';

import Menu from './components/menu/menu';
import Add_mov_modal from './components/modals/add-modal';
import Choose_file_modal from './components/modals/choose-file-modal';
import Container from './components/content/container';
import Info_modal from './components/modals/info-modal';
import Delete_modal from './components/modals/delete-modal';

class App extends React.Component {

	constructor() {
		super();
		this.state = {
			buffer: [],
			info: {},
			id_forDel:''
		}
	}
	componentDidMount() {
		this.getData();
	}
	getElemById(data) {   //get data from element
		this.setState({info: data});
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
	getIdForDel(id){
		this.setState({id_forDel: id});
	}
	deleteElem(id) {
		$.ajax({
			type: 'POST',
			data: id,
			url: '/delete',
			success: ()=>{
				let newBuffer = this.state.buffer;
				for(let i = 0; i<newBuffer.length; i++) {
					if(newBuffer[i].id == id) {
						newBuffer.splice(i, 1);
						this.setState({buffer: newBuffer});
					}
				}
			},
			error: (err)=>{console.log(JSON.stringify(err));
				alert('There was some problem, try again somewhen...o_O');
			}
		});
		
	}
	sort(by) {
		let sortBuffer = this.state.buffer;
		if(by =='A-z/А-я') {
		sortBuffer.sort((a,b)=>{
			if(a['Title']>b['Title']) {
				return 1;
			}
			if(a['Title']<b['Title']) {
				return -1
			}
			return 0;
		});
			
		}else if(by == 'Z-a/Я-а') {
			sortBuffer.sort((a,b)=>{
				if(a['Title']>b['Title']) {
					return -1;
				}
				if(a['Title']<b['Title']){
					return 1;
				}
				return 0;
			});

		} 
		this.setState({buffer: sortBuffer});
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
					<Menu sort={this.sort.bind(this)}/>
					<Container data={this.state.buffer} getElemById={this.getElemById.bind(this)} getIdForDel={this.getIdForDel.bind(this)} />
					<Add_mov_modal addNewElem={this.addNewElem.bind(this)} />
					<Choose_file_modal />
					<Info_modal data={this.state.info}/>
					<Delete_modal deleteElem={this.deleteElem.bind(this)} id={this.state.id_forDel}/>
				</div>
	}
}


$(document).ready(function() {

render(<App />, document.getElementById('root'));

});
