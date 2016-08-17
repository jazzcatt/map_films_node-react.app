import React from 'react';

export default class Add_form extends React.Component {
    constructor(){
        super();
        this.state={ 
                ['Title']: null,
                ['Release Year']: null,
                ['Format']:null,
                ['Stars']:null,
        }
    }
    onChange(e) {
        this.setState({
                [e.target.name]: e.target.value
        });     
    }
    getData() {
      this.props.addNewElem(this.state);
    }
	render() {
		return  <form role='form' onChange={this.onChange.bind(this)}>
                	<div className='form-group'>
                	  <label>Title </label>
                	  <input type='text' className='form-control' name='Title'/>            
                	</div>

                	<div className='form-group'>
                		<label>Year</label>
                		<input type='number' className='form-control' min='1900' max='2020' name='Release Year' />
                	</div>

                	<div className='form-group col-md-4'>
               	 		<label>Format</label>
                	  	<select className='form-control' name='Format'>
                            <option> ►►♫♪♫♪</option>
                	    	<option>VHS</option>
                	    	<option>DVD</option>
                	    	<option>Blu-Ray</option>
                	 	 </select>
                	</div>

                	<div className='form-group'>
                		<label className='control-label'>Actors
                 		 <textarea className='form-control' rows='5' cols='50' name='Stars' 
                         placeholder='Name1, Name2, ... '  maxLength='200'></textarea>
                  		</label>
                	</div>
                    <button type="button" className="btn btn-default" onClick={this.getData.bind(this)} data-dismiss="modal">+Add</button>
                </form>
	}
}