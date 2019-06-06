import React, { Component } from "react";

class PopoverComponent extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    window.$('[data-toggle="popover"]').popover();
    }
    
    componentWillUnmount() {
    window.$("[data-toggle='popover']").popover('hide');
    } 

  render() {
    return (
      <button
        type="button"
        class="btn btn-lg btn-danger"
        data-toggle="popover"
        title="Popover title"
        data-content="And here's some amazing content. It's very engaging. Right?">
        Click to toggle popover
      </button>
    );
  }
}
export default PopoverComponent;
