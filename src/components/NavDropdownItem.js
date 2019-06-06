import React, { Component } from 'react';

class NavDropDownItem extends Component {
    constructor(props){
        super(props);
    }
    render() {
        return (
            <a class="dropdown-item" href="#">{this.props.children}</a>
        );
    }
}

export default NavDropDownItem;