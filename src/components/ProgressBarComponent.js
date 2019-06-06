import React from "react";

class ProgressBarComponent extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    let classe = "progress-bar";

    if (this.props.striped) {
      classe = classe + " progress-bar-striped";
    }

    if (this.props.animated) {
      classe = classe + " progress-bar-animated";
    }

    classe = classe + " " + this.props.className;

    return (
      <div className="progress">
        <div
          className={classe}
          role="progressbar"
          style={{ width: this.props.progress + "%" }}
          aria-valuenow={this.props.progress}
          aria-valuemin="0"
          aria-valuemax="100"
        >
        {this.props.progress + "%"}
        </div>
      </div>
    );
  }
}
export default ProgressBarComponent;
