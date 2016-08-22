import React from 'react';

export default class Search_line extends React.Component {
	constructor() {
		super();
		this.state = {
			goSearchDis: true,
			goToAllDis: true
		}
	}
	keyPress(e){
		if(e.keyCode == 8 && e.target.value.length == 1) {
			this.setState({goSearchDis: true});
		}else if(e.keyCode == 32 && e.target.value ==''){
			e.preventDefault();
		}else if(e.keyCode !=13 && e.keyCode !=8){
		this.setState({goSearchDis: false});
		}else if(e.keyCode == 13 && e.target.value !='') {
			e.preventDefault();
			this.setState({goToAllDis: false});
			this.props.search(e.target.value);
		}
	}
	render() {
		return <div className='form-group col-md-offset-1'>
					<button className='btn btn-default' disabled={this.state.goToAllDis}><img src='src/img/loop.png' /> To all</button>			
					<input type='text' className='form-control' maxLength='25' placeholder={this.props.searchBy}
					onKeyDown={this.keyPress.bind(this)}/>
					<button className='btn btn-primary' disabled={this.state.goSearchDis}>Go</button>		
				</div>
	}
} 