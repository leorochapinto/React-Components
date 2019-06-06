import React from "react";

class ModalBodyComponent extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      
        <div className="modal-body">{this.props.children}
      </div>
    );
  }
}
export default ModalBodyComponent;
