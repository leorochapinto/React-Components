import React from "react";

class JumbotronComponent extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
        <div class="jumbotron">
      {this.props.children}
      </div>
    );
  }
}
export default JumbotronComponent;
