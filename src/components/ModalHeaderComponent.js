import React from "react";

class ModalHeaderComponent extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <div className="modal-header"> {this.props.children}
          <h5 className="modal-title" id="exampleModalLabel">
            
          </h5>
          <button
            type="button"
            className="close"
            data-dismiss="modal"
            aria-label="Close"
          >
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
      </div>
    );
  }
}
export default ModalHeaderComponent;
