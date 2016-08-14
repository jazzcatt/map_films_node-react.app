import React from 'react';

export default class Add_form extends React.Component {
    constructor(){
        super();
        this.state={ 
                title: null,
                year: null,
                format:null,
                actors:null,
        }
    }
    onChange(e) {
        this.setState({
                [e.target.name]: e.target.value
        });     
    }
    sendData() {
 // to do send
    }
	render() {
		return  <form role='form' onChange={this.onChange.bind(this)}>
                	<div className='form-group'>
                	  <label>Title </label>
                	  <input type='text' className='form-control' name='title'/>            
                	</div>

                	<div className='form-group'>
                		<label>Year</label>
                		<input type='number' className='form-control' min='1900' max='2020' name='year' />
                	</div>

                	<div className='form-group col-md-4'>
               	 		<label>Format</label>
                	  	<select className='form-control' name='format'>
                	    	<option>VHS</option>
                	    	<option>DVD</option>
                	    	<option>Blu-Ray</option>
                	 	 </select>
                	</div>

                	<div className='form-group'>
                		<label className='control-label'>Actors
                 		 <textarea className='form-control' rows='5' cols='50' name='actors' 
                         placeholder='Name1, Name2, ... '  maxLength='200'></textarea>
                  		</label>
                	</div>
                    <button type="button" className="btn btn-default" onClick={this.sendData.bind(this)} data-dismiss="modal">+Add</button>
                </form>
	}
}