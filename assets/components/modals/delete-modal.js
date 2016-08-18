import React from 'react';

export default class Delete_modal extends React.Component {
	delete(){
		this.props.deleteElem(this.props.id);
	}
	render() {
		return  <div>
          <div className="modal fade" id="del_modal" role="dialog">
            <div className="modal-dialog">
             <div className="modal-content">
               <div className="modal-header">
                 <button type="button" className="btn close" data-dismiss="modal">&times;</button>
                <h4 className="modal-title">Are you sure?</h4>
                 </div>

                <div className="modal-body">
                 	<input type='button' className='btn btn-primary' value='Not delete' data-dismiss="modal"/>
                 	<input type = 'button' className='btn btn-danger pull-right' 
                 	data-dismiss='modal' value='Delete' onClick={this.delete.bind(this)}/>
                </div>

            </div>
          </div>
        </div>
       </div>
	}
}