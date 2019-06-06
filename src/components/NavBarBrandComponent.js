import React, { Component } from 'react';

class NavBarBrandComponent extends Component {
    constructor(props){
        super(props)
    }
    render() {
        return (
            <a class="navbar-brand" href="#">{this.props.children}</a>
        );
    }
}

export default NavBarBrandComponent;