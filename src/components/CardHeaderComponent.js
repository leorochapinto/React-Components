import React from 'react'

class CardHeaderComponent extends React.Component {
  constructor(props){
    super(props);
  }
  render() {
    return (
        <div className="card-header">
       
          <span className={" " + this.props.classe}>{this.props.children}</span>
          
        </div>
    )
  }
}
export default CardHeaderComponent;