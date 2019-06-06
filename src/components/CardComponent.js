import React from 'react'
import CardHeaderComponent from './CardHeaderComponent';

class CardComponent extends React.Component {
  constructor(props){
      super(props);
  }
  
    render() {
    return (
       
        <div className="card text-center">
         {this.props.children}
      </div>
    )
  }
}
export default CardComponent;