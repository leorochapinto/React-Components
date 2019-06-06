import React, { Component } from "react";

class ModalFooterComponent extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <div className="modal-footer">{this.props.children}
          
        </div>
      </div>
    );
  }
}
export default ModalFooterComponent;
