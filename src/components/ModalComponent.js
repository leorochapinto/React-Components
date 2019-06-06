import React from "react";

class ModalComponent extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return( 
        <React.Fragment>
       
        
        <div className="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div className="modal-dialog" role="document">
            <div className="modal-content">
             {this.props.children}
            </div>
          </div>
        </div>
        </React.Fragment>
    )
    }
}
export default ModalComponent;
