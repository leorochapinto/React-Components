import React from "react";

class AlertComponent extends React.Component {
  constructor(props) {
    super(props);

    this.state = { isToggleOn: true };
    this.alerta = this.alerta.bind(this);
  }

  alerta() {
    this.setState(state => ({
      isToggleOn: !state.isToggleOn
    }));
  }

  render() {
    let className = "alert";

    if (this.props.className) {
      className += " " + this.props.className;
    }

    return (
      <button onClick={this.alerta}>
        {this.state.isToggleOn ? "ON" : "OFF"}
        <color className={"color"}>
          <div className={className} role="alert">
            {this.props.children}
          </div>
        </color>
      </button>
    );
  }
}
export default AlertComponent;
