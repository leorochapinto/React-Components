import React from "react";

class BadgeComponent extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    let className = "badge ";
    if (this.props.className) {
      className += " " + this.props.className;
    }
    return (
      <div>
        <h1>
          <span className={"badge " + this.props.className}>{this.props.children}</span>
        </h1>
      </div>
    );
  }
}
export default BadgeComponent;
