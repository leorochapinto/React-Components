import React, { Component } from 'react';

class NavLinkComponent extends Component {

    constructor(props){
        super(props)
    }
    render() {
        return (
            <a class="nav-link" href={this.props.href}>{this.props.children}</a>
        );
    }
}

export default NavLinkComponent;