import React from 'react'

class CardTextComponent extends React.Component {
    
    
    
  render() {
    return (
        
            <p className="card-text">{this.props.children}</p> 
        
    )
  }
}
export default CardTextComponent;
