import React from "react";

class ButtonComponent extends React.Component {
  constructor(props) {
    super(props);

    console.log(this.props.onClick);

    this.onClickButton = this.onClickButton.bind(this);
  }

  onClickButton(event){
    if(this.props.onClick){
      this.props.onClick(event);
    }
  }
  
  render() {
    return <button className={this.props.className} onClick={this.onClickButton} data-toggle={this.props.toggle} data-target={this.props.abelha} >{this.props.children}</button>;
    
  }
}
export default ButtonComponent;
