import React from "react";
import ButtonComponent from "./ButtonComponent";

class ButtonBarComponent extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      green: "Verde",
      blue: "Azul",
      red: "Vermelho",
      gray: "Cinza",
      black: "Preto",
      color: "Color",
      color2: "Color2",
      color3: "Color3"
    };

    this.clickButton1 = this.clickButton1.bind(this);
    this.clickButton2 = this.clickButton2.bind(this);
    this.clickButton3 = this.clickButton3.bind(this);
    this.clickButton4 = this.clickButton4.bind(this);
    this.clickButton5 = this.clickButton5.bind(this);
  }

  clickButton1(event) {
    this.setState({ green: "Click again" });
    if (event.target.innerText == "Click again") {
      this.setState({ green: "Verde" });
      return;
    }
  }

  clickButton2(event) {
    this.setState({ blue: "Click again" });
    if (event.target.innerText == "Click again") {
      this.setState({ blue: "Azul" });
      return;
    }
  }

  clickButton3(event) {
    this.setState({ red: "Click again" });
    if (event.target.innerText == "Click again") {
      this.setState({ red: "Vermelho" });
      return;
    }
  }

  clickButton4(event) {
    this.setState({ gray: "Click again" });
    if (event.target.innerText == "Click again") {
      this.setState({ gray: "Cinza" });
      return;
    }
  }

  clickButton5(event) {
    this.setState({ black: "Click again" });
    if (event.target.innerText == "Click again") {
      this.setState({ black: "Preto" });
      return;
    }
  }

  render() {
    return (
      <div>
        <br />
        <h1 className={"color"}>Menu Bar</h1>
        <br />
        <h2 className={"color2"}>Menu:</h2>
        <ButtonComponent className={"button button1"} onClick={this.clickButton1}>
          {this.state.green}
        </ButtonComponent>
        <br />
        <ButtonComponent className={"button button2"} onClick={this.clickButton2}>
          {this.state.blue}
        </ButtonComponent>
        <br />
        <ButtonComponent className={"button button3"} onClick={this.clickButton3}>
          {this.state.red}
        </ButtonComponent>
        <br />
        <ButtonComponent className={"button button4"} onClick={this.clickButton4}>
          {this.state.gray}
        </ButtonComponent>
        <br />
        <ButtonComponent className={"button button5"} onClick={this.clickButton5}>
          {this.state.black}
        </ButtonComponent>
        <br />
        <br />
        <br />
      </div>
    );
  }
}
export default ButtonBarComponent;
