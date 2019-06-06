import React from 'react'

class CardFooter extends React.Component {
  render() {
    return (
      
      <div className="card-footer text-muted">
          <span className={" " + this.props.classe2}>{this.props.children}</span>
        </div>
        
    )
  }
}
export default CardFooter;