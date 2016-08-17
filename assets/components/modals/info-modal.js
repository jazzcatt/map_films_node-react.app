import React from 'react';
 
class Info_modal extends React.Component {
	render() {
		return  <div>
                 <div className="modal fade" id="info_modal" role="dialog">
                   <div className="modal-dialog">
                    <div className="modal-content">
                      <div className="modal-header">
                        <button type="button" className="btn close" data-dismiss="modal">&times;</button>
                       <h4 className="modal-title">Film info</h4>
                        </div>
       
                       <div className="modal-body">
                         <label className='col-md-12'>Title: {this.props.title}</label>
                         <label className='col-md-12'>Year: {this.props.year}</label>
                         <label className='col-md-12'>Format: {this.props.format}</label>
                         <label className='col-md-12'>Actors: {this.props.actors}</label>
                       </div>

         				<div className="modal-footer">
              				 <button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
               			</div>

                     </div>
                    </div>
                  </div>
                </div>
	}
}

export default Info_modal;