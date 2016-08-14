import React from 'react';
import Add_form from './add-form';

class Modal extends React.Component {
  constructor() {
    super();
  }
  render() {
    return  <div>
          <div className="modal fade" id="add_modal" role="dialog">
            <div className="modal-dialog">
             <div className="modal-content">
               <div className="modal-header">
                 <button type="button" className="btn close" data-dismiss="modal">&times;</button>
                <h4 className="modal-title">Add film: fill all fields</h4>
                 </div>

                <div className="modal-body">
                 <Add_form/>
                </div>

            </div>
          </div>
        </div>
       </div>
  }
}

export default Modal;