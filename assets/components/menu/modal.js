import React from 'react';

class Modal extends React.Component {
	render() {
		return  <div>
				  <div className="modal fade" id="send_modal" role="dialog">
  				  <div className="modal-dialog">
   				   <div className="modal-content">
   				     <div className="modal-header">
          			 <button type="button" className="btn close" data-dismiss="modal">&times;</button>
         			 <h4 className="modal-title">Example</h4>
       			     </div>
       				 <div className="modal-body">
         			 <p>Information from submitting</p>
				     </div>
        			 <div className="modal-footer">
        			 <button type="button" className="btn btn-default" data-dismiss="modal">OK</button>
        			 </div>
    			  </div>
    			</div>
 			  </div>
 			 </div>
	}
}

export default Modal;