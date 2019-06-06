import React from 'react'

class BodyTitleComponent extends React.Component {
    constructor(props){
        super(props);
    }
  render() {
    return (
        <div>
        <h5 className="card-title" className={" " + this.props.classe3}>{this.props.children}</h5>
        </div>
    )
  }
}
export default BodyTitleComponent;