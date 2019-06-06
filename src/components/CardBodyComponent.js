import React from 'react'

class CardBodyComponent extends React.Component {
    constructor(props){
        super(props);
    }
  render() {
    return (
        <div className="card-body"> {this.props.children}
        <a href="#" className="btn btn-primary">Go somewhere</a>
      </div>
    )
  }
}
export default CardBodyComponent;